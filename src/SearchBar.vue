<template>
  <div class="flex items-center border-2 border-gray-200 rounded-2xl pl-4">
    <i class="fas fa-search text-gray-400"></i>
    <input
      type="text"
      placeholder="Add channels"
      class="flex-grow bg-transparent placeholder-gray-500 text-lg pl-2 py-1 outline-none"
      data-cy="input"
      v-model="channel"
      v-on:keyup.enter="
        if (channel) {
          $emit('enter-pressed', channel);
          channel = '';
        }
      "
    />
  </div>
</template>

<script>
export default {
  name: "SearchBar",
  data: function () {
    return {
      channel: "",
    };
  },
};
</script>
