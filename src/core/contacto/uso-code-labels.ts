import { UsoContactoCode } from "./uso-code";

export const UsoContactoCodeLabel: Record<UsoContactoCode, string> = {
  [UsoContactoCode.PRIMARIO]: 'Primario',
  [UsoContactoCode.SECUNDARIO]: 'Secundario',
  [UsoContactoCode.EMERGENCIA]: 'Emergencia',
  [UsoContactoCode.TRABAJO]:    'Trabajo',
  [UsoContactoCode.PERSONAL]:   'Personal',
  [UsoContactoCode.OTRO]:       'Otro'
} as const;