import { app } from './firebase'
import { getStorage, uploadBytes, ref } from 'firebase/storage'

export const storage = getStorage(app);

export const storageRef = ref;
