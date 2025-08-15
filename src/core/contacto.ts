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

export enum ContactoUsoCode {
  CASA = 'CS',
  TRABAJO = 'TRB',
  TEMPORAL = 'TEMP',
  MOVIL = 'MOV',
  OTRO = 'OTR',
}

export const ContactoUsoCodeLabel: Record<ContactoUsoCode, string> = {
  [ContactoUsoCode.CASA]: 'Casa',
  [ContactoUsoCode.TRABAJO]: 'Trabajo',
  [ContactoUsoCode.TEMPORAL]: 'Temporal',
  [ContactoUsoCode.MOVIL]: 'Móvil',
  [ContactoUsoCode.OTRO]: 'Otro',
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
