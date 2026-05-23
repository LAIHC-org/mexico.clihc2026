<script>
import Tr from '@/i18n/translation'

export default {
	setup() {
		const hotelLifeRooms = [
			{
				type: 'Single',
				rate: '$1,200.00',
				description: 'One Queen bed for 1 or 2 guests'
			},
			{
				type: 'Double',
				rate: '$1,400.00',
				description: 'Two double beds for 1 or 2 guests'
			}
		]

		const koochRooms = [
			{
				type: 'Kooch Suite',
				rate: '$1,200.00',
				description: 'One double bed for 01 or 02 guests'
			}
		]

		return { Tr, hotelLifeRooms, koochRooms }
	}
}
</script>

<template>
	<div class="getting-started-guide">
		<p>
			The first step to attend CLIHC 2026 is to complete your registration on the event platform. There you
			will find the current rates and the process required to complete your registration.
		</p>

		<div class="my-4">
			<RouterLink :to="Tr.i18nRoute({ name: 'registration' })" class="btn btn-primary">
				Go to registration
			</RouterLink>
		</div>

		<section class="mt-5">
			<h2 class="h3 mb-4">Available lodging</h2>

			<div class="mb-5">
				<h3 class="h4 mb-3">HOTEL LIFE</h3>
				<div class="table-responsive">
					<table class="table table-striped align-middle">
						<thead>
							<tr>
								<th scope="col">Room type</th>
								<th scope="col">Rate</th>
								<th scope="col">Description</th>
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
				<p class="mb-1">Rates are per room, per night, taxes included.</p>
				<p class="mb-1">Breakfast included.</p>
				<p class="mb-1">Extra guest: $250.00.</p>
				<p class="mb-0">Rates subject to availability.</p>
			</div>

			<div>
				<h3 class="h4 mb-3">KOOCH APARTMENT</h3>
				<div class="table-responsive">
					<table class="table table-striped align-middle">
						<thead>
							<tr>
								<th scope="col">Room type</th>
								<th scope="col">Rate</th>
								<th scope="col">Description</th>
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
				<p class="mb-1">Rates are per room, per night, taxes included.</p>
				<p class="mb-1">Breakfast included.</p>
				<p class="mb-0">Rates subject to availability.</p>
			</div>
		</section>
	</div>
</template>
