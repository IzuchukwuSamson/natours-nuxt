<template>
  <OverviewWrapper />
</template>

<script lang="ts">
export default defineComponent({
  setup() {
    const route = useRoute();
    return {
      route,
    };
  },
});
</script>

<style lang="scss" scoped></style>
