//home.js

import boardManager from "./boardManager.js";
import getExtraBoardsInstance from "./extraBoards.js";

const extraBoards = getExtraBoardsInstance(); // Initialize extraBoards module


const createHomePage = () => {
    // Reset body margins and paddings
    
    

    const content = document.querySelector('#content');



    const header = document.createElement('header');
    header.classList.add('bg-blue-500', 'text-white', 'py-4', 'col-span-2');
    const containerHeader = document.createElement('div');
    containerHeader.classList.add('container');
    const headline = document.createElement('h1');
    headline.classList.add('text-4xl');
    headline.textContent = 'My TODO App';
    containerHeader.appendChild(headline);
    header.appendChild(containerHeader);

    // Grid container for header, sidebar, main content, and footer
    const flexContainer = document.createElement('div');
    flexContainer.classList.add('flex'); // , 'grid-rows-[auto,1fr,auto]'
    flexContainer.appendChild(header);

    // Sidebar 

    const sidebar = document.createElement('div');
    sidebar.classList.add('bg-green-500', 'text-white', 'p-10', 'w-48', 'left-0', 'top-0', 'h-screen');
    const containerSidebar = document.createElement('div');
    containerSidebar.classList.add('container-sidebar');

  // Add event listener for the "Add new board" button 

 
// Add event listener for the "Add new board" button 
const newBoardForm = document.createElement('form');
newBoardForm.setAttribute('action', '');

const newBoardInput = document.createElement('input');
newBoardInput.setAttribute('type', 'text');
newBoardInput.setAttribute('class', 'new-board');
newBoardInput.setAttribute('placeholder', 'New board name');
newBoardInput.setAttribute('aria-label', 'New board name');

const newBoardBtn = document.createElement('button');
newBoardBtn.setAttribute('class', 'btn-board');
newBoardBtn.setAttribute('aria-label', 'Create new board');
newBoardBtn.textContent = '+';

newBoardForm.appendChild(newBoardInput);
newBoardForm.appendChild(newBoardBtn);

containerSidebar.appendChild(newBoardForm);

newBoardForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const boardName = newBoardInput.value.trim();
    if (boardName) {
        const newBoard = boardManager.createBoard(boardName);
        // Update extraBoards to add a new tab
        extraBoards.addTab(newBoard);
        //DEBUG
        console.log(`New board created: ${newBoard.name}`);
        console.log(`Current boards in boardManager: ${boardManager.getBoards().map(board => board.name)}`);
        // Update UI to display the new board and tabs
        updateBoardUI();
        updateTabsUI();
        console.log(`New board created: ${newBoard.name}`);
    }
})

    // Display boards
    const boardContainer = document.createElement('div');
    boardContainer.classList.add('flex-1', 'p-4', 'board-container', 'bg-red-200');

    

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


    // Function to update the UI to display tabs in the sidebar
   const updateTabsUI = () => {
    
   // Log the tabs array for debugging
   console.log('Tabs array:', extraBoards.getTabs());

    // Display existing tabs
    const tabs = extraBoards.getTabs();
    tabs.forEach((tab) => {
      const tabBtn = createTabButton(tab);
      containerSidebar.appendChild(tabBtn);
    });
  };

  // Function to create a button for each tab
  const createTabButton = (tab) => {
    const tabBtn = document.createElement('button');
    // Check if tab.name is defined before accessing it
  tabBtn.textContent = tab.name || '';

   // Log the tab object for debugging
   console.log('Tab:', tab);


    // Add event listener to set the current board when clicked
    tabBtn.addEventListener('click', () => {
        const selectedBoard = boardManager.getBoards().find(board => board.name === tab.name);
        boardManager.setCurrentBoard(selectedBoard);
        // Update UI to display cards and tasks for the selected board
      updateBoardUI();
      updateTabsUI();
    });

    return tabBtn;
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
                cardBtn.classList.add('bg-blue-700', 'text-white', 'p-2',  'w-full'); //'mb-2',
                cardBtn.textContent = card.name;
                // Add event listener to display tasks for the selected card
                cardBtn.addEventListener('click', () => {
                    // Update UI to display tasks for the selected card
                    updateCardUI(card);
                });
                boardContainer.appendChild(cardBtn);
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
            boardContainer.appendChild(taskItem);
        });
    };
    
    // Footer
    const footer = document.createElement('footer');
    footer.classList.add('bg-gray-400', 'text-white', 'py-4', 'text-center', 'col-span-2');
    
    const containerFooter = document.createElement('div');
    containerFooter.classList.add('foot-container');
    const footerContent = document.createElement('p');
    footerContent.textContent = '© 2023 My TODO App';
    containerFooter.appendChild(footerContent);
    footer.appendChild(containerFooter);
    
    // Append elements to content
    content.appendChild(header);
    content.appendChild(flexContainer);
    content.appendChild(footer);
    
   // gridContainer.appendChild(sidebar);
   
    
    flexContainer.appendChild(sidebar);
    flexContainer.appendChild(boardContainer);
  //  gridContainer.appendChild(footer);

    // Append flex container to content
    
   
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