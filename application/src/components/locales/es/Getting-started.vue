<script>
import Tr from '@/i18n/translation'

export default {
	setup() {
		const hotelLifeRooms = [
			{
				type: 'Sencilla',
				rate: '$1,200.00',
				description: 'Una cama Queen para 1 o 2 personas'
			},
			{
				type: 'Doble',
				rate: '$1,400.00',
				description: 'Dos camas Matrimoniales para 1 o 2 personas'
			}
		]

		const koochRooms = [
			{
				type: 'Suite Kooch',
				rate: '$1,200.00',
				description: 'Una cama matrimonial para 01 o 02 personas'
			}
		]

		return { Tr, hotelLifeRooms, koochRooms }
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
			<RouterLink :to="Tr.i18nRoute({ name: 'registration' })" class="btn btn-primary">
				Ir a registro
			</RouterLink>
		</div>

		<section class="mt-5">
			<h2 class="h3 mb-4">Hospedaje disponible</h2>

			<div class="mb-5">
				<h3 class="h4 mb-3">HOTEL LIFE</h3>
				<div class="table-responsive">
					<table class="table table-striped align-middle">
						<thead>
							<tr>
								<th scope="col">Tipo de habitación</th>
								<th scope="col">Tarifa</th>
								<th scope="col">Descripción</th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="room in hotelLifeRooms" :key="room.type">
								<td>{{ room.type }}</td>
								<td>{{ room.rate }}</td>
								<td>{{ room.description }}</td>
							</tr>
						</tbody>
					</table>
				</div>
				<p class="mb-1">Tarifas por habitación por noche con impuestos incluidos.</p>
				<p class="mb-1">Desayuno incluido.</p>
				<p class="mb-1">Persona extra $250.00.</p>
				<p class="mb-0">Tarifas sujetas a disponibilidad.</p>
			</div>

			<div>
				<h3 class="h4 mb-3">KOOCH APARTMENT</h3>
				<div class="table-responsive">
					<table class="table table-striped align-middle">
						<thead>
							<tr>
								<th scope="col">Tipo de habitación</th>
								<th scope="col">Tarifa</th>
								<th scope="col">Descripción</th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="room in koochRooms" :key="room.type">
								<td>{{ room.type }}</td>
								<td>{{ room.rate }}</td>
								<td>{{ room.description }}</td>
							</tr>
						</tbody>
					</table>
				</div>
				<p class="mb-1">Tarifas por habitación por noche con impuestos incluidos.</p>
				<p class="mb-1">Desayuno incluido.</p>
				<p class="mb-0">Tarifas sujetas a disponibilidad.</p>
			</div>
		</section>
	</div>
</template>
