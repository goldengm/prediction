<template>
  <svg
    :class="className"
    fill="none"
    viewBox="0 0 512 512"
    xmlns="http://www.w3.org/2000/svg"
    v-bind="$attrs"
  >
    <path
      :fill="fill"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1"
      d="m112 328l144-144l144 144"
    />
  </svg>
</template>

<script>
export default {
  name: "YPChevronUp",
  props: {
    className: {
      type: String,
      default: "h-5 w-5 xl:h-[22px] xl:w-[22px]"
    },
    fill: {
      type: String,
      default: "white"
    }
  }
};
</script>