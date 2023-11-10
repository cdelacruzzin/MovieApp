import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router";
import './App.css'

export function App(){
  return <RouterProvider router={router}></RouterProvider>

}
