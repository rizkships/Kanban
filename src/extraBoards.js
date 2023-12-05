// extraBoards.js

let extraBoardsInstance = null;

const extraBoardsModule = () => {
  let tabs = [];

  const addTab = (board) => {
    const newTab = { board };
    tabs.push(newTab);
  };

  const getTabs = () => {
    return tabs;
  };

  return {
    addTab,
    getTabs,
  };
};

export const getExtraBoardsInstance = () => {
  if (!extraBoardsInstance) {
    extraBoardsInstance = extraBoardsModule();
  }
  return extraBoardsInstance;
};

export default getExtraBoardsInstance;

  