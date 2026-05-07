export const SessionType = {
    REGISTRATION: 'registration',
    KEYNOTE: 'keynote',
    WORKSHOP: 'workshop',
    TUTORIAL: 'tutorial',
    PANEL: 'panel',
    PAPER_SESSION: 'paper_session',
    BREAK: 'break',
    LUNCH: 'lunch',
    COMPETITION: 'competition',
    COLLOQUIUM: 'colloquium',
    NETWORKING: 'networking',
    OTHER: 'other'
}

// SDC poster teams (shown in Day 1 afternoon & Day 2 vestíbulo)
const sdcTeams = [
    { title: 'CareBites: Plataforma Digital para la Reducción del Desperdicio Alimentario' },
    { title: '¿Qué hongo?: transmisión y preservación de saberes locales sobre diversidad fúngica mediante herramientas educativas digitales' },
    { title: 'Kói xíun: Sistema de monitoreo de personas con demencia para la reducción de sobrecarga del cuidador' },
    { title: 'Preservación digital del patrimonio cultural comunitario mediante una plataforma interactiva' },
    { title: 'Diseño de un Sistema Portátil IoMT para el Monitoreo Biométrico y Asistencia Geriátrica' },
    { title: 'Diseño de una solución tecnológica para disminuir la sensación de vulnerabilidad en trayectos y espacios cotidianos' }
]

const shortPapers = [
    { title: 'Designing Nonverbal Responses to Healthcare Robot Navigation Errors Through Performer-Based Enactments' },
    { title: 'Designing an AI-Assisted Speech-Based Interactive System for Home-Based Sentence Practice for Children' },
    { title: 'Brechas comunicacionales y satisfacción estudiantil: requerimientos para una plataforma académica centrada en el usuario' },
    { title: 'Diseño de interacción activa en aplicaciones de estimulación lingüística para niños de educación primaria a partir de evidencia contextual en HCI' },
    { title: 'Hacia la Evolución de la GUI Desktop: IA Centrada en el Humano como Paradigma para Repensar la Interacción con Sistemas Operativos' },
    { title: 'Use of Augmented Reality in a Pop-Up Book to Promote the Artistic Work of Rufino Tamayo' },
    { title: 'Propuestas de entornos inmersivos para el estudio autónomo universitario a través de un proceso de diseño centrado en el usuario' }
]

export const scheduleData = {
    edition: 'CLIHC 2026 - México',
    venue: 'Colima, México',
    timezone: 'CST (UTC-6)',
    days: [
        // ─── DÍA 1: miércoles 27 de mayo ───────────────────────────────────────────
        {
            id: 'day1',
            date: '2026-05-27',
            label: {
                en: 'Wed, May 27',
                pt: 'Qua, 27 de maio',
                es: 'Mié, 27 de mayo'
            },
            theme: null,
            venue: {
                en: 'Centro Gastronómico',
                pt: 'Centro Gastronómico',
                es: 'Centro Gastronómico'
            },
            timeSlots: [
                {
                    time: '09:00 - 10:00',
                    sessions: [
                        {
                            location: { en: 'Salón 1', pt: 'Salão 1', es: 'Salón 1' },
                            type: SessionType.OTHER,
                            tag: { en: 'Opening', pt: 'Abertura', es: 'Inauguración' },
                            title: {
                                en: 'Opening Ceremony & Welcome Reception',
                                pt: 'Abertura e Recepção de Boas-Vindas',
                                es: 'Inauguración y Recepción'
                            }
                        }
                    ]
                },
                {
                    time: '10:00 - 14:00',
                    sessions: [
                        {
                            location: { en: 'Salón 1', pt: 'Salão 1', es: 'Salón 1' },
                            type: SessionType.TUTORIAL,
                            tag: { en: 'Tutorial 1', pt: 'Tutorial 1', es: 'Tutorial 1' },
                            title: {
                                en: 'Tutorial: Juan Pablo Hourcade',
                                pt: 'Tutorial: Juan Pablo Hourcade',
                                es: 'Tutorial: Juan Pablo Hourcade'
                            },
                            speaker: 'Juan Pablo Hourcade'
                        },
                        {
                            location: { en: 'Salón 2', pt: 'Salão 2', es: 'Salón 2' },
                            type: SessionType.TUTORIAL,
                            tag: { en: 'Tutorial 3', pt: 'Tutorial 3', es: 'Tutorial 3' },
                            title: {
                                en: 'Tutorial: Abraham Tonix',
                                pt: 'Tutorial: Abraham Tonix',
                                es: 'Tutorial: Abraham Tonix'
                            },
                            speaker: 'Abraham Tonix'
                        },
                        {
                            location: { en: 'Salón 3', pt: 'Salão 3', es: 'Salón 3' },
                            type: SessionType.WORKSHOP,
                            tag: { en: 'Hackathon', pt: 'Hackathon', es: 'Hackathon' },
                            title: {
                                en: 'Hackathon Workshop',
                                pt: 'Workshop Hackathon',
                                es: 'Taller Hackathon'
                            },
                            subtitle: {
                                en: '14 teams of 4 members',
                                pt: '14 equipes de 4 integrantes',
                                es: '14 equipos de 4 integrantes'
                            }
                        }
                    ]
                },
                {
                    time: '14:00 - 15:00',
                    sessions: [
                        {
                            location: { en: 'Common area', pt: 'Área comum', es: 'Área común' },
                            type: SessionType.LUNCH,
                            title: { en: 'Lunch', pt: 'Almoço', es: 'Comida' }
                        }
                    ]
                },
                {
                    time: '15:00 - 18:00',
                    sessions: [
                        {
                            location: { en: 'Salón 1', pt: 'Salão 1', es: 'Salón 1' },
                            type: SessionType.TUTORIAL,
                            tag: { en: 'Tutorial 2', pt: 'Tutorial 2', es: 'Tutorial 2' },
                            title: {
                                en: 'Tutorial: Hendrix',
                                pt: 'Tutorial: Hendrix',
                                es: 'Tutorial: Hendrix'
                            },
                            speaker: 'Hendrix'
                        },
                        {
                            location: { en: 'Salón 2', pt: 'Salão 2', es: 'Salón 2' },
                            type: SessionType.TUTORIAL,
                            tag: { en: 'Tutorial 3', pt: 'Tutorial 3', es: 'Tutorial 3' },
                            title: {
                                en: 'Tutorial: Abraham Tonix',
                                pt: 'Tutorial: Abraham Tonix',
                                es: 'Tutorial: Abraham Tonix'
                            },
                            speaker: 'Abraham Tonix',
                            continuation: true
                        },
                        {
                            location: { en: 'Salón 3', pt: 'Salão 3', es: 'Salón 3' },
                            type: SessionType.COMPETITION,
                            tag: { en: 'SDC – Posters', pt: 'CDE – Pôsteres', es: 'SDC – Pósters' },
                            title: {
                                en: 'Student Design Competition – Poster Session',
                                pt: 'Competição de Design Estudantil – Sessão de Pôsteres',
                                es: 'Competencia de Diseño Estudiantil – Sesión de Pósters'
                            },
                            papers: sdcTeams
                        }
                    ]
                }
            ]
        },

        // ─── DÍA 2: jueves 28 de mayo ──────────────────────────────────────────────
        {
            id: 'day2',
            date: '2026-05-28',
            label: {
                en: 'Thu, May 28',
                pt: 'Qui, 28 de maio',
                es: 'Jue, 28 de mayo'
            },
            theme: {
                en: 'Theme: Gender Equality',
                pt: 'Temática: Igualdade de Gênero',
                es: 'Temática: Igualdad de Género'
            },
            venue: {
                en: 'Convention Center – Multipurpose Hall',
                pt: 'Centro de Convenções – Salão Multifuncional',
                es: 'Centro de Convenciones – Salón Multifuncional'
            },
            timeSlots: [
                {
                    time: '09:00 - 10:00',
                    sessions: [
                        {
                            location: { en: 'Salón 5', pt: 'Salão 5', es: 'Salón 5' },
                            type: SessionType.OTHER,
                            tag: { en: 'Opening', pt: 'Abertura', es: 'Inauguración' },
                            title: {
                                en: 'Opening Ceremony',
                                pt: 'Cerimônia de Abertura',
                                es: 'Inauguración'
                            }
                        }
                    ]
                },
                {
                    time: '10:00 - 11:00',
                    sessions: [
                        {
                            location: { en: 'Salón 5', pt: 'Salão 5', es: 'Salón 5' },
                            type: SessionType.KEYNOTE,
                            tag: { en: 'Keynote', pt: 'Palestra Principal', es: 'Keynote' },
                            title: {
                                en: 'Keynote: Juan Pablo Hourcade',
                                pt: 'Palestra Principal: Juan Pablo Hourcade',
                                es: 'Keynote: Juan Pablo Hourcade'
                            },
                            speaker: 'Juan Pablo Hourcade'
                        }
                    ]
                },
                // 11:00 – 12:00: Short Papers | Hackathon | Feria+Pósters | Panel
                {
                    time: '11:00 - 12:00',
                    sessions: [
                        {
                            location: { en: 'Salón 5', pt: 'Salão 5', es: 'Salón 5' },
                            type: SessionType.PAPER_SESSION,
                            tag: {
                                en: 'Short Papers',
                                pt: 'Short Papers',
                                es: 'Short Papers'
                            },
                            title: {
                                en: 'Short Papers & Graduate Consortium',
                                pt: 'Short Papers e Consórcio de Pós-Graduação',
                                es: 'Short Papers y Consorcio de Posgrado'
                            },
                            papers: shortPapers
                        },
                        {
                            location: { en: 'Salón 4', pt: 'Salão 4', es: 'Salón 4' },
                            type: SessionType.WORKSHOP,
                            tag: { en: 'Hackathon', pt: 'Hackathon', es: 'Hackathon' },
                            title: {
                                en: 'Hackathon Workshop',
                                pt: 'Workshop Hackathon',
                                es: 'Taller Hackathon'
                            },
                            continuation: true
                        },
                        {
                            location: { en: 'Lobby', pt: 'Vestíbulo', es: 'Vestíbulo' },
                            type: SessionType.OTHER,
                            tag: {
                                en: 'Posters & Fair',
                                pt: 'Pôsteres e Feira',
                                es: 'Pósters y Feria'
                            },
                            title: {
                                en: 'SDC Poster Exhibition & Education Fair',
                                pt: 'Exposição de Pôsteres SDC e Feira Educativa',
                                es: 'Exposición de Pósters SDC y Feria Educativa'
                            },
                            papers: sdcTeams
                        },
                        {
                            location: {
                                en: 'Multipurpose Hall',
                                pt: 'Salão Multifuncional',
                                es: 'Salón Multifuncional'
                            },
                            type: SessionType.PANEL,
                            tag: { en: 'Panel', pt: 'Painel', es: 'Panel' },
                            title: {
                                en: 'Women Who Design: Experiences, Challenges & Realities in UX/UI',
                                pt: 'Mulheres que Projetam: Experiências, Desafios e Realidades em UX/UI',
                                es: 'Mujeres que diseñan: experiencias, retos y realidades en UX/UI'
                            },
                            panelists: [
                                'M.C. María del Rosario Peralta Calvo',
                                'Alejandra Dueñas',
                                'Por confirmar – Agencia de Tecnologías'
                            ],
                            moderator: 'Odile Juárez'
                        }
                    ]
                },
                // 12:00 – 14:00: Short Papers cont | Hackathon cont | Pósters cont | SDC Presentations
                {
                    time: '12:00 - 14:00',
                    sessions: [
                        {
                            location: { en: 'Salón 5', pt: 'Salão 5', es: 'Salón 5' },
                            type: SessionType.PAPER_SESSION,
                            tag: { en: 'Short Papers', pt: 'Short Papers', es: 'Short Papers' },
                            title: {
                                en: 'Short Papers & Graduate Consortium',
                                pt: 'Short Papers e Consórcio de Pós-Graduação',
                                es: 'Short Papers y Consorcio de Posgrado'
                            },
                            continuation: true
                        },
                        {
                            location: { en: 'Salón 4', pt: 'Salão 4', es: 'Salón 4' },
                            type: SessionType.WORKSHOP,
                            tag: { en: 'Hackathon', pt: 'Hackathon', es: 'Hackathon' },
                            title: {
                                en: 'Hackathon Workshop',
                                pt: 'Workshop Hackathon',
                                es: 'Taller Hackathon'
                            },
                            continuation: true
                        },
                        {
                            location: { en: 'Lobby', pt: 'Vestíbulo', es: 'Vestíbulo' },
                            type: SessionType.OTHER,
                            tag: {
                                en: 'Posters & Fair',
                                pt: 'Pôsteres e Feira',
                                es: 'Pósters y Feria'
                            },
                            title: {
                                en: 'SDC Poster Exhibition & Education Fair',
                                pt: 'Exposição de Pôsteres SDC e Feira Educativa',
                                es: 'Exposición de Pósters SDC y Feria Educativa'
                            },
                            continuation: true
                        },
                        {
                            location: {
                                en: 'Multipurpose Hall',
                                pt: 'Salão Multifuncional',
                                es: 'Salón Multifuncional'
                            },
                            type: SessionType.COMPETITION,
                            tag: { en: 'SDC – Presentations', pt: 'CDE – Apresentações', es: 'SDC – Presentaciones' },
                            title: {
                                en: 'Student Design Competition – Presentations',
                                pt: 'Competição de Design Estudantil – Apresentações',
                                es: 'Competencia de Diseño Estudiantil – Presentaciones'
                            },
                            papers: [
                                { title: 'Equipo 1' },
                                { title: 'Equipo 2' },
                                { title: 'Equipo 3' },
                                { title: 'Equipo 4' }
                            ]
                        }
                    ]
                },
                {
                    time: '14:00 - 15:00',
                    sessions: [
                        {
                            location: { en: 'Common area', pt: 'Área comum', es: 'Área común' },
                            type: SessionType.LUNCH,
                            title: { en: 'Lunch', pt: 'Almoço', es: 'Comida' }
                        }
                    ]
                },
                {
                    time: '15:00 - 18:00',
                    sessions: [
                        {
                            location: { en: 'Salón 4', pt: 'Salão 4', es: 'Salón 4' },
                            type: SessionType.WORKSHOP,
                            tag: { en: 'Hackathon', pt: 'Hackathon', es: 'Hackathon' },
                            title: {
                                en: 'Hackathon Competition',
                                pt: 'Competição Hackathon',
                                es: 'Hackathon – Competencia'
                            }
                        }
                    ]
                },
                {
                    time: '19:00 - 20:00',
                    sessions: [
                        {
                            location: {
                                en: 'Centro Gastronómico',
                                pt: 'Centro Gastronómico',
                                es: 'Centro Gastronómico'
                            },
                            type: SessionType.NETWORKING,
                            tag: { en: 'Social Event', pt: 'Evento Social', es: 'Evento Social' },
                            title: {
                                en: 'Welcome Dinner & Calenda',
                                pt: 'Jantar de Boas-Vindas e Calenda',
                                es: 'Cena de Bienvenida y Calenda'
                            }
                        }
                    ]
                }
            ]
        },

        // ─── DÍA 3: viernes 29 de mayo ─────────────────────────────────────────────
        {
            id: 'day3',
            date: '2026-05-29',
            label: {
                en: 'Fri, May 29',
                pt: 'Sex, 29 de maio',
                es: 'Vie, 29 de mayo'
            },
            theme: {
                en: 'Theme: Inclusion',
                pt: 'Temática: Inclusão',
                es: 'Temática: Inclusión'
            },
            venue: {
                en: 'Convention Center – Multipurpose Hall',
                pt: 'Centro de Convenções – Salão Multifuncional',
                es: 'Centro de Convenciones – Salón Multifuncional'
            },
            timeSlots: [
                {
                    time: '09:00 - 10:00',
                    sessions: [
                        {
                            location: {
                                en: 'Multipurpose Hall',
                                pt: 'Salão Multifuncional',
                                es: 'Salón Multifuncional'
                            },
                            type: SessionType.KEYNOTE,
                            tag: { en: 'Keynote', pt: 'Palestra Principal', es: 'Keynote' },
                            title: {
                                en: 'Keynote: Odile Juárez – Mamá Tech',
                                pt: 'Palestra Principal: Odile Juárez – Mamá Tech',
                                es: 'Keynote: Odile Juárez – Mamá Tech'
                            },
                            speaker: 'Odile Juárez'
                        }
                    ]
                },
                {
                    time: '10:00 - 11:00',
                    sessions: [
                        {
                            location: {
                                en: 'Multipurpose Hall',
                                pt: 'Salão Multifuncional',
                                es: 'Salón Multifuncional'
                            },
                            type: SessionType.OTHER,
                            tag: { en: 'Talk', pt: 'Palestra', es: 'Conferencia' },
                            title: {
                                en: 'Talk 1: Vicman',
                                pt: 'Palestra 1: Vicman',
                                es: 'Conferencia 1: Vicman'
                            },
                            speaker: 'Vicman'
                        }
                    ]
                },
                {
                    time: '11:00 - 12:00',
                    sessions: [
                        {
                            location: {
                                en: 'Multipurpose Hall',
                                pt: 'Salão Multifuncional',
                                es: 'Salón Multifuncional'
                            },
                            type: SessionType.OTHER,
                            tag: { en: 'Talk', pt: 'Palestra', es: 'Conferencia' },
                            title: {
                                en: 'Talk 2: David Soto – Walmart',
                                pt: 'Palestra 2: David Soto – Walmart',
                                es: 'Conferencia 2: David Soto – Walmart'
                            },
                            speaker: 'David Soto',
                            subtitle: { en: 'Walmart', pt: 'Walmart', es: 'Walmart' }
                        }
                    ]
                },
                {
                    time: '12:00 - 13:00',
                    sessions: [
                        {
                            location: {
                                en: 'Multipurpose Hall',
                                pt: 'Salão Multifuncional',
                                es: 'Salón Multifuncional'
                            },
                            type: SessionType.OTHER,
                            tag: { en: 'Talk', pt: 'Palestra', es: 'Conferencia' },
                            title: {
                                en: 'Talk 3: Isac Mancera',
                                pt: 'Palestra 3: Isac Mancera',
                                es: 'Conferencia 3: Isac Mancera'
                            },
                            speaker: 'Isac Mancera'
                        }
                    ]
                },
                {
                    time: '13:00 - 14:00',
                    sessions: [
                        {
                            location: {
                                en: 'Multipurpose Hall',
                                pt: 'Salão Multifuncional',
                                es: 'Salón Multifuncional'
                            },
                            type: SessionType.COMPETITION,
                            tag: { en: 'SDC – Final', pt: 'CDE – Final', es: 'SDC – Final' },
                            title: {
                                en: 'Student Design Competition – Final',
                                pt: 'Competição de Design Estudantil – Final',
                                es: 'Competencia de Diseño Estudiantil – Final'
                            },
                            papers: [
                                { title: 'Equipo 1 – México' },
                                { title: 'Equipo 1 – Brasil' }
                            ]
                        }
                    ]
                },
                {
                    time: '14:00 - 15:00',
                    sessions: [
                        {
                            location: {
                                en: 'Multipurpose Hall',
                                pt: 'Salão Multifuncional',
                                es: 'Salón Multifuncional'
                            },
                            type: SessionType.OTHER,
                            tag: { en: 'Closing', pt: 'Encerramento', es: 'Clausura' },
                            title: {
                                en: 'Closing Ceremony',
                                pt: 'Cerimônia de Encerramento',
                                es: 'Clausura'
                            }
                        }
                    ]
                }
            ]
        }
    ]
}
