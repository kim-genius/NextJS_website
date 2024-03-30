import{create} from "zustand";

const useStore = create((set) => ({
    mode: true,
    setMode :()=>{set((pre)=>!pre)}

  
    
  }));
  
  export default useStore;