<script lang="ts">
  import { faBrain, faGamepad } from "@fortawesome/free-solid-svg-icons";
  import Fa from "svelte-fa";

  export let title: string;
  export let theme: "playful" | "mindful";
  export let textClassname: string;
</script>

<div class="flex content-center justify-between">
  <p class="th-title break-words line-clamp-2 {textClassname}">
    {title}
  </p>
  {#if theme == "mindful"}
    <Fa
      icon={faBrain}
      class="ml-2 place-self-center text-2xl {textClassname}"
    />
  {:else}
    <Fa
      icon={faGamepad}
      class="ml-2 place-self-center text-2xl {textClassname}"
    />
  {/if}
</div>
