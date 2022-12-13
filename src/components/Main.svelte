<script lang="ts">
  import { CircleX } from 'tabler-icons-svelte';
  import { useMediaQuery } from '../stores/useMediaQuery';
  import cc from 'classcat';

  $: largerThanSm = useMediaQuery('(min-width: 640px)');
</script>

<div
  id="main-container"
  class={cc(['h-full', $largerThanSm ? 'bg-red-100' : 'bg-green-100'])}
>
  Main
  <div class="flex-col space-y-3">
    <button class="btn bg-primary-500 btn-base text-white flex space-x-1">
      <CircleX />
      <div>Button</div>
    </button>
    <button class="btn bg-primary-500 btn-base text-white flex space-x-1">
      <CircleX />
      <div>Button</div>
    </button>
  </div>
</div>

<style></style>
