<template>
  <div class="entry-container mb-3 point p-2" @click="$router.push({name:'entry',params:{id:10}})" >
    <div class="entry-title d-flex">
      <span class="text-success fs-5 fw-bold">15</span>
      <span class="mx-1 fs-5">June</span>
      <span class="mx-1 fw-light">2022,Thuesday</span>
    </div>

    <div class="entry-description">
      In publishing and graphic design, Lorem ipsum is a placeholder text
      commonly used to demonstrate the visual form of a document or a typeface
      without relying on meaningful content. Lorem ipsum may be used as a
      placeholder before the final copy is
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
  .entry-container{
    border-bottom:  1px solid #2c3e50;
    transition: 0.2s all ease-in;

    &:hover{
      background-color: rgb(243, 243, 243);
      transition: 0.2s all ease-in;
    }
    .entry-description{
      font-size: 12px;
    }
  }

</style>
