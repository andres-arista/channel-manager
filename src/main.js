import Vue from "vue";
import draggable from "vuedraggable";

import ChannelManager from "./ChannelManager.vue";
import SearchBar from "./SearchBar.vue";
import Channel from "./Channel.vue";
import ButtonsContainer from "./ButtonsContainer.vue";
import Button from "./Button.vue";
import Title from"./Title";

Vue.component("draggable", draggable);
Vue.component("search-bar", SearchBar);
Vue.component("channel", Channel);
Vue.component("buttons-container", ButtonsContainer);
Vue.component("channel-button", Button);
Vue.component("channels-title", Title);

new Vue({
  el: "#app",
  render: h => h(ChannelManager)
});
