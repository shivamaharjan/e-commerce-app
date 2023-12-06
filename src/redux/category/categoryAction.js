import { collection, doc, getDocs, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { db } from "../../config/firbase-config";
import { setCategory } from "./categorySlice";

export const addOrUpdateCategoryList =
  ({ slug, ...rest }) =>
  async (disptach) => {
    try {
      const catPromise = setDoc(doc(db, "category", slug), rest, {
        merge: true,
      });
      toast.promise(catPromise, {
        pending: "In progress",
      });
      await catPromise;
      toast.success("Category added");
    } catch (e) {
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
    dispatch(setCategory(catList));
  } catch (e) {
    toast.error(`Something went wrong ${e.message}`);
  }
};
