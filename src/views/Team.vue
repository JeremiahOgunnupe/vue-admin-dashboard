<template>
  <div class="container">
    <h2>Team</h2>
    <div class="cards">
      <transition appear appear-active-class="animated flipInX">
        <a class="card card1" :class="{ 'light-card': !isDarkMode, 'dark-card': isDarkMode }">
          <img
            src="@/assets/slack.png"
            class="card-header"
            :class="{ 'light-header': isDarkMode, 'dark-header': !isDarkMode }"
          />
          <h3 :class="{ 'light-text': isDarkMode, 'dark-text': !isDarkMode }">Slack</h3>
          <p :class="{ 'light-text': isDarkMode, 'dark-text': !isDarkMode }">
            Messaging app for all team communication.
          </p>
        </a>
      </transition>
      <transition appear appear-active-class="animated flipInX">
        <a class="card card2" :class="{ 'light-card': !isDarkMode, 'dark-card': isDarkMode }">
          <img
            src="@/assets/notion.png"
            class="card-header"
            :class="{ 'light-header': isDarkMode, 'dark-header': !isDarkMode }"
          />
          <h3 :class="{ 'light-text': isDarkMode, 'dark-text': !isDarkMode }">Notion</h3>
          <p :class="{ 'light-text': isDarkMode, 'dark-text': !isDarkMode }">
            All in one workspace.
          </p>
        </a>
      </transition>
      <transition appear appear-active-class="animated flipInX">
        <a class="card card3" :class="{ 'light-card': !isDarkMode, 'dark-card': isDarkMode }">
          <img
            src="@/assets/figma.png"
            class="card-header"
            :class="{ 'light-header': isDarkMode, 'dark-header': !isDarkMode }"
          />
          <h3 :class="{ 'light-text': isDarkMode, 'dark-text': !isDarkMode }">Figma</h3>
          <p :class="{ 'light-text': isDarkMode, 'dark-text': !isDarkMode }">
            Collaborative design tool.
          </p>
        </a>
      </transition>
      <transition appear appear-active-class="animated flipInX">
        <a class="card card4" :class="{ 'light-card': !isDarkMode, 'dark-card': isDarkMode }">
          <img
            src="@/assets/contentful.png"
            class="card-header"
            :class="{ 'light-header': isDarkMode, 'dark-header': !isDarkMode }"
          />
          <h3 :class="{ 'light-text': isDarkMode, 'dark-text': !isDarkMode }">Contentful</h3>
          <p :class="{ 'light-text': isDarkMode, 'dark-text': !isDarkMode }">
            Content management system.
          </p>
        </a>
      </transition>
      <transition appear appear-active-class="animated flipInX">
        <a class="card card5" :class="{ 'light-card': !isDarkMode, 'dark-card': isDarkMode }">
          <img
            src="@/assets/dropbox.png"
            class="card-header"
          :class="{ 'light-header': isDarkMode, 'dark-header': !isDarkMode }"
          />
          <h3 :class="{ 'light-text': isDarkMode, 'dark-text': !isDarkMode }">Dropbox</h3>
          <p :class="{ 'light-text': isDarkMode, 'dark-text': !isDarkMode }">
            Storage space in the cloud.
          </p>
        </a>
      </transition>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Team',
  computed: {
    isDarkMode(): boolean {
      return this.$store.getters.isDarkMode
    },
  },
}
</script>

<style lang="scss" scoped>
.container {
  margin-left: 25px;
}

h2 {
  @include heading-2;
}

.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: space-evenly;
}

.card {
  height: 50px;
  width: 100%;
  max-width: 300px;
  height: 400px;
  margin: 20px;
}

.card1 {
  animation-delay: 0s;
}

.card2 {
  animation-delay: 0.5s;
}

.card3 {
  animation-delay: 1s;
}

.card4 {
  animation-delay: 1.5s;
}

.card5 {
  animation-delay: 2s;
}

.light-card {
  background-color: $white;
}

.dark-card {
  background-color: $super-dark-blue;
  box-shadow: 0px 20px 40px rgba(255, 255, 255, 0.15);
  &:hover {
    box-shadow: 0px 30px 60px rgba(255, 255, 255, 0.35);
  }
}

.card-header {
  width: 100%;
}

h3 {
  @include heading-3;
  margin-bottom: 16px;
}

p {
  font-size: 15px;
  line-height: 24px;
  text-align: left;
  margin-left: 16px;
}

.light-text {
  color: white;
}

.dark-text {
  color: black;
}

.light-header {
  background: #283049;
}

.dark-header {
  background: $light-gray;
}
</style>
