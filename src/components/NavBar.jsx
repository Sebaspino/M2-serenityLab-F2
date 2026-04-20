import { getLocalStorage, removeLocalStorage } from "../helpers/local-storage"
import { initials } from "../helpers/generators"
import { redirect } from "../helpers/alerts"

let auth = getLocalStorage("estudiantes")

const NavBar = () => {
    function logout() {
        removeLocalStorage("estudiantes")
        redirect("Cerrando sesion...", "/", "info")
    }
    return (
        <section>
            <div>
                <h2>Iniciales: {auth.nombre[0]}{auth.apellido[0]}</h2>
                <p>Nombre: {auth.nombre} {auth.apellido}</p>
                <p>Rol: {auth.role}</p>
            </div>
            <nav>
                <a href="">Login</a>
                <button onClick={logout}>Cerrar Sesión</button>
            </nav>
        </section>
    )
}
export default NavBar