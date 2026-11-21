
//
// Cargamos todos los ejercicios de los diferentes temas
//
const archivos = import.meta.glob(
    [
        '../../../../**/ejercicios/**/ejercicio*/index.md',
        '../../../../**/16_ejercicios/**/ejercicio*/index.md'
    ],
    { eager: true }
);

// Mapa de ejercicios, indexado por su ID
const ejercicios = new Map();

for (const [ruta, modulo] of Object.entries(archivos)) {

    const datos = modulo.__pageData;
    if (!datos) continue;

    const {
        id,
        titulo,
        tema,
        subtema,
        orden
    } = datos.frontmatter;

    if (!id)
        throw new Error(`El archivo ${ruta} no tiene un id definido en el frontmatter`);

    if (ejercicios.has(id))
        throw new Error(`El archivo ${ruta} tiene un id duplicado: ${id}`);

    ejercicios.set(id, {
        id,
        titulo,
        tema,
        subtema: subtema ?? null,
        orden,
        ruta,
        icon: datos.frontmatter.icon || 'fa-solid fa-code',
        url: datos.relativePath,
        componente: modulo.default,
        solucion: datos.frontmatter.solucion ?? null,
        mostrarCodigo: datos.frontmatter.mostrar_codigo ?? false
    });
}

console.log('Número de ejercicios:', ejercicios.size);

console.table(
    [...ejercicios.values()].map(e => ({
        id: e.id,
        tema: e.tema,
        subtema: e.subtema,
        orden: e.orden
    }))
);

// Obtener un ejercicio concreto por su ID
export function obtenerEjercicio(id) {
    return ejercicios.get(id);
}

// Obtener ejercicios filtrados por tema y/o subtema
export function obtenerEjercicios(tema = null, subtema = null) {
    return [...ejercicios.values()]
        .filter(e =>
            (!tema || e.tema === tema) &&
            (!subtema || e.subtema === subtema)
        )
        .sort((a, b) => Number(a.orden) - Number(b.orden));
}

// Obtener los temas disponibles
export function obtenerTemas() {
    return [...new Set(
        [...ejercicios.values()]
            .map(e => e.tema)
            .filter(Boolean)
    )].sort();
}

// Obtener los subtemas disponibles.
// Si se indica un tema, solo devuelve sus subtemas.
export function obtenerSubtemas(tema = null) {
    return [...new Set(
        obtenerEjercicios(tema)
            .map(e => e.subtema)
            .filter(Boolean)
    )].sort();
}
