<template>
  <q-page style="height: 90vh;">
    <q-carousel animated v-model="slide" arrows infinite autoplay style="height: 100%;">
      <q-carousel-slide
        v-for="item in slides"
        :key="item.id"
        :name="item.id"
        :img-src='serverUrl+"/"+item.image_path'
        class="relative-position"
      >
        <div class="absolute-bottom custom-caption text-white">
          <div class="text-h4">{{ item.heading }}</div>
          <div class="text-subtitle1">{{  }}</div>
        </div>
      </q-carousel-slide>
    </q-carousel>
  </q-page>
  <q-page class="" padding="">
      <div class="text-center text-h4 q-my-md">About Project</div>
      <div class="row items-center justify-center q-px-md">
        <div class="col-md-6 col-sm-12 col-xs-12 row items-center justify-center q-mt-lg">
          <q-img src="~assets/team.jpeg" style="height: auto; width: 600px;"/>
         </div>
         <div class="col-md-5 col-sm-12 col-xs-12" style="height: 100%;">
            <p class="truncate_width" v-html="formattedAboutUs"></p>
            <q-btn flat dense color="primary" v-if="isAboutUsLong" @click="toggleReadMoreAboutUs" class="q-mx-sm text-capitalize" style="margin-top: -50px;">
              Read {{ showingFullTextAboutUs ? "Less" : "More" }}
            </q-btn>
          </div>
      </div>
  </q-page>

  <q-page padding="">
     <div class="text-center text-h4 q-my-md">Lastest Blog/News</div>
      <div class="row justify-center" >
        <q-btn class="my-card q-ma-sm" v-for="blog in blogs" :key="blog" :to="/blog/+blog.id+'/'+blog.title.replace(/\s/g, '_')">
          <q-img :src="serverUrl+'/'+blog.image_path" style="height: 200px;"/>
          <q-item style="padding">
            <q-item-section avatar>
              <q-avatar>
                <q-img src="~assets/logo.png"/>
              </q-avatar>
            </q-item-section>

            <q-item-section>
              <q-item-label class="truncate">
                {{ blog.title }}
                <q-tooltip>
                  {{ blog.title }}
                </q-tooltip>
              </q-item-label>
              <q-item-label caption>{{ date.formatDate(Date.parse(blog.created_at),"YYYY-MM-DD") }}</q-item-label>
            </q-item-section>
          </q-item>
        </q-btn>
      </div>
  </q-page>
  <q-page padding="">
     <div class="text-center text-h4 q-mt-md">Sponsor</div>
     <div class="row items-center justify-center">
       <a href="https://costech.or.tz">
        <q-avatar square size="250px">
      <img src="https://costech.or.tz/front/assets/img/11.png">
    </q-avatar>
       </a>
     </div>
  </q-page>

  <q-page padding="">
     <div class="text-center text-h4 q-my-md">Partners</div>
     <div class="fit row wrap justify-center items-center">
      <div class="q-ma-sm col-lg-3 col-sm-12 col-xs-12 text-center">
        <a href="https://www.mnmh.or.tz" class="text-center">
          <q-img class="rounded-borders col-6 full-height" src="~assets/mhmh-logo.png" style="width: 330px; height: auto;"/>
        </a>
      </div>
      <div class="q-ma-sm col-lg-3 col-sm-12 col-xs-12 text-center">
        <a href="https://www.udom.ac.tz" class="text-center">
          <q-img class="rounded-borders col-6 full-height" src="~assets/udom-logo.png" style="width: 230px; height: auto;"/>
        </a>
      </div>
      <div class="q-ma-sm col-lg-3 col-sm-12 col-xs-12 text-center">
        <a href="https://nm-aist.ac.tz/" class="text-center">
          <q-img class="rounded-borders col-6 full-height" src="~assets/nelson-mandela-logo.jpg" style="width: 250px; height: auto;"/>
        </a>

      </div>
     </div>
  </q-page>


</template>

<script setup>
import { ref } from "vue";
import { api } from "src/boot/axios";
import { onMounted,computed } from "vue";
import { date } from "quasar";

const slide = ref(1);
const slides= ref([]);
const blogs= ref([]);
const serverUrl = process.env.API_URL;
const about_us= ref("");
const slide_partners=ref(1);

const getAboutUs = async () => {
  const { data } = await api.get("/api/about-us");
  about_us.value = data[0].content;

};
const getSlides = async () => {
  const { data } = await api.get("/api/slideshows");
  slides.value = data;
};

const getBlogs = async () => {
  const { data } = await api.get("/api/blogs/latest");
  blogs.value = data;
};
onMounted(async () => {
  await Promise.all([getSlides(), getBlogs(), getAboutUs()]);
});

const showingFullTextAboutUs = ref(false);

const isAboutUsLong = computed(() => {
  return about_us.value && about_us.value.length > 20;
});

const formattedAboutUs = computed(() => {
  if (showingFullTextAboutUs.value) {
    return about_us.value;
  }

  return about_us.value && about_us.value.length > 20 ? `${about_us.value.slice(0, 500).trim()}...` : about_us.value;
});



const toggleReadMoreAboutUs = () => {
  showingFullTextAboutUs.value = !showingFullTextAboutUs.value;
};



</script>

<style scoped>

.my-card{
  max-width: 350px;
  max-height: 250px;
  cursor: pointer;
  background-image: url('~assets/logo.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

}

.truncate_width {
  overflow: hidden;
  text-overflow: ellipsis;
  text-align:justify;
}

</style>
