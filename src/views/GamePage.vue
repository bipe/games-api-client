<script setup>
import Header from "../components/Header.vue";
</script>
  
<template>
  <Header></Header>
  <div class="d-flex align-items-center justify-content-center mt-5">
    <div class="row content">
      <div class="col-6 text-center">
        <div class="image-container">
          <img src="https://images.igdb.com/igdb/image/upload/t_cover_big/co4bku.png">
        </div>
      </div>

      <div class="col-6">
        <div class="title">
          <h1> {game.name} </h1>
          <h4> {game.developer} - {game.launchDate}</h4>
        </div>
        <div class="details mt-5">
          <p>Platforms: {game.platform}</p>
          <p>Genre: {game.genre}</p>
          <p>Multiplayer || Singleplayer (game.multiplayer)</p>
          <p>Price at launch: {game.price}</p>
        </div>
      </div>

    </div>
  </div>

</template>
  
<script>
</script>

<style scoped>

h1 {
  color: blueviolet;
}

img {
  border-radius: 8px;
}

.content {
  width: 75%;
}

@media screen and (max-width: 500px) {}
</style>