<template>
  <div id="app">
    <Navigation/>
    <Dashboard/>
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue'
import Dashboard from './components/Dashboard.vue'
import "@/assets/css/theme.css"
import "@/assets/css/style.css"


export default {
  name: 'app',
  components: {
    Navigation,
    Dashboard
  }
}
</script>

<style>
</style>
