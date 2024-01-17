<script lang='ts'>
    import MainView from "$lib/MainView.svelte";
    import InfoView from '$lib/InfoView.svelte';
    import { Octokit, App } from 'octokit';
    
    let mainView = true;

    var octokit = new Octokit();

    async function getReleases(): any[] {
        
        let res = await octokit.rest.repos.listReleases({
            owner: 'johnamii',
            repo: 'proomptr-org',
        })
        
        return res.data;
    }

    async function initDownloads() {
        let array = await getReleases();

        let item_vals = array.map(item => {
            return {
                name: item.name,
                tag: item.tag_name,
                url: item.assets[0].browser_download_url
            }
        });

        return item_vals;
    }

    let downloadData: any;
    (async () => {
        downloadData = await initDownloads(); // your async function
    })();
    
</script>

<div class='w-screen h-screen flex flex-col bg-neutral-800 overflow-hidden'>
    {#if mainView}
        <MainView downloads={downloadData}/>
        <!--  -->
        <button on:click={() => mainView = false} class='absolute bottom-0 pb-2 w-full hidden sm:flex items-center justify-center text-white hover:bg-gradient-to-t from-neutral-900 to-neutral-800'>
            <div class='flex flex-col items-center gap-2'>
                Learn More
                <span class='material-symbols-outlined shadow-lg'>
                    expand_more
                </span>
            </div>
        </button>
    {:else}
        <button on:click={() => mainView = true} class='absolute flex top-0 pt-2 w-full items-center justify-center text-white hover:bg-gradient-to-b from-neutral-900 to-neutral-800'>
            <div class='flex flex-col items-center gap-2'>
                <span class='material-symbols-outlined shadow-lg'>
                    expand_less
                </span>
                Learn Less
            </div>
        </button>
        <!--  -->
        <InfoView/>
    {/if}
</div>