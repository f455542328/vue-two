<template>
  <div class="col-sm-3 col-md-2 sidebar">
    <ul class="nav nav-sidebar">
      <router-link
        :to="{ 'name' : 'heros'}"
        active-class="active"
        tag="li"
      ><a>英雄列表 <span class="sr-only">(current)</span></a></router-link>

      <router-link
        to="/weapon"
        active-class="active"
        tag="li"
      ><a>武器列表 <span class="sr-only">(current)</span></a></router-link>

      <router-link
        to="/skill"
        active-class="active"
        tag="li"
      ><a>技能列表 <span class="sr-only">(current)</span></a></router-link>

    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
</style>