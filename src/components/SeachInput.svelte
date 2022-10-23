<script lang="ts">
  import { onMount } from "svelte";

  export let value = "";
  export let componentIsHydrated = false;

  onMount(() => {
    componentIsHydrated = true;
  });

  const onChangeValue = (e: Event) => {
    value = (e.target as HTMLInputElement).value;
  };
</script>

<input
  type="text"
  class="input w-full"
  placeholder="Search by founder, topic, project"
  {value}
  on:input={onChangeValue}
  disabled={!componentIsHydrated}
/>
