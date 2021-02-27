<script>
  export let checked = false;
  // export let rounded = true;
  export let label = "This is a Toggle!";
  $: {
    // console.log(checked);
  }
</script>
<style>
  .dot{
    transition: transform 0.15s ease-in;
  }
  input:checked ~ .dot{
    transform:translateX(100%);
  }
</style>
<label for="toggleA" class="flex items-center cursor-pointer relative">
  <div class="relative">
    <input 
    id="toggleA"
    type="checkbox" 
    class="hidden" 
     bind:checked />
    <div class="w-10 h-4 bg-red-400 rounded-full"></div>
    <div class="dot absolute w-6 h-6 rounded-full bg-red-700 inset-y-0 -left-1 -top-1"></div>
  </div>
  <div class="font-medium ml-2 ">{label}</div>
  <!-- <span class="slider {rounded ? 'rounded' : ''}" /> -->
</label>


