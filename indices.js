const arr = [4,5,3,7,1];
const indices = [...arr.keys()];
console.log('indices:', indices); //indices: [ 0, 1, 2, 3, 4 ]
const indices2 = indices.sort((a,b)=>(arr[a]-arr[b]));
console.log('indices2:', indices2); //indices2: [ 4, 2, 0, 1, 3 ]