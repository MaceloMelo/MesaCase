<template>
  <div id="dashboard">
    <app-navbar></app-navbar>
    <UserLocation></UserLocation>
  </div>
</template>
<script>
import UserLocation from "./UserLocation";
export default {
  name: "Dashboard",
  components: {
    UserLocation,
  },
};
</script>
