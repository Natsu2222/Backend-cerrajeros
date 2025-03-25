import type { Schema, Struct } from '@strapi/strapi';

export interface ComentariosStarImages extends Struct.ComponentSchema {
  collectionName: 'components_comentarios_star_images';
  info: {
    displayName: 'starImages';
    icon: 'star';
  };
  attributes: {
    starEmpt: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    starFull: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
  };
}

export interface ComponentesPaginaPagBulletPoints
  extends Struct.ComponentSchema {
  collectionName: 'components_componentes_pagina_pag_bullet_points';
  info: {
    displayName: 'pag-bullet-points';
    icon: 'archive';
  };
  attributes: {
    descripcionBP: Schema.Attribute.Text & Schema.Attribute.Required;
    iconoBP: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    tituloBP: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

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

export interface InformativoTarifas extends Struct.ComponentSchema {
  collectionName: 'components_informativo_tarifas';
  info: {
    displayName: 'tarifas';
    icon: 'clock';
  };
  attributes: {
    horario: Schema.Attribute.String & Schema.Attribute.Required;
    horarioDiaFin: Schema.Attribute.Time;
    horarioDiaIni: Schema.Attribute.Time;
    precio: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'comentarios.star-images': ComentariosStarImages;
      'componentes-pagina.pag-bullet-points': ComponentesPaginaPagBulletPoints;
      'informativo.componente-informativo': InformativoComponenteInformativo;
      'informativo.tarifas': InformativoTarifas;
    }
  }
}
