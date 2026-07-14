import { useState, createContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { Toast } from "../components/Toast";

export const toastContext = createContext();

export const  ToastProvider = ({children}) => {
  const [toast, setToast] = useState([]);

  function addToast(title, message, type){
    const id = uuidv4();
    ///to set toast at the top
    setToast(prev => [{ id, title, message, type }, ...prev]);
    setTimeout(() => removeToast(id), 2500);
  }
  function removeToast(id){
    setToast(prev => prev.filter(toast => toast.id !== id));
  }

  return <toastContext.Provider
    value={{ addToast }}
  >
    {children}
    <div>
      {toast.map(toast=> <Toast
        key={toast.id}
        title={toast.title}
        message={toast.message}
        type={toast.type}
        onClose={()=>removeToast(toast.id)}
      ></Toast>)}
    </div>
  </toastContext.Provider>;
}
