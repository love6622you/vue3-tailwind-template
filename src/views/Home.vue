<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    <PreviewImgs />
    <ul>
      <TitleBarSlotExample :tag="'li'"></TitleBarSlotExample>
    </ul>
    <SlotByNormal>Slot Normal</SlotByNormal>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import PreviewImgs from "@/components/FileUpload_PreivewImgs.vue";
import TitleBarSlotExample from "@/components/SlotTemplate_ByRender.vue"
import SlotByNormal from "@/components/SlotTemplate_ByNormal.vue"

export default defineComponent({
  name: "Home",
  components: {
    HelloWorld,
    PreviewImgs,
    TitleBarSlotExample,
    SlotByNormal
  },
});
</script>
