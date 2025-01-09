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

export const getDeviceType = (): DeviceType => {
  const ua = navigator.userAgent;

  const isMobile = MobileKeywords.some((keyword) => ua.includes(keyword));

  return isMobile ? "mobile" : "desktop";
};
