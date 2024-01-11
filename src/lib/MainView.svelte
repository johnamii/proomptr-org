<script>
    import Proomptr from "./Proomptr.svelte";
    import Downloads from "./Downloads.svelte";
    import { fly } from "svelte/transition";
</script>

<div transition:fly|local={{duration:500, y:-500}} class='h-full w-full flex flex-col items-center justify-center gap-6'>
    <h1 class='text-5xl text-white'>Proomptr</h1>
    <div class='text-neutral-400 text-lg'>
        "A lightweight desktop tool to proompt your AI overlords."
    </div>  
    <!-- Proomptr Copy -->
    <div class='flex items-center justify-center h-[350px] w-full'>
        <Proomptr/>
    </div>
    
    <Downloads/>
</div>