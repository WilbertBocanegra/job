<script lang="ts">
	import { App, Icons } from '$lib/components';
	import { auth } from '$lib/services';
	import { PUBLIC_ENPOINT } from '$env/static/public';
	import { goto } from '$app/navigation';
	import { user as storeUser } from '$lib/store';
	let isOpen: boolean = false;
	let isError: boolean = false;
	let isLoading: boolean = false;

	type User = {
		email: string;
		password: string;
	};

	let user = {
		email: '',
		password: ''
	} satisfies User;

	const handleSubmit = async (): Promise<void> => {
		isOpen = true;
		isLoading = true;
		try {
			const req = await fetch(PUBLIC_ENPOINT + 'auth', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(user)
			});

			const res = await req.json();
			console.log(res);
			if (res?.statusCode === 400 || res?.statusCode === 404) {
				throw new Error(res.statusCode);
			}
			isOpen = false;
			isLoading = false;
			isError = false;
			$storeUser = res.user;
			goto('/home');
		} catch (e) {
			if (e instanceof Error) {
				isOpen = true;
				isLoading = false;
				isError = true;
			}
		}

		//goto('/home');
	};
</script>

{#if isOpen}
	<div class="fixed h-full w-full bg-black/25 z-[9999]   transition-all">
		<div class="flex justify-center items-center bg-transparent w-full h-full">
			<div class="bg-white border p-10 w-96 rounded shadow">
				{#if isError}
					<h1
						class="text-center uppercase text-2xl font-mono font-extrabold tracking-widest text-red-500"
					>
						Error
					</h1>
					<h2 class="font-mono uppercase text-slate-500 text-center pt-4 tracking-widest">
						Sus credenciales de acceso son incorrectas
					</h2>
					<button
						on:click={() => (isOpen = false)}
						class="py-2 px-4 font-mono font-bold uppercase tracking-widest bg-green-500 text-white mt-5 rounded shadow w-full hover:bg-green-500/70"
					>
						aceptar
					</button>
				{/if}
				{#if isLoading}
					<h1
						class="text-center uppercase text-2xl font-mono font-extrabold tracking-widest text-black"
					>
						cargando
					</h1>
					<div class="text-center flex justify-center mt-6">
						<svg
							class="animate-spin  h-10 w-10 text-center text-green-500"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
						>
							<circle
								class="opacity-25"
								cx="12"
								cy="12"
								r="10"
								stroke="currentColor"
								stroke-width="4"
							/>
							<path
								class="opacity-75"
								fill="currentColor"
								d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
							/>
						</svg>
					</div>
				{/if}
			</div>
		</div>
	</div>
{/if}
<App grid class="place-content-center">
	<div class="outline outline-1 outline-gray-300 shadow-md p-8 rounded bg-white w-96">
		<h1 class="pb-5 font-mono font-extrabold text-center uppercase tracking-widest text-2xl">
			inicio de sesión
		</h1>
		<form on:submit|preventDefault={handleSubmit} class="space-y-4">
			<div class="relative group">
				<input
					type="email"
					bind:value={user.email}
					placeholder="Correo"
					class="outline outline-1 peer outline-gray-200 p-5 pl-10 border w-full h-10 bg-white shadow rounded-md font-mono focus:outline-gray-400"
				/>
				<i class="text-gray-400 peer-focus:text-black  absolute top-1/2 -translate-y-1/2 left-2">
					<Icons name="mail" />
				</i>
			</div>
			<div class="relative">
				<input
					bind:value={user.password}
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

	<!-- Background SVG -->
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
