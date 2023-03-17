// Exemplo percorrendo todo o array até encontrar o val, sem binary search:

const search = (val, arr) => {
  for (let i = 0; i < arr.length; i++) {
    console.log(i);
    if (val === arr[i]) {
      return i;
    }
  }
  return -1;
};

// Exemplo cortando o array pela metade pra cada tentativa, com binary search:

const binarySearch = (val, arr) => {
  let lower = 0;
  let upper = arr.length - 1;

  while (lower <= upper) {
    console.log("try");
    const middle = lower + Math.floor((upper - lower) / 2);

    if (val === arr[middle]) {
      return middle;
    }

    if (val < arr[middle]) {
      upper = middle - 1;
    } else {
      lower = middle + 1;
    }
  }
  return -1;
};

const values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// console.log(search(7, values));
console.log(binarySearch(8, values));
