// Adds all necessary stuff for you.
import { Overlay } from "trading-vue-js";

export default {
  name: "Grin",
  mixins: [Overlay],
  methods: {
    meta_info() {
      return { author: "C451", version: "1.0.0" };
    },
    draw(ctx) {
      const l = this.$props.layout;
      const c = { x: l.width / 2, y: l.height / 2 };
      ctx.lineWidth = 1;
      ctx.strokeStyle = "gray";
      ctx.fillStyle = "#ffea03";
      ctx.beginPath();
      ctx.arc(c.x, c.y, 50, 0, Math.PI * 2, true); // Outer circle
      ctx.fill();
      ctx.stroke();
      ctx.beginPath();
      ctx.strokeStyle = "black";
      ctx.moveTo(c.x + 35, c.y);
      ctx.arc(c.x, c.y, 35, 0, Math.PI, false); // Mouth (clockwise)
      ctx.moveTo(c.x - 10, c.y - 10);
      ctx.fillStyle = "#ffea03";
      ctx.arc(c.x - 15, c.y - 10, 5, 0, Math.PI * 2, true); // Left eye
      ctx.fill();
      ctx.moveTo(c.x + 20, c.y - 10);
      ctx.arc(c.x + 15, c.y - 10, 5, 0, Math.PI * 2, true); // Right eye
      ctx.fill();
      ctx.stroke();
    },

    // For all data with these types overlay will be
    // added to the renderer list. And '$props.data'
    // will have the corresponding values. If you want to
    // redefine the default behviour for a prticular
    // indicator (let's say EMA),
    // just create a new overlay with the same type:
    // e.g. use_for() { return ['EMA'] }.
    use_for() {
      return ["GRIN"];
    },
    data_colors() {
      return ["yellow"];
    },
  },
  data() {
    // Define internal setting & constants here
    return {};
  },
};
