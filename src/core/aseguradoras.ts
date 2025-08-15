export enum AseguradoraTipoCode {
  PUBLICA = 'PUB',
  PRIVADA = 'PRI',
}

export const AseguradoraTipoCodeLabel: Record<AseguradoraTipoCode, string> = {
  [AseguradoraTipoCode.PUBLICA]: 'Pública',
  [AseguradoraTipoCode.PRIVADA]: 'Privada',
} as const;

export enum AseguradoraCode {
  IESS = 'IESS',
  MSP = 'MSP',
  PARTICULAR = 'PAR',
  SPPAT = 'SPPAT',
  ISPOL = 'ISPOL',
  SALUD = 'SALUD',
  BMI = 'BMI',
  OTRO = 'OTR',
}

export const AseguradoraCodeLabel: Record<AseguradoraCode, string> = {
  [AseguradoraCode.IESS]: 'IESS',
  [AseguradoraCode.MSP]: 'MSP',
  [AseguradoraCode.PARTICULAR]: 'Particular',
  [AseguradoraCode.SPPAT]: 'SPPAT',
  [AseguradoraCode.ISPOL]: 'ISPOL',
  [AseguradoraCode.SALUD]: 'SALUD',
  [AseguradoraCode.BMI]: 'BMI',
  [AseguradoraCode.OTRO]: 'Otro',
} as const;
