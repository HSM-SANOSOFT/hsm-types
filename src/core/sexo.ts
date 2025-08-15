export enum SexoCode {
  MASCULINO = 'M',
  FEMENINO = 'F',
  OTRO = 'O',
  NO_DECLARA = 'ND',
}

export const SexoCodeLabel: Record<SexoCode, string> = {
  [SexoCode.MASCULINO]: 'Masculino',
  [SexoCode.FEMENINO]: 'Femenino',
  [SexoCode.OTRO]: 'Otro',
  [SexoCode.NO_DECLARA]: 'No Declara',
} as const;
