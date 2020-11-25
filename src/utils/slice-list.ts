export const sliceList = <T>(list: T[], sliceSize: number): T[][] => {
  const wrappedList: T[][] = [];

  for (let i = 0; i < list?.length; i += sliceSize) {
    wrappedList.push(list.slice(i, i + sliceSize));
  }

  return wrappedList;
};
