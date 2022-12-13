<script lang="ts">
	import { Icons } from '$lib/components';
</script>

<!-- Panel -->
<div class="fixed w-60 bg-white border-r left-0 h-full flex flex-col justify-between py-10">
	<nav class="flex flex-col justify-center  h-full">
		<ul class="space-y-2">
			<li
				class="cursor-pointer hover:bg-blue-400/70 text-sm flex items-center hover:shadow hover:text-white h-10 rounded px-4 mx-1"
			>
				<a href="/" class="flex gap-4 items-center">
					<i>
						<Icons name="home" />
					</i>
					<span class="uppercase tracking-widest font-mono">inicio</span>
				</a>
			</li>
			<li
				class="cursor-pointer hover:bg-blue-400/70 text-sm  flex items-center hover:shadow hover:text-white h-10 rounded px-4 mx-1"
			>
				<a href="/" class="flex gap-4 items-center">
					<i>
						<Icons name="settings" />
					</i>
					<span class="uppercase tracking-widest font-mono">configuración</span>
				</a>
			</li>
			<li
				class="cursor-pointer hover:bg-blue-400/70 text-sm  flex items-center hover:shadow hover:text-white h-10 rounded px-4 mx-1"
			>
				<a href="/" class="flex gap-4 items-center">
					<i>
						<Icons name="users" />
					</i>
					<span class="uppercase tracking-widest font-mono">Personal</span>
				</a>
			</li>
			<li
				class="cursor-pointer hover:bg-blue-400/70  text-sm flex items-center hover:shadow hover:text-white h-10 rounded px-4 mx-1"
			>
				<a href="/" class="flex gap-4 items-center">
					<i>
						<Icons name="dashboard" />
					</i>
					<span class="uppercase tracking-widest font-mono">dashboard</span>
				</a>
			</li>
			<li
				class="cursor-pointer hover:bg-blue-400/70  text-sm flex items-center hover:shadow hover:text-white h-10 rounded px-4 mx-1"
			>
				<a href="/" class="flex gap-4 items-center">
					<i>
						<Icons name="users" />
					</i>
					<span class="uppercase tracking-widest font-mono">candidatos</span>
				</a>
			</li>
			<li
				class="cursor-pointer hover:bg-blue-400/70  text-sm flex items-center hover:shadow hover:text-white h-10 rounded px-4 mx-1"
			>
				<a href="/" class="flex gap-4 items-center">
					<i>
						<Icons name="form" />
					</i>
					<span class="uppercase tracking-widest font-mono">formularios</span>
				</a>
			</li>
		</ul>
	</nav>

	<nav class="">
		<ul>
			<li
				class="cursor-pointer hover:bg-blue-400/70 text-sm  flex items-center hover:shadow hover:text-white h-10 rounded px-4 mx-1"
			>
				<a href="/" class="flex gap-4 items-center">
					<i>
						<Icons name="logout" />
					</i>
					<span class="uppercase tracking-widest font-mono">cerrar sesion</span>
				</a>
			</li>
		</ul>
	</nav>
</div>

<slot />
