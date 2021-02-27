<script>
  // import { onMount } from "svelte";

  export let data;
  export let index;
  import { store } from "../store";
  import { teamSchema } from "../utils/utils";

  console.log($store["teams"][index].mons);

  // let open = false;
  // let color;

  // onMount(() => {
  //   color = Math.floor(Math.random() * 16777215)
  //     .toString(16)
  //     .padStart(6, 0);
  //   console.log(index, ": ", color);
  // });
  function addTeam() {
    if (teamName) {
      let d = teamSchema();
      d.name = teamName;
      $store["teams"] = [...$store.teams, d];
      teamName = "";
    } else {
      console.log("Fuck You");
    }
  }

  function removeTeam(name) {
    $store["teams"] = $store["teams"].filter((m) => m.name !== name);
    // $store['teams'] = $store
  }
</script>


<div class="w-full md:w-56 h-64 md:mr-6 relative red-card shadow-lg">
  <div class="flex flex-row w-full absolute rounded-t-md top-0 left-0">
    <h1 class="text-xl flex-1 pl-3 pt-3 pb-1 font-bold ">{data.name}</h1>
    <div
      class="w-32 md:w-24 h-10 shadow- bg-red-400 rounded-full flex flex-row justify-center items-center offset z-10">
      <button
        type="button"
        on:click={(e) => removeTeam(data.name)}
        class="border-0 w-8 h-8 focus:border-red text-red-200 bg-red-400 outline-none btn ">
        <svg
          class=" "
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"><path
            fill-rule="evenodd"
            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
            clip-rule="evenodd" /></svg>
      </button>
    </div>
  </div>
  <div
    class="flex flex-wrap relative center h-full items-center justify-center">
    <div class="flex flex-wrap flex-col space-y-3">
      <div class="flex space-x-2">
        <div class="rounded-full bg-gray-800 w-10 h-10" />
        <div class="rounded-full bg-gray-800 w-10 h-10" />
        <div class="rounded-full bg-gray-800 w-10 h-10" />
      </div>
      <div class="flex space-x-2">
        <div class="rounded-full bg-gray-800 w-10 h-10" />
        <div class="rounded-full bg-gray-800 w-10 h-10" />
        <div class="rounded-full bg-gray-800 w-10 h-10" />
      </div>
    </div>
  </div>
</div>
