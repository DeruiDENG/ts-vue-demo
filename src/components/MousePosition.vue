<script setup lang="ts">
import { useMouse } from '@/utils/useMouse'
import { toRef } from 'vue'

const props = defineProps<{ offset: number }>()
const { x, y } = useMouse(toRef(props, 'offset'))
</script>

<template>
  <div class="mouse-position">
    <h1>Mouse Position</h1>
    <p>Offset: {{ offset }}</p>
    <p>x: {{ x }}</p>
    <p>y: {{ y }}</p>
  </div>
</template>

<style scoped></style>
