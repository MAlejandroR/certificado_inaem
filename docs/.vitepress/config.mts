import {defineConfig} from 'vitepress'

import {withMermaid} from 'vitepress-plugin-mermaid'
import {dawsContainers} from './markdows/index'
import {hugoCompatPlugin} from './hugo-compat'
import {full as emoji} from 'markdown-it-emoji'
import { sidebarProgramacion } from './sidebar/programacion'
import { phpSidebar } from './nav/05_php';
import { sidebarScratch } from './sidebar/scratch'
import {phpRewrites} from './rewrites/08_php';
import { scratchblocksPlugin } from './markdows/scratchblocks'
import {icon} from "./sidebar/utils";
import path from 'node:path'
import footnote from 'markdown-it-footnote'
import {fetchVisitCount, goatCounter} from './site'

const dawsVisitCount = await fetchVisitCount()



export default withMermaid(
    defineConfig({


        // base: '/certificado/',
        lang: 'es-ES',
        title: 'Desarrollo Web | INAEM',
        description: 'Curso de desarrollo web ',

        cleanUrls: true,
        mermaid: {
            theme: 'default'
        },
        vite: {
            define: {
                __DAWS_VISIT_COUNT__: JSON.stringify(dawsVisitCount),
            },
            resolve: {
                preserveSymlinks: true,
            },
            server: {
                fs: {
                    // Permite a Vite servir archivos desde fuera de la raíz del proyecto
                    allow: [
                        // Mantiene el acceso a la raíz de tu proyecto VitePress
                        path.resolve(__dirname, '..'),

                        // Añade la ruta absoluta hacia donde apuntan tus enlaces simbólicos
                        path.resolve(__dirname, '../../../apuntes/php/docs/php'),
                    ]
                }
        },
            optimizeDeps: {
                include: [
                    'fastdom',
                    'fastdom/extensions/fastdom-promised.js'
                ]
            }
        },
        markdown: {
            lineNumbers: true,
            config(md) {
                dawsContainers(md);
                md.use(hugoCompatPlugin);
                md.use(emoji)
                md.use(scratchblocksPlugin)
                md.use(footnote)

            },
            toc: {
                level: [1, 2, 3, 4],
            },
            math: true,
        },
        rewrites: {
            '04_Scratch/index.md': 'scratch/index.md',
            '04_Scratch/02_Programacion/index.md': 'scratch/primeros-pasos/index.md',
            '04_Scratch/03_Instrucciones/index.md': 'scratch/instrucciones/index.md',
            '04_Scratch/03_Programando_Scratch/index.md': 'scratch/entorno-scratch/index.md',
            '04_Scratch/03_Secuenciales/index.md': 'scratch/estructuras-secuenciales/index.md',
            '04_Scratch/04_Selectivas/index.md': 'scratch/estructuras-selectivas/index.md',
            '04_Scratch/05_Repetitivas/index.md': 'scratch/estructuras-repetitivas/index.md',
            '04_Scratch/06_bloques/index.md': 'scratch/clones-subprogramas/index.md',
            '04_Scratch/Ejemplos/index.md': 'scratch/ejemplos/index.md',



            // Ejercicios
            '04_Scratch/Ejemplos/ejercicios/(.*).md':
                'scratch/ejemplos/ejercicios/(.*).md',

            // PHP,
            ...phpRewrites,

// WEB
            '02_fundamentos_web/index.md': 'fundamentos-web/index.md',
            '02_fundamentos_web/01_conceptos_generales/(.*)':
                'fundamentos-web/conceptos/(.*)',

            '02_fundamentos_web/02_redes/(.*)':
                'fundamentos-web/redes/(.*)',

            '02_fundamentos_web/03_osi_tcpip/(.*)':
                'fundamentos-web/modelos-de-red/(.*)',

            '02_fundamentos_web/04_internet/(.*)':
                'fundamentos-web/internet/(.*)',

            '02_fundamentos_web/05_www/(.*)':
                'fundamentos-web/web/(.*)',

            '02_fundamentos_web/06_http_https/(.*)':
                'fundamentos-web/http/(.*)',

            '02_fundamentos_web/07_servidores_web/(.*)':
                'fundamentos-web/servidores/(.*)',
        },
        themeConfig: {
            //Menú de la derecha
            // outline: {
            //     label: "En esta página",
            //     level: [2, 3]
            // },
            outline: false,
            siteTitle: '💻 Desarrollo Web',
            logo: '/images/logo-web-developer.png',

            nav: [
                {
                    text: '🏠 Inicio',
                    link: '/'
                },
                {
                    text: '📚 Contenidos del módulo servidor',
                    link: '/01_contenidos/'
                }
            ],

            socialLinks: [],

            footer: {
                message: 'Formación Para el desarrollo con tecnologías Web',
                copyright: 'Curso de Desarrollo Web'
            },


            sidebar: {
                '/01_Presentacion/': [
                   {

                        text: 'Presentación del curso',
                        items: [
                            {
                                text: 'Introducción',
                                link: '/01_Presentacion/'
                            },
                            {
                                text: 'Módulos',
                                collapsed: true,
                                link: '/01_Presentacion/02_Modulos/',
                                items: [
                                    {
                                        text: 'Visión general',
                                        link: '/01_Presentacion/02_Modulos/01_Vision_general/'
                                    },
                                    {
                                        text: 'Cliente',
                                        collapsed: true,
                                        items: [
                                            {
                                                text: 'Juan Daniel',
                                                link: '/01_Presentacion/02_Modulos/cliente/juanda/'
                                            },
                                            {
                                                text: 'Óscar',
                                                link: '/01_Presentacion/02_Modulos/cliente/oscar/'
                                            }
                                        ]
                                    },
                                    {
                                        text: 'Servicios',
                                        collapsed: true,
                                        items: [
                                            {
                                                text: 'Nacho',
                                                link: '/01_Presentacion/02_Modulos/servicios/nacho/'
                                            },
                                            {
                                                text: 'Óscar',
                                                link: '/01_Presentacion/02_Modulos/servicios/oscar/'
                                            }
                                        ]
                                    },
                                    {
                                        text: 'Servidor',
                                        collapsed: true,
                                        items: [
                                            {
                                                text: 'Manuel',
                                                link: '/01_Presentacion/02_Modulos/servidor/manuel/'
                                            },
                                            {
                                                text: 'Silvia',
                                                link: '/01_Presentacion/02_Modulos/servidor/silvia/'
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ],

                    '/fundamentos-web/': [
                    {
                        text: icon('fa-solid fa-globe', 'Fundamentos Web'),
                        link: '/fundamentos-web/',
                        collapsed: false,
                        items: [
                            {
                                text: icon('fa-solid fa-house', 'Introducción'),
                                link: '/fundamentos-web/',
                            },
                            {
                                text: icon('fa-solid fa-lightbulb', 'Conceptos generales'),
                                link: '/fundamentos-web/conceptos/',
                            },
                            {
                                text: icon('fa-solid fa-network-wired', 'Redes'),
                                link: '/fundamentos-web/redes/',
                            },
                            {
                                text: icon('fa-solid fa-layer-group', 'OSI y TCP/IP'),
                                link: '/fundamentos-web/modelos-de-red/',
                            },
                            {
                                text: icon('fa-solid fa-globe', 'Internet'),
                                link: '/fundamentos-web/internet/',
                            },
                            {
                                text: icon('fa-solid fa-earth-europe', 'World Wide Web'),
                                link: '/fundamentos-web/web/',
                            },
                            {
                                text: icon('fa-solid fa-arrow-right-arrow-left', 'HTTP y HTTPS'),
                                link: '/fundamentos-web/http/',
                            },
                            {
                                text: icon('fa-solid fa-server', 'Servidores web'),
                                link: '/fundamentos-web/servidores/',
                            },
                        ],
                    },
                ],


                '/03_Programacion/': sidebarProgramacion,
                '/scratch/':sidebarScratch,

                '/php/':phpSidebar,

                '/06_Laravel/': [
                    {
                        text: 'Laravel',
                        items: [
                            {text: 'Introducción', link: '/06_Laravel/'}
                        ]
                    }
                ]
            }

        }
    }),
)