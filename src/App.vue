<template>
  <main class="main__wrapper">
    <main-header />
    <sidebar />
    <div class="page-wrapper">
      <router-view />
    </div>
  </main>
</template>

<script>
import MainHeader from "@/components/MainHeader";
import Sidebar from "@/components/Sidebar";

export default {
  name: 'App',
  components: {
    MainHeader,
    Sidebar
  }
}
</script>

<style>

.main__wrapper {
  min-height: 100vh;
  background: linear-gradient(0deg, rgba(255, 255, 255, 0.13), rgba(255, 255, 255, 0.13)), #FAECCF;
}

.page-wrapper {
  min-height: calc(100% - 60px);
  margin-left: 235px;

  box-shadow: 0 0 2px #D7D7E7;
  border-radius: 6px 0 0 0;
  box-sizing: border-box;

  background: #FFFFFF;
}

</style>

<style src="./assets/main.css"></style>
