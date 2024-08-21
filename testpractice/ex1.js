function lengthOfLogestSubstring(s) {
    let maxLen = 0;
    let longestSubstring = "";
    let start = 0;
    let charSet = new Set();
    for ( let end = 0; end < s.length; end++ ) {
        while (charSet.has(s[end])) {
            charSet.delete(s[start]);
            start++;
        }
        charSet.add(s[end]);
    }
}

// Example usage
console.log(lengthOfLongestSubstring("abcabcbb"));
// Output: { maxLen: 3, longestSubstring: "abc" }

console.log(lengthOfLongestSubstring("bbbbb"));
// Output: { maxLen: 1, longestSubstring: "b" }

console.log(lengthOfLongestSubstring("pwwkew"));
// Output: { maxLen: 3, longestSubstring: "wke" }

console.log(lengthOfLongestSubstring(""));
// Output: { maxLen: 0, longestSubstring: "" }