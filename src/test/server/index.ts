export const initMocks = async () => {
  if (!import.meta.env.VITE_API_MOCKING) {
    return;
  }

  if (typeof window === "undefined") {
    // 不要
    // const server = await import('./server');
    // server.server.listen();
  } else {
    const browser = await import("./browser");
    await browser.worker.start({
      onUnhandledRequest: "bypass",
    });
  }
};
