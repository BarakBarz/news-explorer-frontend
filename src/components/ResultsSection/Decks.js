const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
const dealerDeck = [...cards];
if (dealerDeck.length > 6) {
  // take first 6 cards from dealerDeck and push it to resultsDeck
  // delete first 6 cards from allCards
  // rerender
  // if dealerCard is empty remove 'Show more' button
}

const buttonAction = () => {
  // take first 6 cards from dealerDeck and push it to  resultsDeck
  // delete first 6 cards from allCards
  // rerender
  // if dealerCard is empty remove 'Show more' button
};

console.log('dealerDeck', dealerDeck);
let resultsDeck = dealerDeck.splice(0, 6);
console.log('resultsDeck', resultsDeck);
console.log('dealerDeck', dealerDeck);
// take first 6 cards from dealerDeck and push it to resultsDeck
// delete first 6 cards from allCards
// rerender
// if dealerCard is empty remove 'Show more' button

// const buttonAction = () => {
resultsDeck = [...dealerDeck.splice(0, 6), ...resultsDeck];
// }
console.log('resultsDeck', resultsDeck);
console.log('dealerDeck', dealerDeck);
resultsDeck = [...dealerDeck.splice(0, 6), ...resultsDeck];
// }
console.log('resultsDeck', resultsDeck);
console.log('dealerDeck', dealerDeck);
