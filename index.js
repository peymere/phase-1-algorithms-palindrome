function isPalindrome(word) {
  // Write your algorithm here
  let counter = 0
  let start = 0
  let end = word.length - 1
  while (start < end) {
    console.log(++counter)
    if (word[start] !== word[end]){
      return false
    }  
    start++
    end--
  }
  return true
}

/* 
  Add your pseudocode here
  function isPalindrome(string):{

    if (string is palindrome) {
      if (letter at index x !== corresponding letter)
      return false
    }
    else {
      return true
    }
  }
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
