//boards.js

import Card from './card.js'

const Board = (name) => {
    let cards = [];

    const addCard = (cardName) => {
        const newCard = Card(cardName);
        cards.push(newCard);
        return newCard;
    };

    const getCards = () => {
        return cards;
    };

    return {
        name,
        addCard,
        getCards,
    };
};

export default Board;