import { storage } from "../boot/firebase";
import { ref } from "vue";
import {
  ref as storageRef,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";

const uploadImage = async (file, user_id) => {
  const url = ref(null);
  const filePath = storageRef(storage, `images/${file.name}${user_id}`);

  return new Promise((resolve, reject) => {
    uploadBytes(filePath, file)
      .then(async (snapshot) => {
        url.value = await getDownloadURL(snapshot.ref);
        resolve(url.value);
      })
      .catch((err) => {
        console.log(err.message);
        reject(err.message);
      });
  });
};

const uploadProfileImages = async (profile, banner, user_id) => {
  const urls = {};
  const profilePath = storageRef(
    storage,
    `images/profile/${profile.name}${user_id}`
  );
  const bannerPath = storageRef(
    storage,
    `images/banner/${banner.name}${user_id}`
  );

  return new Promise((resolve, reject) => {
    Promise.all([
      uploadBytes(profilePath, profile),
      uploadBytes(bannerPath, banner),
    ])
      .then(async (snapshot) => {
        urls.profile = await getDownloadURL(snapshot[0].ref);
        urls.banner = await getDownloadURL(snapshot[1].ref);
        resolve(urls);
      })
      .catch((err) => {
        console.log(err.message);
        reject(err.message);
      });
  });
};

export { uploadImage, uploadProfileImages };
