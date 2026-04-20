import { useNavigate } from "react-router-dom"

const NavBarHome = () => {
  const navigate = useNavigate()

  return (
    <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1rem 2rem", background: "#fff" }}>
      <div>
        <img src="src\assets\img\isotipo.png" alt="Logo SerenityLab" style={{ maxHeight: "60px", cursor: "pointer" }} onClick={() => navigate("/")} />
      </div>
      <nav style={{ display: "flex", gap: "2rem" }}>
        <a href="/psicologos" style={{ textDecoration: "none", color: "#333", fontWeight: 500, fontSize: "1.125rem" }}>Psicólogos</a>
      </nav>
      <div>
        <img src="src\assets\iconos\acceso.png" alt="Iniciar sesión" style={{ maxHeight: "40px", cursor: "pointer" }} onClick={() => navigate("/login")} />
      </div>
    </header>
  )
}

export default NavBarHome