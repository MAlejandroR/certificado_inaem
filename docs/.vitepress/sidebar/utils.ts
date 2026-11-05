export function icon(clase: string, texto: string): string {
    return `<span class="sidebar-title">
                <i class="${clase}"></i>
                <span>${texto}</span>
            </span>`
}