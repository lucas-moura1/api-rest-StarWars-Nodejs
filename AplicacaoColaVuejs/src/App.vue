<template>
  <div class="corpo">
    <h1 class="centralizado">{{ titulo }}</h1>

    <div class="planets">
      <div class="planets-item">
        <meu-painel :name="planets.name" :clima="planets.climate" :terreno="planets.terrain" :filmes="planets.films">
          <div class="planets-item-corpo"></div>
        </meu-painel>      
      </div>
    </div>
  </div>
</template>

<script>

import Painel from './components/shared/painel/Painel.vue';

export default {

  components: {
    'meu-painel' : Painel
  },

  data() {
    return {
      titulo: "Planets"
    };
  },

  methods: {
    randomPlanet: function() {
      this.loading = true;

      let randomNumb = Math.floor(Math.random() * (61 + 1));

      this.$http.get('https://swapi.co/api/planets/' + randomNumb)
      .then(response=>{
          this.planets = response.data
      });
    }
  },
  created() {
      this.randomPlanet();
  }
};
</script>

<style>
  .corpo {
    font-family: Helvetica, sans-serif;
    width: 96%;
    margin: 0 auto;
  }

  .centralizado {
    text-align: center;
  }

  .planets {
    padding: 40px 0px 0px;
  }

  .planets-item {
    display: flex;
    align-items: center;
    justify-content: center;
  }

</style>
