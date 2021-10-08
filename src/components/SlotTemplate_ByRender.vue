<script lang="ts">
import { h } from "vue";
import icon from "../assets/logo.png";

export default {
  name: "SlotTemplateByRender",
  props: {
    tag: {
      type: String,
      default: "h1"
    }
  },
  setup(props, { slots }) {
    return () => {
      const slotsContent =
        Object.keys(slots).length === 0 ? "這是預設內容 " : slots.default!();

      return h(
        props.tag,
        {
          class: "text-4xl"
        },
        [
          Array.from({ length: 10 }).map(() => {
            return h("p", {}, "hi");
          }),
          h("img", {
            class: "icon",
            src: icon
          }),
          slotsContent,
          "Class 也能吃到 Tailwind 參數"
        ]
      );
    };
  }
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
