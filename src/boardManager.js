import Board from './boards.js'

const BoardManager = () => {
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

export default BoardManager;