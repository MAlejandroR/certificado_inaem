import TemaComun from '../../../../arquitectura/comun/theme/index'

import Layout from './Layout.vue'
import Markmap from './components/Markmap.vue'
import ScratchBlocks from './components/ScratchBlocks.vue'
import VisitorCount from './components/VisitorCount.vue'
import IndiceCurso from './components/IndiceCurso.vue'
import Cmd from '../../../../arquitectura/comun/theme/components/Cmd.vue'

import { crearCatalogo } from '../../../../arquitectura/comun/theme/components/ejercicios/catalogo.js'


import 'devicon/devicon.min.css'

// Archivos Markdown de ejercicios disponibles en INAEM
const archivos = import.meta.glob(
    [
        '../../04_php/16_ejercicios/**/index.md',
        '../../04_php/16_ejercicios/index.md'
    ],
    { eager: true }
)

const catalogo = crearCatalogo(archivos)


export default {
  ...TemaComun,

  Layout,

  enhanceApp(ctx) {
    // Registrar todos los componentes compartidos
    TemaComun.enhanceApp?.(ctx)

    const { app } = ctx

    // Personalizaciones de INAEM
    app.component('Markmap', Markmap)
    app.component('ScratchBlocks', ScratchBlocks)
    app.component('VisitorCount', VisitorCount)
    app.component('IndiceCurso', IndiceCurso)

    // INAEM utiliza la variante de comandos
    app.component('Cmd', Cmd)

    // Catálogo de ejercicios
      app.provide('catalogoEjercicios', catalogo)

    // Rutas de soluciones específicas de INAEM
      app.provide('transformarRutaSolucion', (ruta: string) =>
          ruta.startsWith('/php/')
              ? '/04_php/' + ruta.slice('/php/'.length)
              : ruta
      )
  }
}
