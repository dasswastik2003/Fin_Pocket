"use client";
import { Provider } from "react-redux";
import { store } from "../store/store";
import { ReactNode } from "react";
import { Toaster } from "sonner";

type ProvidersProps = {
  children: React.ReactNode;
};

export default function Providers({ children }: ProvidersProps) {
  return (
    <>
      <Provider store={store}>

        {children}
        <Toaster position="top-right"
          theme="dark"
          richColors
          duration={3000} />

      </Provider></>
  )
}