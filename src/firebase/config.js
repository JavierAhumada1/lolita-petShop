import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";

const firebaseConfig = {
  apiKey: `${import.meta.env.VITE_API_KEY_FB}`,
  authDomain: `${import.meta.env.VITE_AUTH_DOMAIN_FB}`,
  projectId: `${import.meta.env.VITE_PROJECT_ID_FB}`,
  storageBucket: `${import.meta.env.VITE_STORAGE_BUCKET_FB}`,
  messagingSenderId: `${import.meta.env.VITE_MESSAGING_SENDER_ID_FB}`,
  appId: `${import.meta.env.VITE_APP_ID_FB}`,
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export async function uploadFile(file) {
  //some-child se podria reemplazar por el id del producto que genera mongoDB
  const storafeRef = ref(storage, v4());
  await uploadBytes(storafeRef, file);

  //devuelve la imagen en forma de string
  const url = await getDownloadURL(storafeRef);
  return url;
}
