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

                <article className='article-blog'>
                    <h2>Consejos para una Rutina de Ejercicio Efectiva</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel urna vel turpis maximus interdum.</p>
                    <a href="#">Leer más</a>
                </article>

                <article className='article-blog'>
                    <h2>Recetas Saludables para Potenciar tus Entrenamientos</h2>
                    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <a href="#">Leer más</a>
                </article>

        

            </div>

            <footer className='footer-blog'>
                <p>&copy; 2023 Blog de Fitness</p>
            </footer>


        </div>


    )
}
