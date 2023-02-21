<template>
  <img :src="gift.url" :alt="gift.tag + ' image'" class="img-fluid rounded selectable">

  <h2>
    {{ gift.tag }}
  </h2>
</template>


<script>
import { Gift } from "../models/Gift.js";
export default {
  props: {
    gift: { type: Gift }
  },
  setup() {
    return {}
  }
}
</script>


<style lang="scss" scoped></style>