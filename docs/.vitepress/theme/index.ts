import DefaultTheme from 'vitepress/theme'
import Markmap from './components/Markmap.vue'
import 'devicon/devicon.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import './custom.css'
import './css/logo.css'
import './css/containers.css'
import './css/title.css'
import './css/sumary.css'
import './css/table.css'
import './css/sidebar.css'

import IndiceCurso from './components/IndiceCurso.vue';
import DropDown from  './components/DropDown.vue'
import Color from './components/Color.vue'
import CardPane from './components/CardPane.vue'
import Card from './components/Card.vue'
import Cmd from './components/Cmd.vue'
import CmdPane from './components/CmdPane.vue'
import CollapsibleHeading from "./components/CollapsibleHeading.vue";
import ScratchBlocks from './components/ScratchBlocks.vue'
import Ejercicio  from "./components/ejercicios/Ejercicio.vue";
import TituloEjercicio  from "./components/ejercicios/TituloEjercicio.vue";
export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('Markmap', Markmap)
    app.component('IndiceCurso', IndiceCurso)
    app.component('DropDown', DropDown)
    app.component('Cmd', Cmd)
    app.component('CmdPane', CmdPane)
    app.component('Color', Color)
    app.component('CardPane', CardPane)
    app.component('Card', Card)
    app.component('CollapsibleHeading',CollapsibleHeading)
    app.component('ScratchBlocks', ScratchBlocks)
    app.component('Ejercicio', Ejercicio)
    app.component('TituloEjercicio', TituloEjercicio)
  }
}
