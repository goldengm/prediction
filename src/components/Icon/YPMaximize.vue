<template>
  <svg
    :class="className"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-bind="$attrs"
  >
    <path
      :fill="fill"
      fill-rule="evenodd"
      d="M15 5.25a.75.75 0 0 1-1.5 0V3.56l-3.22 3.22a.75.75 0 1 1-1.06-1.06l3.22-3.22h-1.69a.75.75 0 0 1 0-1.5H15v4.25ZM3.81 13.5l2.97-2.97a.75.75 0 1 0-1.06-1.06L2.5 12.69v-1.94a.75.75 0 0 0-1.5 0V15h4.25a.75.75 0 0 0 0-1.5H3.81Z"
      clip-rule="evenodd"
    />
  </svg>
</template>

<script>
export default {
  name: "YPMaximize",
  props: {
    className: {
      type: String,
      default: "h-4 w-4 xl:h-[22px] xl:w-[22px]"
    },
    fill: {
      type: String,
      default: "white"
    }
  }
};
</script>