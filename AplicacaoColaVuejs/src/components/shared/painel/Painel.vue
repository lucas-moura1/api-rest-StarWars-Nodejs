<template>
    <div class="painel"> 
        <h2 class="painel-titulo">{{ name }}</h2>
        <div class="painel-corpo-clima">Clima = {{ clima }}</div>
        <div class="painel-corpo-terreno">Terreno = {{ terreno }}</div>
    </div>    
</template>

<script>
export default {
    props: {
      name: {
        type: String
      },

      clima: {
        type: String
      },

      terreno: {
        type: String
      }
    }
}
</script>

<style scoped>

  /* estilo do painel */ 

  .painel {
    padding: 0 auto;
    border: solid 2px grey;
    display: inline-block;
    margin: 15px;
    box-shadow: 10px 5px 10px grey;
    width: 460px;
    height: 100%;
    vertical-align: top;
    text-align: left;
  }

  .painel .painel-titulo {
    text-align:  center;
    border: solid 2px;
    background: lightblue;
    margin: 0 0 0px 0;
    padding: 10px;
    text-transform: uppercase;
  }

  .painel-corpo-clima {
    font-family: sans-serif;
    font-size: x-large;
    padding: 10px 20px;
  }

  .painel-corpo-terreno {
    font-family: sans-serif;
    font-size: x-large;
    padding: 10px 20px;
  }

</style>
