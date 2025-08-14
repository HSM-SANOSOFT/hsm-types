import { ContactoCode } from "./code";

export const ContactoCodeLabel: Record<ContactoCode, string> = {
  [ContactoCode.TELEFONO]: 'Teléfono',
  [ContactoCode.CELULAR]:  'Celular',
  [ContactoCode.EMAIL]:    'Email',
  [ContactoCode.OTRO]:     'Otro'
} as const;

