<template>
  <svg :width="w" :height="h" :viewBox="viewBox" xmlns="http://www.w3.org/2000/svg">
    <path :d="path" :fill="fill" />
  </svg>
</template>

<script>
export default {
  name: "SvgIcon",
  props: {
    path: String,
    h: String,
    w: String,
    viewBox: String,
    fill: String
  },
  created: function () {

  }
};
</script>
