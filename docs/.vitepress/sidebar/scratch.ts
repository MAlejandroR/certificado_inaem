import type { DefaultTheme } from 'vitepress'
import { icon } from './utils'

export const sidebarScratch: DefaultTheme.SidebarItem[] =  [

    {
        text: icon('fa-solid fa-puzzle-piece', 'SCRATCH'),
        link: '/scratch/',
        collapsed: false,
        items: [
            {

                text: icon ("fa-solid fa-laptop-code", 'Programación'),
                link: '/scratch/primeros-pasos/'
            },
            {
                text:icon ("fa-solid fa-desktop", "Entorno Scratch"),
                link: '/scratch/entorno-scratch/'
            },
            {
                text: icon("fa-solid fa-list-check", "Instrucciones"),
                link: '/scratch/instrucciones/'
            },
            {
                text: icon("fa-solid fa-arrow-right-arrow-left", "Estructuras secuenciales"),
                link: '/scratch/estructuras-secuenciales/'
            },
            {
                text: icon("fa-solid fa-code-branch", "Estructuras selectivas"),
                link: '/scratch/estructuras-selectivas/'
            },
            {
                text: icon("fa-solid fa-rotate", "Estructuras repetitivas"),
                link: '/scratch/estructuras-repetitivas/'
            },
            {
                text: icon("fa-solid fa-flask", "Ejemplos"),
                link: '/scratch/ejemplos/'
            },
            {
                text: icon("fa-solid fa-puzzle-piece", "Clones y subprogramas"),
                link: '/scratch/clones-subprogramas/'
            },
        ]
    }
]