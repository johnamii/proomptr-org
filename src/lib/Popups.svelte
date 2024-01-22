<script lang="ts">
    import { fly } from "svelte/transition";

    let windowsDownload = [0];
    let macDownloads = [0];

    enum WINDOW {
        NONE,
        DOWNLOADS,
        GETTINGSTARTED,
        DOCUMENTATION
    }

    let windowVisible = WINDOW.NONE;

    let boxClass = 'flex flex-col gap-4 w-1/2 gap-4 h-full items-center';
    let linkClass = 'text-blue-500 underline text-sm';

    let defaultControls = [
        { title: 'Open/Close Proomptr', code: 'Control+Space'},
        { title: 'Flip Input/Conversation', code: 'Alt'},
        { title: 'Open Options Menu', code: 'Control+o'},
        { title: 'Send Prompt', code: 'Enter'},
        { title: 'Save Options / Response', code: 'Control+s'},
        { title: 'Clear Conversation', code: 'Control+q'}
    ]

    function flipWindow(val: WINDOW) {
        if (windowVisible == val) {
            windowVisible = WINDOW.NONE;
        }
        else {
            windowVisible = val;
        }
    }

    export let downloads: any;
</script>

<div class='hidden sm:flex gap-4 items-center justify-center z-[4]'>
    <button 
        class={(windowVisible !== WINDOW.NONE? 'bg-neutral-100 text-neutral-900' : 'bg-neutral-900 text-white') + ' rounded-lg p-4 text-center text-lg font-bold hover:text-blue-400'}
        on:click={() => flipWindow(WINDOW.DOWNLOADS)}
    >
        {windowVisible == WINDOW.DOWNLOADS ? "Hide" : "View"} Downloads
    </button>
    <button 
        class={(windowVisible !== WINDOW.NONE ? 'bg-neutral-100 text-neutral-900' : 'bg-neutral-900 text-white') + ' rounded-lg p-4 text-center text-lg font-bold hover:text-blue-400'}
        on:click={() => flipWindow(WINDOW.GETTINGSTARTED)}
    >
        {windowVisible == WINDOW.GETTINGSTARTED ? "Hide" : ""} Getting Started
    </button>
    <button 
        class={(windowVisible !== WINDOW.NONE ? 'bg-neutral-100 text-neutral-900' : 'bg-neutral-900 text-white') + ' rounded-lg p-4 text-center text-lg font-bold hover:text-blue-400'}
        on:click={() => flipWindow(WINDOW.DOCUMENTATION)}
    >
        {windowVisible == WINDOW.DOCUMENTATION ? "Hide" : ""} Documentation
    </button>
</div>
{#if windowVisible !== WINDOW.NONE}
<div class='absolute w-full h-full top-0 left-0 bg-[rgba(0,0,0,0.1)] z-[3] blur'/>
<div 
  class='z-[5] absolute h-3/4 w-3/4 top-6 text-white text-xl text-center bg-[rgba(10,10,10,0.95)] rounded-lg flex flex-col items-center'
  transition:fly={{duration:300, y:100}}
>
    <div class=' text-3xl p-8 w-full'>{windowVisible == WINDOW.DOWNLOADS ? "Downloads" : windowVisible == WINDOW.GETTINGSTARTED ? "Getting Started" : "Documentation"}</div>
    <div class='h-[1px] w-1/2 bg-neutral-700'/>
    <div class='flex h-full w-full items-center p-4'>
        {#if windowVisible == WINDOW.DOWNLOADS}
        {#await downloads}
            <div></div>
        {:then downloads} 
            <div class={boxClass}>
                Windows
                {#each downloads ?? [] as download}
                    {#if download.tag.includes('Windows')}
                    <div class='h-[1px] w-1/2 bg-neutral-700'/>
                    <div class='flex gap-4 items-center'>
                        &bull;
                        <a class={linkClass} href={download.url}>
                            {download.name} {download.tag} Installer
                        </a>
                    </div>
                    {/if}
                {/each}
                
            </div>
            <div class='h-3/4 w-[1px] bg-neutral-700'/>
            <div class={boxClass}>
                MacOS
                {#each downloads ?? [] as download}
                    {#if download.tag.includes("Mac")}
                    <div class='h-[1px] w-1/2 bg-neutral-700'/>
                    <div class='flex gap-4 items-center'>
                        &bull;
                        <a class={linkClass} href={download.url}>
                            {download.name} {download.tag} Installer
                        </a>
                    </div>
                    {/if}
                {/each}
            </div>
        {/await}
            
        {:else if windowVisible == WINDOW.GETTINGSTARTED}
            <div class='w-full h-full p-8 max-h-92 flex flex-col items-start text-start gap-6 text-base overflow-y-scroll'>
                <div>
                    1. Download and install Proomptr.
                </div>
                <div>
                    2. Review Controls in <button on:click={() => flipWindow(WINDOW.DOCUMENTATION)} class='text-blue-500 hover:underline'>Documentation</button>
                </div>
                <div>
                    3. Create an official <a class='text-blue-500 hover:underline' href='https://platform.openai.com/signup/'>OpenAI Account</a>, add a payment method,
                </div>
                <div>
                    4. Open
                    <a class='text-blue-400 hover:underline' href='https://platform.openai.com/api-keys'>OpenAI Api Keys</a>
                    , create one, and paste it into Proomptr's options.
                </div>
                <div>
                    5. Review 
                    <a class='text-blue-400 hover:underline' href='https://openai.com/pricing/'>OpenAI pricing per model</a>
                     so you know what to expect.
                </div>
                <div>
                    6. Start Proompting.
                </div>
                <div>
                    7. Read <a class='text-blue-400 hover:underline' href='https://platform.openai.com/docs/guides/rate-limits?context=tier-free'>OpenAI's (new...) API Rate Limits</a> to learn
                    how to access gpt-4 and dall-e-3 models. Basically you have to "have spent" $5 to reach that tier. It's simplest to get
                    $5 credit immediately and have that to spend on your upcoming usage. Note that the average average usage of Proomptr will typically
                    fall way under OpenAI's ChatGPT Premium which is $20/month.
                </div>
            </div>
        {:else}
            <div class='w-full h-full p-8 flex flex-col items-start gap-4 text-lg overflow-y-scroll max-h-80 grow'>
                <h1 class='text-xl font-bold underline'>Default Controls</h1>
                {#each defaultControls as control}
                    <div class='flex text-white items-center gap-2'>
                        &bull; {control.title}:    
                        <p class='m-2 p-1 px-2 font-bold rounded-md bg-[#ffffff1a]'>
                            {control.code}
                        </p>
                    </div>
                {/each}
            </div>
        {/if}
    </div>
</div>
{/if}