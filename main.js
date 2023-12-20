let myLibrary = []
const addBookButton = document.querySelector('.add-book')
const body = document.querySelector('body')
const list = document.querySelector('.list')
const arrayDisplay = document.querySelector('.array-display')
const deleteButton = document.querySelector('.delete-button')
addBookButton.addEventListener('click', ()=> {
  addBookToLibrary()
})

function Book(title, author) {
  this.title = title,
  this.author = author
}

function addBookToLibrary() {
  let title = prompt('What is the title of the Book?');
  let author = prompt('Who is the author of the Book?');
  myLibrary.push(new Book(title, author)) 
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
    <button class="delete-button">Delete</button>
    `
    document.body.appendChild(div)
    list.insertAdjacentElement('beforeend',div)
  }
}