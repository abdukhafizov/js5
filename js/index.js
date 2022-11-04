//1

let cars = [4000, 27000, 16000, 10000, 11000, 17000, 50000, 70000, 60000, 35000, 300, 2000, 8000]
let cheap = []
cheap = cars.filter(price => price <= 35000)

console.log(
    cheap
)

//2
let number = [4, 1, 2, 5, 4, 46, 11, 9, 27, 8, 9, 0, 33]

let even = []
let odd = []

console.log(
    number.filter(odd => odd % 2)
);
console.log(
   number.filter(even => even % 3)
);

