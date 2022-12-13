<script lang="ts">
	import classNames from 'clsx';

	export let className: string = '';

	export let grid: boolean = false;

	export let flex: boolean = false;

	export { className as class };

	$: classes = classNames(className, 'min-h-screen', { grid, flex });
</script>

<div class={classes} >
	<slot />
</div>
