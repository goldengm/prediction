<template>
  <svg
    :class="className"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-bind="$attrs"
  >
    <path
      :fill="fill"
      d="M10 4H8v4H4v2h6zM8 20h2v-6H4v2h4zm12-6h-6v6h2v-4h4zm0-6h-4V4h-2v6h6z"
    />
  </svg>
</template>

<script>
export default {
  name: "YPExitFullScreen",
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