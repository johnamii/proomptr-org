<script lang="ts">
    import { CurrentView, VIEW } from "../globals";

    const button_default = ' px-1 py-2 text-neutral-400 hover:text-blue-400 font-bold '
    const button_selected = ' text-white border-t border-t-blue-400 border-t-1 hover:text-white '
</script>

<div class='relative hidden sm:flex w-2/3 bg-neutral-900 gap-2 items-center justify-evenly rounded-md'>
   <button 
     class={($CurrentView == VIEW.INFO && button_selected) + button_default}
     on:click={() => CurrentView.set(VIEW.INFO)}
    >
        What is Proomptr?
   </button>
   <button 
     class={($CurrentView == VIEW.DOWNLOADS && button_selected) + button_default}
     on:click={() => CurrentView.set(VIEW.DOWNLOADS)}
    >
        Downloads
   </button>
   <button 
     class={($CurrentView == VIEW.DEMO && button_selected) + button_default}
     on:click={() => CurrentView.set(VIEW.DEMO)}    
   >
        Demo
   </button>
   <button 
     class={($CurrentView == VIEW.START && button_selected) + button_default}
     on:click={() => CurrentView.set(VIEW.START)}
    >
        Getting Started
   </button>
   <button 
     class={($CurrentView == VIEW.DOCS && button_selected) + button_default}
     on:click={() => CurrentView.set(VIEW.DOCS)}
    >
        Documentation
   </button> 
</div>
