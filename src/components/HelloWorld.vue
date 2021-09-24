<template>
  <div class="hello">
    <div class="global-test">global-test</div>
    <div class="text-3xl">Tailwind font</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HelloWorld",
  props: {
    msg: String,
  },
});
</script>

<style scoped lang="scss">
.global-test {
  font-size: $fontTestSize;
}
</style>
