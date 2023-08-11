export default defineEventHandler(async (event) => {
  if (!process.dev) return { disabled: true };

  setHeader(event, "cache-control", "no-cache");
  setHeader(event, "connection", "keep-alive");
  setHeader(event, "content-type", "text/event-stream");
  setResponseStatus(event, 200);

  let counter = 0;
  sendEvent(event, counter);

  event._handled = true;
});
