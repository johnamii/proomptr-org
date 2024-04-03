<script>
    import Proomptr from "./Proomptr.svelte";
    import background from '$lib/assets/desktop.jpg'
</script>

<div class='w-full h-full relative flex items-center justify-center'>
    <img class='h-full w-full rounded-lg' src={background} alt='desktop'/>
    <Proomptr/>
</div>