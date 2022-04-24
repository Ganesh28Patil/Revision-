arr = [3,4,5,2,1,6];
console.log("arr :",arr);
// o/p [-1,6,6,6,5,4]
// o/p [4,5,6,6,6,-1]
let stack = [];
let ans = [];
for(let i = arr.length - 1; i >=0; i--){
    if(stack.length == 0){
        ans.push(-1);
    }else if(stack.length > 0 && stack[stack.length-1] > arr[i]){
        ans.push(stack[stack.length-1]);
    }else if(stack.length > 0 && stack[stack.length-1] <= arr[i]){
        while(stack.length > 0 && stack[stack.length-1] <= arr[i]){
            stack.pop();
        }
        if(stack.length == 0){
            ans.push(-1);
        }else{
            ans.push(stack[stack.length-1]);
        }
    }
    stack.push(arr[i]);
}

console.log("ans: ",ans.reverse());