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
                <h2>Iniciales: {initials(auth.fullName)}</h2>
                <p>Nombre: {auth.fullName}</p>
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