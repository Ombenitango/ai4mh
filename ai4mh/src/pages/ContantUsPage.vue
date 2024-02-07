<template>
  <q-page class="q-mb-md">
    <div v-html="googleMapsIframe"></div>
  </q-page>
  <q-page padding="">
    <div class="row items-center justify-center">
      <div class="col-md-4 col-sm-12 col-xs-12">
        <div class="text-h5 text-primary"><q-icon name="mdi-mailbox-up" size="33px" class="q-mx-sm"></q-icon> Postal Address:</div>
         <p class="text-subtitle1 q-mx-sm">
          AI4MH Research Project<br />
          The University of Dodoma College of Informatics and Virtual Education<br />
          P.O Box 490 <br />
          1 CIVE Street <br />
          41218 Iyumbu, Dodoma <br />
         </p>


         <div class="text-h5 text-primary"><q-icon name="email" size="32px" class="q-mx-sm"></q-icon> Email:</div>
         <p class="text-subtitle1 q-mx-sm">
          jabhera.matogoro@ai4mh.or.tz
         </p>

         <div class="text-h5 text-primary"><q-icon name="phone" size="32px" class="q-mx-sm"></q-icon> Call:</div>
         <p class="text-subtitle1 q-mx-sm">
          Mobile: +255784423615
         </p>
      </div>
      <div class="col-md-8 col-sm-12 col-xs-12">
          <q-input outlined="" dense="" label="Your full name" class="q-ma-md">
          </q-input>
          <q-input outlined="" dense="" label="Your email address" class="q-ma-md">
          </q-input>
          <q-input outlined="" dense="" label="Your phone number" class="q-ma-md"></q-input>
          <q-input outlined="" type="textarea" dense="" label="Your message" class="q-ma-md"></q-input>
          <q-btn label="Send" class="q-ma-md" color="primary"></q-btn>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from "vue";

const googleMapsIframe = ref(`
  <iframe src="https://maps.google.com/maps?q=-6.162750107632217, 35.75155127882844&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed" width="100%" height="500" allowfullscreen></iframe>
`);


</script>
