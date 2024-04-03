<script lang='ts'>
    import { fly } from "svelte/transition";
    import { Svrollbar, Svroller } from 'svrollbar';
</script>

<div class='max-h-full w-full py-4 flex flex-col justify-between items-center gap-4 text-neutral-400 overflow-y-scroll'>
    <!-- HEADER -->
    <div class="bg-neutral-900 rounded-lg p-4 w-3/4 text-center flex flex-col gap-4">
        <h1 class='text-2xl text-white'>What is Proomptr?</h1>
        <p class='text-md p-2'>
            Proomptr is a lightweight desktop app for Windows and MacOS designed to provide the quickest access to 
            OpenAI premium toolsl without any subscriptions. You pay OpenAI by usage only, providing access at a much lower cost.
    
            <br/>
            <b class='font-bold'>Proomptr itself is free.</b> 
            <br/>
            Everything is available at one keypress, including more convenience features like instant Google and YouTube search.
            Everything is just one Proompt away.
        </p>
    </div>
    <!-- CHAT -->
    <div class='w-full flex'>
        <div class='bg-neutral-900 rounded-lg p-4 w-3/5 flex justify-between items-center gap-2 text-center'>
            <p>
                Easy access to OpenAI GPT-3, GPT-4, and GPT-4-vision models without any subscription.
                <br>
                Customize on a whim, save your conversations, and remember your prompts.
            </p>
            <div class='text-white p-1 px-3 bg-green-400 min-w-fit rounded-md'>
                Chat
            </div>
        </div>
    </div>
    <!-- DRAW -->
    <div class='w-full flex justify-end'>
        <div class='bg-neutral-900 rounded-lg p-4 w-3/5 flex justify-between items-center gap-2 text-center'>
            <div class='text-white p-1 px-3 bg-black border border-white min-w-fit rounded-md'>
                Draw
            </div>
            <p>
                Create, edit, and save images using DALL-E-2 and DALL-E-3 Models.
                Customize your own images or make variations of generated ones dynamically.
            </p>
        </div>
    </div>
    <!-- OTHER MODES -->
    <div class='w-full flex'>
        <div class='bg-neutral-900 rounded-lg p-4 w-3/5 flex justify-between items-center gap-2 text-center'>
            <p>
                Instantly search on relevant platforms without a context switch.
                More to come soon, aiming towards files, apps, and a calculator.
            </p>
            <div class='flex flex-col gap-2 text-white'>
                <div class='text-white p-1 px-3 bg-blue-400 min-w-fit rounded-md'>
                    Search
                </div>
                <div class='text-white p-1 px-3 bg-red-500 min-w-fit rounded-md'>
                    Youtube
                </div>
                ...more
            </div>
        </div>
    </div>
</div>