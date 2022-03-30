<template>
  <ul class="sidenav app-sidenav open">
    <router-link
        tag="li"
        active-class="active"
        to="/"
        exact
    >
      <a href="#" class="waves-effect waves-orange pointer">Test</a>
    </router-link>

    <li>
      <a href="#" class="waves-effect waves-orange pointer">Счет</a>
    </li>
    <li>
      <a href="#" class="waves-effect waves-orange pointer">История</a>
    </li>
    <li>
      <a href="#" class="waves-effect waves-orange pointer">Планирование</a>
    </li>
    <li>
      <a href="#" class="waves-effect waves-orange pointer">Новая запись</a>
    </li>
    <li>
      <a href="#" class="waves-effect waves-orange pointer">Категории</a>
    </li>
  </ul>
</template>

<script>
export default {
  name: "SideBar"
}
</script>

<style scoped>

</style>
