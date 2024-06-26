import { createApp } from 'vue'; // Importa la función createApp desde Vue
import './style.css'; // Importa estilos si es necesario
import App from './App.vue'; // Importa el componente principal de la aplicación
import router from './router'; // Importa el enrutador si lo estás utilizando
//importar CKeditor
import CKEditor from '@ckeditor/ckeditor5-vue';


const app = createApp(App); // Crea una instancia de la aplicación


// Usa el enrutador si es necesario
app.use(router);
//usar ckeditor
app.use(CKEditor);

// Monta la aplicación en el elemento con id "app"
app.mount('#app');
