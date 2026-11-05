import type { DefaultTheme } from 'vitepress'
import { icon } from './utils'

export const sidebarProgramacion: DefaultTheme.SidebarItem[] = [
    {
        text: icon('fa-solid fa-arrow-left', 'Volver a contenidos'),
        link: '/01_contenidos/'
    },
    {
        text: icon('fa-solid fa-code', 'Programación'),
        link: '/03_Programacion/',
        collapsed: false,
        items: [
            {
                text: icon('fa-solid fa-lightbulb', 'Conceptos básicos'),
                link: '/03_Programacion/01_conceptos/'
            },

        ]
    }
]