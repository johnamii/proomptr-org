<script>
    import { fly } from "svelte/transition";

</script>

<div transition:fly|local={{duration:300, y:500}} class='h-full w-full flex flex-col items-center justify-center gap-6'>
    <div>hello</div>
</div>