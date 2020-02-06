const makeSort = (clonedData, sortType, columnName, pureData) => {
  const comparer = (a, b) => {
    if (sortType === "ascending") {
      return a[columnName] > b[columnName] ? 1 : -1;
    } else if (sortType === "decreasing") {
      return a[columnName] < b[columnName] ? 1 : -1;
    }
  };
  return sortType === "none" ? pureData : clonedData.sort(comparer);
};

export default makeSort;
