import type { ParentescoCode } from '../parentesco';
import type { InfoContacto } from './contacto';

export type InfoContactoReferencia = {
  nombre: string;
  contacto: InfoContacto;
  parentesco: ParentescoCode;
};
