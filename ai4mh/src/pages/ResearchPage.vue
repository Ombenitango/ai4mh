<template>
  <div class="q-pa-md">
    <q-table
      grid
      flat
      bordered
      :rows="rows"
      :columns="columns"
      row-key="name"
      :filter="filter"
      hide-header
      v-model:pagination="pagination"
      :rows-per-page-options="rowsPerPageOptions"
    >
      <template v-slot:top-right>
        <div class="row">
          <!-- <q-btn label="Filter By" icon="sort" flat="" dense="" class="q-mx-md">
            <q-menu>
              <q-item clickable v-close-popup>
                <q-item-section>Announcement</q-item-section>
              </q-item>
              <q-item clickable v-close-popup>
                <q-item-section>Article</q-item-section>
              </q-item>
            </q-menu>
            <q-space></q-space>
          </q-btn> -->
          <q-input
            outlined=""
            dense
            debounce="300"
            v-model="filter"
            placeholder="Search"
          >
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>
        </div>
      </template>

      <template v-slot:top-left>
        <div>
          <p class="text-h6">Conference Paper</p>
        </div>
      </template>

      <template #item="props">
          <!-- :to="/conference_paper/ + props.row.id" -->
          <q-btn class="q-ma-sm  col-xs-12 col-sm-6 col-md-3" :href="props.row.link">
            <q-img :src="serverUrl+'/'+props.row.image_path" style="height: 200px; width: 100%;"/>
            <q-item>
              <q-item-section avatar>
                <q-avatar>
                  <q-img src="~assets/logo.png" />
                </q-avatar>
              </q-item-section>

              <q-item-section>
                <q-item-label class="truncate">
                 {{ props.row.title  }}
                  <q-tooltip>
                    {{ props.row.title }}
                  </q-tooltip>
                </q-item-label>
                <q-item-label caption>{{ date.formatDate(Date.parse(props.row.created_at),"YYYY-MM-DD") }}</q-item-label>
              </q-item-section>
            </q-item>
          </q-btn>

      </template>
    </q-table>
  </div>
</template>

<script setup>
import { useQuasar } from "quasar";
import { onMounted } from "vue";
import { ref, computed, watch } from "vue";
import { api } from "src/boot/axios";
import { date } from "quasar";
const rows = ref([]);
const serverUrl = process.env.API_URL;
const columns = ref([
  {
    name: "title",
    field: (row) => row.title,
    label: "Title",
  },

  {
    name: "content",
    field: (row) => row.content,
    label: "Content",
  },
  {
    name: "image_path",
    field: (row) => row.image_path,
    label: "img",
  },
  {
    name: "created_at",
    field: (row) => row.created_at,
    label: "Date",
  }
]);

const $q = useQuasar();
const filter = ref("");

function getItemsPerPage() {
  if ($q.screen.lt.sm) {
    return 3;
  }
  if ($q.screen.lt.md) {
    return 6;
  }
  return 12;
}
const pagination = ref({
  page: 1,
  rowsPerPage: getItemsPerPage(),
});

watch(
  () => $q.screen.name,
  () => {
    pagination.value.rowsPerPage = getItemsPerPage();
  }
);

const rowsPerPageOptions = computed(() => {
  return $q.screen.gt.xs ? ($q.screen.gt.sm ? [3, 6, 9] : [3, 6]) : [3];
});

const getBlogs = async ()=>{
  const { data } = await api.get("/api/conference_papers");

  rows.value = data;
  console.log(data);
}
onMounted(()=>{
  getBlogs();
})
</script>

<style lang="sass">
.grid-masonry
  flex-direction: column
  height: 700px

  &--2
    > div
      &:nth-child(2n + 1)
        order: 1
      &:nth-child(2n)
        order: 2

    &:before
      content: ''
      flex: 1 0 100% !important
      width: 0 !important
      order: 1
  &--3
    > div
      &:nth-child(3n + 1)
        order: 1
      &:nth-child(3n + 2)
        order: 2
      &:nth-child(3n)
        order: 3

    &:before,
    &:after
      content: ''
      flex: 1 0 100% !important
      width: 0 !important
      order: 2
</style>
