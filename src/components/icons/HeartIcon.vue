<template>
  <!-- Heart Filled -->
  <svg
    v-if="heartType === 'filled'"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    :width="heartSize"
    zoomAndPan="magnify"
    viewBox="0 0 375 374.999991"
    :height="heartSize"
    preserveAspectRatio="xMidYMid meet"
    version="1.0"
  >
    <defs>
      <clipPath id="238d935e15">
        <path
          d="M 0 23 L 375 23 L 375 351.5625 L 0 351.5625 Z M 0 23 "
          clip-rule="nonzero"
        />
      </clipPath>
      <clipPath id="cc914775ac">
        <path
          d="M 14.867188 75.828125 C -15.539062 125.921875 5.882812 174.679688 32.800781 200.554688 L 190.199219 351.5625 L 344.273438 201.09375 C 369.308594 173.257812 378.90625 143.730469 373.574219 110.851562 C 366.214844 65.367188 328.734375 30.082031 282.433594 25.042969 C 254.035156 21.984375 226.601562 30.019531 205.195312 47.8125 C 199.429688 52.597656 194.28125 57.949219 189.792969 63.765625 C 184.464844 57.144531 178.21875 51.085938 171.15625 45.714844 C 146.535156 27.003906 115.199219 19.578125 85.09375 25.355469 C 56.582031 30.863281 30.992188 49.253906 14.867188 75.828125 Z M 14.867188 75.828125 "
          clip-rule="nonzero"
        />
      </clipPath>
    </defs>
    <g clip-path="url(#238d935e15)">
      <g clip-path="url(#cc914775ac)">
        <path
          fill="#f9595f"
          d="M 0 23.4375 L 375 23.4375 L 375 351.5625 L 0 351.5625 Z M 0 23.4375 "
          fill-opacity="1"
          fill-rule="nonzero"
        />
      </g>
    </g>
  </svg>

  <!-- Heart Outline -->
  <svg
    v-if="heartType === 'outlined'"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    :width="heartSize"
    zoomAndPan="magnify"
    viewBox="0 0 375 374.999991"
    :height="heartSize"
    preserveAspectRatio="xMidYMid meet"
    version="1.0"
  >
    <defs>
      <clipPath id="4cdd7133a1">
        <path
          d="M 0 23.4375 L 375 23.4375 L 375 351.5625 L 0 351.5625 Z M 0 23.4375 "
          clip-rule="nonzero"
        />
      </clipPath>
      <clipPath id="ce8ffc81b0">
        <path
          d="M 14.867188 75.828125 C -15.539062 125.921875 5.882812 174.679688 32.800781 200.554688 L 190.199219 351.5625 L 344.273438 201.09375 C 369.308594 173.257812 378.90625 143.730469 373.574219 110.851562 C 366.214844 65.367188 328.734375 30.082031 282.433594 25.042969 C 254.035156 21.984375 226.601562 30.019531 205.195312 47.8125 C 199.429688 52.597656 194.28125 57.949219 189.792969 63.765625 C 184.464844 57.144531 178.21875 51.085938 171.15625 45.714844 C 146.535156 27.003906 115.199219 19.578125 85.09375 25.355469 C 56.582031 30.863281 30.992188 49.253906 14.867188 75.828125 Z M 14.867188 75.828125 "
          clip-rule="nonzero"
        />
      </clipPath>
    </defs>
    <g clip-path="url(#4cdd7133a1)">
      <g clip-path="url(#ce8ffc81b0)">
        <path
          stroke-linecap="butt"
          transform="matrix(0.75, 0, 0, 0.75, 0.0000045, 23.437498)"
          fill="none"
          stroke-linejoin="miter"
          d="M 19.822911 69.854169 C -20.718756 136.645836 7.843744 201.656252 43.734369 236.156252 L 253.598953 437.500003 L 459.031245 236.875002 C 492.411453 199.760419 505.208328 160.390627 498.098953 116.552086 C 488.286453 55.906252 438.312495 8.859377 376.57812 2.140627 C 338.713536 -1.937498 302.135411 8.776044 273.593744 32.500002 C 265.906244 38.88021 259.041661 46.015627 253.057286 53.770835 C 245.953119 44.94271 237.624994 36.864585 228.208328 29.703127 C 195.385411 4.75521 153.598953 -5.145831 113.458328 2.557294 C 75.442702 9.901044 41.322911 34.421877 19.822911 69.854169 Z M 19.822911 69.854169 "
          stroke="#333333"
          stroke-width="40"
          stroke-opacity="1"
          stroke-miterlimit="4"
        />
      </g>
    </g>
  </svg>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  type: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    required: true,
  },
});

const heartType = ref(props.type);
const heartSize = ref(props.size);
</script>
