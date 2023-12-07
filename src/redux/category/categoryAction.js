import { collection, deleteDoc, doc, getDocs, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { db } from "../../config/firbase-config";
import { setCategoryList } from "./categorySlice";

export const addOrUpdateCategoryAction =
  ({ slug, ...rest }) =>
  async (dispatch) => {
    try {
      // If I have merge: true, this will update if slug exists
      const catPromise = setDoc(doc(db, "category", slug), rest, {
        merge: true,
      });
      toast.promise(catPromise, {
        pending: "In Progress...",
      });
      await catPromise;
      console.log(catPromise)
      toast.success("Successfully Created");
      // Once DB is updated, fetch the latest from DB and set it on our redux store
      dispatch(getAllCategoriesAction());
    } catch (e) {
      console.log(e);
      toast.error(`Something went wrong ${e.message}`);
    }
  };

export const getAllCategoriesAction = () => async (dispatch) => {
  try {
    const querySnapShot = await getDocs(collection(db, "category"));
    const catList = [];
    querySnapShot.forEach((doc) => {
      const slug = doc.id;
      const data = doc.data();
      catList.push({
        ...data,
        slug,
      });
    });
    console.log(catList)
    dispatch(setCategoryList(catList));
    console.log(setCategoryList)
  } catch (e) {
    console.log(e);
    toast.error(`Something went wrong ${e.message}`);
  }
};
export const deleteCategoryAction = (slug) => async(dispatch) => {
    try {
    const deletePromise = deleteDoc(doc(db, "category", slug));
    toast.promise(deletePromise, {
      pending: "In Progress",
    });
    await deletePromise;
    dispatch(getAllCategoriesAction());
  } catch (e) {
    console.log(e);
    toast.error(`Something went wrong ${e.message}`);
  }
}
