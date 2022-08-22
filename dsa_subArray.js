// generate sub-String 
let testCase = [1,2,3];
let ans = [];
function generateSubArray(arr) {
        for (let k = 0; k < arr.length; k++) {
                for (var i = 0; i < arr.length - k; i++) {
                        let subArr = [];                        
                        for (var j = k; j < arr.length - i; j++) {
                                subArr.push(arr[j]);
                        }
                        // console.log(res);
                        ans.push(subArr);
                }
        }

}
generateSubArray(testCase);

console.log(ans);
