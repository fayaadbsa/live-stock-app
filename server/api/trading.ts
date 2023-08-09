import { delay } from "../utils/delay";

export default defineEventHandler(async (event) => {
  if (!process.dev) return { disabled: true };

  setHeader(event, "cache-control", "no-cache");
  setHeader(event, "connection", "keep-alive");
  setHeader(event, "content-type", "text/event-stream");
  setResponseStatus(event, 200);

  let counter = 0;

  const sendEvent = async (data: any) => {
    // event.node.res.write(`id: ${++counter}\n`);
    event.node.res.write(
      `data: ${JSON.stringify({ ...data, counter: counter++ })}\n\n`
    );

    await delay(1000);

    if (counter < 10) {
      sendEvent(data);
    }
  };

  sendEvent({ message: "Hello!!!!" });

  // myHooks.hook("sse:event", sendEvent);

  // Let the connection opened
  event._handled = true;

  // myHooks.callHook("sse:event", { message: "Hello!" });
});
