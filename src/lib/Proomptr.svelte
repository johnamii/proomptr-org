<script>
    import { slide, fly } from 'svelte/transition';
    import shrek from '$lib/assets/shrek.png';

    let state = 0;

    let states = [
        {type: "Chat Input", color: "bg-green-300", content: "What's the meaning of life?"},
        {type: "Chat Output", color: "bg-green-300", content: "The meaning of life is a highly personalized and philosophical concept. It often relates to one's individual purpose, personal fulfillment, and the understanding of their own existence. It can be influenced by various factors including religious beliefs, relationships, personal achievements, or making a positive impact on the world."},
        {type: "Draw Input", color: "bg-black", content: "shrek on honeymoon"},
        {type: "Draw Output", color: 'bg-black', content: shrek},
        {type: "Search Input", color: 'bg-blue-400', content: "proomptr documentation"},
        {type: "Youtube Input", color: 'bg-red-500', content: "wooper"},
    ]

    function cycleState() {
        state = (state + 1) % states.length;
    }

    setInterval(cycleState, 6000);

    let cursorVisible = true;
    setInterval(() => {
        cursorVisible = !cursorVisible
    }, 750)
</script>

<div 
  class='w-[90%] sm:w-1/2 z-[2] text-xs sm:text-base flex flex-col items-center justify-center bg-[rgba(255,255,255,0.9)] sm:p-2 rounded-lg '

>
    {#if states[state].type.includes('Input')}
        <div transition:slide={{duration: 300}} class='relative w-full h-full flex items-center justify-between gap-4 p-2'>
            <div class='p-1 px-3 text-transparent'>Youtube</div>
            {#each states as mode, i}
                {#if i == state}
                <div 
                    class='absolute p-[2px] px-[8px] sm:p-1 sm:px-3 {states[state].color} text-white rounded-md'
                    in:fly|local={{y:-100, duration: 400}}
                    out:fly|local={{y:100, duration: 400}}
                >
                    {states[state].type.split(' ')[0]}
                </div>
                {/if}
            {/each}
            <div class='grow flex gap-1'>
                {states[state].content}
                {#if cursorVisible}
                    <div class='bg-neutral-700 min-h-1/4 max-h-1/4 min-w-[1px]'/>
                {/if}
            </div>
            <span class='material-symbols-outlined text-[rgba(0,0,0,0.5)] text-sm sm:text-base'>
                settings
            </span>
        </div>
        {:else}
        <div transition:slide={{duration:500}} class='flex flex-col items-center justify-center gap-1 px-2'>
            <span class='material-symbols-outlined text-xs'> expand_less </span>
            <div class='bg-[rgba(0,0,0,0.05)] p-4 rounded-md text-neutral-700 flex flex-col items-center justify-center'>
                {#if state == 1}
                    <div class='px-2'>
                        {states[state].content}
                    </div>
                {:else if state == 3}
                    <div class='relative rounded-md flex items-center justify-center'>
                        <div class='absolute sm:w-full text-neutral-100 text-center top-0 sm:left-0 bg-[rgba(0,0,0,0.2)] p-1'>"shrek on honeymoon"</div>
                        <img src={shrek} alt='Should be a pic here...' class='w-1/2 sm:w-full'/>
                    </div>
                {/if}
            </div>
            <span class='material-symbols-outlined text-xs'> expand_more </span>
        </div>
    {/if}
</div>