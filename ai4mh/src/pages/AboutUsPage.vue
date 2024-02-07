<template>
  <q-page>
    <q-carousel
      v-model="slide"
      height="400px"
    >
      <q-carousel-slide name="first" img-src="https://cdn.quasar.dev/img/mountains.jpg">
        <div class="absolute-bottom custom-caption">
          <div class="text-h4">About us</div>
        </div>
      </q-carousel-slide>

    </q-carousel>
  </q-page>
  <q-page padding="">
      <div class="row items-center justify-center">
        <div v-html="about_us" style="max-width: 80%;">
        </div>
      </div>
  </q-page>
</template>

<script setup>
import { ref } from "vue";
import { api } from "src/boot/axios";
import { onMounted } from "vue";


const slide = ref("first");


onMounted(async () => {
  await Promise.all([getAboutUs()]);
});
</script>

<style scoped>

</style>
