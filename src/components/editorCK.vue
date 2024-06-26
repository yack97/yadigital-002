<template>
  <div>
    <ckeditor :editor="editor" :config="editorConfig" v-model="editorData"></ckeditor>
  </div>
</template>

<script>
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default {
  props: {
    value: String  // Propiedad para vincular el contenido del editor desde el componente padre
  },
  data() {
    return {
      editor: ClassicEditor,
      editorConfig: {
        toolbar: [
          'bold', 'italic', 'undo', 'redo', '|',
          'numberedList', 'bulletedList'
        ],
        shouldNotGroupWhenFull: true
      },
      editorData: ''  // Inicializa el contenido del editor
    };
  },
  watch: {
    // Observa cambios en el contenido del editor y emite el evento hacia el padre
    editorData(newValue) {
      this.$emit('update:modelValue', newValue);
    },
    // Observa cambios en la propiedad 'value' que recibe del padre
    value: {
      immediate: true,
      handler(newValue) {
        this.editorData = newValue;  // Actualiza editorData con el nuevo valor del padre
      }
    }
  }
};
</script>

<style>
/* Asegúrate de que los números de las listas sean visibles */
.ck-content ol {
  list-style-type: decimal;
  padding-left: 40px; /* Ajusta el padding para que los números no se corten */
}

.ck-content ol li {
  display: list-item;
}

/* Asegúrate de que las listas con viñetas se muestren correctamente */
.ck-content ul {
  list-style-type: disc;
  padding-left: 40px; /* Ajusta el padding para que los puntos no se corten */
}

.ck-content ul li {
  display: list-item;
}
</style>
