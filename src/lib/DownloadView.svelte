<script lang='ts'>
    let boxClass = 'p-2 rounded-md bg-neutral-900 text-white flex flex-col gap-4 w-1/2 gap-4 h-full items-center';
    let linkClass = 'text-blue-500 underline';

    import { Octokit, App } from 'octokit';

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

<div class='flex h-full w-full p-2 gap-2 items-center justify-center'>
    {#await downloadData}
        <div>Loading</div>
    {:then downloads}
        <div class={boxClass}>
            <div class='font-bold text-xl'>Windows</div>
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
        <div class={boxClass}>
            <div class='font-bold text-xl'>MacOS</div>
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
</div>