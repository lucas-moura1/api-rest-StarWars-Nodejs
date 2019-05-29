<template>
  <div class="corpo">
    <h1 class="centralizado">{{ titulo }}</h1>

    <div class="planets">
      <div class="planets-item">
        <meu-painel :name="planets.name" :clima="planets.climate" :terreno="planets.terrain">
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

  created() {
    this.$http
      .get("https://swapi.co/api/planets/5/?format=json")
      .then(res => res.json())
      .then(planets => (this.planets = planets), err => console.log(err));
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
