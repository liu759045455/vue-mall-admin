<template>
  <div class="slider-nav">
    <a-menu
     :default-selected-keys="[$router.currentRoute.name]"
     :default-open-keys="[$router.currentRoute.matched[0].name]"
      mode="inline"
      theme="dark"
      :inlineCollapsed="$store.state.sliderBar.opened"
    >
      <a-sub-menu v-for="(route) in routes" :key="route.name"  >
        <span slot="title" v-if="!route.hidden">
          <a-icon :type="route.meta.icon" />
          <span>{{route.meta.title}}</span>
        </span>
        <template v-for="(subRoute) in route.children" >
          <a-menu-item  v-if="!subRoute.hidden" :key="subRoute.name">
            <router-link :to="(route.path && route.path != '/') ?
                          route.path + '/' + subRoute.path :
                          subRoute.path">
                <a-icon :type="subRoute.meta.icon" />
              <span>{{subRoute.meta.title}}</span>
            </router-link>
          </a-menu-item>
        </template>

      </a-sub-menu>
    </a-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      routes: this.$store.state.permission.routers.filter((v) => !v.hidden),
    };
  },
  computed: {},
  methods: {

  },
};
</script>
