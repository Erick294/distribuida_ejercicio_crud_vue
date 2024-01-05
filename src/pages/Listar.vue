<template>
    <h2 class="fw-bold">Listar Usuarios</h2>

    <div id="app" class="container">
        <table border="1">
            <thead>
                <th>Id</th>
                <th>Nombre</th>
                <th>Dirección</th>
                <th>Edad</th>
            </thead>
                <tr v-for="data in usuarios ">
                    <td>{{data.id}}</td>
                    <td>{{data.nombre}}</td>
                    <td>{{data.direccion}}</td>
                    <td>{{data.edad}}</td>
                </tr>
        </table>
    </div>
</template>

<script>
import axios from 'axios';

export default {

  data() {
    return {
      usuarios: [],
    }
  },
  mounted(){
    this.listarUsuarios();
  },
  methods: {
    listarUsuarios() {
        axios.get('http://localhost:8081/personas')
        .then(response => {
          // Maneja la respuesta exitosa y actualiza la lista de personas
          this.usuarios = response.data;
        })
        .catch(error => {
          // Maneja el error en caso de que ocurra
          console.error('Error al obtener personas:', error);
        });    
    }
  },
}
</script>

<style scoped>
#cont {
  width: 40%;
  margin: 20px auto;
  background-color: #fff2f1;
  border: 5px solid #003153;
  border-radius: 12px;
  padding-left: 30px;
  padding-right: 30px;
  padding-bottom: 20px;
  padding-top: 20px;
}

h2 {
  text-align: center;
  color: #003153;
}
table{
    justify-content: center;
    align-content: center;
    margin: 0 auto;
    border-collapse: collapse;
}

th{
    padding: 10px;
}

</style>