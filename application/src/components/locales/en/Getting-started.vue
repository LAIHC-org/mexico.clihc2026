<script>
import Tr from '@/i18n/translation'

export default {
	setup() {
		const hotels = [
			{
				name: 'Life Hotel',
				logo: '/assets/img/logos/life.png',
				subtitle: 'Official CLIHC 2026 hotel',
				type: 'Business Class Hotel',
				url: 'https://www.lifehotel.mx/es/index.html',
				description:
					'Life Hotel is a Business Class hotel located in Oaxaca City, designed for academic, professional, and leisure travel. The hotel features a minimalist architectural concept inspired by elements of nature and offers spacious, modern, and comfortable rooms.',
				distanceTime: '15 minutes by car',
				distanceKm: '7 km',
				rooms: [
					{
						type: 'Single',
						description: '1 Queen bed for 1 or 2 guests',
						rate: '$1,200 MXN'
					},
					{
						type: 'Double',
						description: '2 double beds for 1 or 2 guests',
						rate: '$1,400 MXN'
					}
				],
				notes: ['Taxes included', 'Breakfast included', 'Extra guest: $250 MXN'],
				amenities: [
					'Wi-Fi',
					'Business Class rooms',
					'Parking',
					'Front desk',
					'Spacious and modern rooms',
					'Service oriented to business and leisure travel'
				],
				contact: [
					'Phone: 951 512 7476',
					'WhatsApp / Phone: 951 475 5451',
					'Email: frontdesk@lifehotel.mx',
					'Address: 422 Carretera Internacional Santa Rosa Panzacola, Oaxaca City, Oaxaca, Mexico.'
				]
			},
			{
				name: 'Hotel Villas del Sol',
				logo: '/assets/img/logos/vsh.png',
				url: 'https://www.villasdelsol.com.mx/es/index.html',
				description:
					'Villas del Sol Hotel & Bungalows is a lodging option with large green areas and villa-style spaces, ideal for attendees seeking more tranquility or traveling in groups. The hotel features a pool, restaurant, and recreational areas.',
				distanceTime: '18 minutes by car',
				distanceKm: '10 km',
				rooms: [
					{
						type: 'Double Room',
						description: '2 double beds for 1 or 2 adults',
						rate: '$1,000 MXN'
					},
					{
						type: 'Single Villa',
						description: 'Villa with one double bed',
						rate: '$900 MXN'
					},
					{
						type: 'Double Villa',
						description: 'Villa with multiple rooms',
						rate: '$1,000 MXN'
					}
				],
				notes: ['Taxes included', 'Optional buffet breakfast with a preferential rate of $199 MXN'],
				amenities: [
					'Outdoor pool',
					'Restaurant',
					'Garden',
					'Free Wi-Fi',
					'Room service',
					'24-hour front desk',
					'Rooms with kitchen in some categories',
					'Parking',
					'Children’s area'
				],
				contact: [
					'Phone: 951 519 9686',
					'WhatsApp / Phone: 951 475 5451',
					'Address: Carretera Internacional Km. 487, Oaxaca de Juarez, Oaxaca, Mexico.'
				]
			},
			{
				name: 'Kooch Aparthotel',
				logo: '/assets/img/logos/kooch.png',
				subtitle: 'Recommended aparthotel for CLIHC 2026 attendees',
				url: 'https://apt-kooch.hotels-oaxaca.com/es/',
				description:
					'Kooch Aparthotel is a comfortable alternative for attendees looking for apartment-style spaces with a kitchenette and longer stays. The hotel offers equipped rooms and a location close to the northern area of the city.',
				distanceTime: '15 minutes by car',
				distanceKm: '7 km',
				rooms: [
					{
						type: 'Kooch Suite',
						description: '1 double bed for 1 or 2 guests',
						rate: '$1,200 MXN'
					}
				],
				notes: ['Taxes included', 'Breakfast included'],
				amenities: [
					'Free Wi-Fi',
					'Air conditioning',
					'Free parking',
					'Flat-screen TV',
					'Rooms with kitchenette',
					'Terrace',
					'Rooms with workspace'
				],
				contact: [
					'Phone: 951 512 7476',
					'WhatsApp / Phone: 951 475 5451',
					'Location: Calle Primera Poniente 203, Cuauhtemoc, Santa Rosa Panzacola, Oaxaca, Mexico.'
				]
			}
		]

		const attendeeBenefits = [
			'Hotel → Oaxaca Cultural and Convention Center transportation',
			'Hotel → airport transportation (with cost)',
			'Hotel → first-class bus terminal (ADO) transportation'
		]

		const importantInfo = [
			'Rates valid from May 26 to May 30, 2026',
			'Rates subject to availability',
			'Check-in: 3:00 PM',
			'Check-out: 12:00 PM',
			'Changes and cancellations up to 72 hours before arrival'
		]

		return { Tr, hotels, attendeeBenefits, importantInfo }
	}
}
</script>

<template>
	<div class="getting-started-guide">
		<p>
			The first step to attend CLIHC 2026 is to complete your registration on the event platform. There
			you will find the current rates and the process required to complete your registration.
		</p>

		<div class="my-4">
			<RouterLink
				:to="Tr.i18nRoute({ name: 'registration' })"
				class="btn btn-lg bg-gradient-yellow btn-round"
			>
				Go to registration
			</RouterLink>
		</div>

		<section class="mt-5">
			<h2 class="h3 mb-4">Official lodging</h2>

			<p>
				CLIHC 2026 will offer preferential lodging rates for attendees, authors, speakers, and guests
				of the conference at participating hotels in Oaxaca.
			</p>
			<p>
				Rates will be available from <strong>May 26 to May 30, 2026</strong> and will be subject to
				availability. The official hotels are located in a strategic area of the city, with quick
				access to the Oaxaca Cultural and Convention Center.
			</p>

			<div v-for="hotel in hotels" :key="hotel.name" class="mb-5">
				<div v-if="hotel.logo" class="hotel-logo-wrap mb-3">
					<img :src="hotel.logo" :alt="`Logo for ${hotel.name}`" class="hotel-logo" />
				</div>

				<h3 class="h4 mb-2">
					<a :href="hotel.url" target="_blank" rel="noopener noreferrer">{{ hotel.name }}</a>
					<span v-if="hotel.subtitle"> - {{ hotel.subtitle }}</span>
				</h3>

				<p v-if="hotel.type" class="fw-semibold mb-2">{{ hotel.type }}</p>
				<p>{{ hotel.description }}</p>

				<p class="mb-1"><strong>Distance to the conference venue:</strong></p>
				<ul>
					<li>Approximately {{ hotel.distanceTime }}</li>
					<li>Approximate distance: {{ hotel.distanceKm }}</li>
				</ul>

				<div class="table-responsive">
					<table class="table table-striped align-middle">
						<thead>
							<tr>
								<th scope="col">Room type</th>
								<th scope="col">Description</th>
								<th scope="col">Rate</th>
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

				<p class="mb-1"><strong>Services and amenities:</strong></p>
				<ul>
					<li v-for="amenity in hotel.amenities" :key="amenity">{{ amenity }}</li>
				</ul>

				<p class="mb-1"><strong>Contact:</strong></p>
				<ul class="mb-0">
					<li v-for="item in hotel.contact" :key="item">{{ item }}</li>
				</ul>
			</div>

			<div class="mb-5">
				<h3 class="h4 mb-3">Official booking code</h3>
				<p>
					To access the preferential lodging rates for CLIHC 2026, provide this code when making your
					reservation:
				</p>
				<p class="fs-4 fw-bold mb-0">CLIHC2026</p>
			</div>

			<div class="mb-5">
				<h3 class="h4 mb-3">Benefits for hosted attendees</h3>
				<ul>
					<li v-for="benefit in attendeeBenefits" :key="benefit">{{ benefit }}</li>
				</ul>
				<p class="mb-0">
					This service will be available for attendees staying at participating hotels during the
					official conference dates.
				</p>
			</div>

			<div>
				<h3 class="h4 mb-3">Reservations and important information</h3>
				<p class="mb-1"><strong>General reservations contact:</strong></p>
				<ul>
					<li>WhatsApp / Phone: 951 475 5451</li>
					<li>Email: ventas@hyse.mx</li>
				</ul>

				<p class="mb-1"><strong>Important information:</strong></p>
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
