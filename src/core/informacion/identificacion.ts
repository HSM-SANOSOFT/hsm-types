import type { DocumentoIdentidadCode } from '../documento_identidad';

export type InfoIdentificacion = Array<{
  tipo: DocumentoIdentidadCode;
  numero: string;
  vigencia?: Date;
}>;
