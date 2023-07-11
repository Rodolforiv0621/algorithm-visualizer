export async function bubbleSort(arr, update) {
  let swapped = false;
  for (var i = 0; i < arr.length - 1; i++) {
    swapped = false;

    for (var j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        document.getElementById(j).style.backgroundColor = "green";
        document.getElementById(j + 1).style.backgroundColor = "red";
        update();
        await delay(50);
        swap(j, j + 1);
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swapped = true;
      } else {
        document.getElementById(j).style.backgroundColor = "green";
        document.getElementById(j + 1).style.backgroundColor = "green";
        await delay(50);
      }

      document.getElementById(j).style.backgroundColor = "";
      document.getElementById(j + 1).style.backgroundColor = "green";
    }
    if (!swapped) {
      for (let k = 0; k < arr.length; k++) {
        document.getElementById(k).style.backgroundColor = "green";
        await delay(30);
      }
      break;
    }
  }
}
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function swap(index1, index2) {
  var height = document.getElementById(index1).offsetHeight;
  var height2 = document.getElementById(index2).offsetHeight;
  document.getElementById(index1).style.height = height2 + "px";
  document.getElementById(index2).style.height = height + "px";
}
