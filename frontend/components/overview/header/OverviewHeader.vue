<template lang="pug">
div
  section.section-header
    .heading-box
      h1.heading-primary
        span
          | The Park
          br
          | Camper Tour
    .heading-box__group
        .heading-box__detail
        svg.heading-box__icon
            use(href="@/assets/img/icons.svg#icon-clock")
        span.heading-box__text 10 days
        .heading-box__detail
        svg.heading-box__icon
            use(href="@/assets/img/icons.svg#icon-map-pin")
        span.heading-box__text Las Vegas, USA
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
