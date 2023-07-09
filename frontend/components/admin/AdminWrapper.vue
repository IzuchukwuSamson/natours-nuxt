<template lang="pug">            
div
  h2 {{ title }}
  slot
    
</template>

<script lang="ts">
export default defineComponent({
  props: {
    title: {
      type: String,
      default: "Admin Dashboard",
    },
  },

  setup() {
    const primaryMenuItems = [
      {
        label: "Settings",
        to: "#",
        icon: "@/assets/img/icons.svg#icon-briefcase",
      },
      {
        label: "My bookings",
        to: "#",
        icon: "@/assets/img/icons.svg#icon-briefcase",
      },
      {
        label: "My reviews",
        to: "#",
        icon: "@/assets/img/icons.svg#icon-star",
      },
      {
        label: "Billing",
        to: "#",
        icon: "@/assets/img/icons.svg#icon-credit-card",
      },
    ];

    const secondaryMenuItems = [
      {
        label: "Manage tours",
        to: "#",
        icon: "@/assets/img/icons.svg#icon-users",
      },
      {
        label: "Manage users",
        to: "#",
        icon: "@/assets/img/icons.svg#icon-star",
      },
      {
        label: "Manage reviews",
        to: "#",
        icon: "@/assets/img/icons.svg#icon-briefcase",
      },
    ];

    return {
      primaryMenuItems,
      secondaryMenuItems,
    };
  },
});
</script>

<style lang="scss" scoped></style>
