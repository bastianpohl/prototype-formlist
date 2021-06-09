<template>
  <container>
    <div class="grid justify-items-center">
      <img alt="Vue logo" src="./assets/logo.png" />
    </div>
    <prototype-list />
  </container>
</template>

<script setup>
import PrototypeList from "./components/PrototypeList.vue";

</script>

<style>
body {
  background-color: #f8f8f8;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
