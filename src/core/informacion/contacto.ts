import type {
  ContactoCode,
  ContactoPreferenciaCode,
  ContactoUsoCode,
} from '../contacto';

export type InfoContacto = Array<{
  tipo: ContactoCode;
  uso?: ContactoUsoCode;
  preferencia?: ContactoPreferenciaCode;
  valor: string;
}>;
