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

  <q-drawer
    v-model="leftDrawerOpen"
    show-if-above
    bordered>
      <q-list>
        <template v-for="(item, index) in linksList">
          <q-item clickable v-ripple :to="item.link" exact>
            <q-item-section avatar>
              <q-icon :color="item.color" :name="item.icon" />
            </q-item-section>
            <q-item-section>{{ item.title }}</q-item-section>
          </q-item>
        </template></q-list>
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
    link: '/admin/dashboard',
  },
  {
    title: "QRcode",
    icon: "qr_code",
    link: '/admin/qr_code',
  },
  {
    title: "Logout",
    icon: "logout",
    link: '/login',
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
