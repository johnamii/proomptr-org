<script>
    import Proomptr from "./Proomptr.svelte";
    import Popups from "./Popups.svelte";
    import { fly } from "svelte/transition";
    import background from '$lib/assets/desktop.jpg';
</script>

<div transition:fly|local={{duration:500, y:-500}} class='h-full w-full pt-0 flex flex-col items-center justify-start pt-4 gap-6'>
    <h1 class='text-5xl text-white'>Proomptr</h1>
    <div class='text-neutral-400 text-sm sm:text-lg'>
        "A lightweight desktop tool to proompt your AI overlords."
    </div>  
    <!-- Proomptr Copy -->
    <div class=' h-3/5 w-full relative flex items-center justify-center'>
        <img class='h-[75%] sm:h-full w-[95%] sm:w-3/5 absolute z-[1] rounded-lg' src={background} alt='desktop'/>
        <Proomptr/>
    </div>
    <div class='sm:hidden flex items-center gap-2 mb-4 w-[90%] bg-neutral-900 rounded-md p-4 text-neutral-400 text-xs'>
        <div class='material-symbols-outlined'>
            priority_high
        </div>
        Proomptr is an AI-quick-access app for using GPT chat, image generation, and quick access to the web.
        <br/><br/>
        It's designed for laptops and desktops only. 
        <br/>
        Please visit the full site and check it out!
    </div>
    <Popups/>
</div>