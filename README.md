# Proyecto para administrador de bicicletería

Este proyecto es un servicio web para administrar una bicicletería. La aplicación permite gestionar clientes, ingresos, egresos, órdenes de taller, repuestos, stock y depósito.

## Tecnologías utilizadas

- [NestJS](https://nestjs.com/) - Framework de Node.js para construir aplicaciones escalables.
- [Swagger](https://swagger.io/) - Herramienta para diseñar, construir y documentar APIs RESTful.
- [TypeScript](https://www.typescriptlang.org/) - Lenguaje de programación que añade tipado estático a JavaScript.
- [Mongoose](https://mongoosejs.com/) - ODM (Object-Document Mapping) para MongoDB.
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) - Servicio de base de datos en la nube basado en MongoDB.

## Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/tu-usuario/tu-proyecto.git
```

2. Instala las dependencias:
```bash
cd tu-proyecto
npm install
```

## Configuración

1. Crea un archivo `.env` en la raíz del proyecto con la siguiente información:
    
```bash 
DB_MONGO_CONNECTION=tipo-de-conexión -> mongodb+srv o mongodb
DB_MONGO_USER=usuario-de-mongo-atlas
DB_MONGO_PASSWORD=contraseña-de-mongo-atlas
DB_MONGO_HOST=cluster-de-mongo-atlas
DB_MONGO_DB=nombre-de-tu-base-de-datos

PORT=puerto-de-tu-aplicación -> default: 3035
```

2. Reemplaza los valores de las variables de entorno con los datos de tu base de datos en MongoDB Atlas.

## Uso

1. Inicia la aplicación:
```bash
npm run start
```

2. Visita `http://localhost:3035/api-docs` para ver la documentación de la API.

## Contribuir

Si quieres contribuir al proyecto, puedes hacer lo siguiente:

1. Haz un fork del repositorio.

2. Crea una rama para tu contribución:
```bash	
git checkout -b mi-contribucion
```

3. Haz tus cambios y realiza un commit:
```bash
git commit -m "Mi contribución"
```

4. Realiza un push a tu rama:
```bash
git push origin mi-contribucion
```

5. Crea un pull request en GitHub.

## Licencia

Este proyecto está bajo la licencia MIT. Ver el archivo `LICENSE` para más detalles.