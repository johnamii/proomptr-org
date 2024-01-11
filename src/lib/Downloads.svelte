<script>
    import { fly } from "svelte/transition";

    let windowVisible = false;
    let windowsDownload = [0];
    let macDownloads = [0];

    let boxClass = 'flex flex-col gap-4 w-1/2 gap-4 h-full items-center';
    let linkClass = 'text-blue-500 underline text-sm'
</script>

<button 
  class={'z-10 ' + (windowVisible ? 'bg-neutral-100 text-neutral-900' : 'bg-neutral-900 text-white') + ' rounded-lg p-4 text-center text-lg font-bold hover:text-blue-400'}
  on:click={() => windowVisible = !windowVisible}
>
    {windowVisible ? "Hide" : "View"} Downloads
</button>
{#if windowVisible}
<div 
  class='absolute h-4/5 w-1/2 text-white text-xl text-center bg-neutral-900 rounded-lg flex flex-col'
  transition:fly={{duration:300, y:100}}
>
    <div class=' text-3xl p-8 w-full'>Downloads</div>
    <div class='flex h-full w-full items-center'>
        <div class={boxClass}>
            Windows
            {#each windowsDownload as download}
            <div class='h-[1px] w-1/2 bg-neutral-700'/>
            <div class='flex gap-4 items-center'>&bull;<a class={linkClass} href=''>x64 Installer</a></div>
            {/each}
        </div>
        <div class='h-3/4 w-[1px] bg-neutral-700'/>
        <div class={boxClass}>
            MacOS
            {#each macDownloads as download}
                
                <div class='h-[1px] w-1/2 bg-neutral-700'/>
                <div class='flex gap-4 items-center'>&bull;<a class={linkClass} href=''>ARM64 Installer</a></div>

            {/each}
        </div>
    </div>
</div>
<!-- <div class='bg-neutral-800 h-[1px] w-3/4'></div>

            <div class='w-full p-4 flex flex-col items-start justify-center gap-2'>
                <div> &bull; <a href='https://proomptr.org' class='text-blue-500 underline'> Windows x64 Installer </a></div>
                <div> &bull; <a href='https://proomptr.org' class='text-blue-500 underline'> MacOS ARM64 Installer </a></div>
            </div> -->
{/if}