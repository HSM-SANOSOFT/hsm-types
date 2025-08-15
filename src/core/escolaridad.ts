export enum EscolaridadCode {
  NINGUNO = 'NONE',
  PRIMARIA = 'PRIM',
  SECUNDARIA = 'SEC',
  TECNICO = 'TEC',
  SUPERIOR = 'SUP',
  POSGRADO = 'POS',
  DOCTORADO = 'PHD',
  OTRO = 'OTR',
}
export const EscolaridadCodeLabel: Record<EscolaridadCode, string> = {
  [EscolaridadCode.NINGUNO]: 'Ninguno',
  [EscolaridadCode.PRIMARIA]: 'Primaria',
  [EscolaridadCode.SECUNDARIA]: 'Secundaria',
  [EscolaridadCode.TECNICO]: 'Técnico/tecnológico',
  [EscolaridadCode.SUPERIOR]: 'Superior',
  [EscolaridadCode.POSGRADO]: 'Posgrado',
  [EscolaridadCode.DOCTORADO]: 'Doctorado',
  [EscolaridadCode.OTRO]: 'Otro',
} as const;
