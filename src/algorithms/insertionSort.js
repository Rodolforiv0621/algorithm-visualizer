export async function insertionSort(arr, update) {
  for (let i = 1; i < arr.length; i++) {
    let j = i - 1;
    let current = arr[i];
    let currentIndexHeight = document.getElementById(i).offsetHeight;
    document.getElementById(j + 1).style.backgroundColor = "blue";
    await delay(200);
    document.getElementById(j + 1).style.backgroundColor = "";
    while (j >= 0 && arr[j] > current) {
      document.getElementById(j).style.backgroundColor = "red";
      await delay(100);
      document.getElementById(j).style.backgroundColor = "";
      move(j, j + 1);
      arr[j + 1] = arr[j];
      j--;
      update();
    }
    await delay(100);
    document.getElementById(j + 1).style.height = currentIndexHeight + "px";
    document.getElementById(j + 1).style.backgroundColor = "green";
    await delay(200);
    document.getElementById(j + 1).style.backgroundColor = "";

    arr[j + 1] = current;
  }
  setGreen(arr.length)
}

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function move(index1, index2) {
  var height = document.getElementById(index1).offsetHeight;
  document.getElementById(index2).style.height = height + "px";
}

async function setGreen(length) {
  for (let k = 0; k < length; k++) {
    document.getElementById(k).style.backgroundColor = "green";
    await delay(30);
  }
}