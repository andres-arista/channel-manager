<template>
  <div class="flex flex-row-reverse items-center">
    <channel-button
      title="Apply"
      type="primary"
      data-cy="apply"
      v-on:button-clicked="$emit('apply-button-clicked')"
    ></channel-button>
    <channel-button
      title="Cancel"
      type="secondary"
      class="mr-4"
      data-cy="cancel"
      v-on:button-clicked="$emit('cancel-button-clicked')"
    ></channel-button>
  </div>
</template>

<script>
export default {
  name: "ButtonsContainer",
};
</script>
