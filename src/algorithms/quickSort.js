export async function quickSort(arr, lowIndex, highIndex, update){
    
    if(highIndex <= lowIndex){
        return;
    }
    let pivot = arr[highIndex]
    let left = lowIndex
    let right = highIndex
    document.getElementById(right).style.backgroundColor = "blue";
    document.getElementById(left).style.backgroundColor = "blue";
    await delay(100)
    document.getElementById(right).style.backgroundColor = "";
    document.getElementById(left).style.backgroundColor = "";
    while(left<right){
        while (arr[left] <= pivot && left < right) {
            left++;
            document.getElementById(left).style.backgroundColor = "red";
            await delay(100);
            document.getElementById(left).style.backgroundColor = "";
        }
        while (arr[right] >= pivot && left < right) {
            right--;
            document.getElementById(right).style.backgroundColor = "red";
            await delay(100);
            document.getElementById(right).style.backgroundColor = "";
        }
        document.getElementById(left).style.backgroundColor = "red";
        document.getElementById(right).style.backgroundColor = "red";
        await delay(100)
        swap(left, right)
        document.getElementById(left).style.backgroundColor = "green";
        document.getElementById(right).style.backgroundColor = "green";
        await delay(100)
        document.getElementById(left).style.backgroundColor = "";
        document.getElementById(right).style.backgroundColor = "";
        let temp = arr[left]
        arr[left] = arr[right]
        arr[right] = temp
        update()
    }
    document.getElementById(left).style.backgroundColor = "red";
    document.getElementById(highIndex).style.backgroundColor = "red";
    await delay(100);
    swap(left, highIndex);
    document.getElementById(left).style.backgroundColor = "green";
    document.getElementById(highIndex).style.backgroundColor = "green";
    await delay(100)
    document.getElementById(left).style.backgroundColor = "";
    document.getElementById(highIndex).style.backgroundColor = "";
    let temp = arr[left];
    arr[left] = arr[highIndex];
    arr[highIndex] = temp;
    update()
    quickSort(arr, lowIndex, left-1, update)
    quickSort(arr, right+1, highIndex, update)
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
async function setGreen(length) {
  for (let k = 0; k < length; k++) {
    document.getElementById(k).style.backgroundColor = "green";
    await delay(30);
  }
}