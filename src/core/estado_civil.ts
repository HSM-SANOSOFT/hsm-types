export enum EstadoCivilCode {
  SOLTERO = 'SLT',
  CASADO = 'CAS',
  DIVORCIADO = 'DIV',
  VIUDO = 'VIU',
  OTRO = 'OTR',
  NO_ESPECIFICADO = 'NE',
}

export const EstadoCivilCodeLabel: Record<EstadoCivilCode, string> = {
  [EstadoCivilCode.SOLTERO]: 'Soltero',
  [EstadoCivilCode.CASADO]: 'Casado',
  [EstadoCivilCode.DIVORCIADO]: 'Divorciado',
  [EstadoCivilCode.VIUDO]: 'Viudo',
  [EstadoCivilCode.OTRO]: 'Otro',
  [EstadoCivilCode.NO_ESPECIFICADO]: 'No Especificado',
} as const;

export function getEstadoCivilLabel(estadoCivil: EstadoCivilCode): string {
  return EstadoCivilCodeLabel[estadoCivil];
}
