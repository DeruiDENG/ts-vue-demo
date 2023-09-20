<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import MousePosition from '@/components/MousePosition.vue'
import SlotDemo from '@/components/SlotDemo.vue'

const status = ref({ count: '' })
const count = computed(() => Number(status.value.count))
const doubleCount = computed(() => count.value * 2)
const items = ['a', 'b', 'c']
const getClickHandler = (name: string) => (event: Event) =>
  console.log(`Clicked on the ${name} with the tag: ${(event.target as HTMLElement)?.tagName}`)
const onClickMethodMode = getClickHandler('Method Mode')
const picked = ref(['One'])
const incrementStatus = () => {
  status.value = { count: (Number(count.value) + 1).toString() }
}

// Test watch
watch(
  () => status.value.count,
  (count, prevCount) => {
    console.log(`Status count changed from ${prevCount} to ${count}`)
  }
)

watch(
  status,
  (newStatus, preStatus) => {
    console.log(`Status object changed from`, preStatus, `to`, newStatus)
  },
  { deep: true }
)
</script>
<template>
  <div class="about">
    <h1>This is an about page</h1>
    <MousePosition :offset="count" />
    <SlotDemo>
      <template #red> Red Slot</template>
      <template #green> Green Slot</template>
      <template #default>Default Slot</template>
    </SlotDemo>
    <div>
      <button @click="incrementStatus">Add 1</button>
      <p>Count is: {{ status.count }}</p>
      <p>Double count is {{ doubleCount }}</p>
    </div>
    <div>
      <h2>V-for test</h2>
      <ul>
        <li v-for="item in items" :key="item">
          {{ item }}
        </li>
      </ul>
    </div>
    <div>
      <h2>Event Test</h2>
      <button type="button" @click="getClickHandler('Inline Mode')($event)">
        Click Inline Mode
      </button>
      <button type="button" @click="onClickMethodMode">Click Method Mode</button>
    </div>
    <div>
      <h2>Input Test</h2>
      <input type="text" v-model="status.count" @keyup.ctrl.delete="status.count = ''" />
    </div>
    <div>
      <h2>Multiple Select</h2>
      <div>Picked: {{ picked }}</div>
      <input type="checkbox" id="one" value="One" v-model="picked" />
      <label for="one">One</label>

      <input type="checkbox" id="two" value="Two" v-model="picked" />
      <label for="two">Two</label>
    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
}
</style>
