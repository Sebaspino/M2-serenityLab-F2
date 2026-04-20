import Swal from 'sweetalert2'

export function redirect(mensaje, ruta, tipo) {
    Swal.fire({
        title: mensaje,
        icon: tipo,
        timer: 2000,
        showConfirmButton: false
    }).then(() => {
        window.location.href = ruta
    })
}