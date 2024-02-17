<template>
  <!-- Bookmark Filled -->
  <svg
    v-if="bookmarkType === 'filled'"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    :width="bookmarkSize"
    zoomAndPan="magnify"
    viewBox="0 0 375 374.999991"
    :height="bookmarkSize"
    preserveAspectRatio="xMidYMid meet"
    version="1.0"
  >
    <defs>
      <clipPath id="82033fc139">
        <path
          d="M 18.75 1.292969 L 356.25 1.292969 L 356.25 373.707031 L 18.75 373.707031 Z M 18.75 1.292969 "
          clip-rule="nonzero"
        />
      </clipPath>
      <clipPath id="baf95c8119">
        <path
          d="M 356.25 1.292969 L 356.25 373.707031 L 187.5 315.515625 L 18.75 373.707031 L 18.75 1.292969 Z M 356.25 1.292969 "
          clip-rule="nonzero"
        />
      </clipPath>
    </defs>
    <g clip-path="url(#82033fc139)">
      <g clip-path="url(#baf95c8119)">
        <path
          fill="#ffb74d"
          d="M 18.75 1.292969 L 356.25 1.292969 L 356.25 373.707031 L 18.75 373.707031 Z M 18.75 1.292969 "
          fill-opacity="1"
          fill-rule="nonzero"
        />
      </g>
    </g>
  </svg>

  <!-- Bookmark Outline -->
  <svg
    v-if="bookmarkType === 'outlined'"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    :width="bookmarkSize"
    zoomAndPan="magnify"
    viewBox="0 0 375 374.999991"
    :height="bookmarkSize"
    preserveAspectRatio="xMidYMid meet"
    version="1.0"
  >
    <defs>
      <clipPath id="f584984bab">
        <path
          d="M 18.75 1.292969 L 356.25 1.292969 L 356.25 373.703125 L 18.75 373.703125 Z M 18.75 1.292969 "
          clip-rule="nonzero"
        />
      </clipPath>
      <clipPath id="a9d0b562e0">
        <path
          d="M 356.25 1.292969 L 356.25 373.703125 L 187.5 315.515625 L 18.75 373.703125 L 18.75 1.292969 Z M 356.25 1.292969 "
          clip-rule="nonzero"
        />
      </clipPath>
    </defs>
    <g clip-path="url(#f584984bab)">
      <g clip-path="url(#a9d0b562e0)">
        <path
          stroke-linecap="butt"
          transform="matrix(0.75, 0, 0, 0.75, 18.751651, 1.293105)"
          fill="none"
          stroke-linejoin="miter"
          d="M 449.997857 -0.000182193 L 449.997857 496.546757 L 224.997828 418.963414 L -0.00220148 496.546757 L -0.00220148 -0.000182193 Z M 449.997857 -0.000182193 "
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

const bookmarkType = ref(props.type);
const bookmarkSize = ref(props.size);
</script>
