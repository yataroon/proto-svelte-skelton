<script>
  import { AppBar } from "@skeletonlabs/skeleton";
</script>

<!-- <div id="header"> -->
  <AppBar class="h-1">
    <svelte:fragment slot="lead">
      (lead)
    </svelte:fragment>
    Header
    <svelte:fragment slot="trail">
      (trail)
    </svelte:fragment>
  </AppBar>
<!-- </div> -->

<style>
  #app-bar {
    height: 32px;
    background-color: lightpink;
  }
</style>

