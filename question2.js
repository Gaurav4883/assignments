const ourPalindromChecker = (ourString) => {
    ourString = ourString.toLowerCase()

    return ourString === ourString.split('').reverse().join('') ? "Justin Bieber" : "Ed Sheeran"

}

console.log(ourPalindromChecker("abba"))

