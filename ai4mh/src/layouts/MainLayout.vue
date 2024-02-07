<template>
  <q-layout view="hHh lpR fff">
    <q-header elevated="" class="bg-grey-3">
      <q-toolbar>
        <q-btn
          v-if="$q.platform.is.mobile"
          flat
          @click="drawer = !drawer"
          round
          class=""
        >
          <q-icon name="menu" color="primary"></q-icon>
        </q-btn>
        <q-toolbar-title>
          <q-btn flat to="/">
            <q-avatar size="60px">
              <img src="~assets/logo.png" />
            </q-avatar>
          </q-btn>
        </q-toolbar-title>
        <q-space />
        <q-tabs
          class="text-dark"
          v-if="$q.platform.is.desktop"
          indicator-color="grey-3"
        >
          <div v-for="menu in menuList" :key="menu">
            <q-route-tab
              v-if="menu.label !== 'Publications'"
              :label="menu.label"
              :to="menu.to"
              class="text-capitalize"
              exact
            >
            </q-route-tab>
            <q-btn-dropdown
              v-if="menu.label == 'Publications'"
              color="white"
              flat
              label="Publications"
              class="text-black text-capitalize"
              exact
            >
              <q-list>
                <q-item clickable v-close-popup to="/publications/research">
                  <q-item-section>
                    <q-item-label>Conference paper</q-item-label>
                  </q-item-section>
                </q-item>

                <q-item clickable v-close-popup to="/publications/journals">
                  <q-item-section>
                    <q-item-label>Journal paper</q-item-label>
                  </q-item-section>
                </q-item>

                <!-- <q-item clickable v-close-popup to="/publications/books">
                  <q-item-section>
                    <q-item-label>Reports</q-item-label>
                  </q-item-section>
                </q-item> -->
                <!-- <q-item clickable v-close-popup to="">
                  <q-item-section>
                    <q-item-label>Articles</q-item-label>
                  </q-item-section>
                </q-item> -->
              </q-list>
            </q-btn-dropdown>
          </div>
          <q-btn  color="primary" type="tag" href="http://ai4mh.or.tz/api/public/admin/login" class="text-capitalize q-mx-sm">
                <q-item-section>
                  <q-item-label>Login</q-item-label>
                </q-item-section>
              </q-btn>
        </q-tabs>
      </q-toolbar>
    </q-header>
    <q-drawer
      v-model="drawer"
      :width="250"
      :breakpoint="500"
      overlay
      bordered
      :class="$q.dark.isActive ? 'bg-grey-9' : 'bg-white'"
    >
      <q-scroll-area class="fit">
        <q-list>
          <template v-for="menu in menuList" :key="menu">
            <q-tabs class="" inline-label indicator-color="white">
              <q-route-tab
                v-if="menu.label !== 'Publications'"
                :label="menu.label"
                :to="menu.to"
                class="text-capitalize q-pa-md"
                :icon="menu.icon"
                exact
              >
              </q-route-tab>
              <q-btn-dropdown
                v-if="menu.label == 'Publications'"
                color="white"
                flat
                label="Publications"
                class="text-black text-capitalize q-pa-md"
                exact
                icon="description"
              >
                <q-list>
                  <q-item clickable v-close-popup to="/publications/research">
                    <q-item-section>
                      <q-item-label>Conference paper</q-item-label>
                    </q-item-section>
                  </q-item>

                  <q-item clickable v-close-popup to="/publications/journals">
                    <q-item-section>
                      <q-item-label>Journals Paper</q-item-label>
                    </q-item-section>
                  </q-item>


                </q-list>
              </q-btn-dropdown>

            </q-tabs>
          </template>
          <q-btn  color="primary" type="tag" style="width: 220px;" href="http://ai4mh.or.tz/api/public/admin/login" class="text-capitalize q-ma-md">
                <q-item-section>
                  <q-item-label>Login</q-item-label>
                </q-item-section>
              </q-btn>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer bordered class="bg-primary text-white q-pa-lg">
      <div class="row">
        <div class="col-md-3 col-sm-12 col-xs-12">
          <div
            class="column bg-blue q-pa-md q-ma-md items-center justify-center"
          >
            <p class="text-h5"><b>AI4MH</b></p>
            <p class="text-subtitle2">
              <i
                >Empowering minds through the synergy of technology and compassion, AI for Mental Health strives to illuminate the path to well-being, reminding us that even in the realm of algorithms, every line of code can become a beacon of hope</i
              >

            </p>
          </div>
        </div>

        <div class="col-md-3 col-sm-12 col-xs-12">
          <p class="text-h5">Quick links</p>
          <q-list>
            <q-item
              clickable
              class="row items-center"
              style="padding-left: -13px"

            >
              <q-icon
                color="white"
                size="25px"
                name="chevron_right"
                class="q-mr-sm"
              />
              <a href="/" style="text-decoration: none; color: white;">
                <q-item-section>Home</q-item-section>
               </a>
            </q-item>

            <q-item
              clickable
              class="row items-center"
              style="padding-left: -13px"

            >
              <q-icon
                color="white"
                size="25px"
                name="chevron_right"
                class="q-mr-sm"
              />
              <a href="/contant-us" style="text-decoration: none; color: white;">
                <q-item-section>Contact</q-item-section>
               </a>
            </q-item>

            <q-item
              clickable
              class="row items-center"
              style="padding-left: -13px"

            >
              <q-icon
                color="white"
                size="25px"
                name="chevron_right"
                class="q-mr-sm"
              />
              <a href="/blog" style="text-decoration: none; color: white;">
                <q-item-section>Blog</q-item-section>
               </a>
            </q-item>
          </q-list>
        </div>
        <div class="col-md-5 col-sm-12 col-xs-12 row">
          <div class="col-md-5 col-sm-12 col-xs-12">
            <p class="text-h5">Useful Links</p>
          <q-list>

            <q-item
              clickable
              class="row items-center"
              style="padding-left: -13px"

            >
              <q-icon
                color="white"
                size="25px"
                name="chevron_right"
                class="q-mr-sm"
              />
              <a href="https://ai4dlab.or.tz/" style="text-decoration: none; color: white;">
                <q-item-section>AI4D-Lab</q-item-section>
               </a>
            </q-item>

            <q-item
              clickable
              class="row items-center"
              style="padding-left: -13px"

            >
              <q-icon
                color="white"
                size="25px"
                name="chevron_right"
                class="q-mr-sm"
              />
              <a href="https://costech.or.tz/" style="text-decoration: none; color: white;">
                <q-item-section>Costech</q-item-section>
               </a>
            </q-item>

            <q-item
              clickable
              class="row items-center"
              style="padding-left: -13px"

            >
              <q-icon
                color="white"
                size="25px"
                name="chevron_right"
                class="q-mr-sm"
              />
              <a href="https://www.udom.ac.tz/" style="text-decoration: none; color: white;">
                <q-item-section>UDOM</q-item-section>
               </a>
            </q-item>

            <q-item
              clickable
              class="row items-center"
              style="padding-left: -13px"

            >
              <q-icon
                color="white"
                size="25px"
                name="chevron_right"
                class="q-mr-sm"
              />
              <a href="https://nm-aist.ac.tz/" style="text-decoration: none; color: white;">
                <q-item-section>NM-AIST</q-item-section>
               </a>
            </q-item>
          </q-list>
          </div>
          <div
            class="column bg-blue q-pa-md q-ma-md  col-md-6 col-sm-12 col-xs-12"
           style="height: 200px; border-radius: 10px;">
            <p class="text-h5 text-center"><b>Vistors</b></p>
            <div class="text-subtitle2 row">
                <div class="col q-ma-sm bg-dark text-center column items-center justify-center" style="border-radius: 20px;">
                  {{count?.today}}
                  <p style="font-size: smaller;">Today</p>
                </div>
                <div class="col q-ma-sm bg-dark text-center column items-center justify-center" style="border-radius: 20px;">
                  {{count?.this_week}}
                  <p style="font-size: smaller;">This week</p>
                </div>
                <div class="col q-ma-sm bg-dark text-center column items-center justify-center" style="border-radius: 20px;">
                  {{ count?.this_month  }}
                  <p style="font-size: smaller;">This month</p>
                </div>
            </div>
          </div>
        </div>
      </div>
      <q-separator class="q-my-md"></q-separator>
      <div class="row items-center justify-center">
        <p>
          ©Copyright <b>AI4MH Research Project {{ date.formatDate(Date.now(), "YYYY") }}</b
          >. All Rights Reserved
        </p>
      </div>
    </q-footer>
  </q-layout>
</template>

<script setup>
import { ref } from "vue";
import { useQuasar } from "quasar";
import { date } from "quasar";
import { onMounted } from "vue";
import { api } from "src/boot/axios";
const count=ref();
const drawer = ref(false);
const $q = useQuasar();

const menuList = ref([
  {
    icon: "home",
    label: "Home",
    to: "/",
  },
  {
    icon: "event",
    label: "Blog",
    to: "/blog",
  },
  {
    icon: "description",
    label: "Publications",
    to: "/publications",
  },
  {
    icon: "group",
    label: "Team",
    separator: false,
    to: "/team",
  },
  {
    icon: "contacts",
    label: "Contact Us",
    to: "/contant-us",
  },

]);
const getVistorCount=async()=>{
  const {data}=await api.get("/api/count_visitors");
  count.value=data;
}
onMounted(async()=>{
  await Promise.all([getVistorCount()]);
})
</script>

<style scoped>
.q-tab {
  flex: none !important;
}
</style>
