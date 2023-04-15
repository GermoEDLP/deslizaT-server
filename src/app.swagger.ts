import { INestApplication } from '@nestjs/common';
import {
  DocumentBuilder,
  SwaggerCustomOptions,
  SwaggerModule,
} from '@nestjs/swagger';

export const initSwagger = (app: INestApplication) => {
  const config = new DocumentBuilder()
    .setTitle('DeslizaT API')
    .setDescription('Api para el manejo de servicios de DeslizaT')
    .setVersion('1.0')
    .build();
  const options: SwaggerCustomOptions = {
    customSiteTitle: 'DeslizaT API',
  };

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document, options);
};
