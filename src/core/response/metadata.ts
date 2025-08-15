export type Metadata = {
  createdAt: Date;
  updatedAt: Date;
  status?: MetadataStatus;
  source?: string;
  tags?: string[];
  version?: string;
};

export enum MetadataStatus {
  BORRADOR = 'draft',
  ACTIVO = 'active',
  INACTIVO = 'inactive',
  RECHAZADO = 'rejected',
  ARCHIVADO = 'archived',
}
