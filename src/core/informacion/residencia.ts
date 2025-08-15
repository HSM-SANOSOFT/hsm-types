import type { Canton, Parroquia, Provincia } from '../geografia';

export type InfoResidencia = Array<{
  direccion?: string;
  parroquia?: Parroquia;
  canton?: Canton;
  provincia?: Provincia;
}>;
