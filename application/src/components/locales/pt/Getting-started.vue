<script>
import Tr from '@/i18n/translation'

export default {
	setup() {
		const hotelLifeRooms = [
			{
				type: 'Simples',
				rate: '$1,200.00',
				description: 'Uma cama Queen para 1 ou 2 pessoas'
			},
			{
				type: 'Duplo',
				rate: '$1,400.00',
				description: 'Duas camas de casal para 1 ou 2 pessoas'
			}
		]

		const koochRooms = [
			{
				type: 'Suite Kooch',
				rate: '$1,200.00',
				description: 'Uma cama de casal para 01 ou 02 pessoas'
			}
		]

		return { Tr, hotelLifeRooms, koochRooms }
	}
}
</script>

<template>
	<div class="getting-started-guide">
		<p>
			O primeiro passo para participar da CLIHC 2026 é realizar sua inscrição na plataforma do evento. Lá você
			encontrará as tarifas vigentes e o processo para concluir sua inscrição.
		</p>

		<div class="my-4">
			<RouterLink :to="Tr.i18nRoute({ name: 'registration' })" class="btn btn-primary">
				Ir para inscrição
			</RouterLink>
		</div>

		<section class="mt-5">
			<h2 class="h3 mb-4">Hospedagem disponível</h2>

			<div class="mb-5">
				<h3 class="h4 mb-3">HOTEL LIFE</h3>
				<div class="table-responsive">
					<table class="table table-striped align-middle">
						<thead>
							<tr>
								<th scope="col">Tipo de quarto</th>
								<th scope="col">Tarifa</th>
								<th scope="col">Descrição</th>
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
				<p class="mb-1">Tarifas por quarto por noite com impostos incluídos.</p>
				<p class="mb-1">Café da manhã incluído.</p>
				<p class="mb-1">Pessoa extra: $250.00.</p>
				<p class="mb-0">Tarifas sujeitas à disponibilidade.</p>
			</div>

			<div>
				<h3 class="h4 mb-3">KOOCH APARTMENT</h3>
				<div class="table-responsive">
					<table class="table table-striped align-middle">
						<thead>
							<tr>
								<th scope="col">Tipo de quarto</th>
								<th scope="col">Tarifa</th>
								<th scope="col">Descrição</th>
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
				<p class="mb-1">Tarifas por quarto por noite com impostos incluídos.</p>
				<p class="mb-1">Café da manhã incluído.</p>
				<p class="mb-0">Tarifas sujeitas à disponibilidade.</p>
			</div>
		</section>
	</div>
</template>
