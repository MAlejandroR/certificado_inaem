
<template>
  <section id="docentes" class="docentes">
    <header class="docentes__header">
      <span class="docentes__kicker">EQUIPO DOCENTE</span>
      <h2>Aprende con profesionales</h2>
      <p>
        Un equipo de especialistas que te acompañará
        durante tu formación en desarrollo web.
      </p>
    </header>

    <div class="docentes__grid">
      <article
          v-for="docente in docentes"
          :key="docente.nombre"
          class="docente"
      >
        <div class="docente__foto">
          <img
              :src="withBase(docente.foto)"
              :alt="`Fotografía de ${docente.nombre}`"
              loading="lazy"
          />
        </div>

        <div class="docente__info">
          <h3>{{ docente.nombre }}</h3>
          <p class="docente__titulacion">
            {{ docente.titulacion }}
          </p>

          <div class="docente__tecnologias">
            <span
                v-for="tecnologia in docente.tecnologias"
                :key="tecnologia.nombre"
                class="docente__tech"
            >
              <i
                  :class="tecnologia.icono"
                  aria-hidden="true"
              ></i>
              {{ tecnologia.nombre }}
            </span>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup>
import { withBase } from 'vitepress'

const docentes = [
  {
    nombre: 'Óscar Gascón',
    titulacion: 'Diplomado en Biblioteconomía. Empresario de desarrollo web',
    foto: '/images/profesores/oscar.webp',
    tecnologias: [
      { nombre: 'HTML5', icono: 'devicon-html5-plain colored' },
      { nombre: 'CSS3', icono: 'devicon-css3-plain colored' },
      { nombre: 'Bootstrap', icono: 'devicon-bootstrap-plain colored' }
    ]
  },
  {
    nombre: 'Juanda',
    titulacion: 'Licenciado en Física',
    foto: '/images/profesores/juanda.webp',
    tecnologias: [
      { nombre: 'JavaScript', icono: 'devicon-javascript-plain colored' }
    ]
  },
  {

    nombre: 'Manuel Romero',
    titulacion: 'Ingeniero en Informática',
    foto: '/images/profesores/manuel.webp',
    tecnologias: [
      { nombre: 'PHP', icono: 'devicon-php-plain colored' },
      { nombre: 'Laravel', icono: 'devicon-laravel-original colored' }
    ]
  },
  {
    nombre: 'Silvia',
    titulacion: 'Ingeniera en Telecomunicaciones',
    foto: '/images/profesores/silvia.webp',
    tecnologias: [
      { nombre: 'MySQL', icono: 'devicon-mysql-original colored' },
      { nombre: 'SQL', icono: 'fa-solid fa-database' }
    ]
  },
  {
    nombre: 'Nacho',
    titulacion: 'Licenciado en Matemáticas',
    foto: '/images/profesores/nacho.webp',
    tecnologias: [
      { nombre: 'Linux', icono: 'devicon-linux-plain colored' },
      { nombre: 'Docker', icono: 'devicon-docker-plain colored' }
    ]
  },


  {
    nombre: 'Óscar Ariño',
    titulacion: 'Ingeniero Técnico en Informática de Gestión',
    foto: '/images/profesores/oscar_ariño.webp',
    tecnologias: [
      { nombre: 'WordPress', icono: 'devicon-wordpress-plain colored' },
      { nombre: 'Git', icono: 'devicon-git-plain colored' }
    ]
  },

]
</script>

<style scoped>
.docentes {
  padding: 80px 24px;
  background: linear-gradient(180deg, #f5f8ff 0%, #ffffff 100%);
}

.docentes__header {
  max-width: 700px;
  margin: 0 auto 45px;
  text-align: center;
}

.docentes__kicker {
  display: inline-block;
  margin-bottom: 12px;
  color: #075de8;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.12em;
}

.docentes__header h2 {
  margin: 0 0 14px;
  color: #102454;
  font-size: clamp(28px, 4vw, 38px);
  font-weight: 800;
}

.docentes__header p {
  color: #64748b;
  font-size: 16px;
  line-height: 1.6;
}

.docentes__grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;
  max-width: 1100px;
  margin: 0 auto;
}

.docente {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px 22px;
  background: #fff;
  border: 1px solid #e4ebf5;
  border-radius: 20px;
  box-shadow: 0 6px 24px rgb(16 36 84 / 5%);
  text-align: center;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.docente:hover {
  transform: translateY(-6px);
  box-shadow: 0 16px 36px rgb(16 36 84 / 12%);
}

.docente__foto {
  width: 116px;
  height: 116px;
  margin-bottom: 20px;
  padding: 5px;
  border: 3px solid #dce9ff;
  border-radius: 50%;
  overflow: hidden;
}

.docente__foto img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}

.docente__info {
  width: 100%;
}

.docente__info h3 {
  margin: 0 0 7px;
  color: #102454;
  font-size: 19px;
  font-weight: 800;
}

.docente__titulacion {
  min-height: 42px;
  margin: 0 0 20px;
  color: #64748b;
  font-size: 13px;
  line-height: 1.5;
}

.docente__tecnologias {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
}

.docente__tech {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 7px 11px;
  background: #f0f5ff;
  border: 1px solid #e1eaff;
  border-radius: 999px;
  color: #334155;
  font-size: 12px;
  font-weight: 600;
}

.docente__tech i {
  font-size: 19px;
}

@media (max-width: 900px) {
  .docentes__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 600px) {
  .docentes {
    padding: 55px 16px;
  }

  .docentes__grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .docente {
    padding: 26px 18px;
  }
}
</style>
tyle>