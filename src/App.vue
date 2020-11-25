<template>
  <div>
    <h1>Broker parser</h1>
    <div>
      <TextAreaInput />
      <ConvasComponent />
      <TextAreaOutput />
    </div>
  </div>
</template>

<script>
import TextAreaInput from './components/TextAreaInput.vue'
import ConvasComponent from './components/ConvasComponent.vue'
import TextAreaOutput from './components/TextAreaOutput.vue'

export default {
  name: 'App',
  components: {
    TextAreaInput,
    ConvasComponent,
    TextAreaOutput
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
