import React from "react";
import { BrowserRouter } from "react-router-dom";
import { queryClient } from "@/lib/react-query";
import { QueryClientProvider } from "react-query";
import { CartProvider } from "./CartProvider";
import { DeviceProvider } from "./DeviceProvider";

type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => (
  <QueryClientProvider client={queryClient}>
    <DeviceProvider>
      <CartProvider>
        <BrowserRouter basename={import.meta.env.VITE_X_BASE_URL}>
          {children}
        </BrowserRouter>
      </CartProvider>
    </DeviceProvider>
  </QueryClientProvider>
);
