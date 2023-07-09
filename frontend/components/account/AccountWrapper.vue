<template lang="pug">            
div
    h2(class="heading-secondary ma-bt-md user-view__content user-view__form-container") {{ title }}
    slot
    
</template>

<script lang="ts">
export default defineComponent({
  props: {
    title: {
      type: String,
      default: "Your Account Settings",
    },
  },

  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped></style>
