<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      Instituto Nacional de Ciencias Forenses de Guatemala 
      <a
        href="https://www.inacif.gob.gt/"
        target="_blank"
        rel="noopener"
      >Página oficial del INACIF</a>.
    </p>

    <br>
    <h1>Misión</h1>
    <p>
     Ser la Institución responsable de brindar servicios de investigación científica forense fundamentada <br>
    en la ciencia y el arte, emitiendo dictámenes periciales útiles al sistema de justicia, mediante estudios <br>
    médicos legales y análisis técnico científicos, apegados a la objetividad y transparencia.
    </p>
    
    
    <br>
    <h1>Visión</h1>
    <p>
    Ser una Institución referente a nivel nacional e internacional, por su recurso humano competente, capacidad<br> 
    tecnológica, buenas prácticas forenses, calidad y transparencia en la gestión institucional y respeto a la <br>
    dignidad humana
    </p>


  </div>
</template>

<script>
export default {
  name: "Home1",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
