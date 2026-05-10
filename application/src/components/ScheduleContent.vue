<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { scheduleData, SessionType } from '@/data/scheduleData.js'

const { locale } = useI18n()
const activeDay = ref(scheduleData.days[0].id)
const expandedSessions = ref({})

const currentDay = computed(() =>
    scheduleData.days.find(d => d.id === activeDay.value)
)

function getLocalizedText(text) {
    if (typeof text === 'string') return text
    if (!text) return ''
    return text[locale.value] || text.es || text.en || ''
}

function getSessionKey(dayId, slotIdx, sessionIdx) {
    return `${dayId}-${slotIdx}-${sessionIdx}`
}

function hasExpandableDetails(session) {
    return Boolean(
        session.chair ||
        session.moderator ||
        session.description ||
        (session.panelists && session.panelists.length) ||
        (session.papers && session.papers.length)
    )
}

function isSessionExpanded(dayId, slotIdx, sessionIdx) {
    return Boolean(expandedSessions.value[getSessionKey(dayId, slotIdx, sessionIdx)])
}

function toggleSession(dayId, slotIdx, sessionIdx) {
    const key = getSessionKey(dayId, slotIdx, sessionIdx)
    expandedSessions.value = {
        ...expandedSessions.value,
        [key]: !expandedSessions.value[key]
    }
}

function getSessionMeta(session) {
    const parts = []

    if (session.papers?.length) {
        parts.push(
            getLocalizedText({
                en: `${session.papers.length} item${session.papers.length > 1 ? 's' : ''}`,
                pt: `${session.papers.length} item${session.papers.length > 1 ? 's' : ''}`,
                es: `${session.papers.length} elemento${session.papers.length > 1 ? 's' : ''}`
            })
        )
    }

    if (session.panelists?.length) {
        parts.push(
            getLocalizedText({
                en: `${session.panelists.length} panelist${session.panelists.length > 1 ? 's' : ''}`,
                pt: `${session.panelists.length} painelista${session.panelists.length > 1 ? 's' : ''}`,
                es: `${session.panelists.length} ponente${session.panelists.length > 1 ? 's' : ''}`
            })
        )
    }

    return parts.join(' • ')
}

const sessionConfig = {
    [SessionType.KEYNOTE]: { icon: 'fa-solid fa-microphone-lines', color: '#5C8455', bgClass: 'bg-gradient-primary' },
    [SessionType.WORKSHOP]: { icon: 'fa-solid fa-chalkboard-user', color: '#e67e22', bgClass: 'bg-workshop' },
    [SessionType.TUTORIAL]: { icon: 'fa-solid fa-graduation-cap', color: '#8e44ad', bgClass: 'bg-tutorial' },
    [SessionType.PANEL]: { icon: 'fa-solid fa-users', color: '#2980b9', bgClass: 'bg-panel' },
    [SessionType.PAPER_SESSION]: { icon: 'fa-solid fa-file-lines', color: '#c0392b', bgClass: 'bg-papers' },
    [SessionType.BREAK]: { icon: 'fa-solid fa-mug-hot', color: '#7f8c8d', bgClass: 'bg-break' },
    [SessionType.LUNCH]: { icon: 'fa-solid fa-utensils', color: '#7f8c8d', bgClass: 'bg-break' },
    [SessionType.REGISTRATION]: { icon: 'fa-solid fa-id-card', color: '#16a085', bgClass: 'bg-registration' },
    [SessionType.COMPETITION]: { icon: 'fa-solid fa-trophy', color: '#f39c12', bgClass: 'bg-competition' },
    [SessionType.COLLOQUIUM]: { icon: 'fa-solid fa-comments', color: '#2c3e50', bgClass: 'bg-colloquium' },
    [SessionType.NETWORKING]: { icon: 'fa-solid fa-champagne-glasses', color: '#1abc9c', bgClass: 'bg-networking' },
    [SessionType.OTHER]: { icon: 'fa-solid fa-circle-info', color: '#95a5a6', bgClass: 'bg-other' }
}

function getConfig(type) {
    return sessionConfig[type] || sessionConfig[SessionType.OTHER]
}

function isSimpleSlot(sessions) {
    return sessions.length === 1 && (
        sessions[0].type === SessionType.BREAK ||
        sessions[0].type === SessionType.LUNCH ||
        sessions[0].type === SessionType.REGISTRATION ||
        sessions[0].type === SessionType.NETWORKING
    )
}

function getColClass(count) {
    if (count === 1) return 'col-12'
    if (count === 2) return 'col-md-6'
    if (count === 3) return 'col-lg-4 col-md-6'
    return 'col-lg-3 col-md-6'
}

const typeLabels = {
    registration: { en: 'Registration', pt: 'Credenciamento', es: 'Registro' },
    keynote: { en: 'Keynote', pt: 'Palestra Principal', es: 'Ponencia Principal' },
    workshop: { en: 'Workshop', pt: 'Workshop', es: 'Workshop' },
    tutorial: { en: 'Tutorial', pt: 'Tutorial', es: 'Tutorial' },
    panel: { en: 'Panel', pt: 'Painel', es: 'Panel' },
    'paper_session': { en: 'Short Papers', pt: 'Short Papers', es: 'Short Papers' },
    break: { en: 'Coffee Break', pt: 'Coffee Break', es: 'Receso' },
    lunch: { en: 'Lunch', pt: 'Almoço', es: 'Comida' },
    competition: { en: 'Competition', pt: 'Competição', es: 'Competencia' },
    colloquium: { en: 'Colloquium', pt: 'Colóquio', es: 'Coloquio' },
    networking: { en: 'Networking', pt: 'Networking', es: 'Networking' },
    other: { en: 'Other', pt: 'Outro', es: 'Otro' }
}
</script>

<template>
    <div class="alert alert-gradient-schedule d-flex align-items-center shadow-sm rounded-4 mb-4 p-4 border-0">
        <span class="me-3 flex-shrink-0" aria-hidden="true">
            <i class="fa-solid fa-calendar-days fa-2x text-white" aria-hidden="true"></i>
        </span>
        <div>
            <h2 class="text-white fs-5 mb-0 fw-bold">{{ getLocalizedText({ en: 'Event Schedule', pt: 'Agenda do Evento', es: 'Agenda del Evento' }) }}</h2>
            <span class="text-white-50" style="font-size: 0.95rem;">
                {{ getLocalizedText(scheduleData.edition) }} &bull; {{ getLocalizedText({ en: 'May 27–29, 2026', pt: '27 a 29 de maio de 2026', es: '27 al 29 de mayo de 2026' }) }}
                &bull; {{ getLocalizedText(scheduleData.venue) }}
            </span>
        </div>
    </div>

    <div class="d-flex flex-column flex-md-row justify-content-md-center gap-2 mb-4" role="tablist" :aria-label="getLocalizedText({ en: 'Schedule Days', pt: 'Dias da Agenda', es: 'Días de la Agenda' })">
        <button
            v-for="day in scheduleData.days"
            :key="day.id"
            @click="activeDay = day.id"
            role="tab"
            :aria-selected="activeDay === day.id"
            :aria-controls="'panel-' + day.id"
            :id="'tab-' + day.id"
            :tabindex="activeDay === day.id ? '0' : '-1'"
            class="btn rounded-pill px-3 py-2 shadow-sm w-100 w-md-auto"
            :class="activeDay === day.id ? 'bg-gradient-primary text-white' : 'btn-outline-secondary'"
        >
            <i class="fa-regular fa-calendar me-1" aria-hidden="true"></i> {{ getLocalizedText(day.label) }}
        </button>
    </div>

    <div v-if="currentDay" role="tabpanel" :id="'panel-' + currentDay.id" :aria-labelledby="'tab-' + currentDay.id" tabindex="0">

        <div v-if="currentDay.theme || currentDay.venue" class="d-flex flex-wrap gap-3 mb-3 align-items-center">
            <span v-if="currentDay.theme" class="badge rounded-pill px-3 py-2 bg-gradient-primary text-white" style="font-size: 0.85rem;">
                <i class="fa-solid fa-star me-1" aria-hidden="true"></i>{{ getLocalizedText(currentDay.theme) }}
            </span>
            <span v-if="currentDay.venue" class="text-muted" style="font-size: 0.85rem;">
                <i class="fa-solid fa-location-dot me-1" aria-hidden="true"></i>{{ getLocalizedText(currentDay.venue) }}
            </span>
        </div>

        <div
            v-for="(slot, slotIdx) in currentDay.timeSlots"
            :key="slotIdx"
            class="schedule-slot mb-4 mb-md-3"
        >
            <div class="d-flex flex-column flex-md-row align-items-start">
                <div class="schedule-time flex-shrink-0 text-md-end pe-md-3 pt-md-2 mb-2 mb-md-0" style="min-width: 110px;">
                    <span class="fw-bold text-sm text-dark">
                        <i class="fa-regular fa-clock me-1 d-md-none" aria-hidden="true"></i>{{ slot.time }}
                    </span>
                </div>

                <div class="flex-grow-1 w-100">
                    <div
                        v-if="isSimpleSlot(slot.sessions)"
                        class="card border-0 shadow-sm rounded-4 py-2 px-3"
                        :class="{ 'bg-light': slot.sessions[0].type === SessionType.BREAK || slot.sessions[0].type === SessionType.LUNCH }"
                    >
                        <div class="d-flex flex-column flex-sm-row align-items-start align-items-sm-center">
                            <div class="d-flex align-items-center mb-2 mb-sm-0">
                                <span
                                    class="icon icon-shape icon-sm rounded-circle text-white me-2 shadow-sm d-inline-flex align-items-center justify-content-center"
                                    :class="getConfig(slot.sessions[0].type).bgClass"
                                    aria-hidden="true"
                                >
                                    <i :class="getConfig(slot.sessions[0].type).icon" style="display: flex; align-items: center; justify-content: center; width: 100%; height: 100%;"></i>
                                </span>
                                <span class="fw-semibold text-dark">
                                    {{ getLocalizedText(slot.sessions[0].title) }}
                                </span>
                            </div>
                            <span class="ms-sm-auto badge bg-dark bg-opacity-75 text-white rounded-pill mt-2 mt-sm-0">
                                <i class="fa-solid fa-location-dot me-1" aria-hidden="true"></i>{{ getLocalizedText(slot.sessions[0].location) }}
                            </span>
                        </div>
                    </div>

                    <div v-else class="row g-3">
                        <div
                            v-for="(session, sIdx) in slot.sessions"
                            :key="sIdx"
                            :class="getColClass(slot.sessions.length)"
                        >
                            <div class="card border-0 shadow-sm rounded-4 h-100 session-card" :class="'session-' + session.type">
                                <div class="card-body p-3">
                                    <div class="d-flex flex-wrap align-items-center gap-1 mb-2">
                                        <span
                                            class="icon icon-shape icon-sm rounded-circle text-white shadow-sm d-inline-flex align-items-center justify-content-center flex-shrink-0"
                                            :class="getConfig(session.type).bgClass"
                                            aria-hidden="true"
                                        >
                                            <i :class="getConfig(session.type).icon" style="font-size: 0.7rem; display: flex; align-items: center; justify-content: center; width: 100%; height: 100%;"></i>
                                        </span>
                                        <span v-if="session.tag" class="badge rounded-pill text-white px-2 py-1" :class="getConfig(session.type).bgClass" style="font-size: 0.7rem; white-space: normal; text-align: left;">
                                            {{ getLocalizedText(session.tag) }}
                                        </span>
                                        <span v-if="session.continuation" class="badge bg-light border border-secondary text-dark rounded-pill" style="font-size: 0.65rem;">
                                            <i class="fa-solid fa-rotate-right me-1" aria-hidden="true"></i>{{ getLocalizedText({ en: 'cont.', pt: 'cont.', es: 'cont.' }) }}
                                        </span>
                                    </div>

                                    <h3 class="mb-1 fw-bold fs-6" style="font-size: 0.9rem !important;">
                                        {{ getLocalizedText(session.title) }}
                                    </h3>

                                    <p v-if="session.subtitle" class="text-muted mb-1" style="font-size: 0.8rem;">{{ getLocalizedText(session.subtitle) }}</p>
                                    <p v-if="session.speaker" class="mb-1" style="font-size: 0.85rem;">
                                        <i class="fa-solid fa-user-tie me-1 text-muted" aria-hidden="true"></i>
                                        <strong>{{ session.speaker }}</strong>
                                    </p>

                                    <div v-if="hasExpandableDetails(session)" class="session-details-summary mt-2">
                                        <p v-if="getSessionMeta(session)" class="text-muted mb-2" style="font-size: 0.78rem;">
                                            <i class="fa-solid fa-list-ul me-1" aria-hidden="true"></i>{{ getSessionMeta(session) }}
                                        </p>
                                        <button
                                            type="button"
                                            class="btn btn-sm btn-outline-secondary rounded-pill px-3"
                                            :aria-expanded="isSessionExpanded(currentDay.id, slotIdx, sIdx)"
                                            :aria-controls="'session-details-' + getSessionKey(currentDay.id, slotIdx, sIdx)"
                                            @click="toggleSession(currentDay.id, slotIdx, sIdx)"
                                        >
                                            <i
                                                class="fa-solid me-1"
                                                :class="isSessionExpanded(currentDay.id, slotIdx, sIdx) ? 'fa-chevron-up' : 'fa-chevron-down'"
                                                aria-hidden="true"
                                            ></i>
                                            {{ isSessionExpanded(currentDay.id, slotIdx, sIdx)
                                                ? getLocalizedText({ en: 'Hide details', pt: 'Ocultar detalhes', es: 'Ocultar detalles' })
                                                : getLocalizedText({ en: 'View details', pt: 'Ver detalhes', es: 'Ver detalles' }) }}
                                        </button>
                                    </div>

                                    <div
                                        v-if="hasExpandableDetails(session) && isSessionExpanded(currentDay.id, slotIdx, sIdx)"
                                        :id="'session-details-' + getSessionKey(currentDay.id, slotIdx, sIdx)"
                                        class="session-details mt-3 pt-3 border-top"
                                    >
                                        <p v-if="session.chair" class="mb-2" style="font-size: 0.8rem;">
                                            <i class="fa-solid fa-user me-1 text-muted" aria-hidden="true"></i>
                                            <span class="text-muted">{{ getLocalizedText({ en: 'Chair:', pt: 'Coordenação:', es: 'Coordinación:' }) }}</span>
                                            {{ session.chair }}
                                        </p>

                                        <div v-if="session.panelists && session.panelists.length" class="mb-2">
                                            <small class="text-muted d-block mb-1">
                                                <i class="fa-solid fa-users me-1" aria-hidden="true"></i>
                                                {{ getLocalizedText({ en: 'Panelists:', pt: 'Painelistas:', es: 'Ponentes:' }) }}
                                            </small>
                                            <ul class="list-unstyled mb-0 ps-1">
                                                <li v-for="(p, i) in session.panelists" :key="i" class="text-dark" style="font-size: 0.8rem; line-height: 1.5;">
                                                    <i class="fa-solid fa-circle-dot me-1 text-muted" style="font-size: 0.5rem; vertical-align: middle;" aria-hidden="true"></i>{{ p }}
                                                </li>
                                            </ul>
                                        </div>

                                        <p v-if="session.moderator" class="mb-2" style="font-size: 0.8rem;">
                                            <i class="fa-solid fa-gavel me-1 text-muted" aria-hidden="true"></i>
                                            <span class="text-muted">{{ getLocalizedText({ en: 'Moderator:', pt: 'Moderação:', es: 'Moderación:' }) }}</span>
                                            {{ session.moderator }}
                                        </p>

                                        <div v-if="session.papers && session.papers.length" class="mt-2">
                                            <div v-for="(paper, pIdx) in session.papers" :key="pIdx" class="d-flex mb-2" style="font-size: 0.78rem;">
                                                <span v-if="paper.time" class="text-dark fw-bold me-2 flex-shrink-0">{{ paper.time }} -</span>
                                                <span v-else class="text-muted me-1 flex-shrink-0">{{ pIdx + 1 }})</span>
                                                <div>
                                                    <span class="fw-semibold">{{ paper.title }}</span>
                                                    <br v-if="paper.authors" /><span v-if="paper.authors" class="text-muted fst-italic">{{ paper.authors }}</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div v-if="session.description" class="mt-1">
                                            <small class="text-muted fst-italic">{{ getLocalizedText(session.description) }}</small>
                                        </div>
                                    </div>
                                </div>

                                <div class="card-footer bg-transparent border-top px-3 py-2">
                                    <span class="badge bg-dark bg-opacity-75 text-white rounded-pill" style="font-size: 0.75rem;">
                                        <i class="fa-solid fa-location-dot me-1" aria-hidden="true"></i>{{ getLocalizedText(session.location) }}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="mt-4 p-3 bg-light rounded-4 border">
        <div class="d-flex flex-wrap gap-2 align-items-center">
            <span class="text-dark fw-bold me-2" style="font-size: 0.85rem;">
                <i class="fa-solid fa-palette me-1" aria-hidden="true"></i>{{ getLocalizedText({ en: 'Legend:', pt: 'Legenda:', es: 'Leyenda:' }) }}
            </span>
            <span v-for="(config, type) in sessionConfig" :key="type" class="badge rounded-pill text-white px-2 py-1" :class="config.bgClass" style="font-size: 0.7rem;">
                <i :class="config.icon" class="me-1" aria-hidden="true"></i>{{ getLocalizedText(typeLabels[type] || { en: type, pt: type, es: type }) }}
            </span>
        </div>
    </div>
</template>

<style scoped>
.alert-gradient-schedule {
    background: linear-gradient(135deg, #5C8455 0%, #3d6b38 100%);
}

.bg-gradient-primary {
    background: linear-gradient(135deg, #5C8455 0%, #3d6b38 100%);
}

.bg-workshop {
    background: linear-gradient(135deg, #e67e22 0%, #d35400 100%);
}

.bg-tutorial {
    background: linear-gradient(135deg, #8e44ad 0%, #6c3483 100%);
}

.bg-panel {
    background: linear-gradient(135deg, #2980b9 0%, #1a5276 100%);
}

.bg-papers {
    background: linear-gradient(135deg, #c0392b 0%, #922b21 100%);
}

.bg-break {
    background: linear-gradient(135deg, #7f8c8d 0%, #616a6b 100%);
}

.bg-registration {
    background: linear-gradient(135deg, #16a085 0%, #0e6655 100%);
}

.bg-competition {
    background: linear-gradient(135deg, #f39c12 0%, #d68910 100%);
}

.bg-colloquium {
    background: linear-gradient(135deg, #2c3e50 0%, #1a252f 100%);
}

.bg-networking {
    background: linear-gradient(135deg, #1abc9c 0%, #16a085 100%);
}

.bg-other {
    background: linear-gradient(135deg, #95a5a6 0%, #7f8c8d 100%);
}

.schedule-slot:hover .card {
    transform: translateY(-1px);
    transition: transform 0.2s ease;
}

.session-card {
    transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.session-card:hover {
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.08) !important;
}

.session-details-summary .btn {
    font-size: 0.78rem;
    border-color: rgba(108, 117, 125, 0.35);
}

.session-details {
    animation: fadeInDetails 0.2s ease;
}

@keyframes fadeInDetails {
    from {
        opacity: 0;
        transform: translateY(-4px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>
