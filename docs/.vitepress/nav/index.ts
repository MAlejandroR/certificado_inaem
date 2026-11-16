import type { DefaultTheme } from 'vitepress'
import { presentacion } from './01_contenidos';
import { arquitectura } from './100_arquitectura';
import {arquitecturaWeb} from './02_web';
import { fundamentosWeb } from './01_presentacion'
import { docker } from './03_programacion'
import { phpSidebar } from './05_php'
import {entornosHerramientas} from "./04_scratch";


export const sidebar: DefaultTheme.Sidebar = {
    '/presentacion/': presentacion,
    '/fundamentos-web/': fundamentosWeb,
    '/arquitectura-web/': arquitecturaWeb,
    '/docker/': docker,
    '/php/': phpSidebar,

    // Entornos y herramientas
    '/entornos-herramientas/': entornosHerramientas,
    '/entornos/linux/': entornosHerramientas,
    '/herramientas/git/': entornosHerramientas,
    '/herramientas/ia/': entornosHerramientas,

}
