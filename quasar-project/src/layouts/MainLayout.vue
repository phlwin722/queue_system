<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer" />

       <q-toolbar-title>
          Queueing
          </q-toolbar-title>
            <div>{{
              formattedString
            }}</div>
      </q-toolbar>
    </q-header>

  <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> Essential Links </q-item-label>

        <EssentialLink v-for="link in linksList" :key="link.title" v-bind="link" />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref, onMounted } from "vue";
import { date } from "quasar";

import EssentialLink from "components/EssentialLink.vue";

const linksList = [
  {
    title: "Dashboard",
    icon: "dashboard",
  },
  {
    title: "Logout",
    icon: "logout",
  },
];

export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
  },

  setup() {
    const leftDrawerOpen = ref(false);
  
    // Define the formattedString as a reactive reference
    const formattedString = ref();

    // Function to update the formattedString with the current wtime
    const updateFormatedSetting = () => {
      const timeStamp = Date.now();
      formattedString.value = date.formatDate(timeStamp, "YYYY-MM-DD h:mm:ss A");
    };

    // Set an interval to update the formattedString every second
    onMounted(() => {
      updateFormatedSetting(); // Call it once on mount
      setInterval(updateFormatedSetting, 1000); // Update every second
    });

    return {
      linksList,
      leftDrawerOpen,
      formattedString,

      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
