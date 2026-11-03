import type { DefaultTheme } from 'vitepress'
import { icono } from './iconos'

export const sidebarProgramacion: DefaultTheme.SidebarItem[] = [
    {
        text: icono('fa-solid fa-arrow-left', 'Volver a contenidos'),
        link: '/01_contenidos/'
    },
    {
        text: icono('fa-solid fa-code', 'Programación'),
        link: '/03_Programacion/',
        collapsed: false,
        items: [
            {
                text: icono('fa-solid fa-lightbulb', 'Conceptos básicos'),
                link: '/03_Programacion/01_conceptos/'
            },

        ]
    }
]