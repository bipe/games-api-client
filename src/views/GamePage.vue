<script setup>
import Header from '../components/Header.vue';
import gamesApi from '../gateways/games.api';
</script>
  
<template>
  <Header></Header>
  <div class="d-flex align-items-center justify-content-center mt-5">
    <div class="row content">
      <div class="col-6 text-center">
        <div class="image-container">
          <img :src="game.imageUrl">
        </div>
      </div>

      <div class="col-6">
        <div class="title">
          <h1> {{game.name}} </h1>
          <h4> {{game.developer}} - {{game.launchDate}}</h4>
        </div>
        <div class="details mt-5">
          <p>Platforms: {{game.platform}}</p>
          <p>Genres: 
            <span class="genre" v-for="genre in game.genre">{{genre}}</span>
          </p>
          <p v-if="game.multiplayer">Multiplayer</p>
          <p v-if="!game.multiplayer">Singleplayer</p>
          <p>Price at launch: ${{game.price}}</p>
        </div>
      </div>

    </div>
  </div>

</template>
  
<script>
export default {
  components: {
    Header,
  },

  data() {
    return {
      game: {},
    };
  },

  mounted() {
    this.getGameById(0);
  },

  methods: {
    async getGameById(id) {
      let result = await gamesApi.getGameById(id);
      this.game = result.data;
    },

    formatGenres() {
      return 
    }
  },
};
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

.genre {
  text-transform: capitalize;
}

@media screen and (max-width: 500px) {}
</style>