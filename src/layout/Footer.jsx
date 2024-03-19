import { Link } from "react-router-dom"

export const Footer = () => {
  return (
    
    <>
    <footer className='footer-principal'>
        <Link to="/app">Volver</Link>
        <Link to="/buscador">Buscador</Link>
        <Link to="/data">Data</Link>
      </footer>
    </>
  )
}
