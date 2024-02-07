<template>
  <q-page padding>
    <!-- content -->
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
}
</script>


<!-- <template>
  <div class="">
    <q-layout
      view="hHh Lpr lff"
      container
      style="height: 100vh"
      class="rounded-borders"
    >
      <q-header
        elevated
        :class="$q.dark.isActive ? 'bg-secondary' : 'bg-black'"
      >
      </q-header>

      <q-drawer
        v-model="drawer_for_publication"
        show-if-above
        :width="220"
        :breakpoint="500"
        bordered
        :class="$q.dark.isActive ? 'bg-grey-9' : 'bg-grey-3'"
      >
        <q-scroll-area class="fit">
          <q-list>
            <template v-for="(menuItem, index) in menuList" :key="index">
              <q-item clickable :active="menuItem.label === 'Outbox'" v-ripple>
                <q-item-section avatar>
                  <q-icon :name="menuItem.icon" />
                </q-item-section>
                <q-item-section>
                  {{ menuItem.label }}
                </q-item-section>
              </q-item>
              <q-separator :key="'sep' + index" v-if="menuItem.separator" />
            </template>
          </q-list>
        </q-scroll-area>
      </q-drawer>

      <q-page-container>
        <q-page padding>
          <p v-for="n in 15" :key="n">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nihil
            praesentium molestias a adipisci, dolore vitae odit, quidem
            consequatur optio voluptates asperiores pariatur eos numquam rerum
            delectus commodi perferendis voluptate?
          </p>
        </q-page>
      </q-page-container>
    </q-layout>
  </div>
</template>

<script setup>
import { ref } from "vue";

const menuList = ref([
  {
    icon: "",
    label: "Research",
  },
  {
    icon: "",
    label: "Journals",
  },
  {
    icon: "paper",
    label: "Paper",
  },
  {
    icon: "book",
    label: "Books",
  },
]);

const drawer_for_publication = ref(true);
</script> -->
