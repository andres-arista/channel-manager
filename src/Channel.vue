<template>
  <div class="flex items-center justify-between pt-6" data-cy="channel">
    <div class="flex items-center flex-nowrap flex-grow">
      <i
        class="drag-me fas fa-grip-vertical text-gray-300 mr-4 cursor-move text-xl"
      ></i>
      <div
        class="bg-gray-200 flex items-center justify-center mr-4 p-1 w-8 h-8 rounded"
      >
        <i :class="icon" class="text-gray-500 m-auto text-lg"></i>
      </div>
      <h4 class="font-semibold text-lg" data-cy="title">{{ title }}</h4>
    </div>
    <h4
      class="text-gray-600 font-bold cursor-pointer mr-4"
      v-on:click="$emit('remove-channel', id)"
    >
      Remove
    </h4>
  </div>
</template>

<script>
import draggable from "vuedraggable";
export default {
  props: ["title", "icon", "id"],
  name: "Channel",
  components: {
    draggable,
  },
};
</script>
