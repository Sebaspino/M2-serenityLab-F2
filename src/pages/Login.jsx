import { useState, useEffect } from "react"
import { redirect } from "../helpers/alerts"
import { endpoints } from "../services/api"
import { saveLocalStorage } from "../helpers/local-storage"

const Login = () => {
  const [getEmail, setEmail] = useState("")
  const [getContrasena, setContrasena] = useState("")
  const [getUsers, setUsers] = useState([])

  function fetchUsers() {
    fetch(endpoints.estudiantes)
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.log(error))
  }

  useEffect(() => {
    fetchUsers()
  }, [])


  const findUser = () => {
    let user = getUsers.find((item) => getEmail === item.email && getContrasena === item.contrasena)
    return user
  }

  function signIn() {
    console.log(findUser())
    if (findUser()) {
      saveLocalStorage("estudiantes", findUser())
      redirect(findUser().nombre + " " + findUser().apellido + " Bienvenido al sistema...", "/dashboard", "success")
    } else {
      redirect("El correo o la contraseña son incorrectos...", "/", "error")
    }
  }

  return (
    <div style={{ minHeight: "100vh", background: "#0f172a", display: "flex", alignItems: "center", justifyContent: "center", padding: "2rem" }}>
      <div style={{ width: "100%", maxWidth: "400px" }}>

        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <h1 style={{ color: "#f1f5f9", fontSize: "22px", fontWeight: 500, margin: "0 0 6px" }}>Serenity Lab</h1>
          <p style={{ color: "#94a3b8", fontSize: "14px", margin: 0 }}>Inicia sesión en tu cuenta</p>
        </div>

        <div style={{ background: "#1e293b", border: "0.5px solid #334155", borderRadius: "16px", padding: "2rem" }}>

          <div style={{ marginBottom: "1.25rem" }}>
            <label style={{ display: "block", fontSize: "13px", fontWeight: 500, color: "#cbd5e1", marginBottom: "6px" }}>
              Correo electrónico
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="correo@ejemplo.com"
              style={{ width: "100%", boxSizing: "border-box", background: "#0f172a", border: "0.5px solid #334155", borderRadius: "8px", padding: "10px 12px", color: "#f1f5f9", fontSize: "14px", outline: "none" }}
            />
          </div>

          <div style={{ marginBottom: "1.5rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "6px" }}>
              <label style={{ fontSize: "13px", fontWeight: 500, color: "#cbd5e1" }}>Contraseña</label>
              <a href="#" style={{ fontSize: "12px", color: "#818cf8", textDecoration: "none" }}>¿Olvidaste tu contraseña?</a>
            </div>
            <input
              onChange={(e) => setContrasena(e.target.value)}
              type="password"
              placeholder="••••••••"
              style={{ width: "100%", boxSizing: "border-box", background: "#0f172a", border: "0.5px solid #334155", borderRadius: "8px", padding: "10px 12px", color: "#f1f5f9", fontSize: "14px", outline: "none" }}
            />
          </div>

          <button
            onClick={signIn}
            type="button"
            style={{ width: "100%", background: "#6366f1", color: "white", border: "none", borderRadius: "8px", padding: "11px", fontSize: "14px", fontWeight: 500, cursor: "pointer" }}
          >
            Iniciar sesión
          </button>

          <p style={{ textAlign: "center", fontSize: "13px", color: "#64748b", margin: "1.25rem 0 0" }}>
            ¿No tienes cuenta? <a href="#" style={{ color: "#818cf8", textDecoration: "none", fontWeight: 500 }}>Regístrate</a>
          </p>

        </div>
      </div>
    </div>
  )
}

export default Login
