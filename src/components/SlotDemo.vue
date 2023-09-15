<script setup lang="ts"></script>

<template>
  <div class="container">
    <h1>Slot demo</h1>
    <div class="red">
      <slot name="red" />
    </div>
    <div class="green">
      <slot name="red" />
    </div>
    <div class="default">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.red {
  color: red;
}

.green {
  color: green;
}

.default {
  color: darkslategray;
}
</style>
