/*

Size	Width	Length	Sleeve
S	    18"	    28"	    8.13"
M	    20"	    29"	    8.38"
L	    22"	    30"	    8.63"
XL	    24"	    31"	    8.88"
2XL	    26"	    33"	    9.63"
3XL	    28"	    34"	    10.13"

Use the sizing chart above, create a series of logical expressions that prints the size of a t-shirt based on the measurements of shirtWidth, shirtLength, and shirtSleeve. Valid sizes include S, M, L, XL, 2XL, and 3XL.

For example, if...

const shirtWidth = 23; // size L (large)
const shirtLength = 30; // size L (large)
const shirtSleeve = 8.71; // size L (large)

Then print L to the console. 

If shirtWidth, shirtLength, and shirtSleeve don't fit within the range of acceptable values for a specific size, then print NA to the console. For example, if...

var shirtWidth = 18; // size S (small)
var shirtLength = 29; // size M (medium)
var shirtSleeve = 8.47; // size M (medium)
Then print N/A to the console because the measurements don't all match up with one particular size.

*/

const shirtWidth = 23; // size L (large)
const shirtLength = 30; // size L (large)
const shirtSleeve = 8.71; // size L (large)


let sizeWidth = ""; // size S (small)
let sizeLength = ""; // size M (medium)
let sizeSleeve = ""; // size M (medium)

sizeArr = ["S", "M", "L", "XL", "2XL", "3XL"];
for (let i = 18; i <= 28; i += 2) {
    if (i <= shirtWidth && shirtWidth < i + 2) {
        sizeWidth = sizeArr[(i - 18) / 2];
        break;
    }
}

if (28 <= shirtLength && shirtLength < 29) {
    sizeLength = "S";
} else if (29 <= shirtLength && shirtLength < 30) {
    sizeLength = "M";
} else if (30 <= shirtLength && shirtLength < 31) {
    sizeLength = "L";
} else if (31 <= shirtLength && shirtLength < 33) {
    sizeLength = "XL";
} else if (33 <= shirtLength && shirtLength < 34) {
    sizeLength = "2XL";
} else if (34 <= shirtLength) {
    sizeLength = "3XL";
}

if (8.13 <= shirtSleeve && shirtSleeve < 8.38) {
    sizeSleeve = "S";
} else if (8.38 <= shirtSleeve && shirtSleeve < 8.63) {
    sizeSleeve = "M";
} else if (8.63 <= shirtSleeve && shirtSleeve < 8.88) {
    sizeSleeve = "L";
} else if (8.88 <= shirtSleeve && shirtSleeve < 9.63) {
    sizeSleeve = "XL";
} else if (9.63 <= shirtSleeve && shirtSleeve < 10.13) {
    sizeSleeve = "2XL";
} else if (10.13 <= shirtSleeve) {
    sizeSleeve = "3XL";
}


if (sizeWidth === sizeLength && sizeLength === sizeSleeve) {
    console.log(sizeWidth);
} else {
    console.log("N/A")
}