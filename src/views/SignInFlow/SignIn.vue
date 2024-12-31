<template>
  <div
    class="container"
    :class="{ 'light-background': !isDarkMode, 'dark-background': isDarkMode }"
  >
    <RequestAccount />
    <div class="login">
      <img src="@/assets/DCHQ.svg" v-show="isDarkMode" />
      <img src="@/assets/DCHQ-dark.svg" v-show="!isDarkMode" />
      <h4 :class="{ 'light-text': isDarkMode, 'dark-text': !isDarkMode }">
        Sign into Design+Code HQ
      </h4>
      <input
        type="email"
        placeholder="Email"
        :class="{ 'light-field': isDarkMode, 'dark-field': !isDarkMode }"
      />
      <input
        type="password"
        placeholder="Password"
        :class="{ 'light-field': isDarkMode, 'dark-field': !isDarkMode }"
      />
      <button>Sign In</button>
      <router-link to="/recover" :class="{ 'light-link': isDarkMode, 'dark-link': !isDarkMode }"
        >Forgot your password?</router-link
      >
      <ThemeSwitch />
    </div>
  </div>
</template>

<script lang="ts">
import RequestAccount from '@/components/RequestAccount.vue'
import ThemeSwitch from '@/components/ThemeSwitch.vue'

export default {
  name: 'SignIn',
  components: {
    RequestAccount,
    ThemeSwitch,
  },
  computed: {
    isDarkMode(): boolean {
      return this.$store.getters.isDarkMode
    },
  },
  methods: {
    toggleDarkMode() {
      this.$store.commit('toggleDarkMode')
    },
  },
}
</script>

<style scoped lang="scss">
.light-background {
  background-color: $light-gray;
}

.dark-background {
  background-color: $dark-blue;
}

.light-text {
  color: white;
}

.dark-text {
  color: black;
}

.light-field {
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.2);

  &::placeholder {
    color: rgba(255, 255, 255, 0.3);
  }
}

.dark-field {
  background: rgba(198, 208, 235, 0.2);
  border: 1px solid rgba(0, 0, 0, 0.2);

  &::placeholder {
    color: rgba(0, 0, 0, 0.3);
  }
}

.container {
  display: flex; // CSS Technique for easy layout
  justify-content: center; // Horizontal Alignment
  align-items: center; // Vertical Alignment
  min-height: 100vh; // vh (View Port Height) 100 = full view port height
  min-width: 100%;
}

.login {
  width: 400px;
}

.light-link {
  color: rgba(255, 355, 355, 0.3);
}

.dark-link {
  color: rgba(0, 0, 0, 0.3);
}
</style>
