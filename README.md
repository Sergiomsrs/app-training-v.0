# App Training

Proyecto en actual desarrollo que permite la creación y gestión de entrenamientos y usuarios.
Todo el frontend está construido en React y Javascript integrando el desarrollo de dos API Rest que gestionan de forma independiente los usuarios y los entrenamientos.
Ambas están diseñadas con Spring Boot, implementando MySQL, Spring Security y JWT para la autenticación de usuarios, y Spring Boot con MongoDB para la gestión de entrenamientos.

# Aplicación Completa de Gestión de Entrenamientos
Desde la aplicación, se puede llevar a cabo una gestión completa tanto de los entrenamientos como de los usuarios, abarcando la creación, edición y persistencia de los mismos en la base de datos.

![Mi Imagen](/PhotoDemoApp/general2.webp)

# Inicio de sesión con autenticación mediante JWT
El acceso a la aplicación está controlado mediante una API Rest creada con Spring Security y JWT. Sus controladores permiten el acceso a los usuarios y restringen sus posibilidades en función de su rol dentro de la aplicación.

![Mi Imagen](/PhotoDemoApp/useresylogin.webp)

# Gestión de Usuarios
Desde el panel de administración, es posible gestionar los usuarios de la aplicación.

![Mi Imagen](/PhotoDemoApp/formulariousuariosportaltil.webp)

# Proceso de elaboración de entrenamientos
La creación de entrenamientos se divide en tres etapas: la creación a través de un formulario, una revisión general con el envío a la base de datos, y la visualización general de los entrenamientos registrados.

![Mi Imagen](/PhotoDemoApp/crearprocesofondooscuro.webp)

# Formulario de creación de entrenamientos
Formulario específicamente diseñado para esta aplicación. Construido en React, permite añadir tantos bloques y ejercicios como se deseen, ofreciendo una flexibilidad óptima en la creación de entrenamientos personalizados. Este diseño facilita el análisis posterior de los datos recopilados, proporcionando una visión detallada de cada componente del entrenamiento.

![Mi Imagen](/PhotoDemoApp/secundaria.webp)

# Sección Buscador
La aplicación cuenta con una sección que permite buscar entrenamientos mediante palabras clave.

![Mi Imagen](/PhotoDemoApp/buscador.webp)

# Análisis de datos
Sección en desarrollo para analizar los datos de los entrenamientos registrados. Todos los entrenamientos son enviados a una API Rest, que los almacena en una base de datos MongoDB. Esto nos permite realizar un análisis estadístico de los registros, obteniendo insights valiosos para mejorar la efectividad y personalización de los entrenamientos ofrecidos.

![Mi Imagen](/PhotoDemoApp/estadisticas.webp)

# Futuras implementaciones
La aplicación está en constante desarrollo y se irán añadiendo nuevas funcionalidades para mejorar la experiencia del usuario y la eficacia del sistema. Algunas de las próximas implementaciones incluyen:

![Asignar entrenamientos a su fecha de ejecución.](https://img.shields.io/badge/Asignar%20entrenamientos%20a%20su%20fecha%20de%20ejecución-2d259c)

![Asignar entrenamientos a plan de entrenamiento.](https://img.shields.io/badge/Asignar%20entrenamientos%20a%20plan%20de%20entrenamiento-2d259c)

![Asignar plan de entrenamiento a usuario.](https://img.shields.io/badge/Asignar%20plan%20de%20entrenamiento%20a%20usuario.-2d259c)

![Implementar vista de entrenamientos asignados a usuario.](https://img.shields.io/badge/Implementar%20vista%20de%20entrenamientos%20asignados%20a%20usuario.-2d259c)

![Implementar vista de entrenamientos a ejecutar en rango de fechas.](https://img.shields.io/badge/Implementar%20vista%20de%20entrenamientos%20a%20ejecutar%20en%20rango%20de%20fechas.-2d259c)

![Implementar sección estadísticas por usuario.](https://img.shields.io/badge/Implementar%20sección%20estadísticas%20por%20usuario.-2d259c)



