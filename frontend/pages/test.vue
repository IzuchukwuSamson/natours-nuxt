<template>
  <div>
    <ul>
      <!-- <li  v-text="tour.name"></li> -->

      <ul>
        <li></li>
      </ul>
    </ul>
  </div>
</template>

<script lang="ts">
// interface iIour {
//   name: string;
//   description: string;
// }
export default defineComponent({
  async setup() {
    const search = ref("");
    const page = ref(1);
    const { data: tours, error }: any = await useAsyncData(
      "tours",
      () =>
        $fetch(`/api/tour`, {
          method: "GET",
          baseURL: "http://localhost:8001",
          params: {
            page: page.value,
            search: search.value,
          },
        }),
      {
        watch: [page, search],
      }
    );
    return {
      search,
      page,
      tours,
    };
  },
});
</script>
