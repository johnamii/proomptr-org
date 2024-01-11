<script>
    import Proomptr from "$lib/Proomptr.svelte";

</script>

<div class='w-screen h-screen flex flex-col bg-neutral-800 overflow-hidden'>
    <div class='h-full w-full flex flex-col items-center justify-center gap-6'>
        <h1 class='text-5xl text-white'>Proomptr</h1>
        <div class='text-neutral-400 text-lg'>
            "A lightweight desktop tool to proompt your AI overlords."
        </div>  
        <!-- Proomptr Copy -->
        <Proomptr/>
        
        <!-- Download -->
        <div class='flex flex-col gap-2 items-center justify-center bg-neutral-900 text-white w-1/3 rounded-lg p-4'>
            <h1 class='text-center text-lg'>Downloads</h1>
            <!-- <div class='bg-neutral-800 h-[1px] w-3/4'></div>

            <div class='w-full p-4 flex flex-col items-start justify-center gap-2'>
                <div> &bull; <a href='https://proomptr.org' class='text-blue-500 underline'> Windows x64 Installer </a></div>
                <div> &bull; <a href='https://proomptr.org' class='text-blue-500 underline'> MacOS ARM64 Installer </a></div>
            </div> -->
        </div>
    </div>
    <div class='absolute bottom-0 w-full flex flex-col items-center justify-center text-white gap-2'>
        Learn More
        <span class='material-symbols-outlined shadow-lg'>
            expand_more
        </span>
    </div>
</div>