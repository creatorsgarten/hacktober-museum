<script lang="ts">
  import Atropos from "atropos/svelte";
  import Fa from "svelte-fa";
  import { faBrain, faGamepad } from "@fortawesome/free-solid-svg-icons";
  import { Founders } from "../enums/founders.enum";
  import { AcademicTopics } from "../enums/topics.enum";
  import "../style/typography.css";
  import "../style/card-theme.css";

  export let display: "light" | "dark";
  export let title: string;
  export let theme: "playful" | "mindful";
  export let founderName: Founders;
  export let topic: AcademicTopics;
  export let githubUrl: string;
  export let imagePath: string | undefined;

  const colorSet =
    display == "light"
      ? {
          text: "text-HKBF-dark",
          background: "display-light bg-HKBF-white",
          button: "btn-secondary btn-active",
        }
      : {
          text: "text-HKBF-white",
          background: "bg-HKBF-dark",
          button: "btn-primary btn-outline",
        };
</script>

<div id="app" class="w-full">
  <Atropos class="rounded-2xl">
    <div
      class="image-full card h-64 {colorSet.background} rounded-2xl shadow-xl"
    >
      <figure class="overflow-hidden">
        {#if imagePath}
          <img class="w-full object-cover" src={imagePath} alt={title} />
        {:else}
          <span class="text-xl font-thin text-neutral-content"
            >Now printing</span
          >
        {/if}
      </figure>
      <div class="card-body">
        <div
          class="grid max-h-full grid-flow-col grid-cols-1 grid-rows-2 justify-between px-2"
        >
          <div class="col-span-1 py-2">
            <div class="flex content-center justify-between">
              <p class="th-title break-words line-clamp-2 {colorSet.text}">
                {title}
              </p>
              {#if theme == "mindful"}
                <Fa
                  icon={faBrain}
                  class="ml-2 place-self-center text-2xl {colorSet.text}"
                />
              {:else}
                <Fa
                  icon={faGamepad}
                  class="ml-2 place-self-center text-2xl {colorSet.text}"
                />
              {/if}
            </div>
          </div>
          <div class="col-span-1 py-2">
            <div class="grid grid-flow-col grid-rows-2 gap-y-2">
              <p class="en-content {colorSet.text}">{founderName}</p>
              <p class="en-light-title line-clamp-1 {colorSet.text}">{topic}</p>
            </div>
            <div class="card-actions justify-end">
              <a
                class="en-button-label btn-sm btn normal-case {colorSet.button}"
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Atropos>
</div>

<style>
  img {
    object-fit: contain;
  }
</style>
