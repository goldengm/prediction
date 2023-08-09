<template>
  <svg
    :class="className"
    viewBox="0 0 19 5"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-bind="$attrs"
  >
    <line
      x1="2.26086"
      y1="2.92773"
      x2="16.1304"
      y2="2.92773"
      stroke="white"
      stroke-width="4"
      stroke-linecap="round"
    />
  </svg>
</template>

<script>
export default {
  name: "YPMinus",
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