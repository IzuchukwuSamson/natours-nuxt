<template lang="pug">
div(class="card-container")
  div(class="card")
    div(class="card__header")
      div(class="card__picture")
        div(class="card__picture-overlay") &nbsp;
        img(src="@/assets/img/tours/tour-1-cover.jpg" alt="Tour 1" class="card__picture-img")
      h3(class="heading-tertirary")
        span The Forest Hiker
    div(class="card__details")
      h4(class="card__sub-heading") Easy 5-day tour
      p(class="card__text") Breathtaking hike through the Canadian Banff National Park
      div(class="card__data")
        svg(class="card__icon")
          use(xlink:href="@/assets/img/icons.svg#icon-map-pin")
        span Banff, Canada
      div(class="card__data")
        svg(class="card__icon") 
          use(xlink:href="@/assets/img/icons.svg#icon-calendar")
        span April 2021
      div(class="card__data")
        svg(class="card__icon")
          use(xlink:href="@/assets/img/icons.svg#icon-flag")
        span 3 stops
      div(class="card__data")
        svg(class="card__icon")
          use(xlink:href="img/icons.svg#icon-user")
        span 25 people
    div(class="card__footer")
      p
        span(class="card__footer-value") $297
        span(class="card__footer-text") per person
      p(class="card__ratings") 
        span(class="card__footer-value") 4.9
        span(class="card__footer-text") rating (21)
      NuxtLink(to="/tours/1" class="btn btn--green btn--small") Details
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
