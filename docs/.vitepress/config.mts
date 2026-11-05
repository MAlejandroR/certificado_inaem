import {defineConfig} from 'vitepress'

import {withMermaid} from 'vitepress-plugin-mermaid'
import {dawsContainers} from './markdows/containers'
import {hugoCompatPlugin} from './hugo-compat'
import {full as emoji} from 'markdown-it-emoji'
import { sidebarProgramacion } from './sidebar/programacion'
import { sidebarScratch } from './sidebar/scratch'
import { scratchblocksPlugin } from './markdows/scratchblocks'

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

            },
            toc: {
                level: [1, 2, 3, 4],
            },

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
        },
        themeConfig: {
            outline: {
                label: "En esta página",
                level: [2, 3]
            },
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
                        text: '← Volver a contenidos',
                        link: '/01_contenidos/'
                    },
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

                '/02_Web/': [
                    {
                        text: '← Volver a contenidos',
                        link: '/01_contenidos/'

                    },
                    {
                        text: `<span class="sidebar-title">
                              <i class="fa-solid fa-globe"></i>
                                <span>Web</span>
                                   </span>`,
                        link: '/02_Web/',
                        collapsed: false,
                        items: [
                            {
                                text: `<span class="sidebar-title">
               <i class="fa-solid fa-network-wired"></i>
               <span>La Red</span>
           </span>`,
                                link: '/02_Web/02_redes/',
                                collapsed: true,
                                items:[
                                    {text: 'OSI',link: '/02_Web/02_redes/01_osi',
                                    }
                                ]
                            },
                            {
                                text: `<span class="sidebar-title">
           <i class="fa-solid fa-laptop-code"></i>
           <span>Desarrollo Web</span>
       </span>`,
                                link: '/02_Web/01_www/'
                            },
                            {
                                text: `<span class="sidebar-title">
               <i class="fa-brands fa-linux"></i>
               <span>Linux</span>
           </span>`,
                                link: '/02_Web/03_linux/'
                            },
                            {
                                text: `<span class="sidebar-title">
               <i class="fa-solid fa-screwdriver-wrench"></i>
               <span>Instalaciones</span>
           </span>`,
                                link: '/02_Web/04_instalaciones/'
                            },
                            {
                                text: `<span class="sidebar-title">
               <i class="fa-solid fa-server"></i>
               <span>Apache config</span>
           </span>`,
                                link: '/02_Web/04_instalaciones/apache/'
                            },
                        ]
                    }
                ],

                '/03_Programacion/': sidebarProgramacion,
                '/scratch/':sidebarScratch,

                '/05_PHP/': [
                    {
                        text: 'PHP',
                        items: [
                            {text: 'Introducción', link: '/05_PHP/'}
                        ]
                    }
                ],

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