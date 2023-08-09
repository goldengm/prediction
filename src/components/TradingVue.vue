<template>
  <div class="container">
    <trading-vue class="h-fill" :data="chart" title-txt="yPredict Analytics" :toolbar="true" :width="width"
      :height="height"></trading-vue>
    <!-- <div>
      <select @change="emitSelection">
        <option value="">Choose Pattern</option>
        <option
          v-for="pattern in crypto_patterns"
          :key="pattern.pattern_name"
          :value="pattern.pattern_name"
        >
          {{ pattern.pattern_name }}
        </option>
      </select>
    </div> -->
  </div>
</template>

<script>
import { TradingVue, DataCube } from "trading-vue-js";
import Data from "../data/data.json";
// import ohlcv from "../data/ohlcv.json";
import XP from "tvjs-xp";
const crypto_patterns = [
  {
    crypto_name: "BTC-USD",
    pattern_name: "Double Bottom",
    score: 34,
    coordinates: [
      {
        timestamp: 1558645200000,
        price: 7747.775810050505,
      },
      {
        timestamp: 1558648800000,
        price: 7758.393055431236,
      },
      {
        timestamp: 1558652400000,
        price: 7567.124358859602,
      },
      {
        timestamp: 1558656000000,
        price: 7775.345562024248,
      },
      {
        timestamp: 1558659600000,
        price: 7682.73436494546,
      },
      {
        timestamp: 1558663200000,
        price: 7789.193259949655,
      },
      {
        timestamp: 1558666800000,
        price: 7695.809163030451,
      },
      {
        timestamp: 1558670400000,
        price: 7700.131535105032,
      },
      {
        timestamp: 1558674000000,
        price: 7803.182955481568,
      },
      {
        timestamp: 1558677600000,
        price: 7609.053497367601,
      },
      {
        timestamp: 1558681200000,
        price: 7815.010920647017,
      },
      {
        timestamp: 1558684800000,
        price: 7726.7562344434,
      },
      {
        timestamp: 1558688400000,
        price: 7777.6365241016,
      },
    ],
  },
  {
    crypto_name: "ETH-USD",
    pattern_name: "Triple Top",
    score: 75,
    coordinates: [
      {
        timestamp: 1558645200000,
        price: 7647.775810050505,
      },
      {
        timestamp: 1558648800000,
        price: 7758.393055431236,
      },
      {
        timestamp: 1558652400000,
        price: 7667.124358859602,
      },
      {
        timestamp: 1558656000000,
        price: 7375.345562024248,
      },
      {
        timestamp: 1558659600000,
        price: 7682.73436494546,
      },
      {
        timestamp: 1558663200000,
        price: 7889.193259949655,
      },
    ],
  },
  {
    crypto_name: "LTC-USD",
    pattern_name: "Head and Shoulders",
    score: 91,
    coordinates: [
      {
        timestamp: 1558645200000,
        price: 7747.775810050505,
      },
      {
        timestamp: 1558648800000,
        price: 7658.393055431236,
      },
      {
        timestamp: 1558652400000,
        price: 7567.124358859602,
      },
      {
        timestamp: 1558656000000,
        price: 7775.345562024248,
      },
      {
        timestamp: 1558659600000,
        price: 7682.73436494546,
      },
      {
        timestamp: 1558663200000,
        price: 7589.193259949655,
      },
      {
        timestamp: 1558666800000,
        price: 7695.809163030451,
      },
      {
        timestamp: 1558670400000,
        price: 7700.131535105032,
      },
      {
        timestamp: 1558674000000,
        price: 7603.182955481568,
      },
      {
        timestamp: 1558677600000,
        price: 7609.053497367601,
      },
      {
        timestamp: 1558681200000,
        price: 7515.010920647017,
      },
      {
        timestamp: 1558684800000,
        price: 7626.7562344434,
      },
      {
        timestamp: 1558688400000,
        price: 7777.6365241016,
      },
    ],
  },
];

export default {
  name: "trading-app",
  components: { TradingVue },
  methods: {
    onResize(event) {
      this.height = window.innerHeight / 2.25
      if(window.innerWidth < 801){
        this.width = 800
      }else if(window.innerWidth < 1281){
        this.width = window.innerWidth
      }else{
        this.width = window.innerWidth / 1.39
      }
    },
    emitSelection(e) {
      this.pattern = e.target.value;
      const crypto_pattern_exists = crypto_patterns.find(
        (item) => item.pattern_name === e.target.value
      );
      if (crypto_pattern_exists) {
        this.setChart(crypto_pattern_exists.coordinates);
      }
    },
    formatCoordinates(coordinates) {
      return (coordinates = coordinates
        .map((item) => ({ timestamp: +item.timestamp, price: +item.price }))
        .map((item) => Object.values(item)));
    },
    setChart(coordinates) {
      const { tool, tools, ohlcv } = { ...Data };
      this.chart = new DataCube({
        ohlcv,
        onchart: [
          {
            name: "Alphabetical, 25",
            type: "Alphabetical",
            data: this.formatCoordinates(coordinates),
            settings: {
              "z-index": 5,
            },
          },
        ],
        tool,
        tools,
      });
    },
    fetchPatterns() {
      fetch("http://13.127.102.151:8000/model-api/crypto-pattern/", {
        method: "GET",
      })
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((e) => console.log(e));
      this.setChart(crypto_patterns[0].coordinates);
      this.pattern = crypto_patterns[0].pattern_name;
    },
  },
  mounted() {
    window.addEventListener("resize", this.onResize);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.onResize);
  },
  created() {
    this.fetchPatterns();
  },
  data() {
    return {
      chart: {},
      width: window.innerWidth < 1281 ? window.innerWidth : window.innerWidth / 1.4,
      height: window.innerHeight / 2.25,
      colors: {
        colorBack: "#fff",
        colorGrid: "#eee",
        colorText: "#333",
      },
      crypto_patterns,
      pattern: "",
    };
  },
};
</script>
<style scoped>
.container {
  width: 100%;
}
</style>
