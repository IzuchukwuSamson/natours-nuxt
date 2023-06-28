<template lang="pug">
div(class="footer")
  div(class="footer__logo")
    img(src="@/assets/img/logo-green.png" alt="Natours logo")
  ul(class="footer__nav")
    li(v-for="(list, index) in lists")
      nuxt-link(to="#") {{ list.label }}
    
  p(class="footer__copyright") &copy; by Jonas Schmedtmann. All rights reserved.
</template>

<script lang="ts">
export default defineComponent({
  setup() {
    const lists = [
      {
        label: "About us",
      },
      {
        label: "Download apps",
      },
      {
        label: "Become a guide",
      },
      {
        label: "Careers",
      },
      {
        label: "Contact",
      },
    ];
    return {
      lists,
    };
  },
});
</script>

<style lang="scss" scoped></style>
