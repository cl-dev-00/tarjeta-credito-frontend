# Proyecto Tarjeta Crédito Frontend

#### ¡Bienvenido al proyecto de Tarjeta de Crédito Frontend!

El siguiente proyecto es una pequeña demo de un sistema frontend que simula la gestión de la información de una tarjeta de crédito, así como de compras y pagos.

A continuación se detalla más sobre el proyecto:

## Tecnologías utilizadas en el proyecto:

- NextJS (Framework basado en ReactJS)
- MUI (Frameworks UI)
- React Hook Form (Librería para el manejo de validaciones de formularios)
- TypeScript

## Prerrequisitos

- Deberás contar con la versión de NodeJS v18 LTS

## Pasos para ejecutar la aplicación

Para poder ejecutar el proyecto con éxito deberá seguir los siguientes pasos:

1. Primero deberas abrir la terminal de tu preferencia (CMD, PowerShell, etc)

2. Situate en el directorio del proyecto:\
    ```PS C:\Users\TuUsuario> cd <directorio-del proyecto>```

3. Ejecute el siguiente comando para instalar los paquetes necesarios de la aplicación:\
    ```PS C:\Users\TuUsuario> npm install```

4. Para iniciar la aplicación ejecute el siguiente comando:\
    ```PS C:\Users\TuUsuario> npm run dev```

5. Para entrar en la aplicación ingresa la siguiente url en su navegador de preferencia:\
    http://localhost:3000

5. ¡Una vez hecho esto ya está listo para probar la aplicación!

## Arquitectura de la aplicación

La estructura del proyecto se basa en las recomendaciones de la documentación oficial de NextJS, acontinuación se detalle como esta organizado el proyecto:

* &#x1f4c1; `tarjeta-credito-frontend/` Directorio raiz donde se encuentra la aplicación NextJS
    * &#x1f4c1; `src/` En este directorio se encuentra las páginas, components, hooks y la lógica del negocio que se maneja en la aplicación
        * &#x1f4c1; `app/` En este directorio se encuentra las páginas utilizadas en la aplicación
        * &#x1f4c1; `components/` En este directorio se encuentra los componentes utilizados en la aplicación seccionado por página
            * &#x1f4c1; `Home/` En este directorio se encuentra los componentes utilizados en la página de Home
        * &#x1f4c1; `endpoints/` En este directorio se encuentra los endpoints (no la url base) que consume la aplicación de la API del backend
        * &#x1f4c1; `models/` este directorio se encuentra los modelos (interfaces) usados dentro de la aplicación, en este caso sería similar a las clases Dto que se usan en el backend
        * &#x1f4c1; `services/` En este directorio están los archivos que contienen las funciones para realizar las peticiones al backend
        * &#x1f4c1; `theme/` En este directorio están los archivos de configuración de tema utilizado para MUI
        * &#x1f4c1; `validations/` En este directorio se encuentra los esquemas para la validaciones de formularios de la aplicación
