export default defineEventHandler(async (event) => {
  setHeader(event, "cache-control", "no-cache");
  setHeader(event, "connection", "keep-alive");
  setHeader(event, "content-type", "text/event-stream");
  setResponseStatus(event, 200);

  const counter = 0;
  sendEvent(event, counter);

  event._handled = true;
});
