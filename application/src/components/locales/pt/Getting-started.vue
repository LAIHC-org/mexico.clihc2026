<script>
import Tr from '@/i18n/translation'

export default {
	setup() {
		const hotels = [
			{
				name: 'Life Hotel',
				logo: '/assets/img/logos/life.png',
				subtitle: 'Hotel oficial da CLIHC 2026',
				type: 'Hotel Business Class',
				url: 'https://www.lifehotel.mx/es/index.html',
				description:
					'Life Hotel e um hotel Business Class localizado na cidade de Oaxaca, projetado para viagens acadêmicas, profissionais e de descanso. O hotel conta com um conceito arquitetônico minimalista inspirado nos elementos da natureza e oferece quartos amplos, modernos e confortáveis.',
				distanceTime: '15 minutos de carro',
				distanceKm: '7 km',
				rooms: [
					{
						type: 'Simples',
						description: '1 cama Queen para 1 ou 2 pessoas',
						rate: '$1,200 MXN'
					},
					{
						type: 'Duplo',
						description: '2 camas de casal para 1 ou 2 pessoas',
						rate: '$1,400 MXN'
					}
				],
				notes: ['Impostos incluídos', 'Café da manhã incluído', 'Pessoa extra: $250 MXN'],
				amenities: [
					'Wi-Fi',
					'Quartos Business Class',
					'Estacionamento',
					'Recepção',
					'Quartos amplos e modernos',
					'Serviço voltado para viagens de negócios e lazer'
				],
				contact: [
					'Telefone: 951 512 7476',
					'WhatsApp / Telefone: 951 475 5451',
					'E-mail: frontdesk@lifehotel.mx',
					'Endereço: 422 Carretera Internacional Santa Rosa Panzacola, Oaxaca City, Oaxaca, México.'
				]
			},
			{
				name: 'Hotel Villas del Sol',
				logo: '/assets/img/logos/vsh.png',
				url: 'https://www.villasdelsol.com.mx/es/index.html',
				description:
					'Villas del Sol Hotel & Bungalows e uma opção de hospedagem com amplas áreas verdes e espaços em estilo villa, ideal para participantes que buscam mais tranquilidade ou viajam em grupo. O hotel conta com piscina, restaurante e áreas recreativas.',
				distanceTime: '18 minutos de carro',
				distanceKm: '10 km',
				rooms: [
					{
						type: 'Quarto Duplo',
						description: '2 camas de casal para 1 ou 2 adultos',
						rate: '$1,000 MXN'
					},
					{
						type: 'Villa Simples',
						description: 'Villa com cama de casal',
						rate: '$900 MXN'
					},
					{
						type: 'Villa Dupla',
						description: 'Villa com múltiplos quartos',
						rate: '$1,000 MXN'
					}
				],
				notes: ['Impostos incluídos', 'Café da manhã buffet opcional com tarifa preferencial de $199 MXN'],
				amenities: [
					'Piscina ao ar livre',
					'Restaurante',
					'Jardim',
					'Wi-Fi gratuito',
					'Serviço de quarto',
					'Recepção 24 horas',
					'Quartos com cozinha em algumas categorias',
					'Estacionamento',
					'Área infantil'
				],
				contact: [
					'Telefone: 951 519 9686',
					'WhatsApp / Telefone: 951 475 5451',
					'Endereço: Carretera Internacional Km. 487, Oaxaca de Juarez, Oaxaca, México.'
				]
			},
			{
				name: 'Kooch Aparthotel',
				logo: '/assets/img/logos/kooch.png',
				subtitle: 'Apart-hotel recomendado para participantes da CLIHC 2026',
				url: 'https://apt-kooch.hotels-oaxaca.com/es/',
				description:
					'Kooch Aparthotel e uma alternativa confortável para participantes que buscam espaços tipo apartamento com cozinha compacta e estadias prolongadas. O hotel conta com quartos equipados e localização próxima à zona norte da cidade.',
				distanceTime: '15 minutos de carro',
				distanceKm: '7 km',
				rooms: [
					{
						type: 'Suite Kooch',
						description: '1 cama de casal para 1 ou 2 pessoas',
						rate: '$1,200 MXN'
					}
				],
				notes: ['Impostos incluídos', 'Café da manhã incluído'],
				amenities: [
					'Wi-Fi gratuito',
					'Ar-condicionado',
					'Estacionamento gratuito',
					'TV de tela plana',
					'Quartos com cozinha compacta',
					'Terraço',
					'Quartos com espaço de trabalho'
				],
				contact: [
					'Telefone: 951 512 7476',
					'WhatsApp / Telefone: 951 475 5451',
					'Localização: Calle Primera Poniente 203, Cuauhtemoc, Santa Rosa Panzacola, Oaxaca, México.'
				]
			}
		]

		const attendeeBenefits = [
			'Transporte hotel → Centro Cultural y de Convenciones de Oaxaca',
			'Transporte hotel sede → aeroporto (com custo)',
			'Transporte hotel sede → Terminal rodoviário de primeira classe (ADO)'
		]

		const importantInfo = [
			'Tarifas válidas de 26 a 30 de maio de 2026',
			'Tarifas sujeitas à disponibilidade',
			'Check-in: 15:00',
			'Check-out: 12:00',
			'Alterações e cancelamentos até 72 horas antes da chegada'
		]

		return { Tr, hotels, attendeeBenefits, importantInfo }
	}
}
</script>

<template>
	<div class="getting-started-guide">
		<p>
			O primeiro passo para participar da CLIHC 2026 é realizar sua inscrição na plataforma do evento.
			Lá você encontrará as tarifas vigentes e o processo para concluir sua inscrição.
		</p>

		<div class="my-4">
			<RouterLink
				:to="Tr.i18nRoute({ name: 'registration' })"
				class="btn btn-lg bg-gradient-yellow btn-round"
			>
				Ir para inscrição
			</RouterLink>
		</div>

		<section class="mt-5">
			<h2 class="h3 mb-4">Hospedagem oficial</h2>

			<p>
				A CLIHC 2026 contará com tarifas preferenciais de hospedagem para participantes, autores,
				palestrantes e convidados do congresso em hotéis participantes da cidade de Oaxaca.
			</p>
			<p>
				As tarifas estarão disponíveis de <strong>26 a 30 de maio de 2026</strong> e estarão sujeitas
				à disponibilidade. Os hotéis oficiais estão localizados em uma área estratégica da cidade, com
				acesso rápido ao Centro Cultural y de Convenciones de Oaxaca.
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

				<p class="mb-1"><strong>Distância até o local do congresso:</strong></p>
				<ul>
					<li>Aproximadamente {{ hotel.distanceTime }}</li>
					<li>Distância aproximada: {{ hotel.distanceKm }}</li>
				</ul>

				<div class="table-responsive">
					<table class="table table-striped align-middle">
						<thead>
							<tr>
								<th scope="col">Tipo de quarto</th>
								<th scope="col">Descrição</th>
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

				<p class="mb-1"><strong>Serviços e comodidades:</strong></p>
				<ul>
					<li v-for="amenity in hotel.amenities" :key="amenity">{{ amenity }}</li>
				</ul>

				<p class="mb-1"><strong>Contato:</strong></p>
				<ul class="mb-0">
					<li v-for="item in hotel.contact" :key="item">{{ item }}</li>
				</ul>
			</div>

			<div class="mb-5">
				<h3 class="h4 mb-3">Código oficial de reserva</h3>
				<p>
					Para acessar as tarifas preferenciais de hospedagem da CLIHC 2026, informe este código no
					momento de fazer sua reserva:
				</p>
				<p class="fs-4 fw-bold mb-0">CLIHC2026</p>
			</div>

			<div class="mb-5">
				<h3 class="h4 mb-3">Benefícios para participantes hospedados</h3>
				<ul>
					<li v-for="benefit in attendeeBenefits" :key="benefit">{{ benefit }}</li>
				</ul>
				<p class="mb-0">
					Este serviço estará disponível para participantes hospedados nos hotéis participantes durante
					as datas oficiais do congresso.
				</p>
			</div>

			<div>
				<h3 class="h4 mb-3">Reservas e informações importantes</h3>
				<p class="mb-1"><strong>Contato geral de reservas:</strong></p>
				<ul>
					<li>WhatsApp / Telefone: 951 475 5451</li>
					<li>E-mail: ventas@hyse.mx</li>
				</ul>

				<p class="mb-1"><strong>Informações importantes:</strong></p>
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
