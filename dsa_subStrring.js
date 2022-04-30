// generate sub-String 
let testCase = 'abcde';
let arr = [];
function generateSubString(str) {
        for (let k = 0; k < str.length; k++) {
                for (var i = 0; i < str.length - k; i++) {
                        let res = "";                        
                        for (var j = k; j < str.length - i; j++) {
                                res += str[j];
                        }
                        // console.log(res);
                        arr.push(res);
                }
        }

}
generateSubString(testCase);

console.log(arr);
