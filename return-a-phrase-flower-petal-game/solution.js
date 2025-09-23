function howMuchILoveYou(nbPetals) {
  const phrases = [
    "I love you",
    "a little",
    "a lot",
    "passionately",
    "madly",
    "not at all",
  ];

  if (nbPetals > 6) {
    return phrases[nbPetals - 6 - 1];
  } else {
    return phrases[nbPetals - 1];
  }
}
