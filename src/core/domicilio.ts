export enum DomicilioCode {
  CASA = 'casa',
  DEPARTAMENTO = 'departamento',
  QUINTA = 'quinta',
  OTRO = 'otro',
}
export const DomicilioCodeLabel: Record<DomicilioCode, string> = {
  [DomicilioCode.CASA]: 'Casa',
  [DomicilioCode.DEPARTAMENTO]: 'Departamento',
  [DomicilioCode.QUINTA]: 'Quinta',
  [DomicilioCode.OTRO]: 'Otro',
} as const;

export enum TenenciaViviendaCode {
  PROPIA = 'PRO',
  ARRENDADA = 'ARR',
  FAMILIAR = 'FAM',
  ANTICRESIS = 'ANT',
  OTRO = 'OTR',
}
export const TenenciaViviendaCodeLabel: Record<TenenciaViviendaCode, string> = {
  [TenenciaViviendaCode.PROPIA]: 'Propia',
  [TenenciaViviendaCode.ARRENDADA]: 'Arrendada',
  [TenenciaViviendaCode.FAMILIAR]: 'Familiar',
  [TenenciaViviendaCode.ANTICRESIS]: 'Anticresis',
  [TenenciaViviendaCode.OTRO]: 'Otro',
} as const;

export enum DireccionUsoCode {
  CASA = 'CASA',
  TRABAJO = 'TRB',
  TEMPORAL = 'TEMP',
  ANTIGUA = 'ANT',
}
export const DireccionUsoCodeLabel: Record<DireccionUsoCode, string> = {
  [DireccionUsoCode.CASA]: 'Casa',
  [DireccionUsoCode.TRABAJO]: 'Trabajo',
  [DireccionUsoCode.TEMPORAL]: 'Temporal',
  [DireccionUsoCode.ANTIGUA]: 'Antigua',
} as const;

export enum DireccionTipoCode {
  POSTAL = 'PST',
  FISICA = 'FSC',
  AMBAS = 'AMB',
}
export const DireccionTipoCodeLabel: Record<DireccionTipoCode, string> = {
  [DireccionTipoCode.POSTAL]: 'Postal',
  [DireccionTipoCode.FISICA]: 'Física',
  [DireccionTipoCode.AMBAS]: 'Ambas',
} as const;
