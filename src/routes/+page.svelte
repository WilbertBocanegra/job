<script lang="ts">
	import { App, Icons } from '$lib/components';

	import { goto } from '$app/navigation';

	const handleSubmit = (): void => {
		goto('/home');
	};
</script>

<App grid class="place-content-center">
	<div class="outline outline-1 outline-gray-300 shadow-md p-8 rounded bg-white w-96">
		<h1 class="pb-5 font-mono font-extrabold text-center uppercase tracking-widest text-2xl">
			inicio de sesión
		</h1>
		<form on:submit|preventDefault={handleSubmit} class="space-y-4">
			<div class="relative group">
				<input
					type="email"
					placeholder="Correo"
					class="outline outline-1 peer outline-gray-200 p-5 pl-10 border w-full h-10 bg-white shadow rounded-md font-mono focus:outline-gray-400"
				/>
				<i class="text-gray-400 peer-focus:text-black  absolute top-1/2 -translate-y-1/2 left-2">
					<Icons name="mail" />
				</i>
			</div>
			<div class="relative">
				<input
					type="password"
					placeholder="Contraseña"
					class="outline outline-1 peer outline-gray-200 p-5 pl-10 border w-full h-10 bg-white shadow rounded-md font-mono focus:outline-gray-400"
				/>
				<i class="text-gray-400 peer-focus:text-black  absolute top-1/2 -translate-y-1/2 left-2">
					<Icons name="lock" />
				</i>
			</div>
			<button
				class="py-2 px-4 bg-green-500 w-full text-white rounded shadow uppercase tracking-widest font-bold font-mono h-10 hover:bg-green-500/70"
				>aceptar</button
			>
		</form>
	</div>
	<i class="fixed -z-50 bottom-0 w-full">
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"
			><path
				fill="#0099ff"
				fill-opacity="1"
				d="M0,160L24,144C48,128,96,96,144,96C192,96,240,128,288,117.3C336,107,384,53,432,64C480,75,528,149,576,181.3C624,213,672,203,720,192C768,181,816,171,864,144C912,117,960,75,1008,85.3C1056,96,1104,160,1152,181.3C1200,203,1248,181,1296,154.7C1344,128,1392,96,1416,80L1440,64L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"
			/></svg
		>
	</i>
</App>
