export enum TipoContacto {
  TELEFONO = 'telefono',
  CELULAR  = 'celular',
  EMAIL    = 'email',
  WHATSAPP = 'whatsapp',
  OTRO     = 'otro'
}

export const TipoContactoLabel: Record<TipoContacto, string> = {
  [TipoContacto.TELEFONO]: 'Teléfono',
  [TipoContacto.CELULAR]:  'Celular',
  [TipoContacto.EMAIL]:    'Email',
  [TipoContacto.WHATSAPP]: 'WhatsApp',
  [TipoContacto.OTRO]:     'Otro'
} as const;

