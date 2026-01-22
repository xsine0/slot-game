function randomEmojiPicker() {
  // const emojis = [
  //   "🍎",
  //   "🍌",
  //   "🍇",
  //   "🍓",
  //   "🍒",
  //   "🍍",
  //   "🥭",
  //   "🍑",
  //   "🍊",
  //   "🍉",
  //   "🥝",
  //   "🍅",
  //   "🥑",
  //   "🥕",
  //   "🌽",
  //   "🍞",
  //   "🥨",
  //   "🧀",
  //   "🍕",
  //   "🍔",
  // ];
  const emojis = ["🍎", "🍌", "🍉", "🥕"];

  const randIdx = Math.floor(Math.random() * emojis.length);
  const randEmoji = emojis[randIdx];
  return randEmoji;
}

function generateEmojiSlot(numSlots) {
  const slots = new Array(numSlots).fill("");

  for (let i = 0; i < numSlots; i++) {
    const emoji = randomEmojiPicker();
    slots[i] = emoji;
  }
  return slots;
}

function winnigCondition(emojiSlot) {
  return emojiSlot.every((e) => e === emojiSlot[0]);
}

export {generateEmojiSlot, winnigCondition}