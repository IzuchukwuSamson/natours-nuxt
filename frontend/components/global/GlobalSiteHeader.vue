<template lang="pug">
header(class="header")
  nav(class="nav nav--tours") 
    nuxt-link(to="/" class="nav__el") All tours
    form(class="nav__search")
      button(class="nav__search-btn")
        svg
          use(xlink:href="@/assets/img/icons.svg#icon-search")
      input(type="text" placeholder="Search tours" class="nav__search-input")
  div(class="header__logo")
    img(src="@/assets/img/logo-white.png" alt="Natours logo")
  nav(class="nav nav--user") 
    nuxt-link(to="#" class="nav__el") My bookings
    nuxt-link(to="#" class="nav__el")
      img(src="@/assets/img/users/default.jpg" alt="User photo" class="nav__user-img")
      span Jonas
    nuxt-link(to="login" class="nav__el") Log in
    nuxt-link(to="signup" class="nav__el nav__el--cta") Sign up
</template>

<script lang="ts">
export default defineComponent({
  setup() {},
});
</script>

<style lang="scss" scoped></style>
