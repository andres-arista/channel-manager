<template>
  <div class="container mx-auto py-10 border-2 border-gray-300 px-5 max-w-lg">
    <channels-title title="Channels"></channels-title>
    <search-bar v-on:enter-pressed="addChannel"></search-bar>
    <draggable
      :list="currentCards"
      class="dragArea"
      :options="{ handle: '.drag-me' }"
      @start="startDrag"
      @end="endDrag"
    >
      <channel
        v-for="card in currentCards"
        :title="card.title"
        :icon="card.icon"
        :id="card.id"
        v-bind:key="card.id"
        v-on:remove-channel="removeItem"
      ></channel>
    </draggable>
    <hr class="mt-6 mb-4" />
    <buttons-container
      v-if="backupCards.length"
      v-on:cancel-button-clicked="cancelChanges"
      v-on:apply-button-clicked="applyChanges"
    ></buttons-container>
  </div>
</template>

<script>
export default {
  name: "ChannelManager",
  data: function () {
    return {
      currentCards: [
        { title: "Team@trengo.com", icon: "far fa-envelope", id: 1 },
        {
          title: "Call center",
          icon: "fas fa-phone fa-flip-horizontal",
          id: 2,
        },
        { title: "Whatsapp Business", icon: "fab fa-whatsapp", id: 3 },
        {
          title: "(test) development California",
          icon: "far fa-envelope",
          id: 4,
        },
        { title: "Whatsapp Business Iceland", icon: "fab fa-whatsapp", id: 5 },
      ],
      backupCards: [],
      draggedCards: [],
      nextId: 6,
    };
  },
  methods: {
    createBackup: function () {
      if (!this.backupCards.length) {
        this.backupCards = this.currentCards.map((x) => x);
      }
    },
    clearBackup: function () {
      this.backupCards = [];
    },
    removeItem: function (event) {
      this.createBackup();
      this.currentCards = this.currentCards.filter(function (value) {
        return value.id !== event;
      });
    },
    cancelChanges: function () {
      this.currentCards = this.backupCards;
      this.clearBackup();
    },
    applyChanges: function () {
      this.clearBackup();
    },
    addChannel: function (channel) {
      this.createBackup();
      this.currentCards.push({
        title: channel,
        icon: "far fa-envelope",
        id: this.nextId,
      });
      this.nextId++;
    },
    startDrag() {
      this.draggedCards = [...this.currentCards];
      this.createBackup();
    },
    endDrag() {
      if (
        JSON.stringify(this.draggedCards) ===
          JSON.stringify(this.currentCards) &&
        JSON.stringify(this.backupCards) === JSON.stringify(this.currentCards)
      ) {
        this.cancelChanges();
      }
    },
  },
};
</script>
