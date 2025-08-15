export enum ParentescoCode {
  PADRE = 'PAD',
  MADRE = 'MAD',
  HIJO = 'HIJ',
  CONYUGE = 'CON',
  HERMANO = 'HER',
  ABUELO = 'ABU',
  TUTOR = 'TUT',
  AMIGO = 'AMI',
  OTRO = 'OTR',
}
export const ParentescoCodeLabel: Record<ParentescoCode, string> = {
  [ParentescoCode.PADRE]: 'Padre',
  [ParentescoCode.MADRE]: 'Madre',
  [ParentescoCode.HIJO]: 'Hijo/a',
  [ParentescoCode.CONYUGE]: 'Cónyuge/pareja',
  [ParentescoCode.HERMANO]: 'Hermano/a',
  [ParentescoCode.ABUELO]: 'Abuelo/a',
  [ParentescoCode.TUTOR]: 'Tutor/a',
  [ParentescoCode.AMIGO]: 'Amigo/a',
  [ParentescoCode.OTRO]: 'Otro',
} as const;
