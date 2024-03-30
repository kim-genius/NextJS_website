import{create} from "zustand";

const useStore = create((set) => ({
    mode: true,
    setMode :()=>set((state)=>({mode : !state.mode}))
   
  
    
  }));
  
  export default useStore;