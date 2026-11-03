
<script setup>
import { computed, ref } from 'vue'
import { withBase } from 'vitepress'
import { horas, profesores, clases } from './horarios.js'

// --------------------------------------------------
// CONFIGURACIÓN GENERAL
// --------------------------------------------------

const meses = [
  [2026, 9],
  [2026, 10],
  [2026, 11],
  [2027, 0],
  [2027, 1],
  [2027, 2],
]

const diasSemana = ['L', 'M', 'X', 'J', 'V', 'S', 'D']

const mesActual = ref(0)
const seleccionada = ref(null)

const inicio = new Date(2026, 9, 28)
const fin = new Date(2027, 2, 19)

// --------------------------------------------------
// FECHAS
// --------------------------------------------------

function claveFecha(fecha) {
  return [
    fecha.getFullYear(),
    String(fecha.getMonth() + 1).padStart(2, '0'),
    String(fecha.getDate()).padStart(2, '0'),
  ].join('-')
}

function esFinSemana(fecha) {
  return fecha.getDay() === 0 || fecha.getDay() === 6
}

function estaEnPeriodo(fecha) {
  return fecha >= inicio && fecha <= fin
}

function formatearFecha(fecha) {
  return new Intl.DateTimeFormat('es-ES', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(fecha)
}

// --------------------------------------------------
// NAVEGACIÓN
// --------------------------------------------------

const nombreMes = computed(() => {
  const [anio, mes] = meses[mesActual.value]

  const nombre = new Intl.DateTimeFormat('es-ES', {
    month: 'long',
    year: 'numeric',
  }).format(new Date(anio, mes, 1))

  return nombre.charAt(0).toUpperCase() + nombre.slice(1)
})

const celdas = computed(() => {
  const [anio, mes] = meses[mesActual.value]

  // La semana comienza en lunes
  const desplazamiento =
      (new Date(anio, mes, 1).getDay() + 6) % 7

  const total = new Date(anio, mes + 1, 0).getDate()

  return [
    ...Array(desplazamiento).fill(null),
    ...Array.from(
        { length: total },
        (_, i) => new Date(anio, mes, i + 1)
    ),
  ]
})

function cambiarMes(paso) {
  const nuevoMes = mesActual.value + paso

  if (nuevoMes < 0 || nuevoMes >= meses.length) return

  mesActual.value = nuevoMes
  seleccionada.value = null
}

function seleccionar(fecha) {
  seleccionada.value = claveFecha(fecha)
}

const fechaSeleccionada = computed(() => {
  if (!seleccionada.value) return null

  const [anio, mes, dia] = seleccionada.value
      .split('-')
      .map(Number)

  return new Date(anio, mes - 1, dia)
})

// --------------------------------------------------
// DATOS DEL CALENDARIO
// --------------------------------------------------

function clasesDelDia(fecha) {
  return clases[claveFecha(fecha)] ?? {}
}

function esFestivo(fecha) {
  const tipo = clasesDelDia(fecha).tipo

  return tipo === 'festivo' || tipo === 'vacaciones'
}

function esSinAsignacion(fecha) {
  return clasesDelDia(fecha).tipo === 'sin_asignacion'
}

function esDiaLectivo(fecha) {
  return estaEnPeriodo(fecha) &&
      !esFinSemana(fecha) &&
      !esFestivo(fecha) &&
      sesionesDelDia(fecha).length > 0
}

// --------------------------------------------------
// HORARIOS
// --------------------------------------------------

// Convierte "08:30-09:30" en ["08:30", "09:30"]
function limitesHora(numero) {
  const franja = horas[numero]

  if (!franja) return null

  return franja.split(/\s*[-–]\s*/)
}

// Agrupa bloques consecutivos.
// Ejemplo: [1,2,3,5,6] genera dos intervalos.
function intervalosHorario(bloques) {
  if (!Array.isArray(bloques)) return []

  const ordenados = [...new Set(bloques)]
      .filter(n => limitesHora(n))
      .sort((a, b) => a - b)

  if (!ordenados.length) return []

  const grupos = []
  let grupo = [ordenados[0]]

  for (let i = 1; i < ordenados.length; i++) {
    const anterior = grupo[grupo.length - 1]
    const actual = ordenados[i]

    const finAnterior = limitesHora(anterior)[1]
    const inicioActual = limitesHora(actual)[0]

    // Agrupamos únicamente intervalos contiguos
    if (finAnterior === inicioActual) {
      grupo.push(actual)
    } else {
      grupos.push(grupo)
      grupo = [actual]
    }
  }

  grupos.push(grupo)

  return grupos.map(numeros => {
    const primero = limitesHora(numeros[0])
    const ultimo = limitesHora(numeros[numeros.length - 1])

    return {
      inicio: primero[0],
      fin: ultimo[1],
      texto: `${primero[0]}–${ultimo[1]}`,
      bloques: numeros,
    }
  })
}

function sesionesDelDia(fecha) {
  const datos = clasesDelDia(fecha)

  if (datos.tipo || !estaEnPeriodo(fecha)) return []

  return Object.entries(datos)
      .filter(([id, bloques]) =>
          profesores[id] && Array.isArray(bloques)
      )
      .flatMap(([id, bloques]) => {
        const profesor = profesores[id]

        return intervalosHorario(bloques).map((intervalo, indice) => ({
          id: `${id}-${indice}`,
          profesorId: id,
          nombre: profesor.nombre,
          iniciales: profesor.iniciales,
          color: profesor.color,
          fondo: profesor.fondo,
          horario: intervalo.texto,
          inicio: intervalo.inicio,
          fin: intervalo.fin,
          bloques: intervalo.bloques,
        }))
      })
      .sort((a, b) =>
          a.inicio.localeCompare(b.inicio) ||
          a.fin.localeCompare(b.fin)
      )
}

// --------------------------------------------------
// DETALLE DEL DÍA
// --------------------------------------------------

const sesionesSeleccionadas = computed(() => {
  if (!fechaSeleccionada.value) return []
  return sesionesDelDia(fechaSeleccionada.value)
})

const datosSeleccionados = computed(() => {
  if (!fechaSeleccionada.value) return {}
  return clasesDelDia(fechaSeleccionada.value)
})

const listaProfesores = computed(() =>
    Object.entries(profesores).map(([id, profesor]) => ({
      id,
      ...profesor,
    }))
)

</script>

<template>
  <section
      id="calendario"
      class="calendario-curso"
      aria-label="Calendario del curso"
  >

    <!-- CABECERA -->

    <div class="cal-header">
      <div>
        <span class="section-kicker">PLANIFICACIÓN</span>
        <h2>Calendario del curso</h2>
        <p>Del 28 de octubre de 2026 al 19 de marzo de 2027</p>
      </div>

      <a
          :href="withBase('/documentos/horario_curso.pdf')"
          target="_blank"
          rel="noopener noreferrer"
          class="cal-pdf"
      >
        <i class="fa-regular fa-file-pdf" aria-hidden="true"></i>
        Consultar PDF original
      </a>
    </div>

    <!-- ESTADÍSTICAS -->

    <div class="cal-stats">
      <div>
        <strong>28/10/2026</strong>
        <span>Inicio</span>
      </div>

      <div>
        <strong>19/03/2027</strong>
        <span>Fin</span>
      </div>

      <div>
        <strong>85</strong>
        <span>Días previstos</span>
      </div>

      <div>
        <strong>6 horas</strong>
        <span>Por jornada lectiva</span>
      </div>
    </div>

    <!-- CALENDARIO -->

    <div class="cal-panel">

      <!-- NAVEGACIÓN ENTRE MESES -->

      <div class="cal-month-header">
        <button
            type="button"
            aria-label="Mes anterior"
            :disabled="mesActual === 0"
            @click="cambiarMes(-1)"
        >
          <i class="fa-solid fa-chevron-left" aria-hidden="true"></i>
        </button>

        <h3>{{ nombreMes }}</h3>

        <button
            type="button"
            aria-label="Mes siguiente"
            :disabled="mesActual === meses.length - 1"
            @click="cambiarMes(1)"
        >
          <i class="fa-solid fa-chevron-right" aria-hidden="true"></i>
        </button>
      </div>

      <!-- DÍAS DE LA SEMANA -->

      <div class="cal-weekdays">
        <span
            v-for="dia in diasSemana"
            :key="dia"
        >
          {{ dia }}
        </span>
      </div>

      <!-- CUADRÍCULA -->

      <div class="cal-grid">
        <template
            v-for="(fecha, indice) in celdas"
            :key="fecha ? claveFecha(fecha) : `vacio-${indice}`"
        >

          <span
              v-if="!fecha"
              class="cal-empty"
              aria-hidden="true"
          ></span>

          <button
              v-else
              type="button"
              class="cal-day"
              :class="{
              'cal-planned': esDiaLectivo(fecha),
              'cal-vacation': esFestivo(fecha),
              'cal-weekend': esFinSemana(fecha),
              'cal-unassigned': esSinAsignacion(fecha),
              'cal-outside': !estaEnPeriodo(fecha),
              'cal-selected': seleccionada === claveFecha(fecha)
            }"
              :aria-pressed="seleccionada === claveFecha(fecha)"
              :aria-label="formatearFecha(fecha)"
              @click="seleccionar(fecha)"
          >

            <!-- NÚMERO DEL DÍA -->

            <span class="cal-day-number">
              {{ fecha.getDate() }}
            </span>

            <!-- FRANJAS DE PROFESORES -->

            <div
                v-if="sesionesDelDia(fecha).length"
                class="cal-sessions"
            >
              <div
                  v-for="sesion in sesionesDelDia(fecha)"
                  :key="sesion.id"
                  class="cal-session"
                  :style="{
                  backgroundColor: sesion.fondo,
                  color: sesion.color
                }"
                  :title="`${sesion.nombre}: ${sesion.horario}`"
              >
                <strong>{{ sesion.iniciales }}</strong>
                <span>{{ sesion.horario }}</span>
              </div>
            </div>

            <!-- FESTIVOS Y VACACIONES -->

            <span
                v-else-if="esFestivo(fecha)"
                class="cal-day-note"
            >
              {{ clasesDelDia(fecha).motivo }}
            </span>

            <!-- SIN ASIGNACIÓN -->

            <span
                v-else-if="esSinAsignacion(fecha)"
                class="cal-day-note"
            >
              Sin asignar
            </span>

          </button>
        </template>
      </div>

      <!-- LEYENDA -->

      <div class="cal-legend">
        <span class="legend-item">
          <i class="legend-dot vacation"></i>
          Festivo / vacaciones
        </span>

        <span class="legend-item">
          <i class="legend-dot selected"></i>
          Seleccionado
        </span>

        <span class="legend-item">
          <i class="legend-dot weekend"></i>
          Fin de semana
        </span>
      </div>

      <!-- LEYENDA DEL PROFESORADO -->

      <div class="cal-professors">
        <strong class="cal-professors-title">
          Profesorado
        </strong>

        <div class="cal-professors-list">
          <span
              v-for="profesor in listaProfesores"
              :key="profesor.id"
              class="cal-professor"
          >
            <i
                class="legend-dot"
                :style="{ backgroundColor: profesor.color }"
            ></i>
            {{ profesor.iniciales }} · {{ profesor.nombre }}
          </span>
        </div>
      </div>

    </div>

    <!-- DETALLE DE LA FECHA SELECCIONADA -->

    <div
        v-if="fechaSeleccionada"
        class="cal-detail"
        aria-live="polite"
    >
      <strong class="cal-detail-title">
        {{ formatearFecha(fechaSeleccionada) }}
      </strong>

      <p v-if="datosSeleccionados.tipo">
        {{ datosSeleccionados.motivo }}
      </p>

      <div
          v-else-if="sesionesSeleccionadas.length"
          class="cal-detail-sessions"
      >
        <div
            v-for="sesion in sesionesSeleccionadas"
            :key="sesion.id"
            class="cal-detail-session"
        >
          <span
              class="cal-detail-dot"
              :style="{ backgroundColor: sesion.color }"
          ></span>

          <strong>{{ sesion.nombre }}</strong>

          <span>{{ sesion.horario }}</span>
        </div>
      </div>

      <p v-else>
        No hay clases asignadas para esta fecha.
      </p>
    </div>

    <!-- AVISO -->

    <p class="cal-notice">
      <i class="fa-solid fa-circle-info" aria-hidden="true"></i>
      Calendario sujeto a posibles modificaciones.
      Consulta el horario oficial para confirmar las sesiones.
    </p>

  </section>
</template>

<style scoped>

/* CONTENEDOR GENERAL */

.calendario-curso {
  width: 100%;
  margin: 2rem auto;
}

.cal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.cal-header h2 {
  margin: 0.3rem 0;
  font-size: 1.8rem;
}

.cal-header p {
  margin: 0;
  color: var(--vp-c-text-2);
}

.section-kicker {
  color: var(--vp-c-brand-1);
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.1em;
}

.cal-pdf {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.65rem 1rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
}

.cal-pdf:hover {
  border-color: var(--vp-c-brand-1);
}

/* ESTADÍSTICAS */

.cal-stats {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 0.8rem;
  margin-bottom: 1.5rem;
}

.cal-stats > div {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding: 1rem;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 10px;
}

.cal-stats strong {
  font-size: 1.1rem;
  color: var(--vp-c-text-1);
}

.cal-stats span {
  font-size: 0.8rem;
  color: var(--vp-c-text-2);
}

/* PANEL */

.cal-panel {
  padding: 1rem;
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
}

.cal-month-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.cal-month-header h3 {
  margin: 0;
  font-size: 1.3rem;
  text-align: center;
}

.cal-month-header button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  background: var(--vp-c-bg-soft);
  cursor: pointer;
}

.cal-month-header button:hover:not(:disabled) {
  border-color: var(--vp-c-brand-1);
}

.cal-month-header button:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

/* CUADRÍCULA */

.cal-weekdays,
.cal-grid {
  display: grid;
  grid-template-columns: repeat(7, minmax(0, 1fr));
  gap: 5px;
}

.cal-weekdays {
  margin-bottom: 5px;
}

.cal-weekdays span {
  padding: 0.5rem 0;
  text-align: center;
  font-size: 0.8rem;
  font-weight: 700;
  color: var(--vp-c-text-2);
}

.cal-empty {
  min-height: 86px;
}

/* CELDAS */

.cal-day {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
  gap: 5px;
  min-width: 0;
  min-height: 95px;
  padding: 6px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 7px;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  text-align: left;
  cursor: pointer;
  transition: border-color 0.15s, background 0.15s;
}

.cal-day:hover {
  border-color: var(--vp-c-brand-1);
}

.cal-day-number {
  font-size: 0.9rem;
  font-weight: 700;
}

.cal-planned {
  background: var(--vp-c-bg-soft);
}

.cal-weekend {
  background: var(--vp-c-bg-alt);
  color: var(--vp-c-text-3);
}

.cal-vacation {
  background: #fee2e2;
  color: #991b1b;
  border-color: #fecaca;
}

.cal-vacation:hover {
  background: #fecaca;
}

.cal-unassigned {
  border-style: dashed;
}

.cal-outside {
  opacity: 0.45;
}

.cal-selected {
  outline: 2px solid var(--vp-c-brand-1);
  outline-offset: -2px;
}

/* SESIONES */

.cal-sessions {
  display: flex;
  flex-direction: column;
  gap: 3px;
  width: 100%;
}

.cal-session {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3px;
  padding: 4px;
  border-radius: 4px;
  font-size: 0.65rem;
  line-height: 1.2;
  white-space: nowrap;
  overflow: hidden;
}

.cal-session strong {
  flex-shrink: 0;
  font-weight: 700;
}

.cal-session span {
  overflow: hidden;
  text-overflow: ellipsis;
}

.cal-day-note {
  font-size: 0.65rem;
  line-height: 1.3;
  overflow-wrap: anywhere;
}

/* LEYENDAS */

.cal-legend {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 1rem;
  font-size: 0.8rem;
  color: var(--vp-c-text-2);
}

.legend-item,
.cal-professor {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
}

.legend-dot {
  display: inline-block;
  flex-shrink: 0;
  width: 10px;
  height: 10px;
  border-radius: 50%;
}

.legend-dot.vacation {
  background: #fca5a5;
}

.legend-dot.selected {
  background: var(--vp-c-brand-1);
}

.legend-dot.weekend {
  background: #9ca3af;
}

.cal-professors {
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid var(--vp-c-divider);
}

.cal-professors-title {
  display: block;
  margin-bottom: 0.7rem;
  font-size: 0.85rem;
}

.cal-professors-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem 1.2rem;
}

.cal-professor {
  font-size: 0.78rem;
  color: var(--vp-c-text-2);
}

/* DETALLE */

.cal-detail {
  margin-top: 1rem;
  padding: 1rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 10px;
  background: var(--vp-c-bg-soft);
}

.cal-detail-title {
  display: block;
  margin-bottom: 0.7rem;
  text-transform: capitalize;
}

.cal-detail p {
  margin: 0.5rem 0 0;
}

.cal-detail-sessions {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.cal-detail-session {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem;
  font-size: 0.9rem;
}

.cal-detail-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  flex-shrink: 0;
}

/* AVISO */

.cal-notice {
  margin-top: 1rem;
  color: var(--vp-c-text-2);
  font-size: 0.8rem;
}

.cal-notice i {
  margin-right: 0.3rem;
  color: var(--vp-c-brand-1);
}

/* RESPONSIVE */

@media (max-width: 768px) {
  .cal-stats {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .cal-panel {
    padding: 0.5rem;
  }

  .cal-grid,
  .cal-weekdays {
    gap: 3px;
  }

  .cal-day {
    min-height: 80px;
    padding: 3px;
  }

  .cal-session {
    flex-direction: column;
    align-items: center;
    gap: 1px;
    padding: 3px 1px;
    font-size: 0.55rem;
  }

  .cal-day-number {
    font-size: 0.8rem;
  }

  .cal-day-note {
    font-size: 0.55rem;
  }
}

@media (max-width: 420px) {
  .cal-header h2 {
    font-size: 1.4rem;
  }

  .cal-stats strong {
    font-size: 0.9rem;
  }

  .cal-session span {
    font-size: 0.48rem;
  }

  .cal-day {
    min-height: 72px;
  }
}

</style>
