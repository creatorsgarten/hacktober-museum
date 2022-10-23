<script lang="ts">
  import SearchInput from "./SeachInput.svelte";
  import Card from "./Card.svelte";
  import { CardProps } from "../types/card.interface";

  export let entries: CardProps[];
  export let searchValue = "";

  let originalEntries = entries;

  const filterEntries = (newEntries: CardProps[], newSearchValue: string) =>
    newEntries.filter(
      (entry) =>
        entry.founderName.toLowerCase().includes(newSearchValue) ||
        entry.title.toLowerCase().includes(newSearchValue) ||
        entry.topic.toLowerCase().includes(newSearchValue)
    );

  $: {
    entries = filterEntries(originalEntries, searchValue);
  }
</script>

<div
  class="grid w-full grid-flow-row grid-cols-9 justify-between gap-x-5 gap-y-8 p-12"
>
  <div class="col-span-9">
    <SearchInput bind:value={searchValue} />
  </div>
  {#each entries as item}
    <div class="col-span-9 col-start-auto lg:col-span-4 xl:col-span-4">
      <Card {...item} />
    </div>
  {/each}
</div>
