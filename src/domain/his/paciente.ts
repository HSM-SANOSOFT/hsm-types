import type { EstadoCivilCode } from '../../core/estado_civil';
import type { GrupoSanguineoCode } from '../../core/grupo_sanguineo';
import type {
  InfoAlergias,
  InfoAseguradoras,
  InfoConsentimientos,
  InfoContacto,
  InfoContactoReferencia,
  InfoDiscapacidad,
  InfoIdentificacion,
  InfoNacimiento,
  InfoNombres,
  InfoResidencia,
} from '../../core/informacion';
import type { Metadata } from '../../core/response';
import type { SexoCode } from '../../core/sexo';

export type PacienteType = {
  id: number;
  nombres: InfoNombres;
  identificacion: InfoIdentificacion;
  nacimiento: InfoNacimiento;
  residencia: InfoResidencia;
  contacto: InfoContacto;
  sexo: SexoCode;
  estadoCivil?: EstadoCivilCode;
  ocupacion?: string;
  peso?: number;
  talla?: number;
  grupoSanguineo?: GrupoSanguineoCode;
  discapacidad?: InfoDiscapacidad;
  alergias?: InfoAlergias;
  aseguradora?: InfoAseguradoras;
  consentimientos?: InfoConsentimientos;
  contactoEmergencia?: InfoContactoReferencia;
  meta: Metadata;
};
