<p align='left'>
    <img src='https://static.wixstatic.com/media/85087f_0d84cbeaeb824fca8f7ff18d7c9eaafd~mv2.png/v1/fill/w_160,h_30,al_c,q_85,usm_0.66_1.00_0.01/Logo_completo_Color_1PNG.webp' </img>
</p>

# Individual Project - Henry Dogs

<p align="left">
  <img height="200" src="./Captura de pantalla de 2021-03-04 12-27-28.png" />
</p>


La aplicación muestra distintas razas de perro junto con información relevante de las mismas utilizando la api externa [the dog api](https://thedogapi.com/) y a partir de ella, se puede:

  - Buscar perros
  - Filtrarlos / Ordenarlos
  - Crear nuevos perros
  - Crear nuevos temperamentos

Para las funcionalidades de filtrado y ordenamiento NO se utilizaron los endpoints de la API externa que ya devuelven los resultados filtrados u ordenados.

# Objetivos:

- Construir una App utlizando React, Redux, Node y Sequelize.
- Afirmar y conectar los conceptos aprendidos en la carrera.
- Aprender mejores prácticas.
- Aprender y practicar el workflow de GIT.
- Usar y practicar testing.

# Descripción y funcionalidades:

__Pagina inicial__: landing page con
- Imagen de fondo representativa al proyecto
- Botón para ingresar al home (`Ruta principal`)

__Ruta principal__: 
- Input de búsqueda para encontrar razas de perros por nombre.
- Área donde se ve el listado de razas de perros. Cada tarjeta muestra:
  - Imagen
  - Nombre
  - Temperamento          
- Botones/Opciones para filtrar por temperamento y por raza existente o agregada por el usuario.
- Botones/Opciones para ordenar tanto ascendentemente como descendentemente las razas de perro por orden alfabético y por peso.
- Paginado para ir buscando y mostrando las siguientes razas.

__Ruta de detalle de raza de perro__: 
- Campos mostrados en la ruta principal para cada raza (imagen, nombre y temperamento)
- Altura
- Peso
- Años de vida

__Ruta de creación de raza__:
- Contiene un formulario __controlado__ con los siguientes campos
  - Nombre
  - Altura 
  - Peso 
  - Años de vida
- Posibilidad de seleccionar/agregar temperamento
- Botón/Opción para crear una nueva raza de perro

# Base de datos

El modelo de la base de datos tiene las siguientes entidades: PERRO Y TEMPERAMENTO.

- Perro con las siguientes propiedades:
  - ID
  - Nombre 
  - Altura 
  - Peso 
  - Años de vida
  - 
- Temperamento con las siguientes propiedades:
  - ID
  - Nombre

La relación entre ambas entidades es de muchos a muchos ya que una raza de perro puede tener varios "temperamentos" en simultaneo y, a su vez, un "temperamento" puede corresponder a múltiples razas de perro distintas. Por ejemplo la raza `pug` es docil, inteligente y sociable (entre otras). Pero a su vez existen otras razas de perro que también son sociables o inteligentes.

# Backend

Servidor en Node/Express con las siguientes rutas:

- __GET /dogs__:
  - Obtiene un listado de las primeras 8 razas de perro
  - Devuelve solo los datos necesarios para la ruta principal
- __GET /dogs?name="..."__:
  - Obtiene un listado de las primeras 8 razas de perro que contengan la palabra ingresada como query parameter
  - Si no existe ninguna raza de perro muestra un mensaje adecuado
-  __GET /dogs/{idRaza}__:
  - Obtiene el detalle de una raza de perro en particular
  - Trae solo los datos pedidos en la ruta de detalle de raza de perro
  - Incluye los temperamentos asociados
- __GET /temperament__:
  - Obtiene todos los temperamentos posibles
  - En una primera instancia se obtiene desde la API externa y los guardamos en la base de datos y luego ya los utilizamos desde allí
- __POST /dog__:
  - Recibe los datos recolectados desde el formulario controlado de la ruta de creación de raza de perro por body
  - Crea una raza de perro en la base de datos

#### Testing

- Ruta del backend
- Modelo de la base de datos
