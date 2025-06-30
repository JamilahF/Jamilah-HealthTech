const ages = [22, 19, 24, 23, 22, 20, 26, 25, 24, 19];

// Sort array in ascending order
const ascendingOrder = function (a, b) {   //const ascendingOrder = (a,b) => a-b || Function can be written this way
    if (a < b) {
        return -1; //a comes before b
    } else if (a > b) {
        return 1 //b comes before a
    } else {
        return 0; //b is equal to a: keep original order
    };
};

//Display array sorted in ascending order
alert(ages.sort(ascendingOrder));

//Minimum age
const minAge = ages[0]; // Display array number with index 0
alert(`Minimum age is ${minAge}`);

const minimumAge = Math.min(...ages); //Uses the spread operator to unpack the array
alert(`Minimum age can also be got with the Math Function and is ${minimumAge}`);
// let packedArray=Math.min([20,25,30]); //returns NaN (Not-a-Number) 
// alert(`Min in packed array is ${packedArray}`);
// let unPackedArray=Math.min(20,25,30); //returns 20
// alert(`Min in un unpacked array is ${unPackedArray}`);

//Maximum age
const maxAge = Math.max(...ages);
alert(`Maximum age is ${maxAge} `);


//Median Age
//Step 1: Sort the array in ascending order
const sortedAges = [...ages].sort((a, b) => a - b);

//Step 2: Find the median
const middleIndex = Math.floor(sortedAges.length / 2); //.length is used to get number of elements in array
let medianAge;
if (sortedAges.length % 2 === 0) {
    //if even number of items: average of two middle values
    medianAge = (sortedAges[middleIndex - 1] + sortedAges[middleIndex]) / 2;
} else {
    //if odd: the middle value
    medianAge = sortedAges[middleIndex];
};
alert(`Sorted ages:, ${sortedAges}`);
alert(`The median age is ${medianAge}`);


//Average ages
let sumOfAges = 0;
for (let x = 0; x < ages.length; x++) {
    sumOfAges += ages[x];
};
let averageAge = sumOfAges / ages.length;
alert(`The average age is ${averageAge}`);

//Range of ages: max - min
let ageRange = maxAge - minAge;
alert(`Age range is ${ageRange}`);

//Compare the value of: |min - average|
const absDiff1 = Math.abs(minAge - averageAge);
alert(`Absolute difference of min-average is ${absDiff1.toFixed(2)} `);

//Compare the value of: |max - average|
const absDiff2 = Math.abs(maxAge - averageAge);
alert(`Absolute difference of max-average is ${absDiff2.toFixed(2)} `);

//Print which one is closer to the average
if (absDiff1 < absDiff2) {
    alert(`Minimum age ${minAge} is closer to the average ${averageAge}`)
} else if(absDiff2<absDiff1) {
    alert(`Maximum age ${maxAge} is closer to the average ${ averageAge } `)
} else{
    alert(`Both are equally close to the average`);
};

