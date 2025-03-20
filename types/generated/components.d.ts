import type { Schema, Struct } from '@strapi/strapi';

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

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'componentes-pagina.pag-bullet-points': ComponentesPaginaPagBulletPoints;
    }
  }
}
