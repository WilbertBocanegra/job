<script lang="ts">
	import { App, Icons } from '$lib/components';
</script>

<App class="pl-60 bg-white">
	<!-- Navbar-->
	<div class="h-16 border-b bg-white w-full flex justify-center items-center">
		<div class="flex justify-between px-4 md:container items-center">
			<nav>
				<ul>
					<li>
						<form class="flex gap-2 group">
							<div class="relative">
								<input
									type="text"
									placeholder="Buscar"
									class="outline outline-1 peer outline-gray-200 p-5 pl-10 border w-full h-10 bg-white  rounded-md 
                                    font-mono focus:outline-gray-400"
								/>
								<i
									class="text-gray-400 peer-focus:text-black  absolute top-1/2 -translate-y-1/2 left-2"
								>
									<Icons name="search" />
								</i>
							</div>
							<button
								type="submit"
								class="text-gray-400 hover:text-black bg-white py-2 px-4 uppercase tracking-widest outline outline-1 peer outline-gray-200 rounded-md shadow font-mono font-bold"
							>
								ok
							</button>
						</form>
					</li>
				</ul>
			</nav>
			<nav>
				<ul class="flex gap-5 items-center">
					<li>
						<a href="/notifications">
							<Icons name="alert" />
						</a>
					</li>

					<li>
						<a href="/user">
							<div
								class="bg-indigo-700 h-8 w-8 rounded-full flex justify-center items-center shadow"
							>
								<h1 class="text-white">W</h1>
							</div>
						</a>
					</li>
				</ul>
			</nav>
		</div>
	</div>
</App>
