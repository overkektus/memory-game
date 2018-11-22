// export const cardClick = (cardId, gameboard, isFreezed) => {
//   let flippedCount = 0;
//   gameboard.forEach(card => {
//     if(card.isFlipped) {
//       flippedCount++;
//     }
//   });

//   let newGameboard = Object.assign({}, gameboard);
//   if(flippedCount > 0) {
//     console.log(newGameboard);
//   }

//   newGameboard = gameboard.map(card => {
//     if(card.id === cardId && !isFreezed && !card.isFlipped) {
//       return {
//         ...card,
//         isFlipped: !card.isFlipped
//       }
//     }
//     return card;
//   });

//   return {
//     type: CARD_CLICK,
//     payload: newGameboard
//   }
// }
