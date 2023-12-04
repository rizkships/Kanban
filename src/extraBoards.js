// extraBoards.js

const extraBoards = () => {
    let tabs = [];
  
    const createTab = (board) => {
      const tab = {
        id: Date.now(), // Use a unique identifier for each tab
        board,
      };
      tabs.push(tab);
      return tab;
    };
  
    const getTabs = () => {
      return tabs;
    };
  
    return {
      createTab,
      getTabs,
    };
  };
  
  export default extraBoards;
  