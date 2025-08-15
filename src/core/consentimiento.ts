export enum ConsentimientoCode {
  PRIVACIDAD = 'PRIV',
  TRATAMIENTO = 'TRAT',
  INVESTIGACION = 'INV',
}
export const ConsentimientoCodeLabel: Record<ConsentimientoCode, string> = {
  [ConsentimientoCode.PRIVACIDAD]: 'Privacidad del paciente',
  [ConsentimientoCode.TRATAMIENTO]: 'Tratamiento',
  [ConsentimientoCode.INVESTIGACION]: 'Investigación',
} as const;
