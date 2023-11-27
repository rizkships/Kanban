//home.js

import boardManager from "./boardManager.js";

const createHomePage = () => {
    const content = document.querySelector('#content');
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content')

    const header = document.createElement('header');
    header.classList.add('bg-blue-500', 'text-white', 'py-4');
    const containerHeader = document.createElement('div');
    containerHeader.classList.add('container');
    const headline = document.createElement('h1');
    headline.classList.add('text-4xl');
    headline.textContent = 'My TODO App';
    containerHeader.appendChild(headline);
    header.appendChild(containerHeader);

    /*
    const headline = document.createElement('h1');
    headline.classList.add('text-4xl', 'text-blue-700', 'bg-orange-300')
    headline.textContent = 'My TODO App'
    pageContent.appendChild(headline);

    */
    

    // Display boards
    const boardContainer = document.createElement('div');
    boardContainer.classList.add('flex');

    // Sidebar 

    const Sidebar = document.createElement('aside');
    Sidebar.classList.add('bg-green-500', 'text-white', 'p-4', 'w-48');
    const containerSidebar = document.createElement('div');
    containerSidebar.classList.add('container');

    // Add event listener for the "Add new board" button 

    const newBoardBtn = document.createElement('button');
    newBoardBtn.classList.add('bg-white', 'text-green-500', 'p-2', 'mb-4');
    newBoardBtn.textContent = '+  Add new board'
    containerSidebar.appendChild(newBoardBtn);

    newBoardBtn.addEventListener('click', () => {
        const boardName = prompt('Enter the name for the new board:');
        if (boardName) {
            
            const newBoard = boardManager.createBoard(boardName);
            // Update UI to display the new board
            updateBoardUI();
            console.log(`New board created: ${newBoard.name}`);
       
        }
    });

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

    //  Function to update the UI to display cards for the selected board

    const updateBoardUI = () => {
        // Clear existing content
        boardContainer.innerHTML = '';

        // Display existing boards
        const boards = boardManager.getBoards();
        boards.forEach((board) => {
            const boardBtn = createBoardButton(board);
            boardContainer.appendChild(boardBtn);
        });

    


        // Display current board's cards
        const currentBoard = boardManager.getCurrentBoard();
        if (currentBoard) {
            const cards = currentBoard.getCards();
            cards.forEach((card) => {
                const cardBtn = document.createElement('button');
                cardBtn.classList.add('bg-blue-700', 'text-white', 'p-2', 'mb-2', 'w-full');
                cardBtn.textContent = card.name;
                // Add event listener to display tasks for the selected card
                cardBtn.addEventListener('click', () => {
                    // Update UI to display tasks for the selected card
                    updateCardUI(card);
                });
                containerSidebar.appendChild(cardBtn);
            });
        }
    };

        // Function to update the UI to display tasks for the selected card
    const updateCardUI = (card) => {
        // Clear existing tasks
        boardContainer.innerHTML = '';

        // Display tasks for the selected card
        const tasks = card.getTasks();
        tasks.forEach((task) => {
            const taskItem = document.createElement('div');
            taskItem.textContent = task.description;
            containerSidebar.appendChild(taskItem);
        });
    };
    
    // Footer
    const footer = document.createElement('footer');
    footer.classList.add('bg-gray-400', 'text-white', 'py-4', 'text-center');
    const containerFooter = document.createElement('div');
    containerFooter.classList.add('container');
    const footerContent = document.createElement('p');
    footerContent.textContent = '© 2023 My TODO App';
    containerFooter.appendChild(footerContent);
    footer.appendChild(containerFooter);

    // Append elements to content
    content.appendChild(header);
    content.appendChild(sidebar);
    content.appendChild(boardContainer);
    content.appendChild(footer);
    
    
   
}



export default createHomePage;
 /*
 // Add event listener for the "Add new board" button
   
  newBoardBtn.addEventListener('click', () => {
    // Prompt the user to enter the name for the new board
    const boardName = prompt('Enter the name for the new board:');

    if (boardName) {
    // If the user entered a name, create a new board
    const newBoard = boardManager.createBoard(boardName);

    // You can update the UI or perform additional actions if needed
    console.log(`New board created: ${newBoard.name}`);
    }

    const newBoardBtn = document.createElement('button');
    newBoardBtn.textContent = '+  Add new board'
    pageContent.appendChild(newBoardBtn)
    content.appendChild(pageContent)

  }); 
  */