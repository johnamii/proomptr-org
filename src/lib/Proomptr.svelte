<script>
    import { scale, fade, slide } from 'svelte/transition';

    let state = 1;

    let states = [
        {type: "Chat Input", color: "bg-green-300", content: "What's the meaning of life?"},
        {type: "Chat Output", color: "", content: "The meaning of life is a highly personalized and philosophical concept. It often relates to one's individual purpose, personal fulfillment, and the understanding of their own existence. It can be influenced by various factors including religious beliefs, relationships, personal achievements, or making a positive impact on the world."},
        {type: "Draw Input", color: "bg-black", content: "shrek on honeymoon"},
        {type: "Draw Output", color: '', content: 'src\media\shrek_on_honeymoon.png'},
        {type: "Search Input", color: 'bg-blue-400', content: "proomptr documentation"},
        {type: "Youtube Input", color: 'bg-red-400', content: "funny wooper"},
    ]

    function cycleState() {
        state = (state + 1) % states.length;
    }

    setInterval(cycleState, 2000)
</script>

<div 
  class='w-1/2 flex flex-col items-center justify-center bg-[rgba(255,255,255,0.9)] p-2 rounded-lg '

>
    {#if states[state].includes('Input')}
        <div transition:slide={{duration: 300}} class='w-full h-full flex items-center justify-between gap-4 p-2'>
            <div class='p-1 px-3 bg-green-300 text-white rounded-md'>
                Chat
            </div>
            <div class='grow'>
                What's the meaning of life?
            </div>
            <span class='material-symbols-outlined text-[rgba(0,0,0,0.5)]'>
                settings
            </span>
        </div>
        {:else}
        <div transition:slide={{duration:500}} class='flex flex-col items-center justify-center gap-1 px-2'>
            <span class='material-symbols-outlined text-xs'> expand_less </span>
            <div class='bg-[rgba(0,0,0,0.05)] p-4  rounded-md text-neutral-700'>
                {#if state == 1}
                    <div class='px-2'>
                    </div>
                {:else}
                    <div class='relative rounded-md'>
                        <div class='absolute w-full text-neutral-100 text-center top-0 left-0 bg-[rgba(0,0,0,0.2)] p-1'>"shrek on honeymoon"</div>
                        <img src='src\media\shrek_on_honeymoon.png' alt='Should be a pic here...'/>
                    </div>
                {/if}
            </div>
            <span class='material-symbols-outlined text-xs'> expand_more </span>
        </div>
    {/if}
</div>