import { computed, onMounted, onUnmounted, ref } from 'vue'
import type { Ref } from 'vue'

export function useMouse(offset: Ref<number>) {
  // 被组合式函数封装和管理的状态
  const x = ref(0)
  const y = ref(0)
  const offsetX = computed(() => x.value + offset.value)

  // 组合式函数可以随时更改其状态。
  function update(event: MouseEvent) {
    x.value = event.pageX
    y.value = event.pageY
  }

  // 一个组合式函数也可以挂靠在所属组件的生命周期上
  // 来启动和卸载副作用
  onMounted(() => {
    console.log('useMouse mounted')
    window.addEventListener('mousemove', update)
  })
  onUnmounted(() => {
    console.log('useMouse unmounted')
    window.removeEventListener('mousemove', update)
  })

  // 通过返回值暴露所管理的状态
  return { x: offsetX, y }
}
