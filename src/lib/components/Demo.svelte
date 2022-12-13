<script lang="ts">
	import classNames from 'clsx';

	$: classes = classNames();
</script>

<div class={classes}>
	<slot />
</div>
