<template>
  <div class="noTokenLayout" :style="{ height: height }">
    <router-view :key="fullPath"></router-view>
  </div>
</template>

<script lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

export default {
  setup() {
    const height = computed(() => {
      return document.body.clientHeight + 'px'
    })

    const route = useRoute()
    const fullPath = computed(() => route.fullPath)
    return { fullPath, height }
  }
}
</script>

<style lang="scss" scoped>
.noTokenLayout {
  background: #22282c;
}
</style>
