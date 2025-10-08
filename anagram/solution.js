//Eg: "listen" & "silent"

const isAnagram = (word1, word2) => {
  word1 = word1.trim().toLowerCase();
  word2 = word2.trim().toLowerCase();

  if (word1.length !== word2.length) return false;

  const word1sorted = word1.split("").sort().join("");
  const word2sorted = word2.split("").sort().join("");

  return word1sorted === word2sorted;
};
