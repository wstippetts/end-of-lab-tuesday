<template>
  <div class="container-fluid">
    <div class="row my-3">
      <div class="col-12 d-flex justify-content-between align-items-center">

      </div>
    </div>

    <div class="row">
      <div v-for="giftCard in gifts" class="col-md-3 p-4">
        <GiftCard :gift="giftCard" />
      </div>
    </div>
  </div>
</template>

<script>
import { logger } from '../utils/Logger.js';
import Pop from '../utils/Pop.js';
import { giftsService } from '../services/GiftsService.js'
import { onMounted, computed, ref } from 'vue';
import { AppState } from '../AppState.js';
export default {
  setup() {

    onMounted(() => getGifts())

    async function getGifts() {
      try {
        await giftsService.getGifts()
      } catch (error) {
        Pop.error(error.message)
        logger.error(error)

      }
    }
    return {
      // editable,
      gifts: computed(() => AppState.gifts)
    }
  }
}
</script>

<style scoped lang="scss">
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;

  .home-card {
    width: 50vw;

    >img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
</style>
