import type { Schema, Struct } from '@strapi/strapi';

export interface InformativoComponenteInformativo
  extends Struct.ComponentSchema {
  collectionName: 'components_informativo_componente_informativos';
  info: {
    displayName: 'componente informativo';
    icon: 'check';
  };
  attributes: {
    number: Schema.Attribute.Integer;
    texto: Schema.Attribute.String;
    texto2: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'informativo.componente-informativo': InformativoComponenteInformativo;
    }
  }
}
