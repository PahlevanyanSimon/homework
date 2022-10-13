function insertionSort (arr) {
    for ( let i = 1; i < arr.length ; ++i ) {
        for ( let j = i; j > 0; --j) {
            if ( arr[j] < arr[j - 1]) {
                [arr[j], arr[j-1]] = [arr[j-1], arr[j]];
            }else {
                break;
            }
        }
    }
    return arr;
}

let arr1 = [5,2,49,23,6,0,79,34]
//console.log(insertionSort(arr1));


let str = 'hello'

function subst(str, st) {
    let s;
    for ( let i = 0; i < str.length; ++i) {
         if (str[i] == st[0]) {
             let count = 0;
             s = i;
             for ( let j = 0; j < st.length; ++j){
                 if (str[i+j] == st[j])
                 { ++count; }
             }
             if (count == st.length) return s;
         }
    }
    return -1;
}

//console.log(subst('hello world', 'rl'));


function isUnique(str){
  let st = new Set(str);

    return str.length === st.size;
}

console.log(isUnique('hello'))
