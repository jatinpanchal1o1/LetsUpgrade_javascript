
s = "Madam Is Walking On Her Father Road"
s = s.toLowerCase() + " "
s1 = "", s2 = ""
for (t of s) {
    if (t != " ") {
        s1 = s1 + t  //to make the same word
        s2 = t + s2  //to reverse a word 
    }
    else {
        if (s1 == s2) {  //check whether the word is a palindrome
          console.log(s1)
        }
        s1 = ""
        s2 = ""
    }
}