//let a=[1,`jdssfg`,true]
//a.forEach((word)=>console.log(word)

/* let a=[1,6,3,4,7,10];
let b=[4,7,8,6,6]
let c=[...new Set(a.filter(chkInclude))].sort((a,b)=> a-b)
function chkInclude(a1){
return b.includes(a1);
}
console.log(c); */


//let a=[1,6,8,5]
//let b=new Array(3,3);
//console.log(a.slice(2,3));
//console.log(a)
//console.log(a.reverse());
//console.log(a.reduce((tot,b)=> tot+b,0));
/* function getMax(max,b){
if(b>max){
    return b}
    return max
} */
/* let b=[];
for(let i=a.length-1;i>=0;i--){
b.push(a[i]);
}
console.log(b) */
/* let deletedarray=a.splice(-2,2,'A');
console.log(a)
console.log(deletedarray) */

/* let a='hkdjjsfd';
console.log(a.split('').reverse().join('')); */
/* let str = '5';
console.log(str.padStart(3, '0')); 
console.log(str.padEnd(3, '0')); */
/* swapcase = function swapcase(str) {
    // Use the replace method with a regular expression to match lowercase and uppercase letters separately
    return str.replace(/[a-z]+/g, function(match, chr) {
        // For each match, if chr (lowercase letter) exists, convert it to uppercase; otherwise, convert the match (uppercase letter) to lowercase
       console.log(arguments);
       console.log(chr);
        return chr ? match.toUpperCase() : match.toLowerCase();
    });
} */
// Output the result of applying the swapcase function to the string 'AaBbc'
//console.log(swapcase('AaBbc'));
/* uncamelize = function (str) {
    // Use the replace method with a regular expression to match non-word characters followed by any character
    // The regular expression /\W+(.)/g matches one or more non-word characters followed by any character, capturing the character
    // For each match, a callback function is invoked with 'match' representing the entire match and 'chr' representing the captured character
    return str.replace(/[A-Z]+/g, function(match, chr) {
        // Convert the captured character to uppercase and return it
        return match=" "+match.toUpperCase();
        
    });
}

// Output the result of camelize function for different input strings
console.log(uncamelize('helloWorld')); */

let str=`hi how are u we are in Italy`

console.log(str.match(/e/g));
console.log(str.search(/hi/));