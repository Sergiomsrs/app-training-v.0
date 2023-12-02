import './blog.css'

export const Blog = () => {
    return (


        <div className='body-blog'>
            <header className='header-blog'>
                <h1>Blog de Fitness</h1>
            </header>

            <nav className='nav-blog'>
                <a href="/app">Inicio</a>
                <a href="#">Artículos</a>
                <a href="#">Contacto</a>
            </nav>

            <div className="container-blog">

                <div className="container-blog">
                    <article className='article-blog'>
                        <h2>Consejos para una Rutina de Ejercicio Efectiva</h2>
                        <p className='p-blog'>
                            Mantener una rutina de ejercicio es crucial para la salud física y mental. Aquí encontrarás consejos prácticos para mejorar tu rendimiento y alcanzar tus objetivos fitness. Incluye una combinación equilibrada de ejercicios cardiovasculares, entrenamiento de fuerza y flexibilidad. Además, es fundamental escuchar a tu cuerpo y ajustar tu rutina según sea necesario. Recuerda la importancia del descanso y la recuperación para evitar lesiones y mejorar tu progreso. Con estos consejos, estarás en el camino hacia una rutina de ejercicio efectiva y sostenible.
                        </p>
                        <a href="#">Leer más</a>
                    </article>

                    <article className='article-blog'>
                        <h2>Recetas Saludables para Potenciar tus Entrenamientos</h2>
                        <p className='p-blog'>
                            Descubre deliciosas recetas diseñadas para proporcionar la energía necesaria antes y después de tus sesiones de entrenamiento. Estas opciones saludables no solo son sabrosas, sino que también respaldarán tus metas de acondicionamiento físico. Incluye platos ricos en proteínas, carbohidratos complejos y grasas saludables. Desde batidos energéticos hasta comidas balanceadas, estas recetas te ayudarán a obtener los nutrientes necesarios para potenciar tus entrenamientos y acelerar la recuperación.
                        </p>
                        <a href="#">Leer más</a>
                    </article>

                    <article className='article-blog'>
                        <h2>Beneficios del Yoga: Más Allá de la Flexibilidad</h2>
                        <p className='p-blog'>
                            Exploraremos los diversos beneficios del yoga que van más allá de la flexibilidad física. Descubre cómo esta antigua práctica puede mejorar tu bienestar mental, reducir el estrés y promover la paz interior. El yoga no solo se trata de posturas; también enfatiza la conexión mente-cuerpo a través de la respiración consciente y la atención plena. Aprende cómo integrar el yoga en tu vida diaria para experimentar una mejora holística en tu salud física y mental.
                        </p>
                        <a href="#">Leer más</a>
                    </article>

                    {/* Puedes agregar más artículos según sea necesario */}
                </div>




            </div>


        </div>


    )
}
