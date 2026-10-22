import { defineConfig } from 'vitepress'


export default defineConfig({
  base: '/certificado/',
  lang: 'es-ES',
  title: 'Desarrollo Web | INAEM',
  description: 'Curso de desarrollo web con formación subvencionada',

  cleanUrls: true,

  themeConfig: {
    siteTitle: '💻 Desarrollo Web',

    nav: [
      { text: 'Inicio', link: '/' },
      { text: 'El curso', link: '/#el-curso' },
      { text: 'Tecnologías', link: '/#tecnologias' },
      { text: 'Salidas profesionales', link: '/#salidas-profesionales' },
      { text: 'Información', link: '/#informacion-e-inscripcion' }
    ],

    socialLinks: [],

    footer: {
      message: 'Formación subvencionada por el INAEM',
      copyright: 'Curso de Desarrollo Web'
    }
  }
})
