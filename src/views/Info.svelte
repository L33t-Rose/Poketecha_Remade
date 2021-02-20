<script>
  import { store } from "../store";

  $: {
    console.log(`The length of teams array is: ${$store["teams"].length}`);
    console.log($store);
    localStorage[store.identifier] = JSON.stringify($store);
    console.log("Done saving");
    // console.log('team name:',teamName);
  }
</script>

<!-- <style>
  .red-card {
    @apply flex flex-col mb-6 rounded-md  bg-red-200 cursor-pointer p-4;
  }
</style> -->

<!-- <svg
  class="w-6 h-6"
  fill="currentColor"
  viewBox="0 0 20 20"
  xmlns="http://www.w3.org/2000/svg"><path
    fill-rule="evenodd"
    d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
    clip-rule="evenodd" /></svg> -->
<div>Junior</div>
<main class="flex justify-center min-h-screen h-auto bg-red-100">
  <div class="container mx-auto p-6">
    <div class="flex flex-wrap justify-evenly">
      <div class="red-card w-full h-24 md:mr-2">
        <svg
          class="relative w-20 h-20 center text-red-500"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"><path
            fill-rule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
            clip-rule="evenodd" /></svg>
      </div>

      <div class="w-full md:w-56 h-64 md:mr-2 relative red-card">
        <div class="flex flex-row w-full absolute rounded-t-md top-0 left-0">
          <h1 class="text-lg flex-1 pl-3 pt-3 pb-1 font-bold ">Junior Jean</h1>
          <div
            class="w-32 md:w-24 h-9 p-1 bg-red-400 rounded-tr-md flex flex-row offset ">
            <svg
              class="w-8 h-8 text-red-200"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"><path
                fill-rule="evenodd"
                d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                clip-rule="evenodd" /></svg>
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
    </div>
  </div>
</main>
