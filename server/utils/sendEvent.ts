import { dataCollection } from "./dataMock";

export const sendEvent = async (event: any, counter: number) => {
  const index = counter % 3;
  const data = dataCollection[index];

  event.node.res.write(`data: ${JSON.stringify(data)}\n\n`);

  const timer = 4000;
  const eventLimit = 1000;

  await delay(timer);

  if (counter < eventLimit) {
    counter++;
    sendEvent(event, counter);
  }
};
