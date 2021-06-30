import { ref } from "vue";
import { UseFooter } from "../@types";

export default (): UseFooter => {
  const showMoreContent = ref(false);
  const toggleShowMoreContent = () => {
    showMoreContent.value = !showMoreContent.value;
  };

  const showDelete = ref(false);
  const toggleShowDelete = () => {
    showDelete.value = !showDelete.value;
  };

  return {
    showMoreContent,
    toggleShowMoreContent,
    showDelete,
    toggleShowDelete
  };
};
