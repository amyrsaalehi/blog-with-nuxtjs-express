<template>
  <div class="stick-on-top">
    <b-navbar toggleable="lg" type="dark" variant="dark" >
      <b-navbar-brand>
        <NuxtLink to="/">Blog</NuxtLink>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item>
            <NuxtLink to="/posts"> Posts </NuxtLink>
          </b-nav-item>
          <b-nav-item>
            <NuxtLink to="/authors"> Authors </NuxtLink>
          </b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item>
            <NuxtLink to="/store"> Store </NuxtLink>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.stick-on-top {
  top: 0;
  position: sticky;
  z-index: 99;
}
</style>