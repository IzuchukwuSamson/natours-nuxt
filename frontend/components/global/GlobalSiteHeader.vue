<template>
  <div>
    <header class="header">
      <nav class="nav nav--tours">
        <nuxt-link href="/" class="nav__el">All tours</nuxt-link>
        <nuxt-link to="overview" class="nav__el">Overview</nuxt-link>
        <form class="nav__search">
          <button class="nav__search-btn">
            <svg>
              <use xlink:href="@/assets/img/icons.svg#icon-search"></use>
            </svg>
          </button>
          <input
            type="text"
            placeholder="Search tours"
            class="nav__search-input"
          />
        </form>
        <!-- <div v-for="me in menu">{{ me.label }}</div> -->
      </nav>
      <div class="header__logo">
        <img src="@/assets/img/logo-white.png" alt="Natours logo" />
      </div>
      <nav class="nav nav--user">
        <a href="#" class="nav__el">My bookings</a>
        <a href="#" class="nav__el">
          <img
            src="@/assets/img/users/default.jpg"
            alt="User photo"
            class="nav__user-img"
          />
          <span>Jonas</span>
        </a>

        <!-- <button class="nav__el">Log in</button>
        <button class="nav__el nav__el--cta">Sign up</button> -->
      </nav>
    </header>
  </div>
</template>

<script lang="">
export default defineComponent({
  setup() {
    const menu = [
      {
        label: "Hello",
      },
      {
        label: "Hey",
      },
      {
        label: "Hi",
      },

      {
        label: "Holas",
      },
    ];
    return {
      menu,
    };
  },
});
</script>

<style lang="scss" scoped></style>
