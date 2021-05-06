<template>
  <div class="dashboard-wrapper">
    <div
      v-if="this.sidebarStatus === false"
      @click="this.toggleSidebar"
      class="dashboard__overlay"
    ></div>
    <div
      class="dashboard-sidebar__mini-btn bg-light shadow-sm"
      @click="this.setSidebarLeft"
    >
      <span class="dashboard-sidebar__mini-icon text-dark">
        <i class="fas fa-ellipsis-h"></i>
      </span>
    </div>
    <div
      class="dashboard-sidebar"
      :class="
        this.sidebarStatus === false
          ? 'dashboard-sidebar--isOpen'
          : 'dashboard-sidebar--isClose'
      "
    >
      <div
        class="dashboard-sidebar__button"
        :class="this.sidebarStatus === false ? 'd-none' : ''"
        @click="this.toggleSidebar"
      >
        <div class="dashboard-sidebar__icon">
          <i class="fa fa-chevron-right"></i>
        </div>
      </div>
      <ul class="dashboard-sidebar__menu">
        <router-link
          :to="{ name: item.link }"
          tag="li"
          v-for="(item, index) in this.sidebarItems"
          :key="index"
          class="dashboard-sidebar__item"
        >
          <i
            class="dashboard-sidebar__icon"
            :class="item.icon"
            @click="toggleSidebar"
          ></i>
          <span
            :class="sidebarStatus === true ? 'd-none' : ''"
            class="dashboard-sidebar__text"
            @click="toggleSidebar"
          >
            {{ item.text }}
          </span>
        </router-link>
      </ul>
    </div>
    <div class="dashboard-content container bg-ligtht mx-auto">
      <router-view> </router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "Dashboard",
  props: ["isLogedIn"],
  components: {},
  data() {
    return {
      sidebarStatus: true,
      sidebarItems: [
        {
          text: "Dashboard",
          icon: "fa fa-house-user",
          link: "dashboard-summary",
          hide: this.sidebarStatus,
        },
        {
          text: "Contacts",
          icon: "fa fa-address-book",
          link: "dashboard-contacts",
          hide: this.sidebarStatus,
        },
        {
          text: "item 1",
          icon: "fa fa-user",
          link: "events",
          hide: this.sidebarStatus,
        },
        {
          text: "item 1",
          icon: "fa fa-user",
          link: "events",
          hide: this.sidebarStatus,
        },
      ],
    };
  },
  methods: {
    toggleSidebar() {
      this.sidebarStatus = !this.sidebarStatus;
    },
    setSidebarLeft() {
      document
        .querySelector(".dashboard-sidebar")
        .setAttribute("left", "0 !important");
      this.sidebarStatus = !this.sidebarStatus;
    },
  },
  computed: {
    getSidebarStt() {
      return this.sidebarStatus;
    },
  },
  beforeMount() {
    if (!this.isLogedIn) {
      this.$router.push({ name: "login" });
    }
  },
  deactivated() {
    this.$router.push("/dashboard/");
  },
};
</script>

<style lang="scss">
.dashboard-sidebar__mini-btn {
  display: none;
}
.dashboard-wrapper {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 100vh;
  padding: 0;
  margin: 0;
  z-index: 0s;
}

.dashboard-sidebar {
  position: absolute;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0 0;
  top: 0%;
  left: 0;
  min-width: 200px;
  min-height: 100%;
  background-color: #5f5f5f;
  transition: all 0.2s;
  &__menu {
    height: 100%;
    width: 100%;
    padding-left: 0;
    list-style-type: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  &__item {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px 3px;
    height: 50px;
    width: 100%;
    cursor: pointer;
    &:hover {
      background-color: turquoise;
    }
    &:hover > .dashboard-sidebar__text {
      color: black !important;
    }
    &:hover > .dashboard-sidebar__icon {
      color: black !important;
    }
  }
  &__text {
    margin: 0 10px;
    color: white;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: bold;
    &:hover {
      text-decoration: none;
      color: white;
    }
    &--hide {
      display: none;
    }
  }
  &__icon {
    color: white !important;
  }
  &__button {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: -19px;
    top: 50%;
    transform: translateY(-50%);
    background-color: #5f5f5f;
    height: 30px;
    width: 20px;
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
    cursor: pointer;
    box-shadow: 1px 1px rgba(0, 0, 0, 0.6);
  }
  &--isClose {
    position: absolute;
    position: fixed;
    top: 0%;
    left: 0;
    min-width: 50px;
    height: 100%;
    background-color: #5f5f5f;
    transition: all 0.2s;
    box-shadow: none;
  }
}

.dashboard__overlay {
  background-color: #000;
  height: 100%;
  width: 100%;
  opacity: 0.5;
  z-index: 9998;
  cursor: pointer;
}

.fa-chevron-left {
  color: white !important;
}

// Dashboard content CSS
.dashboard-content {
  height: 100vh;
}

// Sidebar on small screen
@media only screen and (min-width: 768px) {
  .dashboard-content {
    padding-left: 10% !important;
  }
}
@media only screen and (max-width: 767px) {
  .dashboard-sidebar {
    position: relative;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 0 0;
    top: 0%;
    left: 0;
    width: 0 !important;
    min-height: 100%;
    background-color: #5f5f5f;
    transition: all 0.2s;
    &--isClose {
      position: absolute;
      position: fixed;
      top: 0%;
      left: -50px;
      width: 0 !important;
      height: 100%;
      background-color: #5f5f5f;
      transition: all 0.2s;
      box-shadow: none;
    }
  }
}
</style>