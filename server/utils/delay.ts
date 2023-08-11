export const delay = (timemilis: number) =>
  new Promise((resolve) => setTimeout(resolve, timemilis));
