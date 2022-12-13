<script>
  import { AppShell } from '@skeletonlabs/skeleton';
  import Footer from '../components/Footer.svelte';
  import Header from '../components/Header.svelte';
  import Main from '../components/Main.svelte';
  import SidebarLeft from '../components/SidebarLeft.svelte';
  import SidebarRight from '../components/SidebarRight.svelte';
  import { useMediaQuery } from '../stores/useMediaQuery';

  $: largerThanSm = useMediaQuery('(min-width: 640px)');
  $: num = 1 + 1;
</script>

<AppShell>
  <svelte:fragment slot="header">
    <Header />
  </svelte:fragment>

  <svelte:fragment slot="sidebarLeft">
    <div class="h-full overflow-hidden hidden sm:block">
      <SidebarLeft />
    </div>
  </svelte:fragment>

  <svelte:fragment slot="sidebarRight">
    {#if $largerThanSm === true}
      <SidebarRight />
    {/if}
  </svelte:fragment>

  <!-- <svelte:fragment slot="pageHeader">Page Header</svelte:fragment> -->
  <!-- Router Slot -->
  <!-- <slot /> -->
  <Main />
  <!-- <div>test</div>
  <div class={$largerThanSm ? 'bg-orange-500' : 'bg-lime-500'}>
    {$largerThanSm}
  </div>
  <div>{num}</div> -->

  <!-- ---- / ---- -->
  <!-- <svelte:fragment slot="pageFooter">Page Footer</svelte:fragment> -->
  <svelte:fragment slot="footer"><Footer /></svelte:fragment>
</AppShell>
