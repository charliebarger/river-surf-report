const IS_BROWSER = typeof window !== undefined;

export const setupMocks = async () => {
  console.log("reached");
  if (true) {
    const { mswWorker } = await import("./mswWorker");
    console.log("browser");
    mswWorker.start();
  } else {
    const { mswServer } = await import("./mswServer");
    console.log("server");
    mswServer.listen();
  }
};
