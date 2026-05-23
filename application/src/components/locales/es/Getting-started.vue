<script>
import Tr from '@/i18n/translation'

export default {
	setup() {
		const hotels = [
			{
				name: 'Life Hotel',
				logo: '/assets/img/logos/life.png',
				subtitle: 'Hotel oficial CLIHC 2026',
				type: 'Hotel Business Class',
				url: 'https://www.lifehotel.mx/es/index.html',
				description:
					'Life Hotel es un hotel tipo Business Class ubicado en la ciudad de Oaxaca, diseñado para viajes académicos, profesionales y de descanso. El hotel cuenta con un concepto arquitectónico minimalista inspirado en los elementos de la naturaleza y ofrece habitaciones amplias, modernas y cómodas.',
				distanceTime: '15 minutos en automóvil',
				distanceKm: '7 km',
				rooms: [
					{
						type: 'Sencilla',
						description: '1 cama Queen para 1 o 2 personas',
						rate: '$1,200 MXN'
					},
					{
						type: 'Doble',
						description: '2 camas matrimoniales para 1 o 2 personas',
						rate: '$1,400 MXN'
					}
				],
				notes: ['Impuestos incluidos', 'Desayuno incluido', 'Persona extra: $250 MXN'],
				amenities: [
					'Wi-Fi',
					'Habitaciones Business Class',
					'Estacionamiento',
					'Recepción',
					'Habitaciones amplias y modernas',
					'Servicio orientado a viajes de negocios y placer'
				],
				contact: [
					'Teléfono: 951 512 7476',
					'WhatsApp / Teléfono: 951 475 5451',
					'Correo: frontdesk@lifehotel.mx',
					'Dirección: 422 Carretera Internacional Santa Rosa Panzacola, Oaxaca City, Oaxaca, México.'
				]
			},
			{
				name: 'Hotel Villas del Sol',
				logo: '/assets/img/logos/vsh.png',
				url: 'https://www.villasdelsol.com.mx/es/index.html',
				description:
					'Villas del Sol Hotel & Bungalows es una opción de hospedaje con amplias áreas verdes y espacios tipo villa, ideal para asistentes que buscan mayor tranquilidad o viajes en grupo. El hotel cuenta con alberca, restaurante y áreas recreativas.',
				distanceTime: '18 minutos en automóvil',
				distanceKm: '10 km',
				rooms: [
					{
						type: 'Habitación Doble',
						description: '2 camas matrimoniales para 1 o 2 adultos',
						rate: '$1,000 MXN'
					},
					{
						type: 'Villa Sencilla',
						description: 'Villa con cama matrimonial',
						rate: '$900 MXN'
					},
					{
						type: 'Villa Doble',
						description: 'Villa con habitaciones múltiples',
						rate: '$1,000 MXN'
					}
				],
				notes: [
					'Impuestos incluidos',
					'Desayuno buffet opcional con tarifa preferencial de $199 MXN'
				],
				amenities: [
					'Alberca al aire libre',
					'Restaurante',
					'Jardín',
					'Wi-Fi gratuito',
					'Servicio a habitaciones',
					'Recepción 24 horas',
					'Habitaciones con cocina en algunas categorías',
					'Estacionamiento',
					'Área infantil'
				],
				contact: [
					'Teléfono: 951 519 9686',
					'WhatsApp / Teléfono: 951 475 5451',
					'Dirección: Carretera Internacional Km. 487, Oaxaca de Juárez, Oaxaca, México.'
				]
			},
			{
				name: 'Kooch Aparthotel',
				logo: '/assets/img/logos/kooch.png',
				subtitle: 'Apartahotel recomendado para asistentes CLIHC 2026',
				url: 'https://apt-kooch.hotels-oaxaca.com/es/',
				description:
					'Kooch Aparthotel es una alternativa cómoda para asistentes que buscan espacios tipo apartamento con cocineta y estancia prolongada. El hotel cuenta con habitaciones equipadas y ubicación cercana a la zona norte de la ciudad.',
				distanceTime: '15 minutos en automóvil',
				distanceKm: '7 km',
				rooms: [
					{
						type: 'Suite Kooch',
						description: '1 cama matrimonial para 1 o 2 personas',
						rate: '$1,200 MXN'
					}
				],
				notes: ['Impuestos incluidos', 'Desayuno incluido'],
				amenities: [
					'Wi-Fi gratuito',
					'Aire acondicionado',
					'Estacionamiento gratuito',
					'TV de pantalla plana',
					'Habitaciones con cocineta',
					'Terraza',
					'Habitaciones con espacio de trabajo'
				],
				contact: [
					'Teléfono: 951 512 7476',
					'WhatsApp / Teléfono: 951 475 5451',
					'Ubicación: Calle Primera Poniente 203, Cuauhtémoc, Santa Rosa Panzacola, Oaxaca, México.'
				]
			}
		]

		const attendeeBenefits = [
			'Transporte hotel → Centro Cultural y de Convenciones de Oaxaca',
			'Transporte hotel sede → aeropuerto (con costo)',
			'Transporte hotel sede → Terminal de autobuses de primera clase (ADO)'
		]

		const importantInfo = [
			'Tarifas válidas del 26 al 30 de mayo de 2026',
			'Tarifas sujetas a disponibilidad',
			'Check-in: 15:00 hrs.',
			'Check-out: 12:00 hrs.',
			'Cambios y cancelaciones hasta 72 horas antes de la llegada'
		]

		return { Tr, hotels, attendeeBenefits, importantInfo }
	}
}
</script>

<template>
	<div class="getting-started-guide">
		<p>
			El primer paso para asistir a CLIHC 2026 es realizar tu registro en la plataforma del evento. Ahí
			encontrarás las tarifas vigentes y el proceso para completar tu inscripción.
		</p>

		<div class="my-4">
			<RouterLink
				:to="Tr.i18nRoute({ name: 'registration' })"
				class="btn btn-lg bg-gradient-yellow btn-round"
			>
				Ir a registro
			</RouterLink>
		</div>

		<section class="mt-5">
			<h2 class="h3 mb-4">Hospedaje oficial</h2>

			<p>
				CLIHC 2026 contará con tarifas preferenciales de hospedaje para asistentes, autores, ponentes
				e invitados del congreso en hoteles participantes de la ciudad de Oaxaca.
			</p>
			<p>
				Las tarifas estarán disponibles del <strong>26 al 30 de mayo de 2026</strong> y estarán
				sujetas a disponibilidad. Los hoteles sede se encuentran ubicados en una zona estratégica de la
				ciudad, con acceso rápido al Centro Cultural y de Convenciones de Oaxaca.
			</p>

			<div v-for="hotel in hotels" :key="hotel.name" class="mb-5">
				<div v-if="hotel.logo" class="hotel-logo-wrap mb-3">
					<img :src="hotel.logo" :alt="`Logotipo de ${hotel.name}`" class="hotel-logo" />
				</div>

				<h3 class="h4 mb-2">
					<a :href="hotel.url" target="_blank" rel="noopener noreferrer">{{ hotel.name }}</a>
					<span v-if="hotel.subtitle"> - {{ hotel.subtitle }}</span>
				</h3>

				<p v-if="hotel.type" class="fw-semibold mb-2">{{ hotel.type }}</p>
				<p>{{ hotel.description }}</p>

				<p class="mb-1"><strong>Distancia a la sede del congreso:</strong></p>
				<ul>
					<li>Aproximadamente {{ hotel.distanceTime }}</li>
					<li>Distancia aproximada: {{ hotel.distanceKm }}</li>
				</ul>

				<div class="table-responsive">
					<table class="table table-striped align-middle">
						<thead>
							<tr>
								<th scope="col">Tipo de habitación</th>
								<th scope="col">Descripción</th>
								<th scope="col">Tarifa</th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="room in hotel.rooms" :key="`${hotel.name}-${room.type}`">
								<td>{{ room.type }}</td>
								<td>{{ room.description }}</td>
								<td>{{ room.rate }}</td>
							</tr>
						</tbody>
					</table>
				</div>

				<ul>
					<li v-for="note in hotel.notes" :key="note">{{ note }}</li>
				</ul>

				<p class="mb-1"><strong>Servicios y amenidades:</strong></p>
				<ul>
					<li v-for="amenity in hotel.amenities" :key="amenity">{{ amenity }}</li>
				</ul>

				<p class="mb-1"><strong>Contacto:</strong></p>
				<ul class="mb-0">
					<li v-for="item in hotel.contact" :key="item">{{ item }}</li>
				</ul>
			</div>

			<div class="mb-5">
				<h3 class="h4 mb-3">Código de reservación oficial</h3>
				<p>
					Para acceder a las tarifas preferenciales de hospedaje de CLIHC 2026, indica este código al
					momento de realizar tu reservación:
				</p>
				<p class="fs-4 fw-bold mb-0">CLIHC2026</p>
			</div>

			<div class="mb-5">
				<h3 class="h4 mb-3">Beneficios para asistentes hospedados</h3>
				<ul>
					<li v-for="benefit in attendeeBenefits" :key="benefit">{{ benefit }}</li>
				</ul>
				<p class="mb-0">
					Este servicio estará disponible para asistentes hospedados en los hoteles participantes y
					durante las fechas oficiales del congreso.
				</p>
			</div>

			<div>
				<h3 class="h4 mb-3">Reservaciones e información importante</h3>
				<p class="mb-1"><strong>Contacto general de reservaciones:</strong></p>
				<ul>
					<li>WhatsApp / Teléfono: 951 475 5451</li>
					<li>Correo: ventas@hyse.mx</li>
				</ul>

				<p class="mb-1"><strong>Información importante:</strong></p>
				<ul class="mb-0">
					<li v-for="item in importantInfo" :key="item">{{ item }}</li>
				</ul>
			</div>
		</section>
	</div>
</template>

<style scoped>
.hotel-logo-wrap {
	max-width: 240px;
}

.hotel-logo {
	display: block;
	width: 100%;
	height: auto;
	object-fit: contain;
}
</style>
