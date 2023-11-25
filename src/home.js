//home.js

import boardManager from "./boardManager.js";

const createHomePage = () => {
    const content = document.querySelector('#content');
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content')

    const headline = document.createElement('h1');
    headline.classList.add('text-4xl', 'text-blue-700', 'bg-orange-300')
    headline.textContent = 'My TODO App'
    pageContent.appendChild(headline);
    

    // Display boards
    const boardContainer = document.createElement('div');
    boardContainer.classList.add('board-container');

    // function to create a button for each board 
    const createBoardButton = (board) => {
        const boardBtn = document.createElement('button');
        boardBtn.textContent = board.name;

        // Add event listener to set the current board when clicked
        boardBtn.addEventListener('click', () => {
            boardManager.setCurrentBoard(board);
            // Update UI to display cards and tasks for the selected board
            updateBoardUI();
        });

        return boardBtn;
    };

    // Add event listener for the "Add new board" button

    newBoardBtn.addEventListener('click', () => {
        const boardName = prompt('Enter the name for the new board:');
        if (boardName) {
            const newBoard = boardManager(boardName);
            // Update UI to display the new board
            updateBoardUI();
            console.log(`New board created: ${newBoard.name}`);
        // why do we not have const newBoard = boardManager.createBoard(boardName);
        }
    })

    
    const newBoardBtn = document.createElement('button');
    newBoardBtn.textContent = '+  Add new board'
    pageContent.appendChild(newBoardBtn)
    content.appendChild(pageContent)

   
}


export default createHomePage;

 // Add event listener for the "Add new board" button
    /*
  newBoardBtn.addEventListener('click', () => {
    // Prompt the user to enter the name for the new board
    const boardName = prompt('Enter the name for the new board:');

    if (boardName) {
    // If the user entered a name, create a new board
    const newBoard = boardManager.createBoard(boardName);

    // You can update the UI or perform additional actions if needed
    console.log(`New board created: ${newBoard.name}`);
    }
  }); */