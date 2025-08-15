export enum DocumentoIdentidadCode {
  CI = 'CDL',
  PASAPORTE = 'PSP',
  RUC = 'RUC',
}
export const DocumentoIdentidadCodeLabel: Record<
  DocumentoIdentidadCode,
  string
> = {
  [DocumentoIdentidadCode.CI]: 'Cédula de Identidad',
  [DocumentoIdentidadCode.PASAPORTE]: 'Pasaporte',
  [DocumentoIdentidadCode.RUC]: 'RUC',
} as const;
