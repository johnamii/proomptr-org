<script lang='ts'>
    import { fly } from "svelte/transition";
    import { CurrentView, VIEW } from "../globals";
    import InfoView from '$lib/InfoView.svelte';
    import DownloadView from "$lib/DownloadView.svelte";
    import DemoView from "$lib/DemoView.svelte";
    import GettingStartedView from "$lib/GettingStartedView.svelte";
    import DocView from "$lib/DocView.svelte";
    import ControlBar from "$lib/ControlBar.svelte";
    import Footer from "$lib/Footer.svelte";
    
    const Views = [
        {index: VIEW.INFO, component: InfoView},
        {index: VIEW.DOWNLOADS, component: DownloadView},
        {index: VIEW.DEMO, component: DemoView},
        {index: VIEW.START, component: GettingStartedView},
        {index: VIEW.DOCS, component: DocView}
    ]
</script>

<div class='w-screen h-screen flex flex-col bg-neutral-800 overflow-hidden items-center justify-center gap-8 sm:gap-0 sm:justify-between pt-12 sm:pt-4'>
    <h1 class='font-bold text-3xl sm:text-5xl text-white'>Proomptr</h1>
    <div class='hidden sm:block w-[90%] sm:w-full text-center text-neutral-400 text-lg'>
        - A lightweight desktop app to conveniently proompt your AI overlords -
    </div>
    <!--SLIDING WINDOW CONTAIENR-->
    <div class='w-[90%] sm:w-2/3 aspect-video justify-center overflow-hidden rounded-lg box-shadow-lg border-white border-double border-2'>
        {#each Views as View, i}
            {#if $CurrentView == View.index}
               <div transition:fly={{ x:-800, duration:300}} class='sm:p-2 w-full h-full flex items-center'>
                    <svelte:component this={View.component}/>
               </div> 
            {/if}
        {/each}
    </div>
    <ControlBar/>
    <div class='sm:hidden flex items-center gap-2 mb-4 w-[90%] bg-neutral-900 rounded-md p-4 text-neutral-400 text-xs'>
        <div class='material-symbols-outlined'>
            priority_high
        </div>
        Proomptr is an AI-quick-access app for using GPT chat, image generation, and quick access to the web.
        <br/><br/>
        Proomptr, and this website for it, are designed for Windows and MacOS only. 
        Please visit the site on your computer and check it out!
    </div>
    <Footer/>
</div>