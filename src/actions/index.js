

// export const startOverview = () => {
//   return {
//     type: START_OVERVIEW
//   }
// }

// export const stopOverview = (gameboard) => {
//   const newGameboard = gameboard.map(card => {
//     return {
//       ...card,
//       isFlipped: !card.isFlipped
//     }
//   });
//   return {
//     type: STOP_OVERVIEW,
//     payload: newGameboard
//   }
// }

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
