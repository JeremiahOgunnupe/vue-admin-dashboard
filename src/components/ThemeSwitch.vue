<template>
  <div
    @click="toggleDarkMode"
    class="toggle"
    :class="{ 'light-toggle': !isDarkMode, 'dark-toggle': isDarkMode }"
  >
    <div class="toggle-switch" :class="{ 'toggle-left': !isDarkMode, 'toggle-right': isDarkMode }">
      <img v-if="!isDarkMode" src="@/assets/sun.svg" />
      <img v-if="isDarkMode" src="@/assets/moon.svg" />
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'ThemeSwitch',
  computed: {
    isDarkMode(): boolean {
      return this.$store.getters.isDarkMode
    },
  },
  methods: {
    toggleDarkMode() {
      // this.isDarkMode = !this.isDarkMode
      // document.body.style.background = this.isDarkMode ? '#212c4f' : '#f0f3f5'
      this.$store.commit('toggleDarkMode')
    },
  },
}
</script>

<style lang="scss" scoped>
.toggle {
  border-radius: 10px;
  width: 175px;
  box-sizing: border-box;
  margin: 50px auto;
  display: flex;
}

.light-toggle {
  background: linear-gradient(346.78deg, #f7fcfc 0%, #fafcfa);
  border: 1px solid rgba(0, 0, 0, 0.04);
  box-shadow: inset 0px 5px 10px rgba(0, 0, 0, 0.1);
}

.dark-toggle {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: inset 0px 5px 10px rgba(0, 0, 0, 0.1);
}

.toggle-switch {
  margin: 2px;
  padding: 15px 35px;
  border-radius: 8px;
}

.toggle-left {
  transform: translateX(0);
  background: #ffffff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}

.toggle-right {
  transform: translateX(90%);
  background: #1b233f;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}
</style>
