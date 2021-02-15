<template>
  <button
    v-on:click="$emit('button-clicked')"
    v-bind:class="{
      'bg-black text-white': type === 'primary',
      'border-2 border-gray-200': type === 'secondary',
    }"
    class="flex items-center cursor-pointer py-2 px-8 rounded-full font-bold"
  >
    {{ title }}
  </button>
</template>

<script>
export default {
  props: ["title", "type"],
  name: "Button",
};
</script>
