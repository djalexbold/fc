<script setup lang="ts">
import type { HTMLAttributes } from 'vue';

defineOptions({
  inheritAttrs: false
});

interface Props {
  className?: HTMLAttributes['class'];
}

defineProps<Props>();
</script>

<template>
    <svg xmlns="http://www.w3.org/2000/svg"
         width="300.000000pt" height="300.000000pt" viewBox="0 0 300 300"
         :class="className" v-bind="$attrs"
         preserveAspectRatio="xMidYMid meet">

    <g transform="translate(0.000000,300.000000) scale(0.100000,-0.100000)"
       fill="currentColor" stroke="none">
      <path d="M1565 2990 c-99 -12 -204 -33 -275 -57 l-55 -18 -3 -1042 -2 -1041
                      57 -36 c112 -70 303 -126 429 -126 l44 0 0 280 0 280 243 2 242 3 3 263 2 262
                      -245 0 -245 0 0 355 c0 340 1 355 19 355 42 0 191 -31 258 -54 104 -36 197
                      -87 292 -162 l84 -66 184 183 184 184 -64 61 c-177 168 -464 308 -736 359
                      -105 19 -312 27 -416 15z" />
      <path d="M974 2797 c-136 -81 -199 -130 -319 -251 -212 -212 -347 -469 -407
                      -768 -31 -159 -31 -397 0 -555 125 -633 600 -1095 1237 -1203 214 -37 470 -19
                      677 46 189 60 376 162 529 291 49 41 89 78 89 81 0 4 -83 90 -184 191 l-184
                      183 -65 -55 c-129 -110 -304 -191 -469 -217 -120 -20 -312 -8 -423 24 -334 99
                      -584 356 -677 696 -20 73 -23 108 -22 245 0 144 3 169 28 250 15 50 44 126 65
                      170 43 90 142 227 201 278 l40 34 0 306 c0 245 -3 307 -13 307 -7 0 -53 -24
                      -103 -53z" />
    </g>
  </svg>
</template>
