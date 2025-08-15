import type { NacionalidadCode } from '../demografica';

export type InfoNacimiento = {
  fecha?: Date;
  lugar?: string;
  nacionalidad?: NacionalidadCode;
};
