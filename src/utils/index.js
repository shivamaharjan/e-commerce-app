import { getDownloadURL, getStorage, ref, uploadBytesResumable } from "firebase/storage";

export const handleFileUpload = (fileDetail, setProgress) => {
    const uniqueName = `${Date.now()}-${fileDetail.name}`;
    console.log(uniqueName)
    return new Promise((res, rej) => {
        const storage = getStorage();
        const storageRef = ref(storage, `product/img/${uniqueName}`);
        const uploadTask = uploadBytesResumable(storageRef, fileDetail);

        uploadTask.on(
          "state_changed",
          (snapshot) => {
            // Observe state change events such as progress, pause, and resume
            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            const progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log("Upload is " + progress + "% done");
            setProgress && setProgress(progress);
          },
          (error) => {
            // Handle unsuccessful uploads
            console.log("Error", error);
            rej(error);
          },
          () => {
            // Handle successful uploads on complete
            // For instance, get the download URL: https://firebasestorage.googleapis.com/...
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              console.log("File available at", downloadURL);
              res(downloadURL);
            });
          }
        );


    })
}