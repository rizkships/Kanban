const createHomePage = () => {
    const content = document.querySelector('#content');
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content')

    const headline = document.createElement('h1');
    headline.classList.add('text-4xl', 'text-blue-700', 'bg-orange-300')
    headline.textContent = 'My TODO App'
    pageContent.appendChild(headline);
    content.appendChild(pageContent)

    const newBoardBtn = document.createElement('button');
    newBoardBtn.textContent = '+  Add new board'
    pageContent.appendChild(newBoardBtn)
    content.appendChild(pageContent)
}

export default createHomePage;