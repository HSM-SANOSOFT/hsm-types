export enum ConsentScopeCode {
  PRIVACIDAD = 'PRIV',
  TRATAMIENTO = 'TRAT',
  INVESTIGACION = 'INV',
}
export const ConsentScopeCodeLabel: Record<ConsentScopeCode, string> = {
  [ConsentScopeCode.PRIVACIDAD]: 'Privacidad del paciente',
  [ConsentScopeCode.TRATAMIENTO]: 'Tratamiento',
  [ConsentScopeCode.INVESTIGACION]: 'Investigación',
} as const;
