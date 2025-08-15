export enum ContactoCode {
  TELEFONO = 'TEL',
  CELULAR = 'CEL',
  EMAIL = 'EMAIL',
  OTRO = 'OTR',
}
export const ContactoCodeLabel: Record<ContactoCode, string> = {
  [ContactoCode.TELEFONO]: 'Teléfono',
  [ContactoCode.CELULAR]: 'Celular',
  [ContactoCode.EMAIL]: 'Email',
  [ContactoCode.OTRO]: 'Otro',
} as const;

export enum UsoContactoCode {
  CASA = 'CS',
  TRABAJO = 'TRB',
  TEMPORAL = 'TEMP',
  MOVIL = 'MOV',
  OTRO = 'OTR',
}

export const UsoContactoCodeLabel: Record<UsoContactoCode, string> = {
  [UsoContactoCode.CASA]: 'Casa',
  [UsoContactoCode.TRABAJO]: 'Trabajo',
  [UsoContactoCode.TEMPORAL]: 'Temporal',
  [UsoContactoCode.MOVIL]: 'Móvil',
  [UsoContactoCode.OTRO]: 'Otro',
} as const;

export enum ContactoPreferenciaCode {
  PRINCIPAL = 'PRI',
  SECUNDARIO = 'SEC',
  EMERGENCIA = 'EME',
}
export const ContactoPreferenciaCodeLabel: Record<
  ContactoPreferenciaCode,
  string
> = {
  [ContactoPreferenciaCode.PRINCIPAL]: 'Principal',
  [ContactoPreferenciaCode.SECUNDARIO]: 'Secundario',
  [ContactoPreferenciaCode.EMERGENCIA]: 'Emergencia',
} as const;
