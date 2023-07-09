<template lang="pug">
main.main
    div.user-view
        nav.user-view__menu 
            div.admin-nav
                h5.admin-nav__heading Admin
                ul.side-nav
                    li(v-for="(menu, index) in menuItems" :key="index" @click="activeTab(index)")
                        NuxtLink(href='#')                       
                            svg
                                use(xlink:href='@/assets/img/icons.svg#icon-map')
                            | {{ menu.label }}
        div
            div(v-if="tab == 0")
                AdminToursSection 
            div(v-if="tab == 1")
                AdminUsersSection 
            div(v-if="tab == 2")
                AdminReviewsSection 

    
</template>

<script lang="ts">
export default defineComponent({
  setup() {
    const tab = ref(0);
    const activeTab = (tabNumber: number) => (tab.value = tabNumber);

    const menuItems = [
      {
        label: "Manage tours",
        icon: "@/assets/img/icons.svg#icon-users",
      },
      {
        label: "Manage users",
        icon: "@/assets/img/icons.svg#icon-star",
      },
      {
        label: "Manage reviews",
        // to: "#",
        icon: "@/assets/img/icons.svg#icon-briefcase",
      },
    ];

    return {
      menuItems,
      tab,
      activeTab,
    };
  },
});
</script>

<style lang="scss" scoped></style>
