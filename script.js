// hollow right triangle pattern

const rightHollowTriangle = (len)=>{
    // len is 5 that would mean 5 rows starting from 1
    let string = '';
    for(let i = 1; i <= len; i++ ){
        for(let j = 0; j < i; j++){
            if(i === 1 || i === len ){
                string += '*';
            }else{
                // until j is equal to i, it keeps on adding space.. then adds a star
                if(j === 0 || j === i - 1){
                    string += '*';
                }else{
                    string += ' ';
                }
            }
        }
        // line gap after every row completion
        string += '\n';
    }
    return string;
};

//console.log(rightHollowTriangle(5));

const powerOfFour = (n)=>{
    if(n === 0) return false;
    if(n === 1) return true;

    if(!Number.isInteger(n / 4)){
        return false;
    }else{
        // recursive call for other numbers
        return powerOfFour(n / 4);
    }

}
//console.log(powerOfFour(256));

// max number of balloons (leet-easy)
const maxNumberOfBalloons = (text) =>{
    const textArray = text.split('');
    // goal is to check how many instances of balloons one can make 
    let textHash = {'b': 0, 'a':0, 'l': 0, 'o':0,'n':0};
    let instanceCounter = 0;
    // lets find out the number of instances of each letter in balloon from the text
    for(let i = 0; i < textArray.length; i++){
        if(textArray[i] in textHash){ // have to use in to check already present textHash
            textHash[textArray[i]]++;
        }
    }
    let targetString = 'balloon';
    let collection = [];

    while(textHash['b'] !== 0){
        let tempString = '';// will contain every word balloon string
        for(let i = 0; i < targetString.length; i++){
            if(textHash[targetString[i]]){
                tempString += targetString[i];
                textHash[targetString[i]]--;
            }
        }
        collection.push(tempString);
        tempString = '';
    }
    // checking whether all the elements are equal or not
    for(let i = 0; i < collection.length; i++){
        if(collection[i] === targetString){
            instanceCounter++;
        }
    }
    return instanceCounter;
}

//console.log(maxNumberOfBalloons('balon'));

// leetcode find lucky integer
const findLuckyInteger = (arr)=>{
    let largestLuckyNumber = 0;
    let numHash = {};
    let collection = [];

    for(let i = 0; i < arr.length; i++){
        if(numHash[arr[i]] !== undefined){
            numHash[arr[i]]++;
        }else{
            numHash[arr[i]] = 1;
        }
    }

    let keyVals = Object.keys(numHash);
    let values = Object.values(numHash);

    // note:: remember double equal to involves type coercion whereas tripple equal checks for deep equality
    for(let val in keyVals){
        if(values[val] == keyVals[val]){
            collection.push(values[val]);
        }
    }
    for(let i = 0; i < collection.length; i++){
        largestLuckyNumber = Math.max(collection[i], largestLuckyNumber)
    }
   
    return largestLuckyNumber !== 0 ? largestLuckyNumber: -1;
}
//console.log(findLuckyInteger([1,2,2,3,3,3]));

const maxRepeating = (sequence, word)=>{
    let maxRepeatSubstring  = 0;
    let temp = word;

   while(sequence.includes(temp)){
    maxRepeatSubstring++;
    temp = temp + word;
   }
   return maxRepeatSubstring;
}
//console.log(maxRepeating("ababcab", "ab"));

const sortSentences = (s)=>{
    const words = s.split(' ');
    let collectionWord = [];
    let finalString = '';
    for(let i = 0; i < words.length; i++){
        const index = words[i].split('').filter(Number);
        const word = words[i].slice(0, -1);  // also substring function can be used
        collectionWord.push({word: word, index: parseFloat(index[0])});
    }
    // rearranging and the array and printing the final string;
    let filteredCollection = collectionWord.sort((a, b) => a.index - b.index);
    for(let i = 0; i < filteredCollection.length; i++){
        if(i !== filteredCollection.length){
            finalString += filteredCollection[i].word + ' ';
        }
    }
    return finalString.slice(0, -1);
}

//console.log(sortSentences("is2 sentence4 This1 a3"));

const largestOddNumber = (num)=>{
    for(let i = num.length - 1; i >= 0; i--){
        if(num[i] % 2 !== 0){
            // returns the string till the range
            return num.slice(0, i+ 1);
        }
    }
    return '';
}

//console.log(largestOddNumber('522'));
// important questions;
const canBeIncreasing = (nums)=>{
   let count = 0;
   let index = -1;
   for(let i = 1; i < nums.length; i++){
      if(nums[i - 1] >= nums[i]){
          count++;
          index = i;
      }
   }
   console.log('count', count, 'index', index);
        if (count > 1)// to check incase the element removed does not exceed by one
        return false;

        // If no element is removed
        if (count === 0)
        return true;

        // If only the last or the
        // first element is removed
        if (index === nums.length - 1 || index === 1)
        return true;

        // If a[index] is removed // if the number that is different is smaller
        if (nums[index - 1] < nums[index + 1])
        return true;

        // If a[index - 1] is removed
        // if the number that is difference is bigger
        if (index - 2 >= 0 && nums[index - 2] < nums[index])
        return true;
        
        // if there is no element to compare
        if(index < 0)
            return true;

        return false;
  
}
//console.log(canBeIncreasing([105,924,32,968]));

const areNumbersAscending = (s)=>{
    const array = s.split(' ');
    let collection = [];
    for(let i = 0; i < array.length; i++){
        if(!isNaN(array[i])){
            collection.push(parseFloat(array[i]));
        }
    }
    let count = 0;
    for(let i = 1; i < collection.length; i++){
        if(collection[i - 1] >= collection[i]){
            count++;
        }
    }
    // conditions for ascending order
    if(count === 0) return true;
    if(count > 0){
        return false;
    }
}

//console.log(areNumbersAscending("hello world 5 x 5"));

const heightChecker = (heights)=>{
    let numberOfIndices = 0;
    let sortedVersion = Array.from(heights).sort((a, b)=> a - b);
    for(let i = 0; i < heights.length; i++){
        if(sortedVersion[i] !== heights[i]){
            numberOfIndices = numberOfIndices + 1;
        }
    }
    return numberOfIndices;

}

//console.log(heightChecker([1,1,4,2,1,3]));

const isCovered = (ranges, left, right) =>{
    let inBetweenSets = new Set();
    // using sets to filter out the repetition in ranges
    for(let range of ranges){
        for(let i = range[0]; i <= range[1]; i++){
            inBetweenSets.add(i);
        }
    }
    // if a single element from range is missing then return false
    for(let i = left; i <= right; i++){
        if(!inBetweenSets.has(i)) return false;
    }
    return true;
    
}

//console.log(isCovered([[1,50]], 1, 50 ));

const validPalindrome = (s)=>{
    let string = s.match(/[A-Za-z0-9]/g).join('').toLowerCase();
    for(let i = 0 ; i < string.length / 2; i++){
        // remember to use charAt for character check
        if(string.charAt(i) !== string.charAt(string.length - i - 1)){
            return false;
        }
    }
    return true;
}

//console.log(validPalindrome("A man, a plan, a canal: Panama"));

const runningSum = (nums)=>{
    let newArray = [];
    let sum = 0;
    for(let i = 0; i < nums.length; i++){
        let currentVal = nums[i];
        let prevVal = nums[i - 1] === undefined ? 0 : nums[i - 1];
        sum += (prevVal + currentVal) - prevVal; // prev value is subtracted in order to get the single summation
        newArray.push(sum);
    }
    return newArray;
}

//console.log(runningSum([1,2,3,4]));

const kidsWithCandies = (candies, extraCandies)=>{
    let maxCandies = 0;
    let check = false;
    let newArray = [];
    for(let i =0; i < candies.length; i++){
        maxCandies = Math.max(maxCandies, candies[i]);
    }
    for(let j = 0; j < candies.length; j++){
        if((candies[j] + extraCandies) >= maxCandies){
            check = true;
            newArray.push(check);
        }else{
            check = false;
            newArray.push(check);
        }
    }
    return newArray
}

//console.log(kidsWithCandies([2,3,5,1,3], 3));

const secondHighest = (s)=>{
    let digits = [];
    let sArray  = s.split('');
    let maxVal = 0;
    let secondHighest = -1;
    let maxValIndex = [];

    for(let i = 0; i < sArray.length; i++){
        if(!isNaN(sArray[i])){
            digits.push(parseFloat(sArray[i]));
        }
    }
    for(let val of digits){
        maxVal = Math.max(maxVal, val);
    }

    for(let i = 0; i < digits.length; i++){
        if(digits[i] !== maxVal){
            maxValIndex.push(digits[i]);
        }
    }
    if(maxValIndex.length !== 0){
        for(let val of maxValIndex){
            secondHighest = Math.max(secondHighest, val);
        }
    }
    return secondHighest;

}
//console.log(secondHighest("abc1111"));

const divideString = (s, k, fill)=>{
    let convertedStringArray = s.split('');
    let res = [];
    for(let i = 0; i < convertedStringArray.length; i+=k){
        let string = '';
        // adding the indexes in order to make sure the next three groups of letters are selected
        for(let j = 0; j < k; j++){
            if(s[i + j]){
                string += convertedStringArray[i + j];
            }else{
                string += fill;
            }
        }
        res.push(string);
    }
    return res;
}
//console.log(divideString("abcdefghij", 3, 'x'));

// smallest index with equal value
const smallestEqual = (nums)=>{
    let smallestIndexValue = Infinity;
    for(let i = 0; i < nums.length; i++){
        if(i % 10 === nums[i]){
            if(smallestIndexValue > i){
            smallestIndexValue = i;
            }
        }
    }
    return smallestIndexValue === Infinity ? -1: smallestIndexValue;
}

//console.log(smallestEqual([7,8,3,5,2,6,3,1,1,4,5,4,8,7,2,0,9,9,0,5,7,1,6]));

const numIdenticalPairs = (nums)=>{
    let obj = {};
    let count = 0;
    for(let i = 0; i < nums.length; i++){
        if(obj[nums[i]]){
            count += obj[nums[i]];
            obj[nums[i]] += 1;
        }else{
            obj[nums[i]] = 1
        }
    }
    console.log(obj);
    return count;
}

//console.log(numIdenticalPairs([1,2,3,1,1,3]));

const sumOfUnique = (nums)=>{
    let hash = {};
    let sum = 0;
    for(let i = 0; i < nums.length; i++){
        if(hash[nums[i]]){
            hash[nums[i]]++;
        }else{
            hash[nums[i]] = 1;
        }
    }
    for(const [key, value] of Object.entries(hash)){
        if(value === 1){
            sum += parseFloat(key);
        }
    }
    return sum;
}
//console.log(sumOfUnique([1,1,1,1]));

const reverseString = (s)=>{
    let firstIndex = 0;
    let lastIndex = s.length - 1;

    while(lastIndex > firstIndex){
        // using a simple switching mechanism to swap the first and last values
        let first = s[firstIndex];
        s[firstIndex] = s[lastIndex];
        s[lastIndex] = first;
        firstIndex++;
        lastIndex--;
    }
    return s;
}

//console.log(reverseString(["h","e","l","l","o"]));

const findMaxConsecutiveOnes = (nums)=>{
    // program to find the maxmimum number of consequitve ones in the array 
    let maxNumberOfOnes = 0;
    let minNumberOfOnes = 0;
    for(let i = 0; i <= nums.length; i++){ // till the last element in order to maxout the one count
        if(nums[i] === 1){
           minNumberOfOnes++;
        }else{
            maxNumberOfOnes = Math.max(minNumberOfOnes, maxNumberOfOnes);
            minNumberOfOnes = 0;
        }
    }
    return maxNumberOfOnes;

}
//console.log(findMaxConsecutiveOnes([1,1,0,1,1,1]));

const reverseWords = (s)=>{
    let stringArray = s.split(' ');
    let finalCollection = [];
    let currentWordIndex = 0;
    let finalString = '';
    
    // reversing all the words
    while(currentWordIndex < stringArray.length){
        let newString = '';
        for(let i = stringArray[currentWordIndex].length - 1; i >= 0; i--){
            newString += stringArray[currentWordIndex][i];
        }
        finalCollection.push(newString);
        currentWordIndex++;
    }
    // adding the final collection to the string :
    // possible approach using for in or for loop
    for(let i = 0; i < finalCollection.length; i++){
        if(i !== finalCollection.length){
            finalString += finalCollection[i] + ' ';
        }
    }
    return finalString.slice(0, -1);

}

//console.log(reverseWords("Let's take LeetCode contest"));

const dominantIndex = (nums)=>{
     let maxValue = -Infinity;
     for(let i =0 ; i < nums.length; i++){
         maxValue = Math.max(maxValue, nums[i]);
     }
     // check max value
     let maxIndex = nums.indexOf(maxValue);
     let counter = 0;
     // using a counter based system to check whether the numbers are double or not
     for(let i = 0; i < nums.length; i++){
         if( maxValue !== nums[i] && maxValue >= nums[i]* 2){
            counter++;
         }
     }
     return counter === nums.length - 1 ? maxIndex : -1;

}

const dominantIndexAlternative = (nums)=>{
    let max = -Infinity;
    max = Math.max(...nums);

    // splice the max 
    let maxIndex = nums.indexOf(max);
    nums.splice(maxIndex, 1);

    let secondHighest = Math.max(...nums);

    if(max >= secondHighest * 2){
        return maxIndex;
    }else{
        return -1;
    }
}
//console.log(dominantIndexAlternative([3,1,6,0]))

// medium level
const longestPalindromicString = (s)=>{
    let stringArray = s.split('')
    console.log(stringArray);
    let finalCollection = []; // will contain all the palindromes

    for(let i = 0; i < s.length / 2; i++){ // will traverse from the half back from front to end
     // to be continued......
    }
}

//console.log(longestPalindromicString("cbbd"));

// possible strings: 'cdbba';

const maxNumberBalloons = (string) =>{
    let balloonCollection = [];
    let wordObj = {'b':0, 'a':0, 'l':0, 'o':0, 'n':0}; // filling the occurences
    let stringConverted = string.split('');
    let balloonCount = 0;
    
    // checks occurence and fills the object index
    for(let i = 0; i < stringConverted.length; i++){
        if(wordObj[stringConverted[i]]){
            wordObj[stringConverted[i]]++;
        }else{
            wordObj[stringConverted[i]] = 1;
        }
    }
    // populating the each letter till the first object value hits 0
    let mainWord = 'balloon';// main word to cross check other words in a linear search
    while(wordObj['b'] !== 0){
        let tempString = '';
        for(let i = 0; i < mainWord.length; i++){
            if(wordObj[mainWord[i]]){
                tempString += mainWord[i];
                wordObj[mainWord[i]]--; // reducing the object to loop out
            }
        }
        balloonCollection.push(tempString);
    }
    // checking the number of balloons in the array
    for(let i = 0; i < balloonCollection.length; i++){
        if(balloonCollection[i] === mainWord){
            balloonCount++;
        }
    }
    return balloonCount;
}

//console.log(maxNumberBalloons("loonbalxballpoon"));

const reverseOnlyLetters = (s)=>{
  // two pronged approach 
  let frontIndex = 0;
  let lastIndex = s.length - 1;
  let stringArray = s.split('');

  while(lastIndex > frontIndex){
      // do something
      // checks for !alpha numeric from both ends of the string
    if(!isAlpha(stringArray[frontIndex])){
        frontIndex++;
    }
    if(!isAlpha(stringArray[lastIndex])){
        lastIndex--;
    }
    if(isAlpha(stringArray[frontIndex]) && isAlpha(stringArray[lastIndex])){
        // swap them
        let tempVal = stringArray[frontIndex];
        stringArray[frontIndex] = stringArray[lastIndex];
        stringArray[lastIndex] = tempVal;

        // incrementing and decrementing index
        frontIndex++;
        lastIndex--;
    }
    
  }
  return stringArray.join('');
}
const isAlpha = (c) => /[a-zA-Z]/.test(c); // letter tester

//console.log(reverseOnlyLetters("Test1ng-Leet=code-Q!"));


const findTheDistanceValue = (arr1, arr2, d)=>{
    // brute force approach
    let resultantLength = arr1.length;
    for(let firstIndex = 0; firstIndex < arr1.length; firstIndex++){
        for(let secondIndex = 0; secondIndex < arr2.length; secondIndex++){
            if(Math.abs(arr1[firstIndex] - arr2[secondIndex]) <= d){
                resultantLength -= 1; // subtracting directly from length and printing out the remaining ones
                break;
            }
        }
    }
    return resultantLength;
}
//console.log(findTheDistanceValue([4,5,8],[10,9,1,8], 2));

const smallerNumbersThanCurrent = (nums)=>{
    let newArray = [];
    let counter = 0;
    // temp index 
    let arrayIndex = 0;
    while(arrayIndex < nums.length){
        let tempArrayVal = nums[arrayIndex];

        for(let i = 0; i < nums.length; i++){
            if(tempArrayVal > nums[i]){
                counter++;
            }
        }
        newArray.push(counter);
        counter = 0;
        arrayIndex++;
    }

    return newArray;
}
//console.log(smallerNumbersThanCurrent([8,1,2,2,3]));


const numberOfSteps = (num)=>{
    let steps = 0;
    // while approach
    while(num !== 0){
        if(num %2 === 0){
            num = num /2 ;
            steps++;
        }else if(num %2 !== 0){
            num = num - 1;
            steps++
        }
    }
    return steps;
    
}

//console.log(numberOfSteps(14));

const replaceElements = (arr)=>{
    // finding the largest element to its right and replacing it
    let tempIndex = 0;
    while(tempIndex < arr.length){
        let largestElement = -Infinity;

        for(let i = tempIndex + 1; i < arr.length; i++){
            largestElement = Math.max(largestElement, arr[i]);
        }
        arr[tempIndex] = largestElement === -Infinity ? -1: largestElement;
        tempIndex++
        largestElement = -Infinity;
    }
    return arr;
}

//console.log(replaceElements([17,18,5,4,6,1]));

const arrayRankTransformation = (arr)=>{
    let rankArrayHash = {};
    let newArray = [];
    let sorted = [...arr]; // shallow copy
    sorted.sort((a, b)=> a - b);
    let tempRank = 1;

    for(let i = 0; i < sorted.length; i++){
        if(!rankArrayHash[sorted[i]]){
            rankArrayHash[sorted[i]] = tempRank;
            tempRank++
        }
    }
    for(let i = 0; i < arr.length; i++){
        newArray.push(rankArrayHash[arr[i]]);
    }
    return newArray;
    

}
//console.log(arrayRankTransformation([37,12,28,9,100,56,80,5,12]));

const maximum69Number = (num)=>{
    let numConverted  = num.toString().split('');
    const maxNumber = '9';
    let tempMax = -Infinity;
    tempMax =  Math.max(parseFloat(numConverted.join('')), tempMax);

    for(let i = 0; i< numConverted.length; i++){
        if(numConverted[i] !== maxNumber){
            let tempVal = numConverted[i];
            numConverted[i] = maxNumber;
            let num = parseFloat(numConverted.join(''));
            tempMax = Math.max(tempMax, num);
            numConverted[i] = tempVal;
        }
    }
    return tempMax;
}
//console.log(maximum69Number(9996));

// rakuten coding interview question practise

const particleVelocity = (array) =>{        

    // note atleast three elements in succession needs to have stable gap
    let totalPeriods = 0;
    for(let i = 0; i < array.length; i++){
        for(let count = 0; i + 2 < array.length && array[i + 1] - array[i] === array[i + 2] - array[i + 1]; i++){
            console.log('i + 2:', array[i +2], 'i + 1:', array[i + 1], 'i:', array[i]);
            totalPeriods += ++count; // preincrement is needed in order to add the value
            console.log(totalPeriods);
        }
    }
    return totalPeriods;

}

// i = 0, count = 0, 0 + 2 < 10 && 1 + 1 === 3 - 1 = true, count + 1 = 1;
// i = 1, count = 1, 1 + 2 < 10 && array[3] - array[1] === array[3] - array[1]; false,
// i = 2, count = 1, 4 < 10 && array[3] - array[3] === array[3] - array[3]; true, count = 2,
// i = 3, count = 2, 5 < 10 && array[3] - array[3] === array[2] - array[3]; false, count = 2,
// i = 4, count = 2, 6 < 10 && array[2] - array[3] === array[3] - array[2]; false,
// i = 5, count = 2, 7 < 10 && array[3] - array[2] === array[2] - 3; false,
// i = 6, count = 2, 8 < 10 && array[2] - 3 === 1 - 2; true count = 3;
// i = 7, count = 3, 9 < 10 && 1 - 2 === 0 - 1 = true; count = 4;


//console.log(particleVelocity([7,7,7,7]));

const seriesFib = (limiter) =>{
    if(limiter <= 1){
        return limiter;
    }
    let sum = 0;
    let finalArray = [0,1];
    let first = finalArray[0];
    let second = finalArray[1];
    sum = first + second;
    for(let i = 2; i < limiter; i++){
        first = second;
        second = sum;
        sum = first + second;
    }
    return sum;

}
//console.log(seriesFib(5));

const fairCandySwap = (aliceSizes, bobSizes)=>{
    let sum1 = calcSum(aliceSizes);
    let sum2 = 0;
    let hash = {};

    for(let i = 0; i < bobSizes.length; i++){
        if(hash[bobSizes[i]]){
            hash[bobSizes[i]]++;
        }else{
            hash[bobSizes[i]] = 1;
        }
        sum2 += bobSizes[i];
    }

    let avg = Math.ceil((sum1 + sum2)/ 2); // using average to find out the object for bob

    for(let i = 0; i < aliceSizes.length; i++){
        let check = avg - (sum1 - aliceSizes[i]);
        if(hash[check]){
            return [aliceSizes[i], check];
        }
    }

}
const calcSum = (array)=>{
    return array.reduce((acc, current)=>{
        return acc + current;
    })
}

//console.log(fairCandySwap([1,2],[2,2]));

// output should be [2,3], Bob should give alice 3 candies and alice should give bob 2 to balance it out 

const distributeCandies = (candies, num_people)=>{
    let finalArray = new Array(num_people).fill(0);
    let candyCounter = 1;
    let tempIndex = 0;
    let totalCandycounter = 0;

    // approach till there is no candy remaining 
    while (candies !== 0){
        if(candies < candyCounter){
            finalArray[tempIndex] = candies;
            candies = 0;
        }else{
            finalArray[tempIndex] = candyCounter;
            candies -= candyCounter;
            
        }
        candyCounter++;
        tempIndex++;

        if(tempIndex === num_people) {
            tempIndex = 0
        }
       
    }
    return finalArray;
   
}


//console.log(distributeCandies(10, 3));

const maxPower = (s)=>{
    let array = s.split('');
    let mainIndex = 0;
    let secondaryIndex = 1;
    let maxCount = -Infinity;
    let counter = 0;

    if(array.length === 1){
        return 1;
    }
    if(array.every(val=> val === array[0])){
        return array.length;
    }
    while(mainIndex < array.length){
        if(array[mainIndex] == array[secondaryIndex]){
            counter ++;
            maxCount = Math.max(maxCount, counter);
            secondaryIndex++
        }else{
            mainIndex++;
            counter = 0;
        }
    }
    return maxCount;

}

//console.log(maxPower('accc'));

const reverseVowels = (s)=>{
    let stringArray = s.split('');
    const vowelCollection = new Set(['a', 'i', 'o', 'u', 'e']);
    let frontIndex = 0;
    let backIndex = stringArray.length - 1;
    while(frontIndex < backIndex){ // till it hits the middle
        // not found
        if(!vowelCollection.has(stringArray[backIndex].toLowerCase())){
            backIndex--;
        }
        if(!vowelCollection.has(stringArray[frontIndex].toLowerCase())){
            frontIndex++;
        }
        // found
        let tempString = '';
        if(vowelCollection.has(stringArray[frontIndex].toLowerCase()) && vowelCollection.has(stringArray[backIndex].toLowerCase())){
            // do something 
            tempString = stringArray[frontIndex];
            stringArray[frontIndex] = stringArray[backIndex];
            stringArray[backIndex] = tempString;
            frontIndex++;
            backIndex--;
        }
    }
    return stringArray.join('');
}

//console.log(reverseVowels("hello"));
// roce cir

// const longestPalindrome = (s)=>{
//     console.log(s);
//     let stringArray = s.split('');
//     let index = 0;
//     let len = stringArray.length;
//     while(index < len){

//     }
// }
//console.log(longestPalindrome('abccccdd'));

const validPalindromeString = (s)=>{
    // at most one character can be deleted
    let stringArray = s.split('');
    let letterRemoval = checkPalindrome(stringArray);

    if(letterRemoval.length !== 2){
        return false;
    }
    if(letterRemoval){
        stringArray.splice(letterRemoval[0].index, 1);
        if(checkPalindrome(stringArray) === undefined){
            return true;
        }else{
            stringArray.splice(letterRemoval[0].index, 0, letterRemoval[0].letter);
            stringArray.splice(letterRemoval[1].index, 1);
            if(checkPalindrome(stringArray) === undefined){
                return true;
            }else{
                return false;
            }
        }
    }else{
        return true;
    }

}
const checkPalindrome = (stringArray)=>{
    let checkTemp = [];
    for(let i = 0; i < stringArray.length / 2; i++){
        if(stringArray[i] !== stringArray[stringArray.length - 1 - i]){
              checkTemp.push({letter:stringArray[i], index: i});
              checkTemp.push({letter:stringArray[stringArray.length - i - 1], index: stringArray.length - 1 - i});
              return checkTemp
        }
    }
}

//console.log(validPalindromeString("asaa"));

const rotateString = (s, goal)=>{
    // s to goal after number of rotations
    let sArray = s.split('');
    let goalArray = goal.split('');
    let tempIndex = 0;    
    let tempString = [...sArray];
    while(tempIndex < sArray.length){
        const firstIndex = 0;
        let tempChar = tempString[firstIndex];
        if(checkString(firstIndex, tempString, tempChar, goalArray)){
            return true;
        }
        tempIndex++;
    }
    return false;
};
const checkString = (firstIndex, tempString, tempChar, goalArray)=>{
    tempString.splice(firstIndex, 1);
    tempString.push(tempChar);
    return goalArray.join('') === tempString.join('');
}

//console.log(rotateString("abcde","abced" ));


// cost of each lemonade is 5
const lemonadeChange = (bills)=>{
    const lemonadePrice = 5;
    let five = 0;
    let ten = 0;
    for(let i = 0; i < bills.length; i++){
        if(bills[i] === lemonadePrice){
            five++;
        }
        else if(bills[i] === 10){
            five--;
            ten++;

        }else if(bills[i] === 20){
            ten--;
            five--;
        }else{
            five -= 3;
        }
        if(five < 0) return false; // no more change
    }
    return true;
}

//console.log(lemonadeChange([5,5,10,20]));

const isPrefixOfWord = (sentence, searchWord)=>{
    let sentenceArray = sentence.split(' ');
    let indexes = [];
    let currentWordIndex = 0;
    let minimalIndex = Infinity;

    while(currentWordIndex < sentenceArray.length){
        if(sentenceArray[currentWordIndex].startsWith(searchWord)){
            indexes.push(currentWordIndex)
        }
        currentWordIndex++;
    }
    for(let i = 0; i < indexes.length; i++){
        minimalIndex  = Math.min(minimalIndex, indexes[i]);
    }

    return indexes.length === 0 ? -1 : minimalIndex + 1
   
}

//console.log(isPrefixOfWord("leetcode burg burger", "burg"));

// leetcode medium.. longest non-repeating substring length

const lengthOfLongestSubstring = (s)=>{
    let longestSubString = 0;
    for(let i = 0; i < s.length; i++){
        let substringSet = new Set();
        for(let x = i; x < s.length; x++){
            if(substringSet.has(s[x])){
                break; // stops adding to the set if it already has
            }else{
                substringSet.add(s[x]);
                longestSubString = Math.max(substringSet.size, longestSubString);
            }
        }   
    }
    return longestSubString;
    
};

//console.log(lengthOfLongestSubstring('pwwke'));

const uniqueOccurences = (arr)=>{
    let hash = {};
    for(let i = 0; i < arr.length; i++){
        if(hash[arr[i]]){
            hash[arr[i]]++;
        }else{
            hash[arr[i]] = 1;
        }
    }
      // now to check whether the occurences are unique or not 
    let occurenceArray = Object.keys(hash).map((key)=> hash[key])
    let occurenceSet = new Set(occurenceArray);

    return occurenceArray.length !== occurenceSet.size ? false : true;
}

//console.log(uniqueOccurences([1,2,2,1,1,3]));

const isMonotonic = (nums)=>{
  let checkBool = false;
  let checkArray = nums.every((item, i)=>{
        return i === 0 || item >= nums[i - 1];
  });
  if(checkArray){
      return true;
  }else{
      for(let i = 1; i < nums.length; i++){
          if(nums[i - 1] >= nums[i]){
              checkBool = true;
          }else{
              checkBool = false;
              break;
          }
      }
  }
  return checkBool;
}

//console.log(isMonotonic([1,2,4,5]));

const validMountainArray = (arr)=>{
    if(arr.length <= 2){
        return false;
    }
    let check1 = false;
    let checkArray = [];
    for(let i = 1; i < arr.length; i++){
        if(arr[i - 1] === arr[i]){
            return false;
        }
        if(arr[i - 1] < arr[i]){
            check1 = true;
            checkArray.push(check1);
        }else{
            check1 = false;
            checkArray.push(check1);
        }
    }
    // check for mountain
    let check = true;
    if(checkArray[0] === false){
        return false;
    }
    let singleCheck = checkArray.every(singleCheck=> singleCheck);
    if(singleCheck){
        return false;
    }
    // for array of sizes 4 and above
    let finalCheck = true;
    for(let i = 0; i < checkArray.length; i++){
        if(finalCheck && checkArray[i]){
            check = true;
            continue;
        };
        if(!checkArray[i]){
            check = true;
            finalCheck = false;
            continue;
        }
        if(checkArray[i]){
            check = false;
            break;
        }
    }
    return check;
    
}
//console.log(validMountainArray(
    //[14,82,89,79,70,70,68]))


// removing all the adjacent duplicate values till you are left with the final string
const removeAdjacentDuplicates = (s)=>{
    let stringArray = s.split('');
    const stack = [];
    for(let i = 0; i < stringArray.length; i++){
        if(stack[stack.length - 1] !== stringArray[i]){
            stack.push(stringArray[i]);
        }else{
            // letter is popped out of stack from the end if it is already there in the stack
            stack.pop();
        }
    }
    return stack.join('');
}
//console.log(removeAdjacentDuplicates("abbaca"));

const squaresSorted = (nums)=>{
    let newArray = [];
    for(let i = 0; i < nums.length; i++){
        const sqauredVal = Math.pow(nums[i], 2);
        newArray.push(Math.abs(sqauredVal));
    }
    return newArray.sort((a,b)=> a - b);
}
//console.log(squaresSorted([-4,-1,0,3,10]));

const squareIsWhite = (coordinates)=>{
    let chessBoard = [];
    const chestBoardLen = 8;
    let check = true;
    // board access key
    const accessKey = {
        'a': 0,
        'b': 1,
        'c': 2,
        'd': 3,
        'e': 4,
        'f': 5,
        'g': 6,
        'h': 7,
        '1': 7,
        '2': 6,
        '3': 5,
        '4': 4,
        '5': 3,
        '6': 2,
        '7': 1,
        '8': 0,

    }
    for(let row = 1; row <= chestBoardLen; row++ ){
        let rowBlocks = [];
        for(let col = 1; col <= chestBoardLen; col++ ){
            rowBlocks.push(check);
            check = !check;
        }
        check = !check;
        chessBoard.push(rowBlocks);
    }
    // returning coords based on the access key
    return chessBoard[accessKey[coordinates[1]]][accessKey[coordinates[0]]];
    
}
//console.log(squareIsWhite('h3'));

const makeGood = (s)=>{
    let stringArray = s.split('');
    // edge case for string size being equal to 1;
    if(stringArray.length === 1){
        return stringArray.join('');
    }
    for(let i = 1; i < stringArray.length; i++){
        if(stringArray[i - 1].toLowerCase() === stringArray[i].toLowerCase()){
            if((stringArray[i - 1].toLowerCase() === stringArray[i - 1] && stringArray[i].toUpperCase() === stringArray[i])
            || (stringArray[i - 1].toUpperCase() === stringArray[i - 1] && stringArray[i].toLowerCase() === stringArray[i])){
                let indexRec = i - 1;
                // splice the array
                stringArray.splice(i - 1, 1);
                stringArray.splice(indexRec, 1);
                i = 0;
            }
        }
    }
    return stringArray.join('');
}

// alternative approach of make string good using stack system 
const makeGoodStack = (string)=>{
    const stack = [];
    let stringArray = string.split('');
    // edge case for length being equal to 0 or one
    if(stringArray.length === 0){
        return "";
    }else if(stringArray.length === 1){
        return stringArray.join('');
    }
    // checking for whether the paired elements fall under the condition or not
    for(let i = 0; i < stringArray.length; i++){
        if(stack.length === 0 || stringArray[i] === stack[stack.length - 1]){
            stack.push(stringArray[i]);
        }else{
            const previousElement = stack[stack.length - 1];
            if(previousElement.toLowerCase() === stringArray[i] || previousElement.toUpperCase() === stringArray[i]){
                stack.pop()// pops out if it finds any of the upper case letters
            }else{
                stack.push(stringArray[i]);
            }
        }
    }
    return stack.join('');// final output will be returned as string in a stack
}
//console.log(makeGoodStack("leEt"))

const validPalindromeI = (s)=>{
    let newString = '';
    let tempIndex = 0;
    if(s === ''){
        return true;
    }
    const isCheckAlpha = (str)=> /^[a-zA-Z]*$/.test(str)
    while(tempIndex < s.length){
        if(isCheckAlpha(s[tempIndex]) || !isNaN(s[tempIndex])){
            newString += s[tempIndex].toLowerCase();
            tempIndex++
        }else{
            tempIndex++;
        }
    }
    let tempString = newString.split(' ').join('');
    for(let i = 0; i < tempString.length / 2; i ++){
        if(tempString[i] !== tempString[tempString.length - 1 - i]){
            return false;
        }
    }
    return true;
}


//console.log(validPalindromeI("A man, a plan, a canal: Panama"));

const tictactoe = (moves)=>{
    const first = 'A';
    const second = 'B';
    let turnChange = true;
    const winCombos = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[2,4,6],[0,4,8]]
    // createBoard
    let board = [];
    let blockIndexCounter = 0;
    for(let i = 0; i < 3; i++){
        let singleRow = [];
        for(let j = 0; j < 3; j++){
            singleRow.push({player: '', index: blockIndexCounter});
            blockIndexCounter++;
        }
        board.push(singleRow);
    }
    // inserting turns
    for(let k = 0; k < moves.length; k++){
        if(board[moves[k][0]][moves[k][1]].player === ''){
            if(turnChange){
                board[moves[k][0]][moves[k][1]].player = first;
            }else{
                board[moves[k][0]][moves[k][1]].player = second;
            }
            turnChange = !turnChange;
        }
    }
    // check for win
    let checkArray = [];
   for(let i = 0; i < board.length; i++){
       for(let j = 0; j < board.length; j++){
           if(board[i][j].player !== ''){
                checkArray.push({player: board[i][j].player, index:board[i][j].index})
           }
       }
   }
   let seriesA = [];
   let seriesB = [];
   for(let i = 0; i < checkArray.length; i++){
        if(checkArray[i].player === first){
            seriesA.push({player:checkArray[i].player, index:checkArray[i].index})
        }else{
            seriesB.push({player:checkArray[i].player, index:checkArray[i].index})
        }
   }

   let player = true;
    for(let i = 0; i < winCombos.length; i++){
        let tempArray = Array.from(seriesB.map((val)=> val.index));
        if(winCombos[i].every(val=> tempArray.includes(val))){
            player = true;
            break;
        }else{
            player = false;
        }
   }
//
 if(player){
     return second;
 }else{
    for(let i = 0; i < winCombos.length; i++){
        let tempArray = Array.from(seriesA.map((val)=> val.index));
        if(winCombos[i].every(val=> tempArray.includes(val))){
            player = true;
            break;
        }else{
            player = false;
        }
   }
   if(player){
       return first;
   }
 }
 if(checkArray.length > 8 && !player){
     return 'Draw';
 }
 return !player && 'Pending';

}
//console.log(tictactoe([[0,0],[1,1],[2,0],[1,0],[1,2],[2,1],[0,1],[0,2],[2,2]]));

// no three consequtive letters in a string are not equal// recursive approach
const makeFancyString = (string) =>{
    const stringArray = string.split('');
    const stringLen = stringArray.length;
    // using stack to iterate through individual string and adding and popping depending on their occurence 
    const stack = [];
    let counter = 0;
    for(let i = 0; i < stringLen; i++){
        if(stack[stack.length - 1] === stringArray[i]){
            counter++;
            stack.push(stringArray[i]);
            if(counter === 2){
                stack.pop();
                counter = 0;
            }
        }else{
            stack.push(stringArray[i]);
            counter = 0; // important to recalibrate the counter;
        }
    }
    // recursive approach
    if(stack.length === stringArray.length){
        return stack.join('');
    }else{
        return makeFancyString(stack.join(''));
    }
}
//console.log(makeFancyString("aaabaaaa"));
// out put should be aabaa after removing all the consequtive three letters in a definite sequence

// a, 
// counter = 1, [a,a],
// if a == b , no [a,a,b], 
// if a == a, yes, counter = 2

const wordPattern = (pattern, string)=>{
    // hashed solution
    const patternArray = pattern.split('');
    const stringArray = string.split(' ');
    let stringHash = {}
    if(patternArray.length !== stringArray.length){
        return false;
    }
    // pushing to a new array for string check
    for(let i = 0; i < stringArray.length; i++){
        if(stringHash[patternArray[i]]){
            if(stringHash[patternArray[i]] !== stringArray[i]){
                return false;
            }
        }else{
            if(Object.values(stringHash).indexOf(stringArray[i]) !== -1){
                return false;
            }else{
                stringHash[patternArray[i]] = stringArray[i];
            }
           
        }
    }
    return true;
}

const wordPatternAlternative = (pattern, string)=>{

    // hashed solution
    const patternArray = pattern.split('');
    const stringArray = string.split(' ');
    console.log(patternArray, stringArray)

    if(patternArray.length !== stringArray.length){
        return false;
    }
    // pushing to a new array for string check
    let mainIndex = 0;
    while(mainIndex < stringArray.length){
        mainIndex++;
    }

    return true;
}

//console.log(wordPatternAlternative('abba', 'dog cat cat dog'));


const isPrefixString = (s, words)=>{
    let index = 0;
    for(let i = 0; i < words.length; i++){
        // first iteration
        for(let j = 0; j < words[i].length; j++){
            const ch = s[index];
            const wordChar = words[i][j];

            if(ch !== wordChar){
                return false;
            }else{
                index++;
            }
            if(index === s.length){
                if(j === words[i].length - 1){
                    return true
                }else{
                    return false;
                }
            }
        }
    }
    if(index !== s.length){
        return false;
    }else{
        return true;
    }

}
//console.log(isPrefixString("cc",["c","cc"]));


const longestNiceSubStringNew = (s)=>{
    const stringArray = s.split('');
    if(s.length === 1){
        return '';
    }
    stringArray.every((letter)=>{
        if(letter === letter.toLowerCase()){
            return '';
        }
    });
    stringArray.every((letter)=>{
        if(letter === letter.toUpperCase()){
            return '';
        }
    })
    const isLowerCheck = (s)=> s === s.toLowerCase();
    const checkSubstring = (substring)=>{
        let lower = new Set();
        let upper = new Set();
        for(let char of substring){
            if(isLowerCheck(char)){
                lower.add(char)
            }else{
                upper.add(char);
            }
        }   
        for(const letter of lower){
            if(upper.has(letter.toUpperCase())){
                lower.delete(letter);
                upper.delete(letter.toUpperCase());
            }
        }
        let subArray = [];
        // only sends the lower arrays when both cancels each other out 
        if(lower.size === 0 && upper.size === 0){
            subArray.push(substring);
        }
        return subArray;
    }
    let finalArraySubstrings = [];
    for(let i = 0; i < s.length; i++){
        for(let j = i + 1; j <= s.length; j++){
            // nested approach to extract all the substring
            let substring = s.slice(i, j);
            let array = checkSubstring(substring);
            if(array.length !== 0){
                finalArraySubstrings.push(substring);
            }
        }
    }
    // if the length of the substrings are equal... required to get the first one
    if(finalArraySubstrings.length === 0){
        return ''
    }
    if(finalArraySubstrings.length === 1){
        return finalArraySubstrings[0];
    }
    let final = [];
    if(finalArraySubstrings.every(singleSubstring => singleSubstring.length === finalArraySubstrings[0].length)){
        return finalArraySubstrings[0];
    }
    let max = -Infinity;
    for(let i = 0; i < finalArraySubstrings.length; i++){
        max = Math.max(finalArraySubstrings[i].length, max);
    } 
    for(let i = 0; i < finalArraySubstrings.length; i++){
        if(finalArraySubstrings[i].length === max){
            final.push(finalArraySubstrings[i]);
        }
    }
    return final[0] == undefined ? '': final[0];
}

//console.log(longestNiceSubStringNew(
   // "jcJ"))


const kLengthApart = (nums, k)=>{
    // to determine whether are the 1s are k length apart or not.
    let counter = 0;
    let oneCounter = 0;
    let check = false;
    let checkArray = [];
    // edge case one for if all numbers are equal to 1
    if(nums.every((num)=> num === nums[0]) && k === 0){
        return true;
    } 
    // edge case for if all the numbers are equal to 0
    if(nums.every((num)=> num === 0)){
        return true;
    }
    // filling up the true or false array
    for(let i = 0; i < nums.length; i++){
        if(nums[i] === 1){
            counter = 0;
        }
        if(nums[i] !== 1){
            counter++;
            if(counter === k){
                check = true;
                checkArray.push(check);
            }
        }
    }
    // check number of 1s
    for(let i = 0; i < nums.length; i++){
        if(nums[i] === 1){
            oneCounter++;
        }
    }
    return checkArray.length === oneCounter - 1 || checkArray.length === oneCounter;
}

//console.log(kLengthApart(
    //[0,0,0], 2));


// note alternative approach can be using storing the unequal chars directly in an array with a check to counter being 2 
const areAlmostEqual = (s1, s2)=>{
    // basic edge cases
    if(s1 === s2) return true;
    if(s1.length !== s2.length) return false;

    const s1Array = s1.split('');
    const s2Array = s2.split('');

    let stringPositions1 = [];
    let stringPositions2 = [];
    // populating the string hash
    for(let i = 0; i < s1Array.length; i++){
        stringPositions1.push({letter: s1Array[i], index: i});
        stringPositions2.push({letter: s2Array[i], index: i});
    }
    // swapping and checking the values
    let counter = 0;
    let set1 = [];
    let set2 = [];
    for(let i = 0; i < stringPositions1.length; i++){
        if(stringPositions1[i].index === stringPositions2[i].index && stringPositions1[i].letter !== stringPositions2[i].letter){
            counter++;
            set1.push(stringPositions1[i].letter)
            set2.push(stringPositions2[i].letter);
        }
    }
    // edge case custom
    if(counter !== 2) return false;

    if(set1[0] === set2[1] && set1[1] === set2[0]){
        return true;
    }
   return false;
}
// return true if we can make the strings equal with atleast one swap
//console.log(areAlmostEqual('caa', 'aaz'));


const balancedStringSplit =(s)=>{
    const sArray = s.split('');
    const checkR = 'R';
    const checkL = 'L';

    const balanceCheck = 0;
    let countR = 0;
    let countL = 0;
    let numberOfSubstrings = 0;

    for(let i = 0; i < sArray.length; i++){
        if(sArray[i] === checkR){
            countR++;
        }
        if(sArray[i] === checkL){
            countL++;
        }
        if(countR - countL === balanceCheck || countL - countR === balanceCheck){
            numberOfSubstrings++;
            countR = 0;
            countL = 0;
        }

    }
    return numberOfSubstrings;


}
//console.log(balancedStringSplit('LLLLRRRR'));

const uncommonFromSentences = (s1, s2)=>{
    const s1Array = s1.split(' ');
    const s2Array = s2.split(' ');
    const stackIncluded = [];
    let index = 0;
    const finalStack = [];

    while(index < s1Array.length){
        for(let i = 0; i < s2Array.length; i++){
            if(s1Array[index] === s2Array[i]){
                stackIncluded.push(s1Array[index]);
            }
        }
        index++;
    }
    // removing the common words..
    for(let i = 0; i < stackIncluded.length; i++){
        if(s1Array.includes(stackIncluded[i])){
            let index = s1Array.indexOf(stackIncluded[i]);
            s1Array.splice(index, 1)
        }
        if(s2Array.includes(stackIncluded[i])){
            let index2 = s2Array.indexOf(stackIncluded[i]);
            s2Array.splice(index2, 1)
        }
    }
    console.log(s1Array, s2Array);

    // checking the words
    let s1hash = {};
    let s2hash = {};

    for(let i = 0; i< s1Array.length; i++){
        if(!s1hash[s1Array[i]]){
            s1hash[s1Array[i]] = 1;
        }else{
            s1hash[s1Array[i]]++;
        }
    }
    for(let i = 0; i < s2Array.length; i++){
        if(!s2hash[s2Array[i]]){
            s2hash[s2Array[i]] = 1;
        }else{
            s2hash[s2Array[i]]++;
        }
    }
    for(const [key, values] of Object.entries(s1hash)){
       if(values === 1 && !s2Array.includes(key)){
        finalStack.push(key);
       }
    }
    for(const [key, values] of Object.entries(s2hash)){
        if(values === 1 && !s1Array.includes(key)){
         finalStack.push(key);
        }
     }
   
    return finalStack;
    
}
//console.log(uncommonFromSentences( "uuz rk uuz", "mqk g gh g"));

const removePalindromeSub = (s)=>{
    const sArray = s.split('');
    let check = true;
    let first = 0;
    let end = sArray.length - 1;
    while(first < end){
        if(sArray[first] !== sArray[end]){
            check = false;
            break;
        }else{
            first++;
            end--;
        }
    }
    return check ? 1 : 2;
}
//console.log(removePalindromeSub("abb"));

const findClosesNumber = (nums)=>{
    // finding the closest number to 0
    let ans = -Infinity;
    let closestNum = Infinity;
    for(let i = 0; i < nums.length; i++){
        if(Math.abs(nums[i]) < closestNum){
            closestNum = Math.abs(nums[i]);
            ans = nums[i];
        }else if(Math.abs(nums[i]) === closestNum){
            ans = Math.max(ans, nums[i]);
        }
    }
    return ans;
}

//console.log(findClosesNumber(
   
//[-10,-12,-54,-12,-544,-10000]))
const percentageLetter = (s, letter)=>{
    const len = s.length;
    let counter = 0;

    for(let char of s){
        if(char === letter) counter++;
    }
    let percentage = (counter / len) * 100;
    return Math.floor(percentage);
}
//console.log(percentageLetter("foobar", 'o'));


// main trick was to merge sorted array as one requires the maximum number attainable 
const largestInteger = (num)=>{
    const numArray = num.toString().split('');
    // note only digits with same parity can be swapped
    const checkParity = (num)=> parseFloat(num) % 2 === 1 ? false : true;
    let evenCollection = [];
    let oddCollection = [];
    let index = 0;
    let finalArray = [];
    let oddSetIndex = new Set();
    // collecting the even and odd digits
    while(index < numArray.length){
        if(checkParity(numArray[index])){
            evenCollection.push(numArray[index]);
        }else{
            oddCollection.push(numArray[index]);
            oddSetIndex.add(index);
        }
        index++
    }
    oddCollection.sort((a, b)=> b - a);
    evenCollection.sort((a,b)=> b - a);
    console.log(oddCollection, evenCollection);
    // shifting based on max 
    let oddIndex = 0;
    let evenIndex = 0;
    for(let i = 0; i < numArray.length; i++){
       if(oddSetIndex.has(i)){
           finalArray.push(oddCollection[oddIndex]);
           oddIndex++;
       }else{
           finalArray.push(evenCollection[evenIndex]);
           evenIndex++;
       }
    }
    return parseFloat(finalArray.join(''));
    
}
//console.log(largestInteger(65875));

const arrangeCoins = (n)=>{
    // need to build a stair like structure 
  let coins = n;
  let sum = 0;
  let index = 1;

  if(coins <= 1){
      return coins;
  }

  while(coins >=  index){
      sum += index;
      
      index++;
      coins--;
      console.log('coins',coins, 'sum', sum);
      if(sum >= coins){
          return index - 1;
      }
  }
  
  
}
//console.log(arrangeCoins(10));

const countVowelSubstring = (word)=>{
    const wordArray = word.split('');
    let countSubs = 0;
    const vowels = ['a', 'e', 'i', 'o', 'u'];

     // check for all vowels present
     const checkVowerlsPresent = (substring)=>{
        let checkString = substring.join('');
        // checking for consonants
        let check = checkString.match(/[^aeiou]/gi);
        if(check === null){
            if(vowels.every((singleVowel)=> substring.includes(singleVowel))){
                countSubs++;
            }
        }
     }
    // generate substrings
    for(let i = 0; i < wordArray.length; i++){
        for(let j = i + 1; j <= wordArray.length; j++){
            let substring = wordArray.slice(i , j);
            checkVowerlsPresent(substring);
        }
    }
    return countSubs;

}
//console.log(countVowelSubstring("cuaieuouac"))

const firstUniqChar = (s)=>{
    const sArray = s.split('');
    let minIndex = Infinity;
    let stringHash = {};
    let arraySingle = [];

    // find occurence
    for(let i = 0; i < sArray.length; i++){
        if(stringHash[sArray[i]]){
           stringHash[sArray[i]]++; 
        }else{
            stringHash[sArray[i]] = 1;
        }
    }
    for(const [key, value] of Object.entries(stringHash)){
        if(value === 1){
            arraySingle.push(key);
        }
    }
    for(let i= 0; i < arraySingle.length; i++){
        if(sArray.includes(arraySingle[i])){
            const index = sArray.indexOf(arraySingle[i]);
            minIndex = Math.min(minIndex, index);
        }
    }

    return minIndex === Infinity ? -1 : minIndex;
}

//console.log(firstUniqChar("leetcode"))

const largestGoodInteger = (num)=>{
    const numArray = num.split('');
    let collectionSet = [];
    let tempString = '';
    for(let i = 0; i < numArray.length; i++){
        if(numArray[i] === numArray[i + 1] && numArray[i + 1] === numArray[i + 2]){
            collectionSet.push(numArray[i]);
        }else{
            continue;
        }
        if(numArray[i + 2] === undefined){
            break;
        }
    }
    let largestNumber = Math.max(...collectionSet);
    if(largestNumber === -Infinity){
        return '';
    }
    for(let i = 0; i < 3; i++){
        tempString += largestNumber;
    }
    return tempString

};

//console.log(largestGoodInteger("42352338"))
// applyied using the euclidian algorithm
const gcdOfStrings = (str1, str2)=>{
    console.log(str1, str2);
    if (str1 + str2 != str2 + str1){ // Check whether or not a GCD is possible, first
        return "";
    } else if (str1 == str2){
        return str1;
    } else if (str1.length > str2.length){
        return gcdOfStrings(str1.slice(str2.length), str2);
    } else {
        return gcdOfStrings(str2.slice(str1.length), str1);
    }

}

//console.log(gcdOfStrings( "ABABAB", "AB"));

const canBeTypedWords = (text, brokenLetters) => {
    let wordCount = 0;
    const textArray = text.split(' ');
    const brokenLettersArray = brokenLetters.split('');

    for(let i = 0; i < textArray.length; i++){
        if(brokenLettersArray.some((brokenLetter)=> textArray[i].includes(brokenLetter))){
            continue;
        }else{
            wordCount++;
        }
    }

    return wordCount;
}

//console.log(canBeTypedWords("hello world", "ad"))
var countSegments = function(s) {
    const sArray = s.split(' ');
   const stack = [];
   if(s === ''){
       return 0;
   }
   if(sArray.every((single)=> single === '')){
       return 0;
   }
   for(let i = 0; i < sArray.length; i++){
       if(sArray[i] !== ''){
           stack.push(sArray[i]);
       }
   }
   return stack.length;
};


const mostCommonWord = (paragraph, banned)=>{
    const pArray = paragraph.split('');
    const stack = [];
    let max = -Infinity;
    // check alpha
    const checkChar = (char)=>{
        if(typeof char !== 'string'){
            return false;
        };
        return /^[a-zA-Z]+$/.test(char);
    }
    // cleaning para
    let word = '';
    for(let i = 0; i < pArray.length; i++){
        if(checkChar(pArray[i])){
           word += pArray[i].toLowerCase();
        }
        if(!checkChar(pArray[i]) || i === pArray.length - 1){
            stack.push(word);
            word = '';
        }
        
    }
    // remove the banned words
    let cleanedArray = [];
    for(let i = 0; i < stack.length; i++){
        if(!banned.includes(stack[i])){
            cleanedArray.push(stack[i]);
        }
    }
    let finalCleanedArray = cleanedArray.filter((val)=> val !== '');
    let wordHash = {};
    for(let i = 0; i < finalCleanedArray.length; i++){
        if(wordHash[finalCleanedArray[i]]){
            wordHash[finalCleanedArray[i]]++;
        }else{
            wordHash[finalCleanedArray[i]] = 1;
        }
    }
    for(const [key, val] of Object.entries(wordHash)){
        max = Math.max(val, max);
    }
    let result = Object.keys(wordHash).filter(keyVal => wordHash[keyVal] === max);
    return result.join('');
}

//console.log(mostCommonWord("Bob",
//]));

const findSpeciaInteger = (arr)=>{
    if(arr.length === 1){
        return arr[0];
    }
    const totalLen = arr.length;
    let quarterValue = totalLen / 4;
    let arrayHash = {};
    for(let i = 0; i < arr.length; i++){
        if(arrayHash[arr[i]]){
            arrayHash[arr[i]]++;
        }else{
            arrayHash[arr[i]] = 1;
        }
    }
    // finding the special integer
    for(const [key, value] of Object.entries(arrayHash)){
        if(value > quarterValue){
            return parseFloat(key);
        }
    }

}
//console.log(findSpeciaInteger([1,2,3,3]));


const giveCandies = (candies, num_people)=>{
    let finalArray = [];
    // [1,2,3,1];
    let candyCounter = 1;
    let tempIndex = 0;
    while(candies > 0){
        if(candyCounter < candies){
            if(finalArray[tempIndex] === undefined){
                finalArray[tempIndex] = 0;
            }
            finalArray[tempIndex] += candyCounter;
            candies -= candyCounter;
        }else{
            // when candycounter exceeds candies
            if(finalArray[tempIndex] === undefined){
                finalArray[tempIndex] = 0;
            }
            finalArray[tempIndex] += candies;
            candies = 0;
        }
        tempIndex++;
        candyCounter++;
        if(tempIndex === num_people) tempIndex = 0;
    }

    // incase in sufficient candies and more people edge case
    if(finalArray.length !== num_people){
        let remainingPersons = num_people - finalArray.length;
        for(let i = 0; i < remainingPersons; i++){
            finalArray.push(0);
        }
    }
    return finalArray;
}

//console.log(giveCandies(600, 40));


// three odd numbers in a row
const threeConsequtiveOdds = (arr)=>{
    let check = false;
    const checkOdd = (num)=> num % 2 === 1;
    for(let i = 0; i < arr.length; i++){
        if(checkOdd(arr[i]) && checkOdd(arr[i + 1]) && checkOdd(arr[i + 2])){
            check = true;
            break;
        }
        check = false;
    }
    return check;
};

//console.log(threeConsequtiveOdds([1,2,34,3,4,5,7,23,12]));

const findNumbers = (nums)=>{
    let counter = 0;
    const checkEven = (num)=> num % 2 === 0;
    for(let i = 0; i < nums.length; i++){
        if(checkEven(nums[i].toString().length)){
            counter++;
        }
    }
    return counter;
}

//console.log(findNumbers([12,345,2,6,7896]));

const checkAlmostEquivalent = (word1, word2)=>{ 
    const word1Array = word1.split('');
    const word2Array = word2.split('');
    let wordHash = {};
    let wordHash2 = {};

    for(let i = 0; i < word1Array.length; i++){
        if(wordHash[word1Array[i]]){
            wordHash[word1Array[i]]++;
        }else{
            wordHash[word1Array[i]] = 1;
        }
    }
    for(let i = 0; i < word2Array.length; i++){
        if(wordHash2[word2Array[i]]){
            wordHash2[word2Array[i]]++;
        }else{
            wordHash2[word2Array[i]] = 1;
        }
    }
    for(let i = 0; i < word2Array.length; i++){
        if(wordHash[word2Array[i]]){
            wordHash[word2Array[i]]--;
        }
    }
    for(let i = 0; i < word1Array.length; i++){
        if(wordHash2[word1Array[i]]){
            wordHash2[word1Array[i]]--;
        }
    }
    for(const [key, value] of Object.entries(wordHash)){
        if(value > 3){
            return false;
        }
    }
    for(const [key, value] of Object.entries(wordHash2)){
        if(value > 3){
            return false;
        }
    }
    return true;
}

//console.log(checkAlmostEquivalent("aaaa", "bccb"))

const countCommonWords = (words1, words2)=>{
    let hash = {};
    let hash2 = {};
    let counter = 0;
    for(let i = 0; i < words1.length; i++){
        if(hash[words1[i]]){
            hash[words1[i]]++;
        }else{
            hash[words1[i]] = 1;
        }
    }
   for(let i = 0; i < words2.length; i++){
        if(hash2[words2[i]]){
            hash2[words2[i]]++;
        }else{
            hash2[words2[i]] = 1;
        }
   }
   for(const [key, value] of Object.entries(hash)){
        if((hash[key] === hash2[key]) && value === 1){
            counter++;
        }
   }
    return counter;
}
//console.log(countCommonWords(["leetcode","is","amazing","as","is"],
//["amazing","leetcode","is"]))


const addToArrayForm = (num, k)=>{
    let kConvert = Array.from(String(k), Number);
    let sum = 0; 
    let carry = 0;
    let result = [];

    let numLen = num.length -1;
    let kLen = kConvert.length - 1;

    // getting the longer array
    let longer = numLen > kLen ? numLen : kLen;

    while(numLen >= 0 || kLen >= 0){
        // will populate with 0 if number not available in order to create equal length
        let num1 = num[numLen] || 0;
        let num2 = kConvert[kLen] || 0;
        sum = num1 + num2 + carry;

        // populating carry
        carry = sum >= 10 ? 1: 0;

        // updating the resultant array
        result[longer] = sum % 10; // adding from the end index
    
        longer--;
        numLen--;
        kLen--;
    }
    // in the case the carry increases the finalArray digit count;
    if(carry !== 0){
        result.unshift(1);
    }

   return result;
}
//console.log(addToArrayForm([2,1,5], 806));

const maxProdThreeNumbers = (nums)=>{
    const numsSorted = nums.sort((a, b)=> a - b);
    let maxProd = -Infinity;
    let productOne = 1;
    let prodTwo = 1;
    // checking the last three from the end and the first two from the right;
    for(let i = numsSorted.length - 1; i >= numsSorted.length - 3; i--){
        productOne = productOne * numsSorted[i];
        console.log(productOne);
    }
    prodTwo = numsSorted[0] * numsSorted[1] * numsSorted[numsSorted.length - 1];
    return maxProd = Math.max(prodTwo, productOne);

}
//console.log(maxProdThreeNumbers(
//[//1,2,3,4]));


const toGoatLatin = (sentence)=>{
    const sentenceArray = sentence.split(' ');
    const vowels = ['a','e','i','o','u'];
    const aVal = 'a';
    let aCollection = [];

    for(let i = 0; i < sentenceArray.length; i++){
        let stringVal = sentenceArray[i].split('');
        if(vowels.includes(stringVal[0].toLowerCase())){
            stringVal.push('m');
            stringVal.push('a');
            sentenceArray[i] = stringVal.join('');
        }else{
            let firstLetter = stringVal[0];
            stringVal.shift();
            // append the first letter to the end
            stringVal.push(firstLetter);
            stringVal.push('m');
            stringVal.push('a');
            sentenceArray[i] = stringVal.join('');
        }
        aCollection.push(aVal.repeat(i + 1));
    }
    // adding the collection of a
    for(let i = 0; i < aCollection.length; i++){
        let sentenceVal = sentenceArray[i].split('');
        sentenceVal.push(aCollection[i]);
        sentenceArray[i] = sentenceVal.join('');
    }
    // final output
    return sentenceArray.join(' ');
};

//console.log(toGoatLatin("I speak Goat Latin"))

// return the third largest number
const thirdMax = (nums)=>{
    let thirdMax;
    if(nums.length < 3){
        return Math.max(...nums);
    }
    let max = Math.max(...nums);
    let newArray = nums.filter((num)=> num !== max)
    let secondMax = Math.max(...newArray);
    
    let secondArray = newArray.filter((num)=> num !== secondMax);
    thirdMax = Math.max(...secondArray);
    
    return thirdMax === -Infinity ? max: thirdMax;

}
//console.log(thirdMax([1,1,2]))

//["0->2","4->5","7"]
const summaryRanges = (nums)=>{
    const rangeMark = '->';
    const stack = [];
    if(nums.length === 0){
        return stack;
    }
    if(nums.length === 1){
        return nums.map((val)=>val.toString());
    }
    let index = 0;
    let secondIndex = 1;
    let firstString = nums[0].toString();
    // calculate for range
    while(index < nums.length - 1 || secondIndex === undefined){
        let range = '';
        if(nums[secondIndex] - nums[index] === 1){
            index++
            secondIndex++
            // last range when there is no gap
            if(index === nums.length - 1 && nums[index] - nums[index - 1] === 1){
                range += firstString + rangeMark + nums[index].toString();
                stack.push(range);
            }
        }else{
            // edge case for the single numbers
            if(firstString === nums[index].toString()){
                stack.push(firstString);
            }else{
                range += firstString + rangeMark + nums[index].toString();
                stack.push(range);
            }
            index++;
            firstString = nums[index].toString();
            secondIndex++

        }
        if(index === nums.length - 1 && nums[index] - nums[index - 1] !== 1){
            range = '';
            range += nums[index].toString();
            stack.push(range);
            break;
        }
    }
    return stack;

}
//console.log(summaryRanges([0,1,2,3,5,7,8]))


// important 
const minOperations = (s)=>{
    const sArray = s.split(''); 
    // alternate versions
    let zeroVersion = [];
    let oneVersion = [];
    let alternate = false;
    let alternate2 = false;
    let stepCounter = 0;
    let stepCounterTwo = 0;
    let minCounter = Infinity;

    // possible final strings;
    for(let i = 0; i < sArray.length; i++){
        if(alternate){
            zeroVersion.push('1');
        }else{
            zeroVersion.push('0')
        }
        alternate = !alternate;
    }
    for(let i = 0; i < sArray.length; i++){
        if(!alternate2){
            oneVersion.push('1');
        }else{
            oneVersion.push('0')
        }
        alternate2 = !alternate2;
    }

    // edge case for values that are already alternating 
    let edgeArray = [];
    for(let i = 0; i < sArray.length; i++){
        if(sArray[i] === '1'){
            edgeArray.push('0')
        }else{
            edgeArray.push('1')
        }
    }
    if(zeroVersion.join('') === edgeArray.join('') || oneVersion.join('') === edgeArray.join('')){
        return 0;
    }
    for(let i = 0; i < sArray.length; i++){
        if(zeroVersion[i] !== sArray[i]){
            stepCounter++
        }
    }
    for(let i = 0; i < sArray.length; i++){
        if(oneVersion[i] !== sArray[i]){
            stepCounterTwo++
        }
    }
    return minCounter = Math.min(stepCounter, stepCounterTwo);
}

//console.log(minOperations(
   // "101101111"))



   // important
const countCharacters = (words, chars)=>{
    const charArray = chars.split('');
    let wordListArray = [];
    let charHash = {}
    for(let i = 0; i < charArray.length; i++){
        if(charHash[charArray[i]]){
            charHash[charArray[i]]++
        }else{
            charHash[charArray[i]] = 1;
        }
    }
    // word form check
    let index = 0;
    while(index < words.length){
        let singleWord = words[index].split('');
        let string = '';
        let hash = {...charHash};
        for(let i = 0; i < singleWord.length; i++){
           if(hash[singleWord[i]] && hash[singleWord[i]] > 0){
              string += singleWord[i];
              hash[singleWord[i]]--;
           }else{
                string = '';
                break;
           }
        }
        wordListArray.push(string);
        index++
    }
    let totalLength = 0;
    totalLength = wordListArray.filter((word)=> word !== '').map((singleWord)=> totalLength += singleWord.length);
   return Math.max(...totalLength) === -Infinity ? 0: Math.max(...totalLength);
}
//console.log(countCharacters(["hello","world","leetcode"],
//"welldonehoneyr"))

// checking whether the two arrays are equal or not after shuffling the substrings
const canBeEqual = (target, arr)=>{
    let check = true;

    // for repeated numbers
    let newTarget = target.sort((a, b)=> a-b);
    let newArr = arr.sort((a, b)=> a - b);

    for(let i = 0; i < newTarget.length; i++){
        if(newTarget[i] !== newArr[i]){
            check = false;
            break;
        }
    }
    
    return check;

}

//console.log(canBeEqual([1,2,2,3],
  //  [1,1,2,3]))


// finding the length of the longest palindrome
const longestPalindrome = (s)=>{
    const sArray = s.split('');
    if(sArray.length === 1){
        return 1;
    }
    if(sArray.every((element)=> element === sArray[0])){
        return sArray.length;
    }
    let palLength = 0;
    let palindrome = '';
    let palHash = {}
    for(let char in s){
        if(palHash[s[char]]){
            palHash[s[char]]++
        }else{
            palHash[s[char]] = 1
        }
    }
    console.log(palHash);
    let isOddOccurence = false;
    // palindrom logic... letter occurence should be present on both sides and divisble by 2
    for (let char in palHash){
        if(palHash[char] % 2 > 0){
            isOddOccurence = true;
        }
        palLength += Math.floor(palHash[char] / 2) * 2
    }
    return isOddOccurence ? palLength + 1: palLength;

}
//console.log(longestPalindrome(
  //  "abccccdd"))


// have to find the longest substring between two equal chars
const maxLengthBetweenEqualCharacters = (s)=>{
    const array = s.split('');
    if(array.length === 2){
        return 0;
    }
    if(array.length === 1){
        return 1;
    }
    let indexArray = [];
    let substrings = [];
    for(let i = 0; i < array.length; i++){
        for(let j = i + 1; j < array.length; j++){
            if(array[i] === array[j]){
                if(j - i > 1){
                    indexArray.push({i, j})
                }
            }
        }
    }
    // now to check for the substrings
    let maxLength = -Infinity;
    for(let i = 0; i < indexArray.length; i++){
        let singleSubstring = s.substring(indexArray[i].i + 1, indexArray[i].j);
        substrings.push(singleSubstring);
    }
    for(let subIndex in substrings){
        maxLength = Math.max(maxLength, substrings[subIndex].length);
    }
    return maxLength === -Infinity ? -1: maxLength;
}
//console.log(maxLengthBetweenEqualCharacters("dabcad"));



// checking if the character occurences equal or not

const artOccurencesEqual = (s)=>{
    const sArray = s.split('');
    let hash = {};
    for(let i = 0; i < sArray.length; i++){
        hash[sArray[i]] ? hash[sArray[i]]++ : hash[sArray[i]] = 1;
    }
    const checkVal = hash[sArray[0]];
    let check = false;
    for(const [key, val] of Object.entries(hash)){
        if(val === checkVal){
            check = true;
        }else {
            check = false;
            break;
        }
    }
    return check;
}

//console.log(artOccurencesEqual("aaabb"))


// check whether a number is there and its same number

const specialArray = (nums)=>{
    let numLength = nums.length;
    // x can be maximum up to the length of the total number of digits
    for(let x = 0; x <= numLength; x++){
       let lenCounter = x;
       let checkArray = [];
       for(let j = 0; j < nums.length; j++){
            if(nums[j] >= x){
                checkArray.push(nums[j]);
            }
       }
       if(checkArray.length === lenCounter){
            return x;
       }
    }
    return -1;
}

//console.log(specialArray([0,4,3,0,4]));


// check if the one number is the double of another in an array

const checkIfExist = (arr)=>{
    let check = false;
    let hash = {}
    let counter = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === 0){
            counter++;
        }
        if(counter === 2){
            return true;
        }
    }
    for(let i = 0; i < arr.length; i++){
        hash[arr[i]] = arr[i];
    }
    for(let i = 0; i < arr.length; i++){
        let target = Math.floor(arr[i] / 2);
        if(hash[target]){
            check = true;
            break;
        }
    }
    return check;

}

//console.log(checkIfExist([2,3,3,0,0]));

const constructRectangle = (area)=>{
    // return the combination of LW array
    let parameters = [];
    let width;
    let len;
    let finalParameter;

    // getting the factors
    for(let i = 1; i <= area; i++){
        const tempVal = area % i;
        if(tempVal === 0){
            parameters.push(i);
        }
    }
    // making the len and width combinations
    for(let i = 0; i < parameters.length; i++){
        let val = parameters[i];
        if(val <= Math.sqrt(area)){
            width = val;
        }
        if(val >= Math.sqrt(area)){
            len = val;
        }
        if((width * len) === area){
            let params = [len, width];
            finalParameter = params;
        }
    }


    return finalParameter;
}

//console.log(constructRectangle(37));

const backSpaceCompare = (s, t)=>{
    const sArray = s.split('');
    const tArray = t.split('');

    // removing from the first string
   let newArray = backSpaceRemoval(sArray);
   let newArray2 = backSpaceRemoval(tArray);
   //let newArray2 =  backSpaceRemoval(tArray);

   if(newArray.join('') === newArray2.join('')){
    return true;
   }else{
    return false;
   }

}
const backSpaceRemoval = (array)=>{
    const stack = [];
    for(let i = 0; i < array.length; i++){
        if(array[i] !== '#'){
            stack.push(array[i]);
            console.log(stack);
        }else{
            stack.pop();
        }
    }
    return stack;
}

//console.log(backSpaceCompare("ab#c",
//"ad#c"));

// student sandwich distributiony

const countStudents = (students, sandwiches)=>{
    console.log('students',students, 'sand',sandwiches);
    if(students.length !== sandwiches.length){
        return;
    }
    while(true){
        if(students.length === 0 || sandwiches.length === 0){
            break;
        }
        if(!students.includes(0) && sandwiches[0] === 0 || !students.includes(1) && sandwiches[0] === 1){
            break;
        }
        if(students[0] === sandwiches[0]){
            students.shift();
            sandwiches.shift();
        }else{
            let val = students[0];
            students.shift();
            students.push(val);
        }
        console.log(students, sandwiches);
    }
    return students.length;
}

//console.log(countStudents(
   // [0,0,0,1,1,1,1,0,0,0],
   // [1,0,1,0,0,1,1,0,0,0]))

const removeElementTwo = (nums, val)=> {
    for (var i=0; i<nums.length; i++) {
        if (nums[i] == val) {
            nums.splice(i,1);
            i--;
        }
    }
    return nums.length
};

//console.log(removeElementTwo([3,2,2,3]))


// tickets are the total array of tickets and k represents the position 
const timeRequiredToBuy = (tickets, k)=>{
    console.log(tickets);
    let timeTracker = 0;

    // get all the times
    while(tickets[k] > 0){
        for(let i = 0; i < tickets.length; i++){
            if(tickets[k] === 0){
                break;
            }
            if(tickets[i] !== 0){
                tickets[i] -= 1;
            }else{
                continue;
            }
            timeTracker++;
            console.log(tickets, timeTracker);
        }
    }
    return timeTracker;
}

//console.log(timeRequiredToBuy([5,1,1,1], 0));



// highest and lowest.. k is the number of pair of students


// algorithm required dynamic programming =sliding window solution
const minimumDifference = (nums, k)=>{
    let minDifference = Infinity;
    let sortedArray = nums.sort((a, b)=> a - b);
    console.log(sortedArray);

    for(let i = k - 1; i < nums.length; i++){
        // dynamic programming algo technique
        let tempDifference = nums[i] - nums[i - k + 1];
        console.log(tempDifference);
    }

}
// checking iteration
// i = 1; tempDiffernce = 4 - nums[1 - 2 + 1]

//console.log(minimumDifference([9,4,1,7],2));


// removing adjacent anagrams
const removeAnagrams = (words)=>{
    // edge case
    if(words.length === 1){
        return words;
    }
    const checkAnagram = (word1, word2)=>{
        let hash = {};
        if(word1.length !== word2.length){
            return;
        }
        for(let i = 0; i < word1.length; i++){
            hash[word1[i]] ? hash[word1[i]]++ : hash[word1[i]] = 1;
        }
        for(let i = 0; i < word2.length; i++){
            if(!hash[word2[i]] || hash[word2[i]] < 0){
                return false;
            }else{
                hash[word2[i]]--;
            }
        }
        return true;
    }
    for(let i = 1; i < words.length ; i++){
        if(checkAnagram(words[i - 1], words[i])){
            let index = i;
            words.splice(index, 1);
            i = 0
        }
    }
    return words;
};

//console.log(removeAnagrams(["abba","baba","bbaa","cd","cd"]))

const maximumUnits = (boxTypes, truckSize)=>{
    let sortedArray = boxTypes.sort((a, b)=> b[1] - a[1]);
    // calculating the maximum number of total units
    let totalUnits = 0;
    let truckEquivalent = 0;
    for(let i = 0; i < sortedArray.length; i++){
        let type = sortedArray[i][0];
        let units = sortedArray[i][1];
        let total = type * units;
        totalUnits += total;
        truckEquivalent += type;
        if(truckEquivalent > truckSize){
            let extraUnits = (truckEquivalent - truckSize) * units;
            totalUnits -= extraUnits;
            break;
        }
        if(truckEquivalent === truckSize){
            break;
        }
       
    }
    return totalUnits;
}
//console.log(maximumUnits([[5,10],[2,5],[4,7],[3,9]], 10));


// to find the pivot index where the number sum is equal and splits between two indices
// but note it ignores the selected index
const pivotIndex = (nums)=>{
    if(nums.length < 1 || nums.length > 10000){
        return;
    }
    console.log(nums);
    let pivotIndex = 0;
    // brute force way
    for(let i = 0; i < nums.length; i++){
        let sum1 = 0;
        let sum2 = 0;
        // getting the two arrays from both sides of the indices
        let arrayRight = nums.slice(i + 1, nums.length);
        let arrayLeft = nums.slice(0, i);
        console.log('left', arrayLeft, 'right', arrayRight);


         sum1 = arrayRight.length === 0 ? 0 :arrayRight.reduce((acc, total)=> total + acc);
         sum2 = arrayLeft.length === 0 ? 0 : arrayLeft.reduce((acc, total)=> total + acc);

        console.log('right',sum1, 'left', sum2);

        if(sum1 === sum2){
            pivotIndex = i;
            break;
        }else{
            pivotIndex = -1;
        }

    }


    return pivotIndex;

}
//console.log(pivotIndex([1,2,3]));


const pivoteIndexOn = (nums)=>{
    let rightSum = 0; 
    let leftSum = 0;
    let pivot = 0;
    for(let i = 0; i < nums.length; i++){
        rightSum += nums[i];
    }
    for(let i = 0; i < nums.length; i++){
        rightSum -= nums[i];

        if(leftSum === rightSum){
            return i;
        }
        leftSum += nums[i];
    }
    return -1;
}

//console.log(pivoteIndexOn([1,2,3]));

// checking whether the number is palindrome or not without converting it to a string
const palindromeNumber = (x)=>{
    console.log(x);
    if(x === 0){
        return 0;
    }
    
    let temp = x;
    let final = 0;

    while(x > 0){
        let rem = x % 10;
        x = parseInt(x /10);
        final = final * 10 + rem;

        if(final === temp){
            return true;
        }
    }

    return false;
}

//console.log(palindromeNumber(123));


// long pressed name to check whether there is any repeated letters or not
const isLongPressedName = (name, typed)=>{
    // making letter groups for comparison
    const makeGroups = (word) =>{
        let str = '';
        let array = [];
        for(let i = 0; i < word.length; i++){
            str += word[i];
            if(word[i] !== word[i + 1]){
                array.push([str, str.length]);
                str = '';
            }
        }
        return array
    }

    let nameGrouped = makeGroups(name);
    let typedGrouped = makeGroups(typed);

    const nameArray = name.split('');
    const typeArray = typed.split('');

    for(let i = 0; i < nameArray.length; i++){
        if(!typeArray.includes(nameArray[i])){
            return false;
        }
    }
    // edge case
    if(nameGrouped.length !== typedGrouped.length) return false;
    const len = nameGrouped.length;
    // checking whether the typed letter missed the original letter or not
    for(let i = 0; i < len; i++){
        let nameSet = new Set(nameGrouped[i][0]);
        let typeSet = new Set(typedGrouped[i][0]);

        const nameFirst = [...nameSet][0];
        const typeFirst = [...typeSet][0];

        if(nameFirst !== typeFirst) return false;
        
        if(nameGrouped[i][1] > typedGrouped[i][1]){
            return false;
        }
    }
    return true;
}



//console.log(isLongPressedName('saeed', 'ssaaedd'));


// returning all the substrings that are present in all the strings of the word
const stringMatching = (words)=>{
    let finalArray = []; 
    const checkSubstring = (word, array)=>{
        let substring = '';
        for(let i = 0; i < array.length; i++){
            if(array[i].indexOf(word) !== -1){
                substring = word;
            }
        }
        return substring;
    }
    for(let i = 0; i < words.length; i++){
        let array = [];
        let word = words[i];
        array = words.filter((singleWord)=> singleWord !== word);
        finalArray.push(checkSubstring(word, array));
    }
    return finalArray.filter((element)=> element !== '');
}
//console.log(stringMatching(["mass","as","hero","superhero"]));



// Minimum subsequence in non-decreasing order
const minSubsequence = (nums)=>{
    nums.sort((a, b)=> b - a);
    // edge case for single length
    if(nums.length === 1){
        return nums;
    }
    // edge case for two same element
    if(nums[0] === nums[1] && nums.length === 2){
        return nums;
    }
    const getSum = (arr)=>{
        return arr.reduce((acc, total)=> acc + total);
    }
    let index = 1;
    const stack = [];
    stack.push(nums[0]);
    while(index < nums.length){
        let array = nums.slice(index, nums.length);
        if(getSum(stack) > getSum(array)){
            return stack;
        }else{
            stack.push(nums[index]);
        }
        index++;
    }
};

//console.log(minSubsequence([8, 8]));



// returning the last remaining stone
const lastStoneWeight = (stones)=>{
    let sortedStones = [...stones];
    // sorting on every turn
    const resort = (array)=>{
        return array.sort((a, b)=> a - b);
    }
    for(let i = 0; i < sortedStones.length ; i++){
        resort(sortedStones);
        let max = sortedStones[sortedStones.length - 1];
        let second = sortedStones[sortedStones.length - 2];
        let value = Math.abs(max - second);

        // edge case
      if(sortedStones.every((element)=>element === sortedStones[0]) && sortedStones.length % 2 === 1){
            return [sortedStones[0]];
        }else if(sortedStones.every((element)=>element === sortedStones[0]) && sortedStones.length % 2 === 0){
            return [0];
        }
        if(value === 0){
            sortedStones.splice(sortedStones.length - 1);
            sortedStones.splice(sortedStones.length - 1);         
            i = 0;
        }

        if(sortedStones[i] === max){
            sortedStones[i - 1] = value;
            sortedStones.splice(i, 1);
            i = 0;
        }
            if(sortedStones.length === 2){
            return [Math.abs(sortedStones[0] - sortedStones[1])];
        }
    }   
    
    return sortedStones.filter((element)=> !isNaN(element));
}

//console.log(lastStoneWeight(

   // [2,4,1,4,1,7,3,8]))


// number of available captures of the roo

    // check for captures
const numberOfAvailableCaptures = (array) =>{
        const rook = 'R';
        const bishop = 'B';
        const pawn = 'p';
        const emptySquare = '.';
        // extractions
        let boardRowArray;
        let boardColArray;
    
        // captures
        let captureCounter = 0;
    
        // check for captures
        const calculateCaptures = (array) =>{
            let rookIndex = array.indexOf(rook);
            let firstPart = array.slice(0, rookIndex);
            let secondPart = array.slice(rookIndex + 1, array.length);
    
             for(let i = firstPart.length - 1; i >= 0 ; i--){
                if(firstPart[i] === emptySquare){
                    continue;
                }
                if(firstPart[i] === bishop){
                    break;
                }
                if(firstPart[i] === pawn){
                    captureCounter++;
                    break;
                }
            }
            // secondPart
            for(let i = 0; i < secondPart.length; i++){
                if(secondPart[i] === emptySquare){
                    continue;
                }
                if(secondPart[i] === bishop){
                    break
                }
                if(secondPart[i] === pawn){
                    captureCounter++;
                    break;
                }
            }
        }
    
        // locate the rook
        for(let i = 0; i < board.length; i++){
            let boardRow = board[i];
            for(let j = 0; j < boardRow.length; j++){
                if(board[i][j] === rook){
                    // extract the row and column
                    boardRowArray = boardRow;
                    boardColArray = board.map((data)=> data[j]);
                }
            }
        }
        // getting the captures
        calculateCaptures(boardRowArray);
        calculateCaptures(boardColArray);
    
        return captureCounter;


}

//console.log(numberOfAvailableCaptures([[".",".",".",".",".",".",".","."],[".",".",".","p",".",".",".","."],[".",".",".","R",".",".",".","p"],[".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".","."],[".",".",".","p",".",".",".","."],[".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".","."]]));


// equality in top left to bottom right diagonals
const isToeplitzMatrix = (matrix)=>{
    console.log(matrix);
    for(let i = 0; i < matrix.length; i++){
        let row = matrix[i];
        for(let j = 0; j < row.length; j++){
            // edge case 1
            if(i === 0 || j === 0){
                continue;
            }
            if(matrix[i][j] !== matrix[i - 1][j - 1]){
               return false;
            }
        }
    }

    return true;
}

//console.log(isToeplitzMatrix([[1,2,3,4],[5,1,2,3],[9,5,1,2]]))


// finding the max subsequence with the highest sum
const maxSubsequence = (nums, k)=>{
    let array = nums.slice().sort((a, b)=> b - a);
    let hash = {};
    let final = [];
    for(let i = 0; i < k; i++){
        if(hash[array[i]]){
            hash[array[i]]++
        }else{
            hash[array[i]] = 1;
        }
    }
    // checking with the main nums along with the hash tag
    for(const num of nums){
        if(hash[num]){
            final.push(num);
            hash[num]--;
        }
    }
    return final;
}

// console.log(maxSubsequence(

// capitalise the title
const capitaliseTitle = (title) =>{
    const array = title.split(' ');
    let finalString = '';
    for(let i = 0; i < array.length; i++){
        // for words with 2 letters or three
        if(array[i].length < 3){
            let smallWord = array[i].toLowerCase();
            array.splice(i, 1, smallWord);
        }
        // for the remaining word length
        if(array[i].length >= 3 ){
            let firstLetter = array[i][0].toUpperCase();
            let arrayWord = array[i].split('');
            let word = arrayWord.map((letter, index)=> {
                if(index !== 0){
                    return letter.toLowerCase();
                }
            })
            word.unshift(firstLetter);
            array.splice(i, 1 , word.join(''));
        }
    }
    for(let i = 0; i < array.length; i++){
        if(i === array.length - 1){
            finalString += array[i];
        }else{
            finalString += array[i] + ' '
        }
    }
    return finalString;
}

//console.log(capitaliseTitle("i lOve leetcode"))


const reverseYoi = (array)=>{
    console.log(array);
    const len = array.length;
    
    const forApproach = ()=>{
        for(let i = 0; i < len / 2; i++){
            console.log(i);
            let tempVariable = array[i]; // t is being stored
            array[i] = array[len - 1 - i]; // t becomes m
            array[len - 1 - i] = tempVariable
        }
    }
    const whileApproach = ()=>{
        let index = 0;
        while(index < len / 2){
            let temp = array[index];
            array[index] = array[len - 1 - index];
            array[len - 1 - index] = temp;
            index++;
        }
    }
    // while
    return array;
}

//console.log(reverseYoi(['t','h','o','k','c','h','o','m']));


const basicNumberPattern = (size)=>{
    let finalString = '';
    for(let i = 1; i <= size; i++){
        for(let j = 1; j <= i; j++){
            finalString += i;
        }
        finalString += '\n';
    }
    return finalString
}
//console.log(basicNumberPattern(5));


// maximum possible sum of an ascending subarray
const maxAscendingSum = (nums)=>{
    console.log(nums);
    let maxSum = -Infinity;
    let finalStack = [];
    let tempStack = [];
    if(nums.length === 1){
        return nums;
    }
    // checking for max range
    for(let index = 1; index < nums.length; index++){
        if(nums[index] === nums[index - 1]){
            finalStack.push(tempStack);
            tempStack = [];
        }
        if(nums[index] > nums[index - 1] && index === 1){
            tempStack.push(nums[index - 1]);
        }
        if(nums[index] < nums[index - 1]){
            finalStack.push(tempStack);
            tempStack = [];
        }
        if(nums[index] < nums[index - 1] && index === 1){
            tempStack.push(nums[index - 1]);
            finalStack.push(tempStack);
            tempStack = [];
        }
        if(index === nums.length - 1){
            tempStack.push(nums[nums.length - 1]);
            finalStack.push(tempStack);
            tempStack = []
        }
        tempStack.push(nums[index]);
    }
    for(let i = 0; i < finalStack.length; i++){
        if(finalStack[i].length === 0){
            continue;
        }
        maxSum = Math.max(finalStack[i].reduce((acc, total)=> acc + total), maxSum)
    }
    return maxSum;
}

//console.log(maxAscendingSum(

   // [100,10,1]))


const maxAscendingSumAlternate = (nums)=>{
    let sum = nums[0];
    let sumArray = [];
    for(let i = 0; i < nums.length; i++){
        if(nums[i] < nums[i + 1]){
            sum += nums[i + 1];
        }else{
            sumArray.push(sum);
            sum = nums[i + 1];
        }
    }
    return Math.max(...sumArray);
}

//console.log(maxAscendingSumAlternate([12,17,15,13,10,11,12]));

// getting the max product of the elements after deducting one from each of the elements
const maxProduct = (nums)=>{
    let prod = -Infinity;
    // subsequence not subarray
    for(let i = 0; i < nums.length; i++){
        for(let j = i + 1; j < nums.length; j++){
            let first = nums[i] - 1;
            let second = nums[j] - 1;
            prod = Math.max(first * second, prod);
        }
    }
    return prod;
}

//console.log(maxProduct([1,5,4,5]));


// large consequtive groups for similar letters
const largeGroupPositions = (s)=>{
    const sArray = s.split('');
    let finalRanges = [];
    let singleRange = [];
    let checkCounter = 1;
    let initialLetter = sArray[0];
    // edge case for single letter
    if(sArray.length < 3){
        return [];
    }
    // edge case when all the letters are equal
    if(sArray.every((letter)=> letter === sArray[0]) && sArray.length >= 3){
        singleRange.push(sArray.length - 1);
        singleRange.unshift(0);
        finalRanges.push(singleRange);
        return finalRanges;
    }

    let copyArray = [...sArray];
    copyArray.push('');
    // need to find consequtive occurence
    for(let i = 1; i < copyArray.length; i++){
        if(copyArray[i] !== initialLetter){
            if(checkCounter >= 3){
                let lastIndex = i - 1;
                singleRange.push(lastIndex); // injecting the last index
                let firstIndex = (lastIndex - checkCounter) + 1;
                singleRange.unshift(firstIndex === -1 ? 0 : firstIndex);
                finalRanges.push(singleRange);
            }
            initialLetter = copyArray[i];
            singleRange = [];
            checkCounter = 1;
        }else{
            checkCounter++;
        }
    }
    return finalRanges;
}

//console.log(largeGroupPositions(
  //  "abbxxxxzzy"));



const targetIndices = (nums, target)=>{
    let indexArray = [];
    let newArray = nums.sort((a, b)=> a - b);


    for(let i = 0; i < newArray.length; i++){
        if(newArray[i] === target){
            indexArray.push(i);
        }
    }

    return indexArray;
}
//console.log(targetIndices([1,2,5,2,3], 2));


// game to remove stones
const canWinNim = (n)=>{

   return n % 4 ? true: false
}

//console.log(canWinNim(1));

// swapping the letters in order to make it equal to target
const buddyString = (s, goal)=>{
    const sArray = s.split('');
    let sCopy = [...sArray];
    if(sCopy.length !== goal.length){
        return false;
    }
    // case 1 when the string are the same and not swappable
    if(s === goal){
        let hash = {};
        // double tilda represent double NOT bitwise operations
        for(let c of s){
            hash[c] ? hash[c]++ : hash[c] = 1;
        }
        for(let c in hash){
            if(hash[c] > 1){
                return true;
            }
        }
        return false;
    }
    // final case of the other letters
    let indexes = [];
    for(let i = 0; i < sCopy.length; i++){
        if(sCopy[i] !== goal[i]){
            indexes.push(i);
        }
    }
    if(indexes.length > 2){
        return false;
    }
    if(sCopy[indexes[0]] === goal[indexes[1]] && sCopy[indexes[1]] === goal[indexes[0]]){
        return true;
    }else{
        return false;
    }

}
//console.log(buddyString("abcd","badc"));

// problem to reorder spaces in the list of words while making sure that there is atleast equal number of spaces betweent the words

const reorderSpaces = (text)=>{
    let spaceCounter = 0;
    let wordCounter = 0;
    let extraSpaces = 0;
    let finalString = '';

    console.log(text.split(' '));

    if(text.length === 1){
        return text;
    }

    // let output = "practice   makes   perfect ";
    // console.log('output', output.split(' '));

    for(let i = 0; i < text.length; i++){
        if(text[i] === ' '){
            spaceCounter++;
        }
    }
    let stringArray = text.split(' ');
    for(let index in stringArray){
        if(stringArray[index] !== ''){
            wordCounter++;
        }
    }
    let neededSpaces = spaceCounter / ((wordCounter === 1 ? 2 : wordCounter) - 1);
    extraSpaces = Number.isInteger(neededSpaces) ? 0 : 1;
    let spacesBetweenWords = Math.floor(neededSpaces);

    console.log('spaceBetween', spacesBetweenWords, 'extra',extraSpaces);

    // time to set the spaces between the words
    let newArray = [];
    for(let i = 0; i < stringArray.length; i++){
        if(stringArray[i] !== ''){
            newArray.push(stringArray[i]);
        }
    }
    if(newArray.length === 1){
         return finalString += newArray[newArray.length - 1] + (" ").repeat(spacesBetweenWords);
    }
    // populating spaces
    for(let i = 0; i < newArray.length; i++){
        if(i === newArray.length - 1){
            finalString += newArray[i];
            break;
        }
        finalString += newArray[i] + (" ").repeat(spacesBetweenWords);
    }
    if(extraSpaces > 0){
        finalString += (" ").repeat(extraSpaces);
    }
    console.log(finalString.split(' '));
    return finalString;
}

//console.log(reorderSpaces(
   
//"a b   c d"))


const reorderSpaceNew = (text)=>{
    console.log(text);
    let arr = text.split(' ');
    let totalSpace = arr.length - 1;
    arr = arr.filter((element=> element !== ''));
    console.log(totalSpace);
    let spaceBetween = arr.length > 1 ? Math.floor(totalSpace / (arr.length - 1)): 0;
    let spaceLeftOver = arr.length > 1 ?
    totalSpace % (arr.length-1) : totalSpace;
    console.log('spaceleft', spaceLeftOver);
    console.log('spacebetween', spaceBetween);
    console.log(arr);
    let final = (arr.join(" ".repeat(spaceBetween)) + " ".repeat(spaceLeftOver));
    console.log(final.split(' '));
    console.log(final);
}

//console.log(reorderSpaceNew("  this   is  a sentence "));



const distanceBetweenBusStops = (distance, start, destination)=>{
    console.log(distance, 'start', start, 'destination:', destination);
    // two approaches clockwise and anti clockwise
    let clockWiseDistance = 0;
    let antiClockWiseDistance = 0;
    let finalDistance = Infinity;

    // clock wise result - redistribution of array based on start
    let clockWiseArray = distance.slice(start, distance.length);
    let beforeStartElements = distance.slice(0, start);
    for(let index in beforeStartElements){
        clockWiseArray.push(beforeStartElements[index]);
    }
    console.log('clockWise',clockWiseArray);

    for(let i = 0; i < clockWiseArray.length; i++){
       clockWiseDistance += clockWiseArray[i + 1];
       if(i === destination - 1){
        break;
       } 
    }

    // anti clockwise version of the array
    let antiClockWiseArray = distance.slice(0, start + 1);

    let afterStartElements = distance.slice(start + 1, distance.length);
    for(let i = afterStartElements.length - 1; i >= 0; i--){
        antiClockWiseArray.unshift(afterStartElements[i]);
    }
    console.log('antiClockwise',antiClockWiseArray);
    
    for(let i = antiClockWiseArray.length - 1; i >= 0; i--){
        antiClockWiseDistance += antiClockWiseArray[i - 1];
        if(i === destination){
            break;
        }
    }

    console.log('anti', antiClockWiseDistance, 'clock', clockWiseDistance)

    finalDistance = Math.min(antiClockWiseDistance, clockWiseDistance);
    return finalDistance;
}

//console.log(distanceBetweenBusStops([1,2,3,4], 0, 2));


const distanceBetweenBusStopsNew = (distance, start, destination)=>{
    // two approaches clockwise and anti clockwise
    let clockWiseDistance = 0;
    let antiClockWiseDistance = 0;
    let finalDistance = Infinity;
    let index = 0;
    let clockArray = [];
    let antiClockArray = [];

    // clockwise;
    while(index < distance.length){
        let arraySegment = [];
        if(index === start){
            if(start > destination){
                let secondSegment = [];
                arraySegment = distance.slice(start, distance.length);
                secondSegment = distance.slice(0, destination);
                clockArray = [...arraySegment, ...secondSegment];
            }else{
                arraySegment = distance.slice(start, destination);
                clockArray = [...arraySegment];
            }
        }
        index++;
    }
    // anti clock wise
    let antiIndex = distance.length - 1;
    while (antiIndex > 0){
        let localArraySegment = [];
        if(start === 0){
            localArraySegment = distance.slice(destination, distance.length);
            antiClockArray = [...localArraySegment];
            break;
        }
        if(antiIndex === start){
            if(destination > start){
                let secondSegment = [];
                localArraySegment = distance.slice(0, start);
                secondSegment = distance.slice(destination, distance.length);
                antiClockArray = [...localArraySegment, ...secondSegment];
            }else{
                localArraySegment = distance.slice(destination, start);
                antiClockArray = [...localArraySegment];
            }
            
        }
        antiIndex--;
    }
    clockWiseDistance = clockArray.reduce((acc, total)=> acc + total);
    antiClockWiseDistance = antiClockArray.reduce((acc, total)=> acc + total);
    finalDistance = Math.min(antiClockWiseDistance, clockWiseDistance);

    return finalDistance;

}

//console.log(distanceBetweenBusStopsNew([14,21,8,35,30,21,28,19,10,25,16,23,14,13,0,3,30,9], 12, 3));


// arranging array frequency according to their occurences

const frequencySort = (nums)=>{
    const stack = [];
    let arrayHash = {};
    for(let i = 0; i < nums.length; i++){
        if(arrayHash[nums[i]]){
            arrayHash[nums[i]]++;
        }else{
            arrayHash[nums[i]] = 1;
        }
    }
    // sorting object keys in order of the values
    let sortedObject = Object.keys(arrayHash).sort((a, b)=>{
        if(arrayHash[a] === arrayHash[b]){
            return b - a;
        }else{
            return arrayHash[a] - arrayHash[b];
        }
    });
    // populating stack;
    for(let item of sortedObject){
        for(let i = 0; i < arrayHash[item]; i++){
            stack.push(parseInt(item));
        }
    }
    return stack;
}

//console.log(frequencySort([1,1,2,2,2,3]));



// Occurences after Bigram
const biagramOccurences = (text, first, second)=>{
    const array = text.split(' ');
    const stack = [];
    console.log(array);
    // getting the first and second character after the third
    for(let i = 0; i < array.length; i++){
        if(array[i] === first){
            if(array[i + 1] === second){
                stack.push(array[i + 2]);
            }
        }
    }
    return stack.filter((element)=> element !== undefined);
}

//console.log(biagramOccurences("alice is a good girl she is a good student","a","good"))


// deleting the unsorted columns
const minDeletionSize = (strs)=>{
    let sortedColCount = 0;
    let grid = [];
    // creating the matrix in order to extract the columns
    for(let i = 0; i < strs.length; i++){
        let singleRow = [];
        for(let j = 0; j < strs[i].length; j++){
            singleRow.push(strs[i][j]);
        }
        grid.push(singleRow);
    }
    let colIndex = 0;
    let tempColumn = [];
    let index = 0;
    // checking equal column jointed strings in order to increase the delete count
    const checkColumn = (col)=>{
        let copyCol = [...col];
        col.sort();
        if(copyCol.join('') !== col.join('')){
            sortedColCount++;
        }
    }
    // generating columns for individual matrices
    while(index < grid.length){
        tempColumn.push(grid[index][colIndex]);
        index++;
        // getting the columns
        if(index === grid.length){
            checkColumn(tempColumn);
            tempColumn = [];
            index = 0;
            colIndex++;
        }
        if(colIndex === grid[0].length){
            break;
        }
    }
    return sortedColCount;

}

//console.log(minDeletionSize(
    //["rrjk","furt","guzm"]))


// return average salary

const average = (salary)=>{ 
    let max = -Infinity;
    let min = Infinity;

    max = Math.max(...salary);
    min = Math.min(...salary);

    let maxFilter = salary.filter((val)=> val !== max);
    let finalFilter = maxFilter.filter((val)=> val !== min);
    
    // getting the average
    let total = finalFilter.reduce((a, c)=> a + c);
    let average = 0;
    
    return average = total / finalFilter.length;

}

//console.log(average([4000,3000,1000,2000]));

const subtractProductAndSum = (n)=>{
    const array = n.toString().split('');
    let sum = array.reduce((a, c)=> parseInt(a) + parseInt(c));
    let prod = array.reduce((a, c)=> parseInt(a) * parseInt(c));
    return prod - sum;
}

//console.log(subtractProductAndSum(234))


const mergeAlternatively = (word1, word2)=>{
    // for two cases one for equal and one for not equal
    let finalString = '';
    if(word1.length === word2.length){
        for(let i = 0; i < word1.length; i++){
            finalString += word1[i];
            finalString += word2[i];
        }
    }else{
        // check which is smaller
        if(word1.length < word2.length){
            let newWord2 = word2.slice(0, word1.length);
            let remainingWord2 = word2.slice(word1.length, word2.length);
            for(let i = 0; i < word1.length; i++){
                finalString += word1[i];
                finalString += newWord2[i];
            }
            finalString += remainingWord2;
        }else{
            let newWord1 = word1.slice(0, word2.length);
            let remainingWord1 = word1.slice(word2.length, word1.length);
            for(let i = 0; i < word2.length; i++){
                finalString += newWord1[i];
                finalString += word2[i];
            }
            finalString += remainingWord1;
        }
    }
    return finalString;
}

//console.log(mergeAlternatively('abc','pqr'));



// repeated character
const repeatedCharacter = (s)=>{
    const array = s.split('');
    console.log(array);
    // check which appears twice
    let indexArray = [];
    
    // for(let i = 0; i < array.length; i++){
    //     if(indexArray.some((element)=> element.value === array[i])){
    //         indexArray.map((element)=>
    //             element.value === array[i] ? {...element, index: element.index.push(i)}: element
    //         )
    //     }else{
    //         indexArray.push({value: array[i], index: [i]});
    //     }
    // }
    // let newIndexArray = indexArray.filter((element)=> element.index.length > 1);

    // for(let i = 0; i < newIndexArray.length; i++){
    //     console.log(newIndexArray[i]);

    // }

    // set approach

    let set = new Set();

    for(let index in array){
        if(set.has(array[index])){
            return array[index]
        }else{
            set.add(array[index]);
        }
    }
}

//console.log(repeatedCharacter("abccbaacz"))

const numberOfPairs = (nums)=>{
    let pairCount = 0;
    let leftOverCount = 0;
    let index = 0;
    let hash = {};

    // edge case
    if(nums.length === 1){
        return [0, 1]
    }
    // do something 
    while(index < nums.length){
        hash[nums[index]] ? hash[nums[index]]++ : hash[nums[index]] = 1;
        index++;
    }
    let evenIndexes = 0;
    for(const [_, value] of Object.entries(hash)){
        if(value % 2 === 0){
            evenIndexes += value;
        }else{
           // odd
           if(value > 1){
            let temp = Math.floor(value / 2);
            pairCount += temp;
           }
           let remainder = value % 2;
           leftOverCount += remainder;
        }
    }
    pairCount += evenIndexes / 2;
    return [pairCount, leftOverCount];
}

//console.log(numberOfPairs(
    //[89,5,7,36,5,85,83,77,56,44,90,27,56,100,67,27,61,18,29,15,44,11,81,83,38,58,14,46,23,70,63,76,75,69,21,88,7,3,28,2,28,89,32,43,9,93,21,63,76,45,13,94,16,85,16,52,46,7,60,50,69,4,82,81,57,11,14,38,78,27,45,3,12,14,95,71,72,40,27,82,66,99,7,23,84,66,7,3,56,38,43,37,4,90,85,80,54,42,67,2]))


// calculate the digit sum of a string and group em in the size of K
// leetcode 2243
const calculateDigitSum = (s, k)=>{
    if(s.length === k){
        return s;
    };
    if(s.length < k){
        return s;
    }
    const array = s.split('');

    let string = arrayGrouping(array, k);
    if(string.length <= k){
        return string;
    }else{
        return calculateDigitSum(string, k);
    }

}
const arrayGrouping = (array, k)=>{
    let index = 0;
    let groups = [];
    let singleGroup = [];
    let groupIndex = 0;
    while(index < array.length){
        let sum;
        singleGroup.push(array[index]);
        groupIndex++;
        if(index === array.length - 1){
            sum = singleGroup.reduce((a, b)=> parseInt(a) + parseInt(b));
            groups.push(sum.toString());
            break;
        }
        if(groupIndex === k){
            sum = singleGroup.reduce((a, b)=> parseInt(a) + parseInt(b));
            groups.push(sum.toString());
            singleGroup = [];
            groupIndex = 0;
        }
        index++
    }
    return groups.join('');
}


//console.log(calculateDigitSum(
  //  "01234567890", 100));



// number after reversal should be the same
const isSomeAfterReversal = (num)=>{
    const numArray = num.toString().split(''); // number can be also divided without digit conversion
    if(numArray.length === 1){
        return true;
    }
    let final = [];
    let reverseVersion = [];
    // note reversing can also be done with the inbuilt reverse funciton but for loop approach is better in terms of speed of the code
    for(let i = numArray.length - 1; i >= 0; i--){
        reverseVersion.push(numArray[i]);
    } 
    // boolean value is used for intial zero filteration
    let zeroCheck = true;
    for(let i = 0; i < reverseVersion.length; i++){
        if(zeroCheck && parseInt(reverseVersion[i]) === 0){
            continue; // skipped when there is boolean and value is changed to true
        }else{
            zeroCheck = false;
            final.push(reverseVersion[i]);
        }
   
    }
    return final.length === numArray.length ? true : false;
}
//console.log(isSomeAfterReversal(18));


const maxProductDifference = (nums)=>{
    // my bad i see now
    // edge case 1
    if(nums.every((element)=> element === nums[0])){
        return 0;
    }
    // subarashi....
    let maxProduct = -Infinity;
    let minProduct = Infinity;
    let max1 = Math.max(...nums);
    let index1 = nums.indexOf(max1);
    let newMaxArray = [...nums];
    newMaxArray.splice(index1, 1);
    let max2 = Math.max(...newMaxArray);
    // maxProduct = max1 * max2;
    maxProduct = max2 * max1;
    // min time baby
    let min1 = Math.min(...nums);
    let index2 = nums.indexOf(min1);
    let newMinArray = [...nums];
    newMinArray.splice(index2, 1);
    let min2 = Math.min(...newMinArray);

    minProduct = min1 * min2;

    return maxProduct - minProduct;
}

//console.log(maxProductDifference(
//[2,9,5,9,1]))


// leetcode 2148
// finding elements that have strictly larger and smaller elements
const countElements = (nums)=>{
    let elementCounter = 0;
    let minElement = Math.min(...nums);
    let maxElement = Math.max(...nums);

    for(let i = 0; i < nums.length ; i++){
        let value = nums[i];
        if(value === minElement || value === maxElement){
            continue;
        }
        elementCounter++;
    }

    return elementCounter;
}
//console.log(countElements([11,7,2,15]));


// leetcode bank 1716

const totalMoney = (n)=>{
    let totalMoney = 0;
    const array = Array.from(Array(n), (_, index)=> index + 1); // making an array of length
    let weekCounter = 0;
    let totalDays = n;
    let dayCounter = 0;

    for(let i = 0; i < array.length; i++){
        totalMoney += array[i];
        totalDays--;
        dayCounter++;
        if(totalDays === 0){
            break;
        }
        if(dayCounter === 7){
            if(totalDays === 0){
                break;
            }
            weekCounter += 1;
            i = weekCounter - 1;
            dayCounter = 0;
            continue;
        }
    }
    return totalMoney;
}

//console.log(totalMoney(20));

// max distance between two differently colored houses

const maxDistance = (colors)=>{
    let maxDistance = -Infinity;
    for(let i = 0; i < colors.length; i++){
        for(let j = i + 1; j < colors.length; j++){
            if(colors[i] !== colors[j]){
                maxDistance = Math.max(maxDistance, Math.abs(i - j));
            }
        }
    }
    return maxDistance;
}

//console.log(maxDistance([1,1,1,6,1,1,1]));

// leetcode  2180
// gotta return sum of digits as even
const countEven = (num)=>{
    let counter = 0;
    let array = Array.from(Array(num), (_,element)=>element + 1);
    const checkSum = (digits)=>{
        const digitArray = digits.toString().split('');
        const sum = digitArray.length === 1 ? parseInt(digitArray[0]) : 
        digitArray.reduce((a, b)=> parseInt(a) + parseInt(b));
        if(sum % 2 === 0){
            return true;
        }else{
            return false;
        }
    }
    for(let i = 0; i < array.length; i++){
        if(checkSum(array[i])){
            counter++;
        }else{
            continue;
        }
    }
    return counter;
}

//console.log(countEven(30));

// leetcode 2124
// return true if all the a come before b
const checkStringRepeat = (s)=>{
    let array = s.split('');
    let counter = 0;
    // edge case for all characters equal to b 
    if(array.every((element)=> element === array[0])){
        return true;
    }
    for(let i = 0; i < array.length; i++){
        if(array[i] === 'a'){
            counter++;
        }
    }
    let newArray = array.slice(0, counter);
    if(newArray.every((element)=> element === 'a')){
        return true;
    }else{
        return false;
    }
}

//console.log(checkStringRepeat("abab"))


const reversePrefix = (word, ch)=>{
    const wordArray = word.split('');
    let occurence = word.indexOf(ch);
    let subArray = wordArray.slice(0, occurence + 1).reverse();
    let remainingArray = wordArray.slice(occurence + 1, wordArray.length);
    
    return subArray.join('') + remainingArray.join('')
}   

//console.log(reversePrefix("abcdefd", "d"));


const rearrangeCharacters = (s, target)=>{
    let targetHash = {};
    let wordCounter = 0;
    const targetArray = target.split('');
    for(let index in targetArray){
        if(targetHash[targetArray[index]]){
            targetHash[targetArray[index]]++;
        }else{
            targetHash[targetArray[index]] = 0;
        }
    }
    const array = s.split('');
    // hash population
    for(let i = 0; i < array.length; i++){
        if(array[i] in targetHash){
            targetHash[array[i]]++;
        }
    }
    // checking how many target words one can make
    let stringCollection = [];
    while(targetHash[target[0]] !== 0){
        let tempString = '';
        for(let i = 0; i < targetArray.length ; i++){
            if(targetHash[targetArray[i]]){
                tempString += targetArray[i];
                targetHash[targetArray[i]]--;
            }
        }
        stringCollection.push(tempString);
    }
    for(let i = 0; i < stringCollection.length; i++){
        if(stringCollection[i] === target){
            wordCounter++;
        }
    }
    return wordCounter;
}

//console.log(rearrangeCharacters("abcba", "abc"));

// to find good substrings with distinct letters
const countGoodSubstrings = (s)=>{
    const array = s.split('');
    let counter = 0;
    let collection = [];
    for(let i = 0; i < array.length; i++){
        let substring = array.slice(i, 3 + i);
        if(substring.length === 3){
            collection.push(substring);
        }
    }
    // getting distinct substring
    for(let i = 0; i < collection.length; i++){
        let arraySet = Array.from(new Set([...collection[i]]));
        if(arraySet.length === 3){
            counter++;
        }
    }
    return counter;
}

//console.log(countGoodSubstrings("aababcabc"));

// note j index has to be bigger
const maximumDifference = (nums)=>{
    let difference = 0;
    for(let i = 0; i < nums.length; i++){
        for(let j = i + 1; j < nums.length; j++){
            if(nums[j] > nums[i]){
                difference = Math.max(difference, Math.abs(nums[i] - nums[j]));
            }
        }
    }
    return difference === 0 ? -1: difference;
}

//console.log(maximumDifference([7,1,5,4]));


// leetcode 2027

const minimumMoves = (s)=>{
    const array = s.split('');
    if(array.length === 3){
        return 1;
    }
    if(array.every((element)=> element === 'O')){
        return 0;
    }
    // only three chars can be selected at once
    let turnCounter = 0;
    for(let i = 0; i < array.length; i++){
        if(array[i] === 'X'){
            turnCounter++;
            i += 2;
        }
    }
    return turnCounter;
}

//console.log(minimumMoves("XXOX0X"))


// special column in a binary matrix

const numSpecial = (mat)=>{
    let counter = 0;
    for(let i = 0; i < mat.length; i++){
        for(let j = 0; j < mat[i].length; j++){
            if(mat[i][j]=== 1){
                // do something
                let sumRow = mat[i].reduce((a, current)=> a + current);
                let col = mat.map((array)=> array[j]);
                let sumCol = col.reduce((a, current)=> a + current);
                if(sumCol === 1 && sumRow === 1){
                    counter++;
                }
            } 
        }
    }
    return counter;
}

//console.log(numSpecial([[0,0,1],[0,1,0],[0,0,1]]))


const destCity = (paths)=>{
    // unique city meaning there is no outward path going to any other city other than the individual city
    let pathCollection = [];
    for(let i = 0; i < paths.length; i++){
        let row = paths[i];
        for(let j = 0; j < row.length; j++){
            pathCollection.push(paths[i][j]);
        }
    }
    let pathHash = {};
    for(let i = 0; i < pathCollection.length; i++){
        pathHash[pathCollection[i]] ? pathHash[pathCollection[i]]++ : pathHash[pathCollection[i]] = 1;
    }
    let singlePaths = [];
    for(const [key, value] of Object.entries(pathHash)){
        if(value === 1){
            singlePaths.push(key);
        }
    }
    // rechecking the matrix
    for(let i = 0; i < paths.length; i++){
        for(let j = 0; j < paths[i].length; j++){
            if(singlePaths.includes(paths[i][j]) && j === paths[i].length - 1){
                return paths[i][j];
            }
        }
    }
}
//console.log(destCity([["pYyNGfBYbm","wxAscRuzOl"],["kzwEQHfwce","pYyNGfBYbm"]]))


// longest continuous sequence of 1 should be bigger than 0
const checkZeroOnes = (s)=>{
    const array = s.split('');
    let oneSubcounter = 0;
    let zeroSubcounter = 0;
    // max values of the sub counter
    let maxOneSubcounter = -Infinity;
    let maxZeroSubcounter = -Infinity;
    array.push(''); // to end the countering till the end of the last element
    for(let i = 0; i < array.length; i++){
        if(array[i] === '1'){
            oneSubcounter++;
        }else{
            maxOneSubcounter = Math.max(maxOneSubcounter, oneSubcounter);
            oneSubcounter = 0;
        }
        if(array[i] === '0'){
            zeroSubcounter++;
        }else{
            maxZeroSubcounter = Math.max(maxZeroSubcounter, zeroSubcounter);
            zeroSubcounter = 0;
        }
    }
    return maxOneSubcounter > maxZeroSubcounter ? true: false;
}

//console.log(checkZeroOnes("111000"));


// leetcode 2259 - remove digit to maximize the sum

const removeDigit = (number, digit)=>{
    const array = number.split('');
    let maxNum = '';
    const checkRemainingNumber = (number)=>{
        //note strings can be compared to even though they are number strings
        if(number > maxNum){
            maxNum = number;
        }
    };
    for(let i = 0; i < array.length; i++){
        let segmentOne;
        let segmentTwo;
        let segment;
        if(array[i] === digit){
            if(i === 0){
                segment = array.slice(1, array.length);
                
            }else if(i === array.length - 1){
                segment = array.slice(0, array.length - 1);
            }else{
                segmentOne = array.slice(0, i);
                segmentTwo = array.slice(i + 1, array.length);
                segment = [...segmentOne, ...segmentTwo];
            }
            checkRemainingNumber(segment.join(''));
        }
    }
    return maxNum;
}

//console.log(removeDigit("5855919731999967729162624993368963937138395448528343754118382247464456496439695553669381787948269168", "8"))

// number of strings that appear as substring

const numOfStrings = (patterns, word)=>{
    let subCounter = 0;
    for(let i = 0; i < patterns.length; i++){
       if(word.includes(patterns[i])){
            subCounter++;
       }
    }
    return subCounter;
}

//console.log(numOfStrings(
 //  ["a","b","c"], "aaaaabbbbb"))


 const shortestToChar = (s, c)=>{
    const array = s.split('');
    let finalArray = [];
    let indexes = [];
    let minVal = Infinity;
    let closeIndexes = [];

    for(let i = 0; i < array.length; i++){
        if(array[i] === c){
            indexes.push(i);
        }
    }
    for(let i = 0; i < indexes.length; i++){
        // checking through eveyr letter to check proximal indexes
        let singleCombo = [];
        for(let j = 0; j < array.length; j++){
            let singleIndex = Math.abs(indexes[i] - j);
            singleCombo.push(singleIndex);
        }
        finalArray.push(singleCombo);
    }
    // get the smallest of indexes from the collection of matrices
    for(let i = 0; i < finalArray.length; i++){
        let singleRow = finalArray[i];
        for(let j = 0; j < singleRow.length; j++){
            if(i === 0){
                let column = finalArray.map((row)=> row[j]);
                minVal = Math.min(...column);
                closeIndexes.push(minVal);
            }else{
                break;
            }
        }
    }
    return closeIndexes;
 }

 //console.log(shortestToChar("loveleetcode", "e"));
 //[3,2,1,0,1,0,0,1,2,2,1,0]

 // recursive find multiple values
 const findFinalValue = (nums, original)=>{
    if(nums.includes(original)){
        return findFinalValue(nums, original * 2);
    }else{
        return original;
    }

 }
 //console.log(findFinalValue([5,3,6,1,12], 3));

 // count hills and valleys
 const countHillValley = (nums)=>{
    let valleyHillCounter = 0;
    // look for number clusters and removing em
    const stack = [];
    for(let i = 0; i < nums.length; i++){
        if(nums[i] === nums[i + 1]){
            continue;
        }else{
            stack.push(nums[i]);
        }
    }
    for(let i = 0; i < stack.length; i++){
        if(i === 0 || i === stack.length - 1){
            continue;
        } 
        if(stack[i - 1] < stack[i] && stack[i + 1] < stack[i]){
            valleyHillCounter++;
        }
        if(stack[i - 1] > stack[i] && stack[i + 1] > stack[i]){
            valleyHillCounter++;
        }
    }
    return valleyHillCounter;

 }

 //console.log(countHillValley([2,4,1,1,1,1,6,5]));


 // shortest distance to char

 const shortestDistanceToChar = (s, c)=>{
    const array = s.split('');
    let eIndexes = [];
    let finalArray = [];
    let matrix = [];
    for(let i = 0; i < array.length; i++){
        if(array[i] === c){
            eIndexes.push(i);
        }
    }
    const checkPartition = (array, index)=>{
        let tempArray = [];
        for(let i = 0; i < array.length; i++){
            tempArray.push(Math.abs(index - i));
        }
        matrix.push(tempArray);
    }
    let index = 0;
    for(let i = 0; i < array.length; i++){
        if(eIndexes[index] === i){
            checkPartition(array, eIndexes[index]);
            index++;
        }
    }
    for(let i = 0; i < matrix.length; i++){
        for(let j = 0; j < matrix[i].length; j++){
            if(i == 0){
                let col = matrix.map((row)=> row[j]);
                let val = Math.min(...col);
                finalArray.push(val)
            }
        }
    }
    return finalArray;

 }

 //console.log(shortestDistanceToChar("loveleetcode", "e"));


 // alternative way with one for loops

 const altShortestToChar = (s, c)=>{
    const array = s.split('');
    // filling up an empty populated array
    let finalArray = new Array(array.length).fill(null);
    let finalArray2 =  new Array(array.length).fill(null);
    let ultimateArray = [];
    let cIndex = null;
    let cSecondIndex = null;
    let check = false;
    const checkIndex = (index)=>{
        if(array[index] === c){
            check ? cSecondIndex = index : cIndex = index;
        }
        let indexDifference = cIndex === null ? 0 : Math.abs(index - (check ? cSecondIndex : cIndex));
        check ? finalArray2[index] = indexDifference : finalArray[index] = indexDifference;
    }
    // two prong approach... amma attack from both sides
    for(let i = 0; i < array.length; i++){
        checkIndex(i);
    }
    // reverse side
    check = true;
    for(let i = array.length - 1; i >= 0; i--){
        checkIndex(i);
    }
    for(let i = 0; i < finalArray.length; i++){
        if(finalArray[i] === 0 && finalArray2[i] !== 0){
            ultimateArray.push(finalArray2[i]);
        }else{
            ultimateArray.push(Math.min(finalArray[i], finalArray2[i]));
        }
    }
    return ultimateArray;

 }
 // [3,2,1,0,1,0,0,1,2,2,1,0]
 //console.log(altShortestToChar("loveleetcode", "e"));

 const mostFrequent = (nums, key)=>{
    let hash = {};
    for(let i = 0; i < nums.length; i++){
        if(i === 0){
            continue;
        }
        if(nums[i - 1] === key){
            if(hash[nums[i]]){
                hash[nums[i]]++
            }else{
                hash[nums[i]] = 1;
            }
        }
    }
    let vals = Object.values(hash);
    let maxVal = Math.max(...vals);

    for(let [key, value] of Object.entries(hash)){
        if(value === maxVal){
            return parseInt(key);
        }
    }
 }

 //console.log(mostFrequent([2,1000,2,1000,2,3], 2));

 
 // count quadruplets
 const countQuadruplets = (nums)=>{
    let counter = 0;
    for(let i = 0; i < nums.length; i++){
        for(let j = i + 1; j < nums.length; j++){
            for(let k = j + 1 ; k < nums.length; k++){
                for(let h = k + 1; h< nums.length; h++){
                    if(nums[i] + nums[j] + nums[k] === nums[h]){
                        counter++;
                    }
                }
            }
        }
    }
    return counter;
 }

 //console.log(countQuadruplets([9,6,8,23,39,23]));

 
 // find middle index

 const findMiddleIndex = (nums)=>{
    // checking whether the both sides sum are equal or not
    if(nums.length === 1){
        return 0;
    }
    let finalIndex = 0;
    for(let i = 0; i < nums.length; i++){
        let tempIndex;
        tempIndex = i;
        let sumRight = 0;
        let sumLeft = 0;
        // partitions
        let rightPartition = nums[tempIndex + 1] === (null || undefined) ? [0]
        : nums.slice(tempIndex + 1, nums.length);
        let leftPartition = nums[tempIndex - 1] == (null || undefined) ? [0] :
        nums.slice(0, tempIndex);

        // checking the sum
        sumRight = rightPartition.reduce((a, b)=> a + b);
        sumLeft = leftPartition.reduce((a, b)=> a + b);

        if(sumLeft !== sumRight){
            finalIndex = -1;
        }
        // ends when one equal index is discovered
        if(sumLeft === sumRight){
            finalIndex = tempIndex;
            break;
        }
    }
    return finalIndex;
 }

 //console.log(findMiddleIndex([4,0]))


 // work on breaking it down later
 const findRotation = (mat,target)=>{
    console.log(mat, target);
    const matCheck = new Array(4).fill(true);
    for(let i = 0; i < mat.length; i++){
        for(let j = 0; j < mat[i].length; j++){
            if(mat[i][j]!==target[i][j]) matCheck[0]=false;
			if(mat[i][j]!==target[mat[i].length-j-1][i]) matCheck[1]=false;
			if(mat[i][j]!==target[mat[i].length-i-1][mat[i].length-j-1]) matCheck[2]=false;
			if(mat[i][j]!==target[j][mat[i].length-i-1]) matCheck[3]=false;
        }
    }
    if(matCheck.some((el)=> el === true)){
        return true;
    }else{
        return false;
    }
 }
 // 0 != 1 = false,
 // 0 !== 0 = true,
 // 0 !== 0 = true
 // 0 !== 1 false

 //console.log(findRotation([[0,0,0],[0,1,0],[1,1,1]], [[1,1,1],[0,1,0],[0,0,0]]));


 const convertTime = (current, correct)=>{
    let minOperationCounter = 0;
    const currentString = current.split(':');
    let currentTime = currentString.map((time)=> parseInt(time));
    const correctString = correct.split(':');

    let correctTime = correctString.map((time)=> parseInt(time));
    let currentMinutes = (currentTime[0] * 60) + currentTime[1]; 
    let correctMinutes = (correctTime[0] * 60) + correctTime[1];

    while(currentMinutes !== correctMinutes){
        let difference = correctMinutes - currentMinutes;
        if(difference >= 60){
            currentMinutes += 60;
            minOperationCounter++;

        }else if(difference < 60 && difference >= 15){
            currentMinutes += 15;
            minOperationCounter++;

        }else if(difference < 15 && difference >= 5){
            currentMinutes += 5;
            minOperationCounter++;

        }else if(difference < 5 && difference >= 1){
            currentMinutes += 1;
            minOperationCounter++;
        }
    }
    return minOperationCounter;
 }

 //console.log(convertTime("02:30", "04:35"));

 // creating ransom note

 const canConstruct = (ransomNote, magazine)=>{
    let hash = {};
    for(let index in magazine){
        hash[magazine[index]] ? hash[magazine[index]]++ : hash[magazine[index]] = 1;
    }
    for(let i = 0; i < ransomNote.length; i++){
        if(hash[ransomNote[i]]){
            hash[ransomNote[i]]--;
        }else{
            return false;
        }
    }
    return true;
 }

//console.log(canConstruct("aa", "aab"));


// minimum recoloring of black blocks

const minimumRecolors = (blocks, k)=>{
    let array = blocks.split('');
    let minCounter = Infinity;
    if(array.length === 1 && array[0] === 'B'){
        return 0;
    }
    if(array.every((element)=> element === 'W')){
        return k;
    }
    // checking substring
    const checkSub = (arraySub)=>{
        let counter = 0;
        for(let i = 0; i < arraySub.length; i++){
            if(arraySub[i] === 'W'){
                counter++;
            }
        }
        minCounter = Math.min(counter, minCounter);
    }
    // getting substrings
    for(let i = 0; i < array.length; i++){
        for(let j = i + 1; j < array.length; j++){
            let substring = array.slice(i, j + 1);
            if(substring.length === k){
                checkSub(substring);
            }
        }
    }
    return minCounter === Infinity ? 0 : minCounter;
}   

//console.log(minimumRecolors("WW", 1))


const minimumCost = (cost)=>{
    let sortedCandies = cost.sort((a, b)=> b - a);
    let freeCounter = 0;
    let minimumCost = 0;

    for(let i = 0; i < sortedCandies.length; i+=1){
        if(freeCounter === 2){
            freeCounter = 0;
            continue;
        }
        minimumCost += sortedCandies[i];
        freeCounter++;
    }
    return minimumCost;
}

//console.log(minimumCost([6,5,7,9,2,2]);

const luckyNumbers = (matrix)=>{
    console.log(matrix);
    let valueCollection = [];
    // checking the entire matrix
    for(let i = 0; i < matrix.length; i++){
        let row = matrix[i];
        for(let j = 0; j < matrix[i].length; j++){
            const value = matrix[i][j];
            const col = matrix.map((row)=> row[j]);
            const minRowVal = Math.min(...row);
            const maxColVal = Math.max(...col);
            // check
            if(value === minRowVal && value === maxColVal){
                valueCollection.push(value);
            }
            
        }
    }
    return valueCollection;
}

//console.log(luckyNumbers([[3,7,8],[9,11,13],[15,16,17]]));


// find max average value

const findMaxAverage = (nums, k)=>{
    console.log(nums, k);

    let maxSum = -Infinity;
    let index = 0;
    let sum = 0;
    let secondIndex = 0;
    let startingPos = 0;

    while(index < nums.length){
        sum += nums[index];
        secondIndex++;

        if(secondIndex === k){
            maxSum = Math.max(maxSum, sum);
            secondIndex = 0;
            startingPos += 1;
            index = startingPos;
            sum = 0;
        }else{
            index++;
        }
    }

    return maxSum / k;

}

//console.log(findMaxAverage([1,12,-5,-6,50,3], 4));

// valid mountain array using two pass algorthm method


const validMountainArrayModified = (arr)=>{
    let index = 0;
    let count = 1;
    let peak = false;
    let valley = false;

    let finalCheck = true;

    if(arr.length === 1){
        return false;
    }
    while(index < arr.length){
        // edge case 1 if decreasing found at first
        if(arr[index] > arr[index + 1]){
            finalCheck = false;
            break;
        }
        if(arr[index] < arr[index + 1]){
            // increasing peak
            while(index < arr.length && arr[index] < arr[index + 1]){
                index++;
                count++;
                peak = true;
            }
            // decreasing 
            while(index < arr.length && arr[index] > arr[index + 1]){
                index++;
                count++;
                valley = true;
            }
            if(peak && valley && count === arr.length){
                return true;
            }else{
                return false;
            }
        }else{
            index++;
        }
    }
}

// console.log(validMountainArrayModified(
    
// [3,5,5]));


// min operations

const minimumOperations = (nums)=>{
    // unique non zero numbers
    let hash = {};
    for(let i = 0; i < nums.length; i++){
        if(hash[nums[i]]){
            hash[nums[i]]++;
        }else{
            hash[nums[i]] = 1;
        }
    }
    let minOperations = 0;
    for(const [key, value] of Object.entries(hash)){
        if(parseInt(key) !== 0){
           minOperations++;    
        }
    }
    return minOperations;

}

//console.log(minimumOperations([1,5,0,3,5]));


// replacing any character around to find out where they are evenly distributed or not among the arrays
const makeEqual = (words)=>{
    let wordLen = words.length;
    let hash = {};
    for(let i = 0; i < words.length; i++){
        for(let j = 0; j < words[i].length; j++){
            if(hash[words[i][j]]){
                hash[words[i][j]]++;
            }else{
                hash[words[i][j]] = 1;
            }
        }
    }
    let occurenceValues = Object.values(hash);
    if(occurenceValues.every((element)=> element % wordLen === 0)){
        return true;
    }else{
        return false;
    }

}

//console.log(makeEqual(["caaaaa","aaaaaaaaa","a","bbb","bbbbbbbbb","bbb","cc","cccccccccccc","ccccccc","ccccccc","cc","cccc","c","cccccccc","c"]))


const calculateTax = (brackets, income) =>{

}   

//console.log(calculateTax([[1,0],[4,25],[5,50]]));



const minimumAbsDifference = (arr)=>{
    const matrix = [];
    let sortedEl = arr.sort((a, b)=> b - a);
    let minValue = Infinity;
    // checking the absolute differnece for sorted array 
    for(let i = 1; i < sortedEl.length; i++){
        const difference = Math.abs(sortedEl[i] - sortedEl[i - 1]);
        minValue = Math.min(minValue, difference);
    }
    for(let i = 1; i < sortedEl.length; i++){
        let tempArray = [];
        const difference = Math.abs(sortedEl[i] - sortedEl[i - 1]);
        if(difference === minValue){
            tempArray = [sortedEl[i], sortedEl[i - 1]];
        }
        if(tempArray.length !== (undefined||0)){
            matrix.push(tempArray);
        }
    }
    return matrix.reverse();
}

//console.log(minimumAbsDifference([8,-68,-32,-81,83,93,-96,62,-103,-94,-66,74]));


const subOddLengthSubarrays = (arr)=>{
    console.log(arr);
    let total = 0;
    for(let i = 0; i < arr.length; i++){
        for(let j = i; j < arr.length; j++){
            let subArray = arr.slice(i, j + 1);
            if(subArray.length % 2 === 1){
                const sum = subArray.reduce((a, b)=> a+ b);
                total += sum;
            }
        }
    }
    return total;

}

//console.log(subOddLengthSubarrays([1,4,2,5,3]));


const shortestCompletingWord = (licensePlate, words)=>{
    console.log(licensePlate, words);
    let answerCollection = [];
    
    let getLetters = licensePlate.split('').filter((letter)=> isNaN(letter));
    let letters = getLetters.map((letter)=> letter.toLowerCase());

    const checkLetters = (letters, word)=>{
        let letterHash = {};
        for(let index in letters){
            letterHash[letters[index]] ? letterHash[letters[index]]++ : letterHash[letters[index]] = 1; 
        }
        for(let i = 0; i < word.length; i++){
            if(letterHash[word[i]]){
                letterHash[word[i]]--;
            }
        }
        let getKeys = Object.values(letterHash);
        if(getKeys.every((value)=> value === 0)){
            answerCollection.push(word);
        }
    }

    for(let i = 0; i < words.length; i++){
       checkLetters(letters, words[i]);
    }

    console.log(answerCollection);

    let shortestLen = Infinity;
    for(let i = 0; i < answerCollection.length; i++){
        shortestLen = Math.min(answerCollection[i].length, shortestLen);
    }
    let shortestWords = answerCollection.filter((word)=> word.length === shortestLen);
    
    return shortestWords[0];

}

//console.log(shortestCompletingWord("1s3 456", ["looks","pest","stew","show"]));


const containsDuplicateII = (nums, k)=>{
    console.log(nums, k);
    let map = new Map();
    for(let i = 0; i < nums.length; i++){
        if(!map.has(nums[i])){
            map.set(nums[i], i);
        }else{
            if(map.has(nums[i])){
                const storedIndex = map.get(nums[i])
                const difference = Math.abs(i - storedIndex);
                if(difference <= k) return true;
                map.set(nums[i], i);
                console.log(map);
            }
        }
    }
    return false;
}

//console.log(containsDuplicateII([1,2,3,1,0], 3));


const lexicalOrder = (n)=>{
    let array = new Array(n);
    const stack = [];
    for(let i = 1; i <= n ; i++){
        array[i] = i.toString();
        
    }
    // using the single element as a string changes and sorts individual value of the strings
    array.sort().map((element)=> stack.push(Number(element)));
    return stack;

}

//console.log(lexicalOrder(13));


const firstPalindrome = (words)=>{
    const checkForPalindrome = (word)=>{
        let reverseWord = word;
        let reverseVersion = reverseWord.split('').reverse().join('');
        if(reverseVersion === word){
            return true;
        }
    }
    for(let i = 0; i < words.length; i++){
        if(checkForPalindrome(words[i])){
            return words[i];
        }
    }
    return ''
}
//console.log(firstPalindrome(["abc","car","ada","racecar","cool"]));


// next greater element

const nextGreaterElement = (nums1, nums2)=>{
    const stack = [];
    let secondIndex = 0;
    let index = 0;
    while(index < nums2.length){
        if(nums2[index] === nums1[secondIndex]){
            const array = nums2.slice(index, nums2.length);
            let max = array[0];
            for(let i = 1; i < array.length; i++){
                if(max < array[i]){
                    max = array[i];
                    break;
                }
            }
            if(max === array[0]){
                stack.push(-1);
            }else{
                stack.push(max);
            }
            index = 0;
            secondIndex++;
            continue;
        }
        index++;
    }
    return stack;

}

//console.log(nextGreaterElement([1,3,5,2,4],
  //  [6,5,4,3,2,1,7]));


// valid closing parentheses
const validParentheses = (s)=>{
    const stack = [];
    if(s.length === 1){
        return false;
    }
    const hash = {
        ")": "(",
        "]":"[",
        "}":"{"
    }
    for(let i = 0; i < s.length; i++){
       if(hash[s[i]] === undefined){
            stack.push(s[i])
       }else{
            if(stack[stack.length - 1] === hash[s[i]]){
            stack.pop();
        }else{
            return false;
        }
       }
    }
    return stack.length === 0 && true;
}

//console.log(validParentheses(")(){}"))


const merge = (nums1, m, nums2, n)=>{
    const firstPart = nums1.slice(0, m);
    const lastPart = nums2.slice(0, n);
    const stack = [...firstPart, ...lastPart].sort((a, b)=> a - b);
    for(let index in nums1){
        nums1[index] = stack[index];
    }
    return nums1;
}

//console.log(merge([1,2,3,0,0,0], 3, [2,5,6], 3));


const mostFrequentEven = (nums)=>{
    let hash = {};
    let answerCollection = [];
    let maxCheck = -1;
    for(let index in nums){
        if(nums[index] % 2 === 0){
            hash[nums[index]] ? hash[nums[index]]++ : hash[nums[index]] = 1;
        }
    }
    let maxVal = -Infinity;
    for(const [key, value] of Object.entries(hash)){
        if(parseInt(key) % 2 === 0){
            maxVal = Math.max(maxVal, value);
        }
    }
    for(const [key, value] of Object.entries(hash)){
        if(value === maxVal){
            answerCollection.push(parseInt(key));
        }
    }
    return Math.min(...answerCollection) === Infinity ? -1 : Math.min(...answerCollection);

}
//console.log(mostFrequentEven([0,1,2,2,4,4,1]));


const findMaxOnes = (nums)=>{
    let maxOnes = 0;
    let oneCount = 0;

    for(let end = 0; end < nums.length; end++){
        if(nums[end] === 1){
            oneCount++;
        }
        while(nums[end] === 0 || end === nums.length - 1){
          maxOnes = Math.max(oneCount, maxOnes);
          oneCount = 0;
          break;
        }
    }
    return maxOnes;
}

//console.log(findMaxOnes([1,0,1,1,1,1,0,1,1,1,1,1]));


const mostFrequentEvenAlternate = (nums)=>{
    const array = nums.filter((num)=> num % 2 === 0).sort((a,b)=>a - b);
    let tempCount = 0;
    let tempVal = array[0];
    let prevTempCount = 0;
    let returnNumber = -1;
    for(let i = 0; i < array.length; i++){
        if(array[i] === tempVal){
            tempCount++;
        }
        if(array[i] !== tempVal){
            tempCount = 1;
            tempVal = array[i];
        }
        if(tempCount > prevTempCount){
            prevTempCount = tempCount;
            returnNumber = array[i];
        }
    }
    return returnNumber;
    
}
//console.log(mostFrequentEvenAlternate([0,0,1,2,2,2,2,4,4,4,1]));


const findLHS = (nums)=>{
    // map approach with nested loop
    let numMap = new Map();
    for(let index in nums){
        if(numMap.has(nums[index])){
            // increement map if it has
            numMap.set(nums[index], numMap.get(nums[index]) + 1);
        }else{
            numMap.set(nums[index], 1);
        }
    }
    // core logic is to find whether the map or js object contains a key that is 1 higher then the key
    let result = 0;
    numMap.forEach((value, key)=>{
        const min =  numMap.get(key - 1);
        if(min){
            result = Math.max(result, min + value);
        }
    });

    // sortedApproach
    let sortedArray = nums.sort((a, b)=> a - b);
    let right = 1;
    let left = 0;
    const mainDiff = 1;
    // two pointer approach;
    let finalResult = 0;
    while(right < sortedArray.length){
        let difference = sortedArray[right] - sortedArray[left];
        if(difference === mainDiff){
            finalResult = Math.max(finalResult, (right - left) + 1);
        }
        if(difference > mainDiff){
            left++;
        }else{
            right++;
        }
    }
   return finalResult;
}

//console.log(findLHS([1,3,2,2,5,2,3,7]))

// 1 2 2 2 3 3 5 7

// longest altitude

const longestAltitude = (gain)=>{
    const stack = [];
    let difference = gain[0];
    stack.push(difference);
    for(let i = 1; i < gain.length; i++){
        difference += gain[i];
        stack.push(difference)
    }
    stack.unshift(0);
    return Math.max(...stack);
}

//console.log(longestAltitude([-5,1,5,0,-7]))

const lengthOfLastWord = (s)=>{
    const array = s.split('');
    const space = ' ';
    if(array[array.length - 1] !== space){
        array.push(' ');
    };
    const stack = [];
    let result = '';
    for(let index in array){
        if(array[index] === space){
            stack.push(result);
            result = '';
            stack.push('');
        }else {
            if(array[index] !== space){
                result += array[index];
            }
        }
    }
    let newStack = [];
    for(let i = 0; i < stack.length; i++){
        if(stack[i] !== ''){
            newStack.push(stack[i]);
        }
    }
    return newStack[newStack.length - 1].length;
}
//console.log(lengthOfLastWord(
 //   "luffy is still joyboy"));


const bestTimeToBuyStock = (prices)=>{
    let start = 0;
    let end = 1;
    let maxProfit = 0;

    // sliding window technique
    while(end < prices.length){
        // loss is incurred
        while(prices[end] - prices[start] < 0){
            start++;
        }
        maxProfit = Math.max(prices[end] - prices[start], maxProfit);
        end++;
    }
    return maxProfit;
}

//console.log(bestTimeToBuyStock([7,1,5,3,6,4]));

// doing minimum recolors using sliding window technique


const minimumRecolorsSlidingWindow = (blocks, k)=>{
   // console.log(blocks.split(''));    
    // using the sliding window approach in order to convert the letters
    let index = 0;
    let minimumCount = Infinity;
    let start = 0;
    let blockHash = {};
    let tempIndex = 0;
    // setting definite range
    while(tempIndex < k){
        blockHash[blocks[tempIndex]] ? blockHash[blocks[tempIndex]]++ : 
        blockHash[blocks[tempIndex]] = 1;
        minimumCount = blockHash['W'];
        tempIndex++;
    }
    // setting the next range of letter
    index = k;
    while(index < blocks.length){
        if(blockHash[blocks[index]]){
            blockHash[blocks[index]]++
        }else{
            blockHash[blocks[index]] = 1;
        }
        // implementing the sliding mechanism
        if(blockHash[blocks[start]]){
            blockHash[blocks[start]]--;
        }else{
            // works without deleting also
            delete blockHash[blocks[start]];
        }
        start++;
        minimumCount = Math.min(minimumCount, blockHash['W']);
        index++;
    }
    return minimumCount ? minimumCount : 0;
}

//console.log(minimumRecolorsSlidingWindow("WBBWWBBWBW", 7));


const countGoodSubstringsSlidingWindow = (s)=>{
    console.log(s.split(''));

    let goodLength = 3;
    let start = 0;
    let index = 0;
    let counter = 0;
    let tempIndex = 0;
    let hash = {};
    while(tempIndex < goodLength){
        hash[s[tempIndex]] ? hash[s[tempIndex]]++ : hash[s[tempIndex]] = 1;
        tempIndex++;
    }
    const values = Object.values(hash);
    if(values.every((el)=> el === 1)){
        counter = 1;
    }
    index = goodLength;
    // checking range
    const checkHash = (map)=>{
        const values = Object.values(map);
        if(values.some((el)=> el > 1)){
            return false;
        }
        return true;
    }
    while(index < s.length){
        if(hash[s[index]]){
            hash[s[index]]++;
        }else{
            hash[s[index]] = 1;
        }

        if(hash[s[start]] > 1){
            hash[s[start]]--;
        }else{
            delete hash[s[start]];
        }
        start++;
        if(checkHash(hash)){
            counter++;
        }
        index++;
    }
    return counter;

}

//console.log(countGoodSubstringsSlidingWindow("owuxoelszb"));

const maxAverageAlternate = (nums, k)=>{
    let start = 0;
    let tempStart = 0;
    let end = 0;
    let sum = 0;
    let maxAverage = -Infinity;
    while(tempStart < k){
        sum += nums[tempStart];
        tempStart++;
    }
    maxAverage = sum / k;
    end = tempStart;
    let maxSum = -Infinity;
    while(end < nums.length){
        sum -= nums[start];
        start++;
        sum += nums[end];
        maxSum = Math.max(maxSum, sum);
        end++;
    }
    maxAverage = Math.max(maxAverage, maxSum / k)
    return maxAverage
}
//console.log(maxAverageAlternate([-1], 1));


// using sliding window mechanism
const divisorStrings = (num, k)=>{
    const numStringArray = num.toString().split('');
    let startIndex = 0;
    let endIndex = 0;
    let beautyCounter = 0;
    const slice = num % parseInt(numStringArray.slice(0, k).join(''));
    if(slice === 0) beautyCounter++;
    endIndex = k;   
    // checking the rest of the range;
    while(endIndex < numStringArray.length){
        startIndex++;
        const slice = parseInt(numStringArray.slice(startIndex, endIndex + 1).join(''));
        if(num % slice === 0){
            beautyCounter++;
        }
        endIndex++;
    };
    return beautyCounter;
}

//console.log(divisorStrings(430043, 2));


const countPrefixes = (words, s)=>{
    let prefixCounter = 0;
    // using the startswith function approach
    for(let index in words){
        if(s.startsWith(words[index])) prefixCounter++;
    }
    return prefixCounter;

}

//console.log(countPrefixes(["a","b","c","ab","bc","abc"], 'abc'));

const sortArrayByParity = (nums)=>{
    const stack = [];
    for(let index in nums){
        nums[index] % 2 === 0 ? stack.unshift(nums[index]) : stack.push(nums[index]);
    }
    return stack;
}

//console.log(sortArrayByParity([3,1,2,4]));


// finding words on the keyboard row;
const findWords = (words)=>{
    const stack = [];
    let keyHashes = { 'q':1,'w':1,'e':1,'r':1,'t':1,'y':1,'u':1,'i':1,'o':1,'p':1,
                'a':2,'s':2,'d':2,'f':2,'g':2,'h':2,'j':2,'k':2,'l':2,
                'z':3,'x':3,'c':3,'v':3,'b':3,'n':3,'m':3 };
    // traversal through each word
    for(let i = 0; i < words.length; i++){
        let recordHashVal = 0;
        let check = false;
        let singleWord = words[i].toLowerCase();
        for(let j = 0 ; j < singleWord.length; j++){
            if(j === 0 && singleWord[j] in keyHashes){
                recordHashVal = keyHashes[singleWord[j]];
            }
            // checking for val;
            if(recordHashVal !== keyHashes[singleWord[j]]){
                check = false;
                break;
            }else{
                check = true;
            }
        }   
        if(check){
            stack.push(words[i]);
        }
    }
    return stack;

}

//console.log(findWords(["Hello","Alaska","Dad","Peace"]));


const prefixCounter = (words, pref)=>{
    let count = 0;
    for(let index in words){
        if(words[index].startsWith(pref)){
            count++;
        }
    };
    return count;
}

//console.log(prefixCounter(["pay","attention","practice","attend"], 'at'));

const countNegatives = (grid)=>{
  const flatGrid = grid.flat();
  let counter = 0;
  console.log(flatGrid);
flatGrid.filter((singleNum)=> singleNum < 0&& counter++);
return counter;
}

//console.log(countNegatives(
   // [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]));


const moveZeroes = (nums)=>{
    if(nums.every((num)=> num=== 0)){
        return nums;
    }
    let countZero = 0;
    let nonZeroEl = [];
    for(let i = 0; i < nums.length; i++){
        if(nums[i] !== 0){
            nonZeroEl.push(nums[i]);
        }else{
            countZero++;
        }
    }
    for(let i = 0; i < countZero; i++){
        nonZeroEl.push(0);
    };
    for(let i = 0; i < nums.length; i++){
        nums[i] = nonZeroEl[i];
    };
    return nums;
}

//console.log(moveZeroes([1,0,0,0,1]))













































































 





































































































