import type { DefaultTheme } from 'vitepress'
import { icon } from './utils.ts'

export const phpSidebar: DefaultTheme.SidebarItem[] = [
    {
        text: icon('fa-brands fa-php', 'PHP'),
        link: '/php/',
        collapsed: false,
        items: [
            {
                text: icon('fa-solid fa-book', 'Introducción'),
                link: '/php/introduccion/'
            },
            {
                text: icon('fa-solid fa-play', 'Empezando'),
                link: '/php/empezando/'
            },
            {
                text: icon('fa-solid fa-keyboard', 'Escribiendo'),
                link: '/php/escribiendo/'
            },
            {
                text: icon('fa-solid fa-file-lines', 'Declaraciones'),
                link: '/php/declaraciones/'
            },
            {
                text: icon('fa-solid fa-database', 'Tipos de datos'),
                link: '/php/tipos/',
                collapsed: true,
                items: [
                    {
                        text: icon('fa-solid fa-hashtag', 'Enteros'),
                        link: '/php/tipos-int/',
                    },
                    {
                        text: icon('fa-solid fa-toggle-on', 'Null y booleanos'),
                        link: '/php/tipos-null-bool/',
                    },
                    {
                        text: icon('fa-solid fa-font', 'Cadenas de texto'),
                        link: '/php/tipos-string/',
                    },
                ],
            },            {
                text: icon('fa-solid fa-code-branch', 'Estructuras de control'),
                link: '/php/estructuras-control/'
            },
            {
                text: icon('fa-solid fa-calculator', 'Expresiones'),
                link: '/php/expresiones/'
            },
            {
                text: icon('fa-solid fa-gears', 'Funciones'),
                link: '/php/funciones/'
            },
            {
                text: icon('fa-solid fa-puzzle-piece', 'Otros aspectos'),
                link: '/php/otros-aspectos/'
            },
            {
                text: icon('fa-solid fa-table-cells', 'Arrays'),
                link: '/php/arrays/',
                collapsed: true
            },
            {
                text: icon('fa-solid fa-rectangle-list', 'Formularios'),
                link: '/php/formularios/',
                collapsed: true
            },
            {
                text: icon('fa-solid fa-cube', 'Objetos'),
                link: '/php/objetos/',
                collapsed: true
            },
            {
                text: icon('fa-solid fa-floppy-disk', 'Persistencia'),
                link: '/php/persistencia/',
                collapsed: true
            },
            {
                text: icon('fa-solid fa-server', 'Bases de datos en PHP'),
                link: '/php/bases-de-datos/',
                collapsed: true
            },
            {
                text: icon('fa-solid fa-code', 'Ejercicios'),
                link: '/php/ejercicios/',
                collapsed: true,
                items:[
                    {text: icon('fa-solid fa-code', 'Sintaxis'),
                        link: '/php/ejercicios/',

                    }
                ]
            }
        ]
    }
]