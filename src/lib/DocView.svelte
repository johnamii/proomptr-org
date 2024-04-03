<script lang='ts'>
    let defaultControls = [
        { title: 'Open/Close Proomptr', code: 'Control+Space'},
        { title: 'Flip Input/Conversation', code: 'Alt'},
        { title: 'Open Options Menu', code: 'Control+o'},
        { title: 'Send Prompt', code: 'Enter'},
        { title: 'Save Options / Response', code: 'Control+s'},
        { title: 'Clear Conversation', code: 'Control+q'}
    ]
</script>

<div class='w-full h-full p-8 flex flex-col items-start bg-neutral-900 rounded-md text-white gap-4 text-lg overflow-y-scroll '>
    <h1 class='w-full text-center text-xl font-bold underline'>Default Controls</h1>
    {#each defaultControls as control}
        <div class='flex text-white items-center gap-2'>
            &bull; {control.title}:    
            <p class='m-2 p-1 px-2 font-bold rounded-md bg-[#ffffff1a]'>
                {control.code}
            </p>
        </div>
    {/each}
</div>