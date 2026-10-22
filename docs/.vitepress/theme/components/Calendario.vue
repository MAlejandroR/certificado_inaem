<template>
  <section id="calendario" class="calendario-curso" aria-label="Calendario del curso">
    <div class="cal-header">
      <div>
        <span class="section-kicker">PLANIFICACIÓN</span>
        <h2>Calendario del curso</h2>
        <p>Del 28 de octubre de 2026 al 19 de marzo de 2027</p>
      </div>
      <a href="/documentos/horario_curso.pdf" target="_blank" rel="noopener noreferrer" class="cal-pdf">
        <i class="fa-regular fa-file-pdf" aria-hidden="true"></i> Consultar PDF original
      </a>
    </div>

    <div class="cal-stats">
      <div><strong>28/10/2026</strong><span>Inicio</span></div>
      <div><strong>19/03/2027</strong><span>Fin</span></div>
      <div><strong>85</strong><span>Días según planificación</span></div>
      <div><strong>6 horas</strong><span>Por jornada lectiva</span></div>
    </div>

    <div class="cal-panel">
      <div class="cal-month-header">
        <button type="button" aria-label="Mes anterior" :disabled="mesActual === 0" @click="cambiarMes(-1)">
          <i class="fa-solid fa-chevron-left" aria-hidden="true"></i>
        </button>
        <h3>{{ nombreMes }}</h3>
        <button type="button" aria-label="Mes siguiente" :disabled="mesActual === meses.length - 1" @click="cambiarMes(1)">
          <i class="fa-solid fa-chevron-right" aria-hidden="true"></i>
        </button>
      </div>
      <div class="cal-weekdays"><span v-for="dia in diasSemana" :key="dia">{{ dia }}</span></div>
      <div class="cal-grid">
        <template v-for="(fecha, indice) in celdas" :key="indice">
          <span v-if="!fecha" class="cal-empty" aria-hidden="true"></span>
          <button v-else type="button" class="cal-day"
            :class="{ 'cal-planned': esDiaPotencial(fecha), 'cal-weekend': esFinSemana(fecha), 'cal-selected': seleccionada === claveFecha(fecha) }"
            :aria-pressed="seleccionada === claveFecha(fecha)"
            :aria-label="formatearFecha(fecha)"
            @click="seleccionar(fecha)">{{ fecha.getDate() }}</button>
        </template>
      </div>
      <div class="cal-legend">
        <span><i class="legend-dot planned"></i> Lunes a viernes dentro del periodo</span>
        <span><i class="legend-dot selected"></i> Seleccionado</span>
        <span><i class="legend-dot weekend"></i> Fin de semana</span>
      </div>
    </div>
    <div v-if="fechaSeleccionada" class="cal-detail" aria-live="polite">
      <strong>{{ formatearFecha(fechaSeleccionada) }}</strong>
      <p v-if="esDiaPotencial(fechaSeleccionada)">Fecha comprendida en el periodo del curso. Consulta el PDF para confirmar si hay clase y ver el profesorado asignado.</p>
      <p v-else>Fuera de las jornadas ordinarias de lunes a viernes del periodo del curso.</p>
    </div>
    <p class="cal-notice"><i class="fa-solid fa-circle-info" aria-hidden="true"></i> Los días destacados son orientativos: todavía no se han excluido todos los festivos ni se ha trasladado el horario individual del profesorado.</p>
  </section>
</template>

<script setup>
import { computed, ref } from 'vue'

const meses = [[2026, 9], [2026, 10], [2026, 11], [2027, 0], [2027, 1], [2027, 2]]
const diasSemana = ['L', 'M', 'X', 'J', 'V', 'S', 'D']
const mesActual = ref(0)
const seleccionada = ref(null)
const inicio = new Date(2026, 9, 28)
const fin = new Date(2027, 2, 19)

const nombreMes = computed(() => {
  const [anio, mes] = meses[mesActual.value]
  const nombre = new Intl.DateTimeFormat('es-ES', { month: 'long', year: 'numeric' }).format(new Date(anio, mes, 1))
  return nombre.charAt(0).toUpperCase() + nombre.slice(1)
})
const celdas = computed(() => {
  const [anio, mes] = meses[mesActual.value]
  const desplazamiento = (new Date(anio, mes, 1).getDay() + 6) % 7
  const total = new Date(anio, mes + 1, 0).getDate()
  return [...Array(desplazamiento).fill(null), ...Array.from({ length: total }, (_, i) => new Date(anio, mes, i + 1))]
})
function claveFecha(fecha) {
  return `${fecha.getFullYear()}-${String(fecha.getMonth() + 1).padStart(2, '0')}-${String(fecha.getDate()).padStart(2, '0')}`
}
function esFinSemana(fecha) { return fecha.getDay() === 0 || fecha.getDay() === 6 }
function esDiaPotencial(fecha) { return fecha >= inicio && fecha <= fin && !esFinSemana(fecha) }
function cambiarMes(paso) { mesActual.value += paso; seleccionada.value = null }
function seleccionar(fecha) { seleccionada.value = claveFecha(fecha) }
function formatearFecha(fecha) { return new Intl.DateTimeFormat('es-ES', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }).format(fecha) }
const fechaSeleccionada = computed(() => {
  if (!seleccionada.value) return null
  const [anio, mes, dia] = seleccionada.value.split('-').map(Number)
  return new Date(anio, mes - 1, dia)
})
</script>
