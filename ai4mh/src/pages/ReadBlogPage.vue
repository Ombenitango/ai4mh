<template>
  <q-page padding class="q-mt-md row justify-center">

  <p class="text-h4 text-bold " :style="$q.platform.is.desktop? 'max-width: 80%;' :'max-width: 100%;'" style="text-align: start;">{{ blog_data.title }}</p>
  <div :style="$q.platform.is.desktop? 'max-width: 80%;' :'max-width: 100%;'">
    <q-img  :src="serverUrl+'/'+blog_data.image_path"/>
    <p class="text-center">

      <section class="text-subtitle1">
        <div v-html="blog_data.content" style="text-align: justify; padding: 5px; "></div>
      </section>
    </p>
  </div>
  </q-page>

</template>

<script setup>
import { useQuasar } from 'quasar'
import { api } from 'src/boot/axios';
import { onMounted,ref } from 'vue';
import { useRoute } from 'vue-router';
import { useMeta } from "quasar";

const $q = useQuasar();
const route= useRoute();
const blog_data=ref([]);
const serverUrl = process.env.API_URL;
const getBlogById = async (id) => {
  try {
    const response = await api.get(`api/blogs/${id}`);
    blog_data.value = response.data;
    // localStorage.setItem("blog_data", JSON.stringify(response.data));

  } catch (error) {
    console.log(error);
  }

};
onMounted(async () => {
  const blog_id=route.params.id;

 await Promise.all([getBlogById(blog_id)]);
});

</script>
