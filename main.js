let myLibrary = []
const addBookButton = document.querySelector('.add-book')
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

//loops through every "book" in mylibrary and adds it to the current list
function displayArray() {
  
  for(let i=0;i < myLibrary.length;i++) {
    const div = document.createElement('div')
    div.innerHTML = `
    <div class="title">${myLibrary[i].title}</div>
    <div class="author">${myLibrary[i].author}</div>
    `
    div.classList.add('array-display')
    document.body.appendChild(div)
  }
}