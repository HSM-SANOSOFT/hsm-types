import { ProvinciaCode } from "./provincia-code";
import { CantonCode } from "./canton-code";

export const CantonCodeLabels: Record<ProvinciaCode, Array<Record<Partial<CantonCode>,string>>> = {
  [ProvinciaCode.NACIONALIZADOS]: [],
  [ProvinciaCode.AZUAY]: [
    {
      [CantonCode.CUENCA]: "Cuenca",
    },
    {[CantonCode.GIRON]: "Girón"},
    {[CantonCode.GUALACEO]: "Gualaceo"},
    {[CantonCode.NABON]: "Nabón"},
    {[CantonCode.PAUTE]: "Paute"},
    {[CantonCode.PUCARA]: "Pucará"},
    {[CantonCode.SAN_FERNANDO]: "San Fernando"},
    {[CantonCode.SANTA_ISABEL]: "Santa Isabel"},
    {[CantonCode.SIGSIG]: "SigSig"}
  ],
  [ProvinciaCode.BOLIVAR]: [
    {[CantonCode.GUARANDA]: "Guaranda"},
    {[CantonCode.CHILLANES]: "Chillanes"},
    {[CantonCode.CHIMBO]: "Chimbo"},
    {[CantonCode.ECHEANDIA]: "Echeandía"},
    {[CantonCode.SAN_MIGUEL]: "San Miguel"},
    {[CantonCode.CALUMA]: "Caluma"},
    {[CantonCode.LAS_NAVES]: "Las Naves"}
  ],
  [ProvinciaCode.CANAR]: [
    {[CantonCode.AZOGUES]: "Azogues"},
    {[CantonCode.BIBLIAN]: "Biblián"},
    {[CantonCode.CANAR]: "Cañar"},
    {[CantonCode.LA_TRONCAL]: "La Troncal"}
  ],
  [ProvinciaCode.CARCHI]: [
    {[CantonCode.TULCAN]: "Tulcán"},
    {[CantonCode.BOLIVAR]: "Bolívar"},
    {[CantonCode.ESPEJO]: "Espejo"},
    {[CantonCode.MIRA]: "Mira"},
    {[CantonCode.MONTUFAR]: "Montúfar"},
    {[CantonCode.SAN_PEDRO_DE_HUACA]: "San Pedro de Huaca"}
  ],
  [ProvinciaCode.COTOPAXI]: [
    {[CantonCode.LATACUNGA]: "Latacunga"},
    {[CantonCode.LA_MANA]: "La Maná"},
    {[CantonCode.PANGUA]: "Pangua"},
    {[CantonCode.PUJILI]: "Pujilí"},
    {[CantonCode.SALCEDO]: "Salcedo"},
    {[CantonCode.SAQUISILI]: "Saquisilí"},
    {[CantonCode.SIGCHOS]: "Sigchos"}
  ],
  [ProvinciaCode.CHIMBORAZO]: [
    {[CantonCode.RIOBAMBA]: "Riobamba"},
    {[CantonCode.ALAUSI]: "Alausí"},
    {[CantonCode.COLTA]: "Colta"},
    {[CantonCode.CHAMBO]: "Chambo"},
    {[CantonCode.CHUNCHI]: "Chunchi"},
    {[CantonCode.GUAMOTE]: "Guamote"},
    {[CantonCode.GUANO]: "Guano"},
    {[CantonCode.PALLATANGA]: "Pallatanga"},
    {[CantonCode.PENIPE]: "Penipe"},
    {[CantonCode.CUMANDA]: "Cumandá"}
  ],
  [ProvinciaCode.EL_ORO]: [
    {[CantonCode.MACHALA]: "Machala"},
    {[CantonCode.ARENILLAS]: "Arenillas"},
    {[CantonCode.ATAHUALPA]: "Atahualpa"},
    {[CantonCode.BALSAS]: "Balsas"},
    {[CantonCode.CHILLA]: "Chilla"}
  ],
  [ProvinciaCode.ESMERALDAS]: [
    {[CantonCode.ESMERALDAS]: "Esmeraldas"},
    {[CantonCode.ELOY_ALFARO]: "Eloy Alfaro"},
    {[CantonCode.MUSINE]: "Musinés"},
    {[CantonCode.QUININDE]: "Quinindé"},
    {[CantonCode.SAN_LORENZO]: "San Lorenzo"},
    {[CantonCode.ATACAMES]: "Atacames"},
    {[CantonCode.LA_CONCORDIA]: "La Concordia"}
  ],
  [ProvinciaCode.GUAYAS]: [
    {[CantonCode.GUAYAQUIL]: "Guayaquil"},
    {[CantonCode.ALFREDO_BAQUERIZO_MORENO]: "Alfredo Baquerizo Moreno"},
    {[CantonCode.BALAO]: "Balao"},
    {[CantonCode.BALZAR]: "Balzar"},
    {[CantonCode.COLIMES]: "Colimes"},
    {[CantonCode.DAULE]: "Daule"},
    {[CantonCode.DURAN]: "Durán"},
    {[CantonCode.EL_EMPALME]: "El Empalme"},
    {[CantonCode.EL_TRIUNFO]: "El Triunfo"},
    {[CantonCode.MILAGRO]: "Milagro"},
    {[CantonCode.NARANJAL]: "Naranjal"},
    {[CantonCode.NARANJITO]: "Naranjito"},
    {[CantonCode.PALESTINA]: "Palestina"},
    {[CantonCode.PEDRO_CARBO]: "Pedro Carbo"},
    {[CantonCode.SALINAS_GUAYAS]: "Salinas"},
    {[CantonCode.SAMBORONDON]: "Samborondón"},
    {[CantonCode.SANTA_ELENA_GUAYAS]: "Santa Elena"},
    {[CantonCode.SANTA_LUCIA]: "Santa Lucía"},
    {[CantonCode.URBINA_JADO]: "Urbina Jado"},
    {[CantonCode.YAGUACHI]: "Yaguachi"},
    {[CantonCode.PLAYAS]: "Playas"},
    {[CantonCode.SIMON_BOLIVAR]: "Simón Bolívar"},
    {[CantonCode.CORONEL_MARCELINO_MARIDUENA]: "Coronel Marcelino Maridueña"},
    {[CantonCode.LOMAS_DE_SARGENTILLO]: "Lomas de Sargentillo"},
    {[CantonCode.NOBOL]: "Nobol"},
    {[CantonCode.LA_LIBERTAD_GUAYAS]: "La Libertad"},
    {[CantonCode.GENERAL_ANTONIO_ELIZALDE]: "General Antonio Elizalde"}
  ],
  [ProvinciaCode.IMBABURA]: [
    {[CantonCode.IBARRA]: "Ibarra"},
    {[CantonCode.ANTONIO_ANTE]: "Antonio Ante"},
    {[CantonCode.COTACACHI]: "Cotacachi"},
    {[CantonCode.OTAVALO]: "Otavalo"}
  ],
  [ProvinciaCode.LOJA]: [],
  [ProvinciaCode.LOS_RIOS]: [
    {[CantonCode.QUINSALOMA]: "Quinsaloma"}
  ],
  [ProvinciaCode.MANABI]: [],
  [ProvinciaCode.MORONA_SANTIAGO]: [
    {[CantonCode.MORONA]: "Morona"},
    {[CantonCode.GUALAQUIZA]: "Gualaquiza"},
    {[CantonCode.LIMON_INDANZA]: "Limón Indanza"},
    {[CantonCode.PALORA]: "Palora"},
    {[CantonCode.SANTIAGO]: "Santiago"},
    {[CantonCode.SUCUA]: "Sucúa"}
  ],
  [ProvinciaCode.NAPO]: [],
  [ProvinciaCode.PASTAZA]: [],
  [ProvinciaCode.PICHINCHA]: [],
  [ProvinciaCode.TUNGURAHUA]: [],
  [ProvinciaCode.ZAMORA_CHINCHIPE]: [],
  [ProvinciaCode.GALAPAGOS]: [],
  [ProvinciaCode.SUCUMBIOS]: [],
  [ProvinciaCode.ORELLANA]: [],
  [ProvinciaCode.SANTO_DOMINGO_DE_LOS_TSACHILAS]: [
    {[CantonCode.SANTO_DOMINGO]: "Santo Domingo"}
  ],
  [ProvinciaCode.SANTA_ELENA]: [
    {[CantonCode.LA_LIBERTAD]: "La Libertad"},
    {[CantonCode.SALINAS]: "Salinas"},
    {[CantonCode.SANTA_ELENA]: "Santa Elena"}
  ],
  [ProvinciaCode.ZONAS_NO_DELIMITADAS]: [
    {[CantonCode.LAS_GOLONDRINAS]: "Las Golondrinas"},
    {[CantonCode.MANGA_DEL_CURA]: "Manga del Cura"},
    {[CantonCode.EL_PIEDRERO]: "El Piedrero"}
  ],
  
} as const;
