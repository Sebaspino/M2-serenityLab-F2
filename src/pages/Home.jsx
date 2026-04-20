import Header from "../components/Header"
import Footer from "../components/Footer"
import Card from "../components/Card"
import banner from "../assets/video/banner.mp4"
import agenda from "../assets/img/agenda.png"

const Home = () => {
    return (
        <div style={{ fontFamily: "'Garamond', 'Times New Roman', serif", margin: 0 }}>
            <Header />

            <section style={{ position: "relative", height: "100vh", overflow: "hidden" }}>
                <video autoPlay loop muted style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: -1 }}>
                    <source src={banner} type="video/mp4" />
                </video>
            </section>

            <section style={{ padding: "3rem 2rem", textAlign: "center" }}>
                <h1 style={{ color: "rgb(238,44,130)", fontSize: "1.75rem", marginBottom: "1.5rem" }}>SerenityLab</h1>
                <p style={{ fontSize: "1.125rem", lineHeight: 1.7, marginBottom: "1rem", color: "#333" }}>
                    En SerenityLab creemos en el poder de la escucha activa y en la importancia de promover
                    acciones que favorezcan el bienestar integral de nuestros estudiantes.
                </p>
                <p style={{ fontSize: "1.125rem", lineHeight: 1.7, color: "#333" }}>
                    Este sitio web ha sido creado especialmente para promover y fortalecer el bienestar integral
                    de los estudiantes del CESDE. Ofrece un espacio accesible y seguro donde podrás encontrar
                    recursos, herramientas y apoyo profesional para tu desarrollo emocional, mental y académico.
                </p>
            </section>

            {/* ✅ Aquí se reemplazó el div hardcodeado por el componente Card */}
            <section style={{ padding: "3rem 2rem", background: "rgba(238,44,130,0.9)", textAlign: "center" }}>
                <h2 style={{ color: "#333", fontSize: "1.75rem", marginBottom: "1.5rem" }}>Conoce nuestros servicios</h2>
                <div style={{ display: "flex", justifyContent: "center", gap: "24px", flexWrap: "wrap" }}>
                    <Card
                        imagen={agenda}
                        titulo="Agendamiento de citas"
                        descripcion="Accede con tu cuenta para consultar la disponibilidad de nuestro equipo de profesionales."
                    />
                </div>
            </section>

            <Footer />
        </div>
    )
}

export default Home