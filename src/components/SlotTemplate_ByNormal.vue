<template>
  <h1>
    <img class="icon" src="../assets/logo.png" alt="" />
    <slot></slot>
  </h1>
</template>

<script lang="ts">
export default {
  name: "SlotTemplateByRender",
  setup(props, { slots }) {}
};
</script>

<style lang="scss" scoped>
h1,
h2,
h3,
h4,
h5,
h6,
div,
p,
a,
span,
li {
  display: flex;
  align-items: center;
  color: cadetblue;
  text-decoration: none;
  //   font-size: 30px;
  margin-bottom: 20px;
}
img.icon {
  display: block;
  width: 30px;
  margin-right: 10px;
}
</style>
