# Naito Short Link!
----
Hola esta es la documentación para   **naito**. el proposito de este proyecto es tener un acortador de url basados en short link.
Esto funciona basando en la inserción del dominio en la base de datos y el valor del id de retorno es cambiado a la base 52 cambiando el numero a un resultado texto alfanumerico. 


# Setup
Configura las variables de entorno en el archivo .env para adaptar tu proyecto a tus preferencias.
```bash
vim Backend/.env 
```
Crea las tablas en el modelo en la base de datos del orm en la base de datos mysql con el siguiente comando.
```bash
cd Backend
node models/setup.js
cd ..
```

# Api
Listados de los apis disponibles para el naito short link 
## Registrar un nuevo usuario
Ruta para crear un nuevo usuarios en el sistema
* **URL**
  api/register
* **Method:**
  `POST`
*  **URL Params**
   ```json
   {
    "name": "Naito",
    "lastname":"Tala",
    "email":"naito@tala.com",
    "passwd":"SECRET"
     }
    ```
* **Parametros Requeridos:**
   `name=[string]`
   `lastname=[string]`
   `email=[string]`
   `passwd=[string]`
* **Respuesta Exitosa:**
  * **Code:** 200 
  * **Respuesta:** 
  ```json
  {
  "status":true,
  "msg":"Se ha creado tu cuenta"
  }
  ```
* **Respuesta Existosa( Usuario Existente):**
  * **Code:** 200 
  * **Respuesta:** 
  ```json
  {
  "status":false,
  "msg":"Correo ya existe"
  }
  ```
  
## Iniciar Session
Iniciar session con el objetivo de obtener el token JWT para operar con las llamadas a las apis
* **URL**
  api/login
* **Method:**
  `POST`
*  **URL Params**
   ```json
   {
    "email":"naito@tala.com",
    "passwd":"SECRET"
     }
    ```
   **Parametros Requeridos:**
   `email=[string]`
   `passwd=[string]`
* **Success Response:**
  * **Code:** 200 
  * **Respuesta:** 
  ```json
    {
     "status":true,
     "msg":"Login Correcto",
     "domain":"<Dominio configuardo .env>"
     "user": {
            "id":1
            "name":"naito",
            "lastname":"tala"
          }
     }
  ```
  
## Crear un short Link
Api para cortar el un dominio
* **URL**
  api/urls
* **Method:**
  `POST`
**Auth required** : YES
authorization : `JWT`
*  **URL Params**
   **Parametros Requeridos:**
    ```json
     {
       "url": "example.com"
     }
     ```
* **Success Response:**
* **Code:** 200 
* **Respuesta:** 
    ```json
     {
       "status":true,
       "msg":"Short Link creado",
       "short":"a"
     }
     ```
* **Respuesta No autorizada:**
* **Code:** 401 
* **Respuesta:** 
  ```json
    {
    msg:"no auth"
    }
  ```
## Obtener mis short links
Api para tener short links creados por usuario
* **URL**
  api/urls
* **Method:**
  `GET`
**Auth required** : YES
authorization : `JWT`
* **Respuesta Exitosa:**
  * **Code:** 200 
  * **Respuesta:** 
  ```json
    [{id: 1, 
    url: "http://facebook.com", 
    createdAt: "2018-03-15T20:03:42.000Z",
    records:[
          {id: 1,
          ip: "::ffff:192.168.1.200",
          origin: null,
          url_id:1,
          createdAt: "2018-03-15T20:03:42.000Z",
          user_agent:"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.186 Safari/537.36"
          }...
     },
    .
    .
    .
    ]
  ```
* **Respuesta No autorizada:**
* **Code:** 401 
* **Respuesta:** 
  ```json
    {
    msg:"no auth"
    }
  ```
