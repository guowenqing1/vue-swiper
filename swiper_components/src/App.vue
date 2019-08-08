<template>
  <div id="app">
    <home></home>
  </div>
</template>

<script>
import Home from './view/home/Home'
export default {
  name: 'App',
  components: {
    Home
  }
}
</script>

<style>
/* 为了方便 */
*{ 
  margin: 0;
  padding: 0;
}
</style>
