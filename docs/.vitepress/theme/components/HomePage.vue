<script setup>
import Calendario from './Calendario.vue'
import RequestJourney  from "./RequestJourney.vue";
import Docentes from './Docentes.vue';
import {withBase} from 'vitepress';

const ventajas = [
  { icon: 'fa-solid fa-users', title: 'Plazas subvencionadas' },
  { icon: 'fa-solid fa-graduation-cap', title: 'Formación práctica' },
  { icon: 'fa-solid fa-briefcase', title: 'Docentes profesionales' },
  { icon: 'fa-solid fa-gear', title: 'Tecnologías actuales' },
  { icon: 'fa-solid fa-chart-column', title: 'Orientación profesional' }
]

// Valores pendientes de confirmar con la convocatoria.
const datos = [
  { icon: 'fa-regular fa-calendar-days', label: 'Duración', value: '85 días · 6 h/día' },
  { icon: 'fa-solid fa-calendar-check', label: 'Fechas', value: '28/10/2026- 19/03/2027' },
  { icon: 'fa-solid fa-location-dot', label: 'Modalidad', value: 'Presencial' },
  { icon: 'fa-solid fa-users', label: 'Dirigido a', value: 'Personas motivadas' },
]

const tecnologias = [
  { name: 'HTML5', icon: 'devicon-html5-plain colored', url: 'https://html.spec.whatwg.org/' },
  { name: 'CSS3', icon: 'devicon-css3-plain colored', url: 'https://www.w3.org/Style/CSS/' },
  { name: 'JavaScript', icon: 'devicon-javascript-plain colored', url: 'https://developer.mozilla.org/es/docs/Web/JavaScript' },
  { name: 'PHP', icon: 'devicon-php-plain colored', url: 'https://www.php.net/' },
  { name: 'Laravel', icon: 'devicon-laravel-original colored', url: 'https://laravel.com/' },
  { name: 'Bases de datos', icon: 'devicon-mysql-original colored', url: 'https://www.mysql.com/' },
  { name: 'Git', icon: 'devicon-git-plain colored', url: 'https://git-scm.com/' },
  { name: 'Docker', icon: 'devicon-docker-plain colored', url: 'https://www.docker.com/' }
]

const salidas = [
  'Desarrollo web front-end',
  'Desarrollo web back-end',
  'Desarrollo full stack',
  'Mantenimiento de aplicaciones web'
]
</script>
<template>
  <div class="inaem-site">
    <!-- CABECERA -->
    <header class="site-header">
      <div class="site-brand">
        <a href="#inicio" class="brand-icon" aria-label="Ir al inicio">
          &lt;/&gt;
        </a>

        <span class="brand-text">
    <strong>Desarrollo Web</strong>
    <a
        href="https://www.sepe.es/SiteSepe/contenidos/personas/formacion/certificados_de_profesionalidad/pdf/fichasCertificados/IFCD0210_ficha.pdf"
        target="_blank"
        rel="noopener noreferrer"
        class="brand-certificate"
        title="Consultar la ficha oficial del certificado en el SEPE"
    >
      <i class="fa-solid fa-award" aria-hidden="true"></i>
      IFCD0210 · Certificado de profesionalidad · Nivel 3
      <i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i>
    </a>
  </span>
      </div>

      <nav class="site-nav" aria-label="Navegación principal">
        <a href="https://www.cpilosenlaces.com"
           class="enlace-centro"
           target="_blank"
           rel="noopener noreferrer">
          <img width="200"
               :src="withBase('/images/logo-cpifp.png')"
               alt="Logo CPIFP Los Enlaces">
        </a>
        <a href="https://cpilosenlaces.aeducar.es/"
           target="_blank"
           rel="noopener noreferrer">
          <i class="fa-solid fa-graduation-cap" aria-hidden="true"></i>
          Aeducar
        </a>
        <a :href="withBase('/01_contenidos/')" class="nav-destacado">
          <i class="fa-solid fa-book-open" aria-hidden="true"></i>
          Contenidos módulo servidor
        </a>

        <a href="#tecnologias">Tecnologías</a>
        <a href="#salidas-profesionales">Salidas profesionales</a>
        <a href="#calendario">Calendario</a>
      </nav>
      <a class="btn btn-primary header-cta" href="#informacion">Solicitar información</a>
    </header>

    <main>
      <!-- PORTADA -->
      <section id="inicio" class="hero-inaem">
        <div class="hero-content">
          <span class="eyebrow">Formación subvencionada por el INAEM</span>
          <h1>Conviértete en <span>desarrollador web</span></h1>
          <p class="hero-subtitle">Aprende. Crea. Construye tu futuro.</p>
          <p class="hero-description">Formación práctica y actualizada para adquirir las competencias más demandadas del sector, con plazas subvencionadas por el Instituto Aragonés de Empleo (INAEM).</p>
          <div class="hero-actions">
            <a href="#informacion" class="btn btn-primary">
              <i class="fa-regular fa-envelope" aria-hidden="true"></i>
              Solicitar información →
            </a>
            <a href="https://cpilosenlaces.aeducar.es/"
               target="_blank"
               class="btn btn-outline"
               rel="noopener noreferrer">
              <i class="fa-solid fa-graduation-cap" aria-hidden="true"></i>
              Aeducar
            </a>
            <a :href="withBase('/01_contenidos/')" class="btn btn-outline">
              <i class="fa-solid fa-book-open" aria-hidden="true"></i>
              Contenidos módulo servidor →
            </a>


            <a href="#calendario" class="btn btn-outline">
              <i class="fa-regular fa-calendar-days" aria-hidden="true"></i>
              Ver calendario
            </a>
          </div>
        </div>
      </section>

      <!-- VENTAJAS -->
      <section class="advantages">
        <div v-for="item in ventajas" :key="item.title" class="advantage">
          <i :class="item.icon" aria-hidden="true"></i><span>{{ item.title }}</span>
        </div>
      </section>

      <!-- FICHA DEL CURSO -->
      <section class="course-facts">
        <div v-for="item in datos" :key="item.label" class="fact">
          <i :class="item.icon" aria-hidden="true"></i>
          <div><small>{{ item.label }}</small><strong>{{ item.value }}</strong></div>
        </div>
      </section>

      <!-- CURSO, TECNOLOGÍAS Y SALIDAS -->
      <section id="el-curso" class="course-content">
        <div class="course-intro">
          <span class="section-kicker">EL CURSO</span>
          <h2>Una formación completa para tu futuro profesional</h2>
          <p>Adquiere los conocimientos y habilidades necesarios para desarrollar aplicaciones web modernas, desde los fundamentos de programación hasta su despliegue en entornos profesionales.</p>
        </div>
        <div id="tecnologias" class="course-technologies">
          <span class="section-kicker">TECNOLOGÍAS</span>
          <div class="tech-grid">
            <a
                v-for="tech in tecnologias"
                :key="tech.name"
                :href="tech.url"
                class="tech-card"
                target="_blank"
                rel="noopener noreferrer"
                :title="`Visitar la web de ${tech.name}`"
            >
              <i :class="tech.icon" aria-hidden="true"></i>
              <span>{{ tech.name }}</span>
            </a>
          </div>
        </div>
        <div id="salidas-profesionales" class="career-content">
          <span class="section-kicker">SALIDAS PROFESIONALES</span>
          <h2>Un sector con futuro</h2>
          <ul>
            <li v-for="salida in salidas" :key="salida"><i class="fa-solid fa-circle-check" aria-hidden="true"></i> {{ salida }}</li>
          </ul>
          <img src="/images/equipo.jpg" alt="Profesionales colaborando en un proyecto" class="career-image" loading="lazy" />
        </div>
      </section>

      <!-- VIAJE DE UNA PETICIÓN WEB -->
      <RequestJourney />

      <!-- EQUIPO DOCENTE -->
      <Docentes />

      <!-- CALENDARIO INTERACTIVO -->
      <Calendario />

      <!-- PIE INSTITUCIONAL -->
      <footer id="informacion" class="institutional-footer">
        <div class="footer-columns">
          <div class="footer-block">
            <span class="footer-label">UNA INICIATIVA DE</span>
            <div class="institution-logos">
              <img src="/images/inaem-logo.png" alt="Instituto Aragonés de Empleo" loading="lazy" />
              <img src="/images/aragon-logo.jpeg" alt="Gobierno de Aragón" loading="lazy" />
            </div>
          </div>
          <div class="footer-block">
            <span class="footer-label">ENTIDAD ORGANIZADORA</span>
            <a href="https://www.cpilosenlaces.com/" target="_blank" rel="noopener noreferrer" class="footer-centro">
              <img src="/images/logo-cpifp.png" alt="CPIFP Los Enlaces" loading="lazy" />
              <span><strong>CPIFP Los Enlaces</strong><small>Centro Público Integrado de Formación Profesional</small><small>Zaragoza</small></span>
            </a>
          </div>
          <div class="footer-block">
            <span class="footer-label">CONTACTA CON NOSOTROS</span>
            <div class="footer-emails">
              <a href="tel:+34976300804"><i class="fa-solid fa-phone" aria-hidden="true"></i><strong>976 300 804</strong></a>
              <div class="footer-contact-person"><strong>Miguel Luengo</strong></div>
              <div class="footer-contact-person"><strong>Cristina López</strong><a href="mailto:cristina.lopez@cpilosenlaces.com"><i class="fa-regular fa-envelope" aria-hidden="true"></i> cristina.lopez@cpilosenlaces.com</a></div>
              <div class="footer-contact-person"><strong>Manuel Romero</strong><a href="mailto:manuel.romero@cpilosenlaces.com"><i class="fa-regular fa-envelope" aria-hidden="true"></i> manuel.romero@cpilosenlaces.com</a></div>
              <div class="footer-contact-person"><strong>Formación para el Empleo</strong><a href="mailto:formacionempleo@cpilosenlaces.com"><i class="fa-regular fa-envelope" aria-hidden="true"></i> formacionempleo@cpilosenlaces.com</a></div>
            </div>
          </div>
        </div>
        <p class="footer-bottom">Formación subvencionada por el Instituto Aragonés de Empleo. Información sujeta a las condiciones de la convocatoria.</p>
      </footer>
    </main>
  </div>
</template>


