<script setup>
import IndiceTemario from '../../../../../arquitectura/comun/theme/components/IndiceTemario.vue'

const contenidos = [
  {
    numero: '01',
    icono: 'fa-solid fa-graduation-cap',
    titulo: 'Presentación y motivación',
    descripcion: 'Objetivos, metodología y organización del curso.',
    enlace: '/01_Presentacion'
  },
  {
    numero: '02',
    icono: 'fa-solid fa-globe',
    titulo: 'La web y las redes',
    descripcion: 'Internet, redes y funcionamiento de la web.',
    enlace: '/fundamentos-web/'
  },
  {
    numero: '03',
    icono: 'fa-solid fa-code',
    titulo: 'Programación',
    descripcion: 'Algoritmos, variables y estructuras de control.',
    enlace: '/03_Programacion/'
  },
  {
    numero: '04',
    icono: 'fa-solid fa-puzzle-piece',
    titulo: 'Scratch',
    descripcion: 'Programación visual y pensamiento computacional.',
    enlace: '/scratch/'
  },
  {
    numero: '05',
    icono: 'fa-brands fa-php',
    titulo: 'PHP',
    descripcion: 'Programación web del lado del servidor.',
    enlace: '/php/'
  },
  {
    numero: '07',
    icono: 'fa-brands fa-php',
    titulo: 'PHP',
    descripcion: 'Apuntes servidor antiguo.',
    enlace: 'https://manuel.web.infenlaces.com/php_old/'
  },
  {
    numero: '06',
    icono: 'fa-brands fa-laravel',
    titulo: 'Laravel',
    descripcion: 'Desarrollo de aplicaciones web completas.',
    enlace: '/laravel/'
  }
]
</script>

<template>
  <IndiceTemario :contenidos="contenidos" />
</template>
