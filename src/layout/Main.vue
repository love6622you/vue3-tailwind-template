<template>
  <div class="main-layout">
    <!-- <Header /> -->
    <div class="view">
      <router-view :key="fullPath"></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
// import Header from '@/components/Header.vue'

export default {
  components: {
    // Header,
  },
  setup() {
    const route = useRoute()
    const fullPath = computed(() => route.fullPath)
    return { fullPath }
  }
}
</script>

<style lang="scss" scoped>
.main-layout {
  position: relative;
  padding: 100px 32px 0px;
}
</style>
