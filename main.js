let myLibrary = []
const addBookButton = document.querySelector('.add-book')
const body = document.querySelector('body')
const list = document.querySelector('.list')
addBookButton.addEventListener('click', ()=> {
  addBookToLibrary()
})

function Book(title, author, pages) {
  this.title = title,
  this.author = author,
  this.pages = pages
}

function addBookToLibrary() {
  let title = prompt('What is the title of the book?');
  let author = prompt('Who is the author of the book?');
  let pages = prompt('How many pages does the book have?');
  myLibrary.push(new Book(title, author, pages)) 
  displayArray()
}

function displayArray() {  
  list.innerHTML = ''
  for(let i=0;i < myLibrary.length;i++) {
    const div = document.createElement('div')
    div.classList.add('array-display')
    div.innerHTML = `
    <div class="title">${myLibrary[i].title}</div>
    <div class="author">${myLibrary[i].author}</div>
    <div class="pages">${myLibrary[i].pages}</div>
    <input class="checkbox" type="checkbox"></input>
    <button class="delete-button">Delete</button>
    `
    document.body.appendChild(div)
    list.insertAdjacentElement('beforeend',div)
    const deleteButton = document.querySelectorAll('.delete-button')
    // const arrayDisplay = document.querySelectorAll('.array-display')
    deleteButton[i].addEventListener('click', ()=> {
      myLibrary.splice([i],1)
      console.log(myLibrary);
      displayArray()
    })
  }
}