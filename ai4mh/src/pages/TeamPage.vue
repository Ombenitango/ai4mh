<template>
  <q-page padding>
    <p class="text-h6 text-bold q-mt-md">Our Team</p>
    <div class="row items-center justify-center q-mx-md">
      <q-card
        class="q-ma-sm q-pa-md column items-center justify-center"
        v-for="i in teams"
        :key="i"
        bordered=""
        flat=""
        style="max-width: 300px;"
      >
        <q-item-section avatar class="row items-center justify-center">
          <q-avatar size="150px">
            <q-img :src="serverUrl+'/'+i.image_path" />
          </q-avatar>
        </q-item-section>
        <q-item>
          <q-item-section>
            <q-item-label class="text-center">
              <p><b>{{ i.member_name }}</b></p>
              <p class="truncate_width">
                {{ formattedPosition(i.member_position) }}
              </p>
              <q-btn v-if="isPositionLong(i.member_position)" @click="toggleReadMore(i.member_position)" class="q-mx-sm text-blue text-capitalize" flat>
                Read {{ showingFullText[i.member_position] ? "Less" : "More" }}
              </q-btn>
            </q-item-label>
          </q-item-section>
        </q-item>
        <q-card-action>
          <q-btn icon="facebook" color="primary" rounded=""  flat :href="i.facebook"/>
          <q-btn icon="mdi-linkedin" rounded="" color="primary" flat :href="i.linkedin"/>
          <q-btn icon="mdi-twitter" rounded="" color="primary" flat :href="i.twitter"/>
          <q-btn icon="mdi-github" rounded="" flat />
        </q-card-action>
      </q-card>
    </div>
  </q-page>
</template>

<script setup>
import { api } from 'src/boot/axios';
import { ref, onMounted } from 'vue';
import { useQuasar } from 'quasar';

const $q = useQuasar();
const serverUrl = process.env.API_URL;
const teams = ref([]);
const showingFullText = ref({});

const getTeams = async () => {
  try {
    const { data } = await api.get('api/teams');
    teams.value = data;
  } catch (error) {
    console.log(error);
  }
};

onMounted(async () => {
  await Promise.all([getTeams()]);
});

const isPositionLong = (position) => {
  return position && position.length > 20;
};

const formattedPosition = (position) => {
  if (showingFullText.value[position]) {
    return position;
  }

  return position && position.length > 20 ? `${position.slice(0, 400).trim()}...` : position;
};

const toggleReadMore = (position) => {
  showingFullText.value[position] = !showingFullText.value[position];
};
</script>

<style scoped>
.truncate_width {
  width: 250px;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align:justify;
}
</style>
