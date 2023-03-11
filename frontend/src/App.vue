<template>
  <div class="flex flex-col min-h-screen mt-16">
    <TopNavBar />
    <div>
      <RouterView></RouterView>
    </div>
    <div><BottomNavBar /></div>
    <div class=" inset-x-0 bottom-0">
      <FooterSection />
    </div>
  </div>
</template>

<script>
import BottomNavBar from "./components/BottomNavBar.vue";
import FooterSection from "./components/FooterSection.vue";
import TopNavBar from "./components/TopNavBar.vue";
export default {
  name: "App",
  components: { TopNavBar, BottomNavBar, FooterSection },
  setup() {},
};
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
}
</style>
