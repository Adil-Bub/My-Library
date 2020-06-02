let myLibrary = [];
let i=0;
function Book(title, author, pages, status){
  this.title = title
  this.author = author
  this.pages = pages
  this.status = status
}
const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, 'Not Read Yet');
const matilda = new Book('Matilda', 'Roald Dahl', 240, 'Read');
createCard(theHobbit);
createCard(matilda);
function writeToHTML(check,container,title,author,pages,status,newBook)    {

    document.getElementById(title).innerHTML=newBook.title;
    document.getElementById(author).innerHTML=newBook.author;
    document.getElementById(pages).innerHTML=newBook.pages + ' pages';
    document.getElementById(status).innerHTML=newBook.status;
   }
function createCard(newBook){
    let container = document.getElementById('container');
    let div = document.createElement('div');
    div.id = `${'element' + i}`;
    div.className = 'card';
    let title = document.createElement('h3');
    title.id = `${'title' + i}`;
    let author = document.createElement('h4');
    author.id = `${'author' + i}`;
    let pages = document.createElement('h6');
    pages.id = `${'pages' + i}`;
    let status = document.createElement('h5');
    status.id = `${'status' + i}`;
    let button = document.createElement('BUTTON');
    button.className = 'delete';
    var text = document.createTextNode("Delete"); 
    button.appendChild(text); 
    button.setAttribute( "onClick", "deleteBook(this)" );                 
    div.appendChild(button);
    container.appendChild(div);    
    
    div.appendChild(title);
    div.appendChild(author);
    div.appendChild(pages);
    div.appendChild(status);
  writeToHTML(i,container,title.id,author.id,pages.id,status.id,newBook);
    i++;    
}
function addBook(){
  let title = prompt('Title of the Book: ');
  let author = prompt('Author of the Book: ');
  let pages = parseInt(prompt('Number of Pages: '));
  let status = prompt('Status (Read/Not Read Yet): ');
  const temp = new Book(title, author, pages, status);
  createCard(temp);  
}
function deleteBook(e){
  i--;
e.parentNode.remove();
}