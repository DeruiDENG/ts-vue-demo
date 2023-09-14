<script setup lang="ts">
defineProps<{
  msg: string
  onClickButton: (event: Event) => void
}>()

defineEmits<{
  buttonClicked: [value: { name: string }]
}>()
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      You’ve successfully created a project with
      <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>. What's next?
    </h3>
    <button @click="onClickButton">Click Me Props</button>
    <!--    No String Type Being Enforced when using inline mode-->
    <button @click="$emit('buttonClicked', { name: 111 })">Click Me Emitter</button>
    <button @click="$emit('buttonClicked', { absdfsf: 111 })">
      Click Me Emitter Incorrect Type
    </button>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
