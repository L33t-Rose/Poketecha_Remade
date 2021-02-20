<script>
  import { store } from "../store";
  import { teamSchema } from "../utils/utils";

  import Team from "../components/Team.svelte";

  let teamName = "";

  $: {
    console.log(`The length of teams array is: ${$store["teams"].length}`);
    console.log($store);
    localStorage[store.identifier] = JSON.stringify($store);
    console.log("Done saving");
    // console.log('team name:',teamName);
  }

  function addTeam() {
    if (teamName) {

      const exists = $store["teams"].every(({name},i)=>{
        return name !== teamName;
      })

      if(exists){
        let d = teamSchema();
        d.name = teamName;
        $store["teams"] = [...$store.teams, d];
        teamName = "";
      }
      else{
        alert("It already exists!!!");
      }
    }
  }
</script>

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

<main class="flex justify-center min-h-screen h-auto bg-red-100">
  <div class="container mx-auto p-6">
    <div class="flex flex-wrap justify-evenly">
      <form on:submit|preventDefault={addTeam}>
        <input type="text" bind:value={teamName} />
        <button type="submit">Add</button>
      </form>
      <div class="red-card w-full h-24 md:mr-2">
        <svg
          class="relative w-20 h-20 center text-red-400"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"><path
            fill-rule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
            clip-rule="evenodd" /></svg>
      </div>

        {#each $store['teams'] as i, index}
          <Team data={i} {index} />
        {/each}
     
    </div>
  </div>
</main>
