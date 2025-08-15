import type { AseguradoraCode } from '../aseguradoras';

export type InfoAseguradoras = Array<{
  nombre?: AseguradoraCode;
  numeroPoliza?: string;
}>;
