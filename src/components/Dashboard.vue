<template>
  <div id="dashboard">
    <app-navbar></app-navbar>
    <GooglePlace></GooglePlace>
  </div>
</template>
<script>
import GooglePlace from "./GooglePlace";
export default {
  name: "Dashboard",
  components: {
    GooglePlace,
  },
};
</script>
