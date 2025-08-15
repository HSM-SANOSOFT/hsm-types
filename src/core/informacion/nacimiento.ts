import type { NacionalidadCode } from '../demografica';

export type InfoNacimiento = Array<{
  fecha?: Date;
  lugar?: string;
  nacionalidad?: NacionalidadCode;
}>;
