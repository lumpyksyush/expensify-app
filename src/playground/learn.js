// array methods

// 1
const camelize = (string) => {
    let arr = string.split('-');

    arr = arr.map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1));

    return string = arr.join('');
}

console.log(camelize('background-color'));

// 2
let arr = [1, 2, 5, 8, 12];

const filterRange = (arr, a, b) => {
    let filtered;

    if (typeof a === 'number' && typeof b === 'number') {
        filtered = arr.filter(item => item >= a && item <= b)
    }

    return filtered;
}

console.log(filterRange(arr, 4, 10));

// 3

let a = [5, 2, 1, -10, 8];

for (let i = 0; i < a.length; i++) {
    if (a[i] < a[i + 1]) {
        [a[i], a[i+1]] = [a[i+1], a[i]]
    }
}

console.log( a );

//4

const unique = (arr) => {
    let set = new Set();

    for (let i = 0; i < arr.length; i++) {
        set.add(arr[i]);
    }

    return set;
  }
  
  let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
  ];
  
console.log( unique(values) ); 

// 5

let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys());

keys.push("more");

console.log(keys);