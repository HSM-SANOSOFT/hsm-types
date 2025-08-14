import { EstadoCivilCode} from "./code";

export const EstadoCivilCodeLabel: Record<EstadoCivilCode, string> = {
  [EstadoCivilCode.SOLTERO]: 'Soltero',
  [EstadoCivilCode.CASADO]: 'Casado',
  [EstadoCivilCode.DIVORCIADO]: 'Divorciado',
  [EstadoCivilCode.VIUDO]: 'Viudo'
} as const;
