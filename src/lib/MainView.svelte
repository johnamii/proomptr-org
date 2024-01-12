<script>
    import Proomptr from "./Proomptr.svelte";
    import Popups from "./Popups.svelte";
    import { fly } from "svelte/transition";
</script>

<div transition:fly|local={{duration:500, y:-500}} class='h-full w-full pt-0 flex flex-col items-center justify-start pt-4 gap-6'>
    <h1 class='text-5xl text-white'>Proomptr</h1>
    <div class='text-neutral-400 text-lg'>
        "A lightweight desktop tool to proompt your AI overlords."
    </div>  
    <!-- Proomptr Copy -->
    <div class=' h-3/5 w-full relative flex items-center justify-center'>
        <img class='h-full w-3/5 absolute z-[1] rounded-lg' src='src\lib\assets\desktop.jpg' alt='desktop'/>
        <Proomptr/>
    </div>
    
    <Popups/>
</div>