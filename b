const archivos = import.meta.glob(
    '../../../../**/ejercicios/**/solucion.php',
    {
        query: '?raw',
        import: 'default',
        eager: true
    }
)

export function obtenerCodigoSolucion(rutaEjercicio, nombreSolucion) {
    if (!nombreSolucion) return null

    const carpeta = rutaEjercicio.substring(
        0,
        rutaEjercicio.lastIndexOf('/') + 1
    )

    const rutaSolucion = carpeta + nombreSolucion

    return archivos[rutaSolucion] ?? null
}