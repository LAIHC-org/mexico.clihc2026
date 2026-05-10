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

const sdcPosterTeams = [
    { title: 'CareBites: Plataforma Digital para la Reducción del Desperdicio Alimentario. Barbara Daria Rivera-Anguiano, Arianna Monserratt Hurtado-Ramos, Fernanda Nataly Iglesias-Rincón, Silvia Berenice Fajardo-Flores' },
    { title: '¿Qué hongo?: transmisión y preservación de saberes locales sobre diversidad fúngica mediante herramientas educativas digitales. Claudia Torillo, Victor Hugo Sánchez, Luciana Bretón' },
    { title: 'Kói xíun: Sistema de monitoreo de personas con demencia para la reducción de sobrecarga del cuidador. Thelma García Reyes, Adriana Alejandra Hernandez Ricardez, Kevin García, Kevy García, Luis Mario Espinosa Ortiz, Nicolas Soriano Martinez' },
    { title: 'Preservación digital del patrimonio cultural comunitario mediante una plataforma interactiva. Jose Armando Garcia Bandera, Keila Reyes Martínez, Aldo Gabriel De la Rosa Jiménez, Iris Labastida Martínez' },
    { title: 'Diseño de un Sistema Portátil IoMT para el Monitoreo Biométrico y Asistencia Geriátrica. Danna Colin, Ariadna Espina Ramirez, Ricardo Lopez Jimenez, Tlacaelel Salazar Martinez, David Del Castillo Lale' },
    { title: 'Diseño de una solución tecnológica para disminuir la sensación de vulnerabilidad en trayectos y espacios cotidianos. Valeria Rodrígez, Patricia Cruz, Itzel Lorena Medrano Perez, Mauricio Osorio, Moises Ramirez, Yoosavi Yoosavi Sánchez' }
]

const shortPapersAndColloquium = [
    { title: 'Designing Nonverbal Responses to Healthcare Robot Navigation Errors Through Performer-Based Enactments. Hideki Garcia Goo (University of Twente), Vanessa Evers' },
    { title: 'Designing an AI-Assisted Speech-Based Interactive System for Home-Based Sentence Practice for Children. Elizabeth Wiafe (Dalhousie University), Frank Rudzicz (Dalhousie University), Lizbeth Escobedo (Dalhousie University, Faculty of Computer Science)' },
    { title: 'Brechas comunicacionales y satisfacción estudiantil: requerimientos para una plataforma académica centrada en el usuario. Karla Stephania Sanchez Silva (Universidad Tecnológica de la Mixteca), Mario Alberto Moreno Rocha (Universidad Tecnológica de la Mixteca), Conrado Aguilar Cruz' },
    { title: 'Diseño de interacción activa en aplicaciones de estimulación lingüística para niños de educación primaria a partir de evidencia contextual en HCI. Adriana Alejandra Hernandez Ricardez (Universidad Tecnológica de la Mixteca)' },
    { title: 'Hacia la Evolución de la GUI Desktop: IA Centrada en el Humano como Paradigma para Repensar la Interacción con Sistemas Operativos. Jose Ramon Aragon Toledo (Universidad Tecnológica de la Mixteca), Ricardo Ruíz Rodríguez' },
    { title: 'Use of Augmented Reality in a Pop-Up Book to Promote the Artistic Work of Rufino Tamayo. Edna Patricia Quezada (Instituto Politecnico Nacional)' },
    { title: 'Propuestas de entornos inmersivos para el estudio autónomo universitario a través de un proceso de diseño centrado en el usuario. Luis Mario Espinosa Ortiz (Universidad Tecnológica de la Mixteca), Mario Alberto Moreno Rocha (Universidad Tecnologica de la Mixteca)' },
    { title: 'Consorcio de Posgrado: Structured Human-AI Collaboration as an Implementation Methodology for Learning Analytics in a Latin American Public University Context. Miguel Ángel Rodríguez-Ortiz, Luis E. Anido-Rifón, Pedro C. Santana-Mancilla' }
]

export const scheduleData = {
    edition: {
        en: 'CLIHC 2026 - Mexico',
        pt: 'CLIHC 2026 - México',
        es: 'CLIHC 2026 - México'
    },
    venue: {
        en: 'Oaxaca, Mexico',
        pt: 'Oaxaca, México',
        es: 'Oaxaca, México'
    },
    timezone: 'CST (UTC-6)',
    days: [
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
                pt: 'Centro Gastronômico',
                es: 'Centro Gastronómico'
            },
            timeSlots: [
                {
                    time: '09:00 - 10:00',
                    sessions: [
                        {
                            location: { en: 'Salón 1', pt: 'Salão 1', es: 'Salón 1' },
                            type: SessionType.REGISTRATION,
                            tag: { en: 'Opening', pt: 'Abertura', es: 'Inauguración' },
                            title: {
                                en: 'Opening and Registration',
                                pt: 'Abertura e credenciamento',
                                es: 'Inauguración y registro'
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
                                en: 'Designing for children with their development in mind',
                                pt: 'Projetando para crianças levando em conta seu desenvolvimento',
                                es: 'Diseñando para niños teniendo en cuenta su desarrollo'
                            },
                            speaker: 'Dr. Juan Pablo Hourcade',
                            subtitle: {
                                en: 'University of Iowa',
                                pt: 'University of Iowa',
                                es: 'University of Iowa'
                            }
                        },
                        {
                            location: { en: 'Salón 2', pt: 'Salão 2', es: 'Salón 2' },
                            type: SessionType.TUTORIAL,
                            tag: { en: 'Tutorial 3', pt: 'Tutorial 3', es: 'Tutorial 3' },
                            title: {
                                en: 'Invisible Users: hidden archetypes and design externalities in technological ecosystems',
                                pt: 'Usuários invisíveis: arquétipos ocultos e externalidades do design em ecossistemas tecnológicos',
                                es: 'Usuarios invisibles: arquetipos ocultos y externalidades del diseño en ecosistemas tecnológicos'
                            },
                            speaker: 'Abraham Tonix'
                        },
                        {
                            location: { en: 'Salón 3', pt: 'Salão 3', es: 'Salón 3' },
                            type: SessionType.WORKSHOP,
                            tag: { en: 'Hackathon Workshop', pt: 'Workshop Hackathon', es: 'Taller Hackatón' },
                            title: {
                                en: 'Hackathon Workshop',
                                pt: 'Workshop Hackathon',
                                es: 'Taller Hackatón'
                            },
                            speaker: 'Eduardo Torres Jaime',
                            subtitle: {
                                en: 'CEO, Loop Conexión Empresarial',
                                pt: 'CEO, Loop Conexión Empresarial',
                                es: 'CEO, Loop Conexión Empresarial'
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
                                en: 'Software development with artificial intelligence tools',
                                pt: 'Desenvolvimento de software com ferramentas de inteligência artificial',
                                es: 'Desarrollo de software con herramientas de inteligencia artificial'
                            },
                            speaker: 'Hendrik Martina',
                            subtitle: {
                                en: 'Artesanos Digitales',
                                pt: 'Artesanos Digitales',
                                es: 'Artesanos Digitales'
                            }
                        },
                        {
                            location: { en: 'Salón 2', pt: 'Salão 2', es: 'Salón 2' },
                            type: SessionType.TUTORIAL,
                            tag: { en: 'Tutorial 3', pt: 'Tutorial 3', es: 'Tutorial 3' },
                            title: {
                                en: 'Invisible Users: hidden archetypes and design externalities in technological ecosystems',
                                pt: 'Usuários invisíveis: arquétipos ocultos e externalidades do design em ecossistemas tecnológicos',
                                es: 'Usuarios invisibles: arquetipos ocultos y externalidades del diseño en ecosistemas tecnológicos'
                            },
                            speaker: 'Abraham Tonix',
                            continuation: true
                        },
                        {
                            location: { en: 'Salón 3', pt: 'Salão 3', es: 'Salón 3' },
                            type: SessionType.COMPETITION,
                            tag: { en: 'SDC Posters', pt: 'Pôsteres CDE', es: 'Pósters SDC' },
                            title: {
                                en: 'Student Design Competition Poster Session',
                                pt: 'Sessão de pôsteres da Competição de Design Estudantil',
                                es: 'Sesión de pósters de la Competencia de Diseño Estudiantil'
                            },
                            papers: sdcPosterTeams
                        }
                    ]
                }
            ]
        },
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
                en: 'Convention Center - Multipurpose Hall',
                pt: 'Centro de Convenções - Salão Multifuncional',
                es: 'Centro de Convenciones - Salón Multifuncional'
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
                                pt: 'Cerimônia de abertura',
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
                            tag: { en: 'Keynote', pt: 'Palestra principal', es: 'Conferencia magistral' },
                            title: {
                                en: 'Human factors, computing, and children',
                                pt: 'Fatores humanos, informática e crianças',
                                es: 'Factores humanos, informática y niños'
                            },
                            speaker: 'Dr. Juan Pablo Hourcade'
                        }
                    ]
                },
                {
                    time: '11:00 - 12:00',
                    sessions: [
                        {
                            location: { en: 'Salón 5', pt: 'Salão 5', es: 'Salón 5' },
                            type: SessionType.PAPER_SESSION,
                            tag: { en: 'Short Papers and Graduate Colloquium', pt: 'Short Papers e Colóquio de Pós-Graduação', es: 'Short Papers y Consorcio de Posgrado' },
                            title: {
                                en: 'Short Papers and Graduate Colloquium',
                                pt: 'Short Papers e Colóquio de Pós-Graduação',
                                es: 'Short Papers y Consorcio de Posgrado'
                            },
                            papers: shortPapersAndColloquium
                        },
                        {
                            location: { en: 'Salón 4', pt: 'Salão 4', es: 'Salón 4' },
                            type: SessionType.WORKSHOP,
                            tag: { en: 'Hackathon Workshop', pt: 'Workshop Hackathon', es: 'Taller Hackatón' },
                            title: {
                                en: 'Hackathon Workshop',
                                pt: 'Workshop Hackathon',
                                es: 'Taller Hackatón'
                            },
                            continuation: true
                        },
                        {
                            location: { en: 'Lobby', pt: 'Vestíbulo', es: 'Vestíbulo' },
                            type: SessionType.OTHER,
                            tag: { en: 'Vocational Fair', pt: 'Feira vocacional', es: 'Feria vocacional' },
                            title: {
                                en: 'Vocational Fair',
                                pt: 'Feira vocacional',
                                es: 'Feria vocacional'
                            }
                        },
                        {
                            location: { en: 'Poster area', pt: 'Área de pôsteres', es: 'Área de pósters' },
                            type: SessionType.COMPETITION,
                            tag: { en: 'Poster Presentation', pt: 'Apresentação de pôsteres', es: 'Presentación de pósters' },
                            title: {
                                en: 'Poster Presentation',
                                pt: 'Apresentação de pôsteres',
                                es: 'Presentación de pósters'
                            },
                            papers: [
                                ...sdcPosterTeams,
                                { title: 'Construcción y validación de un instrumento para medir la presencia de patrones oscuros en productos digitales. Jhon Alexander Garcia Camargo' }
                            ]
                        },
                        {
                            location: { en: 'Multipurpose Hall', pt: 'Salão Multifuncional', es: 'Salón Multifuncional' },
                            type: SessionType.PANEL,
                            tag: { en: 'Panel', pt: 'Painel', es: 'Panel' },
                            title: {
                                en: 'Women who design: experiences, challenges, and realities in UX/UI',
                                pt: 'Mulheres que projetam: experiências, desafios e realidades em UX/UI',
                                es: 'Mujeres que diseñan: experiencias, retos y realidades en UX/UI'
                            },
                            panelists: [
                                'M.C. María del Rosario Peralta Calvo (Universidad de la Cañada)',
                                'Alejandra Dueñas (Escuela de Diseño del INBA, EDINBA)',
                                'Por confirmar - Agencia de Tecnologías e Innovación Digital (ATID Oax)'
                            ],
                            moderator: 'Odile Juárez (Mamá Tech, CEO & Co. Founder Mayordomm)'
                        }
                    ]
                },
                {
                    time: '12:00 - 14:00',
                    sessions: [
                        {
                            location: { en: 'Salón 5', pt: 'Salão 5', es: 'Salón 5' },
                            type: SessionType.PAPER_SESSION,
                            tag: { en: 'Short Papers and Graduate Colloquium', pt: 'Short Papers e Colóquio de Pós-Graduação', es: 'Short Papers y Consorcio de Posgrado' },
                            title: {
                                en: 'Short Papers and Graduate Colloquium',
                                pt: 'Short Papers e Colóquio de Pós-Graduação',
                                es: 'Short Papers y Consorcio de Posgrado'
                            },
                            continuation: true
                        },
                        {
                            location: { en: 'Salón 4', pt: 'Salão 4', es: 'Salón 4' },
                            type: SessionType.WORKSHOP,
                            tag: { en: 'Hackathon Workshop', pt: 'Workshop Hackathon', es: 'Taller Hackatón' },
                            title: {
                                en: 'Hackathon Workshop',
                                pt: 'Workshop Hackathon',
                                es: 'Taller Hackatón'
                            },
                            continuation: true
                        },
                        {
                            location: { en: 'Lobby', pt: 'Vestíbulo', es: 'Vestíbulo' },
                            type: SessionType.OTHER,
                            tag: { en: 'Vocational Fair', pt: 'Feira vocacional', es: 'Feria vocacional' },
                            title: {
                                en: 'Vocational Fair',
                                pt: 'Feira vocacional',
                                es: 'Feria vocacional'
                            },
                            continuation: true
                        },
                        {
                            location: { en: 'Poster area', pt: 'Área de pôsteres', es: 'Área de pósters' },
                            type: SessionType.COMPETITION,
                            tag: { en: 'Poster Presentation', pt: 'Apresentação de pôsteres', es: 'Presentación de pósters' },
                            title: {
                                en: 'Poster Presentation',
                                pt: 'Apresentação de pôsteres',
                                es: 'Presentación de pósters'
                            },
                            continuation: true
                        },
                        {
                            location: { en: 'Multipurpose Hall', pt: 'Salão Multifuncional', es: 'Salón Multifuncional' },
                            type: SessionType.COMPETITION,
                            tag: { en: 'SDC Presentations', pt: 'Apresentações CDE', es: 'Presentaciones SDC' },
                            title: {
                                en: 'Student Design Competition Presentations',
                                pt: 'Apresentações da Competição de Design Estudantil',
                                es: 'Presentaciones de la Competencia de Diseño Estudiantil'
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
                            tag: { en: 'Hackathon Competition', pt: 'Competição Hackathon', es: 'Competencia Hackatón' },
                            title: {
                                en: 'Hackathon Competition',
                                pt: 'Competição Hackathon',
                                es: 'Competencia Hackatón'
                            }
                        }
                    ]
                },
                {
                    time: '19:00 - 20:00',
                    sessions: [
                        {
                            location: { en: 'Centro Gastronómico', pt: 'Centro Gastronômico', es: 'Centro Gastronómico' },
                            type: SessionType.NETWORKING,
                            tag: { en: 'Social Event', pt: 'Evento social', es: 'Evento social' },
                            title: {
                                en: 'Welcome Dinner and Calenda',
                                pt: 'Jantar de boas-vindas e Calenda',
                                es: 'Cena de bienvenida y Calenda'
                            }
                        }
                    ]
                }
            ]
        },
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
                en: 'Convention Center - Multipurpose Hall',
                pt: 'Centro de Convenções - Salão Multifuncional',
                es: 'Centro de Convenciones - Salón Multifuncional'
            },
            timeSlots: [
                {
                    time: '09:00 - 10:00',
                    sessions: [
                        {
                            location: { en: 'Multipurpose Hall', pt: 'Salão Multifuncional', es: 'Salón Multifuncional' },
                            type: SessionType.KEYNOTE,
                            tag: { en: 'Keynote', pt: 'Palestra principal', es: 'Conferencia magistral' },
                            title: {
                                en: 'Keynote - Odile Juárez',
                                pt: 'Palestra principal - Odile Juárez',
                                es: 'Conferencia magistral - Odile Juárez'
                            },
                            speaker: 'Odile Juárez',
                            subtitle: {
                                en: 'Mamá Tech, CEO & Co. Founder Mayordomm',
                                pt: 'Mamá Tech, CEO & Co. Founder Mayordomm',
                                es: 'Mamá Tech, CEO & Co. Founder Mayordomm'
                            }
                        },
                        {
                            location: { en: 'Lobby', pt: 'Vestíbulo', es: 'Vestíbulo' },
                            type: SessionType.OTHER,
                            tag: { en: 'Vocational Fair', pt: 'Feira vocacional', es: 'Feria vocacional' },
                            title: {
                                en: 'Vocational Fair',
                                pt: 'Feira vocacional',
                                es: 'Feria vocacional'
                            }
                        }
                    ]
                },
                {
                    time: '10:00 - 11:00',
                    sessions: [
                        {
                            location: { en: 'Multipurpose Hall', pt: 'Salão Multifuncional', es: 'Salón Multifuncional' },
                            type: SessionType.OTHER,
                            tag: { en: 'Talk 1', pt: 'Conferência 1', es: 'Conferencia 1' },
                            title: {
                                en: 'Victor Manuel García',
                                pt: 'Victor Manuel García',
                                es: 'Victor Manuel García'
                            },
                            speaker: 'Victor Manuel García',
                            subtitle: {
                                en: 'Senior Agil Leader IDS',
                                pt: 'Senior Agil Leader IDS',
                                es: 'Senior Agil Leader IDS'
                            }
                        }
                    ]
                },
                {
                    time: '11:00 - 12:00',
                    sessions: [
                        {
                            location: { en: 'Multipurpose Hall', pt: 'Salão Multifuncional', es: 'Salón Multifuncional' },
                            type: SessionType.OTHER,
                            tag: { en: 'Talk 2', pt: 'Conferência 2', es: 'Conferencia 2' },
                            title: {
                                en: 'Beyond the shopping cart: transforming buying behavior into digital financial access',
                                pt: 'Além do carrinho de compras: transformando o comportamento de compra em acesso financeiro digital',
                                es: 'Más allá del carrito de compras: transformando el comportamiento de compra en acceso financiero digital'
                            },
                            speaker: 'David Soto Ríos',
                            subtitle: {
                                en: 'Walmart',
                                pt: 'Walmart',
                                es: 'Walmart'
                            }
                        }
                    ]
                },
                {
                    time: '12:00 - 13:00',
                    sessions: [
                        {
                            location: { en: 'Multipurpose Hall', pt: 'Salão Multifuncional', es: 'Salón Multifuncional' },
                            type: SessionType.OTHER,
                            tag: { en: 'Talk 3', pt: 'Conferência 3', es: 'Conferencia 3' },
                            title: {
                                en: 'Gustavo Isaac Mancera Betancourt',
                                pt: 'Gustavo Isaac Mancera Betancourt',
                                es: 'Gustavo Isaac Mancera Betancourt'
                            },
                            speaker: 'Mtro. Gustavo Isaac Mancera Betancourt'
                        }
                    ]
                },
                {
                    time: '13:00 - 14:00',
                    sessions: [
                        {
                            location: { en: 'Multipurpose Hall', pt: 'Salão Multifuncional', es: 'Salón Multifuncional' },
                            type: SessionType.COMPETITION,
                            tag: { en: 'SDC Final', pt: 'Final CDE', es: 'Final SDC' },
                            title: {
                                en: 'Student Design Competition Final',
                                pt: 'Final da Competição de Design Estudantil',
                                es: 'Final de la Competencia de Diseño Estudiantil'
                            },
                            papers: [
                                { title: 'Primer Lugar - Sede Brasil' },
                                { title: 'Primer Lugar - Sede México' }
                            ]
                        }
                    ]
                },
                {
                    time: '14:00 - 15:00',
                    sessions: [
                        {
                            location: { en: 'Multipurpose Hall', pt: 'Salão Multifuncional', es: 'Salón Multifuncional' },
                            type: SessionType.OTHER,
                            tag: { en: 'Closing', pt: 'Encerramento', es: 'Clausura' },
                            title: {
                                en: 'Closing Ceremony',
                                pt: 'Cerimônia de encerramento',
                                es: 'Clausura'
                            }
                        }
                    ]
                }
            ]
        }
    ]
}
