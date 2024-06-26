import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getStorage, ref, uploadBytesResumable, getDownloadURL, deleteObject } from 'firebase/storage';
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_-Q-X27unfJX9zKxaHlon3LIL8IVRU5A",
  authDomain: "roninmez-001.firebaseapp.com",
  projectId: "roninmez-001",
  storageBucket: "roninmez-001.appspot.com",
  messagingSenderId: "947987712112",
  appId: "1:947987712112:web:a0123aa15c2047fd9accb5",
  measurementId: "G-9PT72JDP8E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Analytics
let analytics;
try {
  analytics = getAnalytics(app);
} catch (error) {
  console.error("Error al inicializar Analytics:", error);
}

// Initialize Auth
const auth = getAuth(app);
onAuthStateChanged(auth, user => {
  if (user) {
    // Usuario ha iniciado sesión
    console.log("Usuario autenticado:", user);
  } else {
    // Usuario no ha iniciado sesión
    console.log("No hay usuario autenticado");
  }
});

// Initialize Firestore
const db = getFirestore(app);

// Initialize Storage
const storage = getStorage(app);
const storageRef = ref(storage); // Obtener la referencia al almacenamiento

// Función para cargar imágenes
export const uploadImage = async (file) => {
  try {
    const storageRef = ref(storage, `images-post/${file.name}`); // Referencia al archivo en el almacenamiento
    const uploadTask = uploadBytesResumable(storageRef, file); // Subir el archivo al almacenamiento
    await uploadTask;

    const downloadUrl = await getDownloadURL(storageRef); // Obtener la URL de descarga del archivo
    return downloadUrl;
  } catch (error) {
    console.error("Error al cargar la imagen:", error);
    throw error;
  }
};

export const deleteImageFromStorage = async (imageUrl) => {
  // Crear una referencia al archivo en el Storage basado en la URL de la imagen
  const imageRef = ref(storage, imageUrl);

  try {
    // Eliminar el archivo del Storage
    await deleteObject(imageRef);
    console.log("Imagen eliminada del Storage con éxito.");
  } catch (error) {
    console.error("Error al eliminar la imagen del Storage:", error);
    throw error; // Propagar el error para manejarlo en el componente Vue
  }
};

// Exportar las instancias de Firestore, Auth, Storage y Analytics
export { db, auth, storage, analytics };
