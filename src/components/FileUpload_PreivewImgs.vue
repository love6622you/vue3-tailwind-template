<template>
  <div>
    <input
      ref="inputDOM"
      type="file"
      class="upload"
      name="imgUpload"
      multiple="multiple"
      @change="fileChange"
    />
    <button @click="uploadImages">上傳照片</button>
  </div>
  <div
    v-show="Object.values(previewMap).length !== 0"
    class="img_box"
    v-for="item in previewMap"
    :key="item"
  >
    <img :src="item" alt="" />
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
import { useFileUpate } from "../hook/useFileUpdate";
export default {
  name: "FileUpdate",
  components: {},
  props: {},
  setup() {
    const { setFile, previewMap } = useFileUpate();

    const inputDOM = ref<any>("");

    const fileChange = (e) => {
      console.log(e.target.files);
      setFile(e.target.files);
    };

    const uploadImages = () => {
      inputDOM && inputDOM.value.click();
    };

    return {
      inputDOM,
      fileChange,
      uploadImages,
      previewMap
    };
  }
};
</script>

<style lang="scss" scoped>
.upload {
  position: fixed;
  top: -500px;
  left: -500;
  z-index: -100;
  opacity: 0;
}
button {
  width: 300px;
  height: 60px;
  font-size: 30px;
}
.img_box {
  width: 300px;
  height: 300px;
  float: left;
  background-color: #000;
  margin: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
}
img {
  display: block;
  width: 100%;
  height: auto;
}
</style>
