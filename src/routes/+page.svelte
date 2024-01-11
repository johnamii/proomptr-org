<script>
    import MainView from "$lib/MainView.svelte";
    import InfoView from '$lib/InfoView.svelte'
    
    let mainView = true;
</script>

<div class='w-screen h-screen flex flex-col bg-neutral-800 overflow-hidden'>
    {#if mainView}
        <MainView/>
        <!--  -->
        <button on:click={() => mainView = false} class='absolute bottom-0 pb-2 w-full flex items-center justify-center text-white hover:bg-gradient-to-t from-neutral-900 to-neutral-800'>
            <div class='flex flex-col items-center gap-2'>
                Learn More
                <span class='material-symbols-outlined shadow-lg' style='animation: bounce 1s infinite; '>
                    expand_more
                </span>
            </div>
        </button>
    {:else}
        <button on:click={() => mainView = true} class='absolute top-0 pt-2 w-full flex items-center justify-center text-white hover:bg-gradient-to-b from-neutral-900 to-neutral-800'>
            <div class='flex flex-col items-center gap-2'>
                <span class='material-symbols-outlined shadow-lg' style='animation: bounce 1s infinite; '>
                    expand_less
                </span>
                Learn Less
            </div>
        </button>
        <!--  -->
        <InfoView/>
    {/if}
</div>