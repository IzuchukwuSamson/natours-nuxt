<template lang="pug">
main.main
  .user-view
    nav.user-view__menu
      ul.side-nav
        //- li.side-nav--active
        //-   a(href='#')
        //-     svg
        //-       use(xlink:href='@/assets/img/icons.svg#icon-settings')
        //-     | Settings
        li(v-for="(menu, index) in primaryMenuItems"  @click="activeTab(index)")
          a(href='#')
            svg
              use(xlink:href='@/assets/img/icons.svg#icon-briefcase')
            | {{ menu.label }}
       
        //- .admin-nav
        //-     h5.admin-nav__heading Admin
        //-     ul.side-nav
        //-         li(v-for="(menu, index) in secondaryMenuItems" :key="index" @click="secondaryActiveTab(index)")
        //-             a(href='#')
        //-                 svg
        //-                 use(xlink:href='@/assets/img/icons.svg#icon-map')
        //-                 | {{ menu.label }}
    
    div
        div(v-if="primaryTab == 0")
            AccountInfoSettings
        div(v-if="primaryTab == 1")
            AccountBookingSettings 
        div(v-if="primaryTab == 2")
            AccountReviewSettings
        div(v-if="primaryTab == 3")
            AccountBillingSettings 
        
    
        
</template>

<script lang="ts">
export default defineComponent({
  setup() {
    const primaryTab = ref(0);
    const activeTab = (tabNumber: number) => (primaryTab.value = tabNumber);

    const primaryMenuItems = [
      {
        label: "Settings",
        icon: "@/assets/img/icons.svg#icon-users",
      },
      {
        label: "My Bookings",
        icon: "@/assets/img/icons.svg#icon-users",
      },
      {
        label: "My Reviews",
        icon: "@/assets/img/icons.svg#icon-users",
      },
      {
        label: "Billing",
        icon: "@/assets/img/icons.svg#icon-users",
      },
    ];

    // const secondaryMenuItems = [
    //   {
    //     label: " Manage tours",
    //     icon: "@/assets/img/icons.svg#icon-map",
    //   },
    //   {
    //     label: "Manage users",
    //     icon: "@/assets/img/icons.svg#icon-users",
    //   },
    //   {
    //     label: "Manage Reviews",
    //     icon: "@/assets/img/icons.svg#icon-star",
    //   },
    // ];

    return {
      primaryMenuItems,
      primaryTab,
      activeTab,
    };
  },
});
</script>

<style lang="scss" scoped></style>
