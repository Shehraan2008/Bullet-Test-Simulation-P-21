function isTouching(spriteOne, spriteTwo) {
  if (
    spriteOne.x - spriteTwo.x < spriteTwo.width / 2 + spriteOne.width / 2 &&
    spriteTwo.x - spriteOne.x < spriteTwo.width / 2 + spriteOne.width / 2 &&
    spriteOne.y - spriteTwo.y < spriteTwo.height / 2 + spriteOne.height / 2 &&
    spriteTwo.y - spriteOne.y < spriteTwo.height / 2 + spriteOne.height / 2
  ) {
    return true;
  } else {
    return false;
  }
}
