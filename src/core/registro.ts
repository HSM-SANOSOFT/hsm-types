export enum EstadoRegistroCode {
  ACTIVO = 'ACT',
  INACTIVO = 'INA',
  BLOQUEADO = 'BLQ',
  BORRADOR = 'BOR',
}
export const EstadoRegistroCodeLabel: Record<EstadoRegistroCode, string> = {
  [EstadoRegistroCode.ACTIVO]: 'Activo',
  [EstadoRegistroCode.INACTIVO]: 'Inactivo',
  [EstadoRegistroCode.BLOQUEADO]: 'Bloqueado',
  [EstadoRegistroCode.BORRADOR]: 'Borrador',
} as const;
