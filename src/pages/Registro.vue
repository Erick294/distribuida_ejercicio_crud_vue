<template>
    <div id="cont">
      <h2 class="fw-bold">Registrar Usuario</h2>
  
      <form @submit.prevent="registrarUsuario()">
  
        <div class="form-group">
          <label for="nombre">Nombres:</label>
          <input type="text" class="form-control bordeCaja" id="nombre" v-model="nombre" required>
        </div>
  
        <div class="form-group">
          <label for="apellido">Apellido:</label>
          <input type="text" class="form-control bordeCaja" id="apellido" v-model="apellido" required>
        </div>
  
        <div class="form-group">
          <label for="direccion">Dirección:</label>
          <input type="text" class="form-control bordeCaja" id="direccion" v-model="direccion" required>
        </div>

        <div class="form-group">
          <label for="edad">Edad:</label>
          <input type="text" class="form-control bordeCaja" id="edad" v-model="edad" required>
        </div>

        <button type="submit" class="btn btn-danger">Registrar</button>
     </form>

    </div>
  </template>

<script>

import { registrarUsuarioFachada } from '@/assets/js/Usuario'

export default {

  data() {
    return {
      nombre: null,
      apellido: null,
      edad: null,
      direccion: null,
    }
  },
  methods: {
    registrarUsuario() {
      const usuario = {
        nombre: this.nombre,
        apellido: this.apellido,
        edad: this.edad,
        direccion: this.direccion,
      };

      registrarUsuarioFachada(usuario)
        .then((response) => {
          try {
            console.log(response.status);
            if (response.status === 410) {
              alert("Ocurrio un error:")
            } else {
              alert("Usuario registrado con éxito")
              this.id = null;
              this.nombres = null;
              this.apellidos = null;
              this.email = null;
              this.password = null;
              this.perfil = null;
              this.estado = null;
              this.direccion = null;
              this.genero = null;
              this.fechaNacimiento = null;
              this.ciudad = null;
              this.foto = null;
              this.documento = null;
              this.fotoResponse = null;
              this.documentoResponse = null;
            }
          } catch (error) {
            alert("Ha ocurrido un error al procesar la respuesta del servidor")
            console.log(error);
          }
        })
        .catch((error) => {
          alert("Ha ocurrido un error al guardar, prueba a cambiar el nombre de usuario")
          console.log(error);
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


.bordeCaja {
  border: 2px solid #efca08;
}

.colorTexto {
  color: #3083dc;
}

.btn {
  margin: 10px 40%;
}

</style>