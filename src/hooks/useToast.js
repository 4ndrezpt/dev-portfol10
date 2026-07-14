import { useContext } from "react";
import { toastContext } from "../context/ToastProvider";


export const useToast = () => {
  return useContext(toastContext);
}
