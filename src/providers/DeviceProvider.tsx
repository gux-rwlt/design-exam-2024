import React from "react";

type DeviceType = "mobile" | "desktop";

const MobileKeywords = [
  "Android",
  "iPhone",
  "SymbianOS",
  "iPad",
  "iPod",
  "BlackBerry",
  "Windows Phone",
  "Opera Mini",
  "Mobile",
];

const getDeviceType = (): DeviceType => {
  const ua = navigator.userAgent;

  const isMobile = MobileKeywords.some((keyword) => ua.includes(keyword));

  return isMobile ? "mobile" : "desktop";
};

// eslint-disable-next-line react-refresh/only-export-components
export const deviceContext = React.createContext<DeviceType>(getDeviceType());

const setDeviceContext = React.createContext<
  React.Dispatch<React.SetStateAction<DeviceType>>
>(() => undefined);

export const DeviceProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [device, setDevice] = React.useState<DeviceType>(getDeviceType());

  window.addEventListener("resize", () => {
    if (
      document.documentElement.clientHeight <= 1366 ||
      document.documentElement.clientWidth <= 1366
    ) {
      setDevice(getDeviceType());
    }
  });

  return (
    <deviceContext.Provider value={device}>
      <setDeviceContext.Provider value={setDevice}>
        {children}
      </setDeviceContext.Provider>
    </deviceContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useDevice = () => React.useContext(deviceContext);
// eslint-disable-next-line react-refresh/only-export-components
export const useSetDevice = () => React.useContext(setDeviceContext);
