<template>
  <svg
    width="20"
    height="20"
    :viewBox="viewBox"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path :d="path" fill="white" />
  </svg>
</template>

<script>
export default {
  props: ["viewBox", "path"],
  name: "SvgFixedDimension",
};
</script>
