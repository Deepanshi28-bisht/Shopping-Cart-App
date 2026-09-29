export const getDataFromLocal = (localkey = "currentUser") => {
  const item = localStorage.getItem(localkey);
  return JSON.parse(item);
};

