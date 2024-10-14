  import React from 'react'
  import { create } from 'zustand'
  
  export const useZustand = create((set) => ({

    productArr:[],
    setProductArr:(productArr)=>set({productArr}),


}));

  