<script>
  import { store } from "../store";
  import { teamSchema } from "../utils/utils";

  import Team from "../components/Team.svelte";
  import Toggle from "../components/Toggle.svelte";
  import Overlay from "../components/Overlay.svelte";

  let teamName = "";

  let fullWidth = true;
  let visible = false;

  $: {
    console.log(`The length of teams array is: ${$store["teams"].length}`);
    console.log($store);
    localStorage[store.identifier] = JSON.stringify($store);
    console.log("Done saving");
    console.log(fullWidth);
    // console.log('team name:',teamName);
  }

  function addTeam() {
    teamName = teamName.trim();
    if (teamName) {
      
      const exists = $store["teams"].every(({ name }, i) => {
        return name !== teamName;
      });

      if (exists) {
        let d = teamSchema();
        d.name = teamName;
        $store["teams"] = [...$store.teams, d];
        teamName = "";
      } else {
        alert("It already exists!!!");
      }
    }
  }

  function toggleOverlay(e) {
    document.body.classList.toggle('noscroll');
    visible = !visible;
  }
</script>

<!-- <svelte:body class:noscroll={"{visible? 'noscroll': ''}"}/> -->
<Overlay
  bind:visible
  class="flex justify-center items-center flex-col bg-red-900"
>
  <div>
    <h1 class="text-white text-center block">Junior Jean</h1>
    <form on:submit|preventDefault={addTeam}>
      <input type="text" bind:value={teamName} />
      <button type="submit" class="bg-red-300 text-black">Add</button>
    </form>
  </div>
</Overlay>

<main
  class="flex justify-center min-h-screen h-auto bg-red-100 yes relative {visible? 'noscroll': ''}"
>
  <div class="container mx-auto p-6 space-y-4">
    <div class=" hidden md:block">
      <Toggle label="Full or Card?" bind:checked={fullWidth} />
    </div>
    <div>
      <h1 class="text-center text-5xl font-bold">Teams</h1>
      <p class="text-center text-3xl font-bold">
        Create and View Your Pokemon Teams!
      </p>
    </div>
    <!-- md:w-56 -->
    <!-- md:h-64 -->
    <!-- Give users the choice on how to display add button -->
    <!-- Do you want full width or width of card-->
    <div class="flex flex-wrap justify-evenly">
      <!-- Add Button -->
      <div
        class="red-card w-full h-24 {fullWidth
          ? ''
          : 'smallCard'}  md:mr-6 shadow-lg cursor-pointer"
        on:click={toggleOverlay}
      >
        <svg
          class="relative w-20 h-20 center text-red-400"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          ><path
            fill-rule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
            clip-rule="evenodd"
          /></svg
        >
      </div>

      {#each $store["teams"] as i, index}
        <Team data={i} {index} />
      {/each}
    </div>
  </div>
</main>

<!-- <div class="container mx-auto px-8">
  <p>Length of Teams Array is {$store['teams'].length}</p>

  <form on:submit|preventDefault={addTeam}>
    <input type="text" bind:value={teamName} />
    <button type="submit">Add</button>
  </form>
  <div class="">
    {#each $store['teams'] as i, index}
      <Team data={i} {index} />
    {/each}
  </div>
</div> -->
<style>
  .smallCard {
    @apply md:w-56 md:h-64;
  }
</style>
