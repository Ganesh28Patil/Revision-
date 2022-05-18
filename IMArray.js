/*
• Given an array ["1234", "idsa12", "1212ds", "65fd", "sadfa", "asdasd"] 
• Each item can contain e-9, a-Z, A-Z where a-z, A-Z characters are unwanted 
• Sum of all the numbers after removing all the unwanted characters 1234112+1212465


const sumArr = (arr) => {
    console.log(sumArr(["223f", "adsa12", "1212ds", "65fd", "sadfa", "asdasd"]))// 1512
    console.log(sumArr(["asdasd"])); //
    console.log(sumArr("asdasd12"])); // 12 
    console.log(sumArr(["12"])); // 12
}
    */

    let arr =  ["1234", "idsa12", "1212ds", "65fd", "sadfa", "asdasd"] ;
    let numArr = [];
    let sum = 0;
   for(let str of arr){
    //  console.log(typeof(str),Number(str),Number(str) == str);
    if(Number(str) == str){
        numArr.push(Number(str));
        sum += Number(str);
    }else{
        let i = 0;
        num = "";
        while(i < str.length){
            // console.log(typeof(str[i]),i,str[i],Number(str[i])==str[i]);
            if(str[i] == Number(str[i])){
                num += str[i];
            }
            i++;            
        }
        numArr.push(Number(num));
        sum += Number(num);
    }
   }
   console.log(numArr,sum);