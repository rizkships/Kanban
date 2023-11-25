//boardManager.js

import Board from './boards.js'

let boardManagerInstance = null;

const boardManager = () => {
    let boards = [];
    let currentBoard = null;

    const createBoard = (boardName) => {
        const newBoard = Board(boardName);
        boards.push(newBoard);
        setCurrentBoard(newBoard);
        return newBoard;
    };

    const getBoards = () => {
        return boards;
    }

    const setCurrentBoard = (board) => {
        currentBoard = board;
    }

    const getCurrentBoard = () => {
        return currentBoard;
    };

    return {
        createBoard,
        getBoards,
        setCurrentBoard,
        getCurrentBoard,
    };
};

// Singleton pattern to ensure there's only one instance
export const getBoardManagerInstance = () => {
    if (!boardManagerInstance) {
      boardManagerInstance = boardManager();
    }
    return boardManagerInstance;
  };

  export default getBoardManagerInstance();
//export default boardManager;