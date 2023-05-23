async function initMocks() {
  if (typeof window === "undefined") {
    const { server } = await import("./mswServer");
    server.listen();
  } else {
    const { worker } = await import("./mswWorker");
    worker.start();
  }
}

initMocks();

export {};
