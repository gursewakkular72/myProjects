export function addToArray(arr, obj) {
  console.log(arr);
  if (arr.length === 0) arr.push(obj);
  else {
    const doesIdMatch = (element) => element.id === obj.id;
    const findIndexOfId = arr.findIndex(doesIdMatch);

    if (findIndexOfId === -1) arr.push(obj);
    if (findIndexOfId !== -1) arr[findIndexOfId].count++;
  }
}

export function removeFromArray(arr, obj) {
  console.log(arr);
  if (arr.length === 0) return;
  const doesIdMatch = (element) => element.id === obj.id;
  const findIndexOfId = arr.findIndex(doesIdMatch);
  console.log(findIndexOfId, "findIndexOfId");
  if (findIndexOfId === -1) return;
  const countExist = arr[findIndexOfId].count;

  if (countExist) arr[findIndexOfId].count--;
  if (countExist === 1) {
    arr.splice(findIndexOfId, 1);
  }
}

export function countOrders(arr) {
  if (arr.length === 0) return 0;
  return arr.reduce((prevValue, currValue) => {
    return prevValue + currValue.count;
  }, 0);
}
