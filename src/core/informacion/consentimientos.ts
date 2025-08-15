import type { ConsentimientoCode } from '../consentimiento';

export type InfoConsentimientos = Array<{
  tipo?: ConsentimientoCode;
  createdAt?: Date;
  validUntil?: Date;
}>;
