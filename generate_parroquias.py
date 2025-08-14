#!/usr/bin/env python3
"""
Script to generate the complete parroquia.ts object structure from parroquias.json
"""

import json
import re
from collections import defaultdict

def normalize_key(text):
    """Convert text to valid TypeScript object key format"""
    # Replace spaces and special characters with underscores
    key = re.sub(r'[^a-zA-Z0-9_]', '_', text.upper())
    # Remove multiple consecutive underscores
    key = re.sub(r'_+', '_', key)
    # Remove leading/trailing underscores
    key = key.strip('_')
    # Handle keys that start with numbers
    if key and key[0].isdigit():
        key = 'N' + key
    return key

def load_parroquias_data():
    """Load and organize parroquias data by province and canton"""
    with open('extra/parroquias.json', 'r', encoding='utf-8') as f:
        data = json.load(f)
    
    # Organize data by province -> canton -> parroquias
    provinces = defaultdict(lambda: defaultdict(list))
    
    for item in data:
        prov_code = item['CNT_PRV_CODIGO']
        canton_code = item['CNT_CODIGO']
        parroquia_code = item['CODIGO']
        parroquia_name = item['PARROQUIA']
        
        provinces[prov_code][canton_code].append({
            'code': parroquia_code,
            'name': parroquia_name
        })
    
    return provinces

def get_province_names():
    """Map province codes to province names"""
    return {
        '01': 'AZUAY',
        '02': 'BOLIVAR',
        '03': 'CANAR',
        '04': 'CARCHI',
        '05': 'COTOPAXI',
        '06': 'CHIMBORAZO',
        '07': 'EL_ORO',
        '08': 'ESMERALDAS',
        '09': 'GUAYAS',
        '10': 'IMBABURA',
        '11': 'LOJA',
        '12': 'LOS_RIOS',
        '13': 'MANABI',
        '14': 'MORONA_SANTIAGO',
        '15': 'NAPO',
        '16': 'PASTAZA',
        '17': 'PICHINCHA',
        '18': 'TUNGURAHUA',
        '19': 'ZAMORA_CHINCHIPE',
        '20': 'GALAPAGOS',
        '21': 'SUCUMBIOS',
        '22': 'ORELLANA',
        '23': 'SANTO_DOMINGO_DE_LOS_TSACHILAS',
        '24': 'SANTA_ELENA',
        '90': 'ZONAS_NO_DELIMITADAS'
    }

def get_canton_names():
    """Map canton codes to canton names by province"""
    # This would need to be populated based on the actual canton data
    # For now, we'll generate generic names based on the cabecera cantonal
    return {}

def generate_canton_name(parroquias_list):
    """Generate canton name from parroquias list, preferring cabecera cantonal"""
    for parroquia in parroquias_list:
        name = parroquia['name']
        if 'CABECERA CANTONAL' in name.upper():
            # Extract canton name from cabecera cantonal
            canton_name = name.split(',')[0].strip()
            if '(' in canton_name:
                canton_name = canton_name.split('(')[0].strip()
            return normalize_key(canton_name)
    
    # If no cabecera cantonal found, use first parroquia name
    if parroquias_list:
        first_name = parroquias_list[0]['name']
        if '(' in first_name:
            first_name = first_name.split('(')[0].strip()
        return normalize_key(first_name)
    
    return 'UNKNOWN'

def generate_typescript_object():
    """Generate the complete TypeScript object structure"""
    provinces_data = load_parroquias_data()
    province_names = get_province_names()
    
    result = "export const PARROQUIA = {\n"
    
    for prov_code in sorted(provinces_data.keys()):
        prov_name = province_names.get(prov_code, f'PROVINCIA_{prov_code}')
        result += f"  {prov_name}: {{\n"
        
        cantons = provinces_data[prov_code]
        for canton_code in sorted(cantons.keys()):
            parroquias_list = cantons[canton_code]
            canton_name = generate_canton_name(parroquias_list)
            
            result += f"    {canton_name}: {{\n"
            
            # Sort parroquias by code
            parroquias_list.sort(key=lambda x: x['code'])
            
            for i, parroquia in enumerate(parroquias_list):
                parroquia_key = normalize_key(parroquia['name'])
                parroquia_code = parroquia['code']
                parroquia_label = parroquia['name']
                
                # Handle long lines by splitting them
                if len(f"      {parroquia_key}: {{ code: '{parroquia_code}', label: '{parroquia_label}' }}") > 80:
                    result += f"      {parroquia_key}: {{\n"
                    result += f"        code: '{parroquia_code}',\n"
                    result += f"        label: '{parroquia_label}',\n"
                    result += f"      }}"
                else:
                    result += f"      {parroquia_key}: {{ code: '{parroquia_code}', label: '{parroquia_label}' }}"
                
                # Add comma except for last item
                if i < len(parroquias_list) - 1:
                    result += ","
                result += "\n"
            
            result += "    },\n"
        
        result += "  },\n"
    
    result += "};\n"
    return result

def main():
    """Main function to generate the TypeScript file"""
    print("Generating complete parroquia object structure...")
    
    try:
        typescript_content = generate_typescript_object()
        
        # Write to file
        with open('src/core/geografia/parroquia_generated.ts', 'w', encoding='utf-8') as f:
            f.write(typescript_content)
        
        print("✅ Successfully generated src/core/geografia/parroquia_generated.ts")
        print("📊 Statistics:")
        
        # Count provinces, cantons, and parroquias
        provinces_data = load_parroquias_data()
        total_provinces = len(provinces_data)
        total_cantons = sum(len(cantons) for cantons in provinces_data.values())
        total_parroquias = sum(len(parroquias) for cantons in provinces_data.values() for parroquias in cantons.values())
        
        print(f"   - Provinces: {total_provinces}")
        print(f"   - Cantons: {total_cantons}")
        print(f"   - Parroquias: {total_parroquias}")
        
        print("\n🔄 Next steps:")
        print("1. Review the generated file: src/core/geografia/parroquia_generated.ts")
        print("2. Compare with your existing parroquia.ts file")
        print("3. Replace the content or merge as needed")
        print("4. Run your linter to ensure proper formatting")
        
    except FileNotFoundError:
        print("❌ Error: Could not find extra/parroquias.json file")
        print("   Make sure you're running this script from the project root directory")
    except Exception as e:
        print(f"❌ Error generating file: {str(e)}")

if __name__ == "__main__":
    main()
