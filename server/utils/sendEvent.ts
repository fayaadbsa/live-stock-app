import { dataCollection } from "./dataMock";

export const sendEvent = async (event: any, counter: number) => {
  const index = counter % 3;
  const data = dataCollection[index];

  event.node.res.write(`data: ${JSON.stringify(data)}\n\n`);

  await delay(2000);

  if (counter < 10) {
    counter++;
    sendEvent(event, counter);
  }
};
