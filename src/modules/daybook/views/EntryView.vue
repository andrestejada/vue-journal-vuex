<template>
  <div class="entry-title d-flex justify-content-between p-2">
    <div>
      <span class="text-success fs-3 fw-bold">15</span>
      <span class="mx-2 fs-3">June</span>
      <span class="mx-2 fs-4 fw-light">2022</span>
    </div>
    <div>
      <button class="btn btn-danger mx-2">
        Delete
        <i class="fa fa-trash-alt"></i>
      </button>
      <button class="btn btn-primary">
        Upload Photo
        <i class="fa fa-upload"></i>
      </button>
    </div>
  </div>
  <hr />
  <div class="d-flex flex-column px-3 h-75">
    <textarea placeholder="What happen today?"></textarea>
  </div>
  <Fab
    icon="fa-save"
  />
  <img
    src="https://media.revistagq.com/photos/5f45010acb266484bb785c78/master/pass/dragon-ball-z.jpg"
    alt="goku"
    class="img-thumnail"
  />
</template>

<script>
import { defineAsyncComponent } from "vue";
export default {
  components: {
    Fab: defineAsyncComponent(() => import("../components/Fab.vue")),
  },
};
</script>

<style scoped lang="scss">
  textarea{
    font-size: 20px;
    border: none;
    height: 100%;

    &:focus{
      outline: none;
    }
  }
  img{
    width: 200px;
    position: fixed;
    bottom: 150px;
    right: 20px;
    box-shadow: 0px 5px 10px rgba($color:#0000,$alpha:0.2);
  }
</style>
