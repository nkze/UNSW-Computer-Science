const numbers = [406, 646, 199, 996, 989, 47, 55, 614, 293, 407, 287, 605, -56, 960, 832, 25, 596, 541, -577,
    56, 878, 483, 681, 17, 73, 428, -757, 923, 748, 619, 117, 588, -661, -267, 571, 95, 923, 386, 507, 243, -868, -797,
    344, 660, 34, 945, -424, -169, 344, 601, 277, 478, 562, 863, 887, 172, 23, 995, 999, 2, 12, 476, 755, 617, 155, 698,
    91, 1, 481, 971, 371, 164, 220, 854, 590, 364, 446, 254, 980, 469, 738, 866, 297, 410, 407, 576, 893, 319, 866, 501,
    939, 536, 380, 331, 438, 76, 423, 951, 459, 425 ];


let sum = 0;
let positive = 0;
let even = 0;
let large_sum = 0;
let between_sum = 0;


for (const i in numbers) {
    sum += numbers[i];
    if (numbers[i] > 0) positive += numbers[i];;
    if (numbers[i] % 2 === 0) even += numbers[i];;
    if (numbers[i] > 400) large_sum += numbers[i];;
    if (i >= 20 && i <= 40) between_sum += numbers[i];;
}

console.log(`Sum = ${sum}
Positive Sum = ${positive}
Even Sum = ${even}
Sum of numbers above 400 = ${large_sum}
Sum of numbers between indexes 20 and 40 inclusively = ${between_sum}`);
