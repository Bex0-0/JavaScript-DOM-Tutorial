const list = document.querySelector('#book-list ul');
const forms = document.forms;

// delete books
list.addEventListener('click', (e) => {
  if(e.target.className == 'delete'){
    const li = e.target.parentElement;
    li.parentNode.removeChild(li);
  }
});

// add books
const addForm = forms['add-book'];
addForm.addEventListener('submit', function(e){
  e.preventDefault();

  // create elements
  const value = addForm.querySelector('input[type="text"]').value;
  const li = document.createElement('li');
  const bookName = document.createElement('span');
  const deleteBtn = document.createElement('span');

  // add text content
  bookName.textContent = value;
  deleteBtn.textContent = 'delete';

  // add classes
  bookName.classList.add('name');
  deleteBtn.classList.add('delete');

  // append to DOM
  li.appendChild(bookName);
  li.appendChild(deleteBtn);
  list.appendChild(li);

  addForm.querySelector('input[type="text"]').value = '';
});

// hide books
const hideBox = document.querySelector('#hide');
hideBox.addEventListener('change', function(e){
  if(hideBox.checked){
    list.style.display = "none";
  } else {
    list.style.display = "initial";
  }
});

// filter books
const searchBar = document.forms['search-books'].querySelector('input');
searchBar.addEventListener('keyup', function(e){
  // console.log(e);
  // console.log(typeof e.target.value);
  const term = e.target.value.toLowerCase();
  const books = list.getElementsByTagName('li');

  Array.from(books).forEach((book) => {
    // console.log(typeof book.innerHTML);
    const title = book.firstElementChild.textContent;

    if(title.toLowerCase().includes(term)){
      book.style.display = 'list-item';
    }else{
      book.style.display = 'none';
    }

  });
  
});

// const searchForm = document.forms['search-books'];
// searchForm.addEventListener('submit', function(e){
//   e.preventDefault();
//   // console.log(e);
//   // console.log(e.target.querySelector('input').innerHTML);
//   const term = e.target.querySelector('input').value.toLowerCase();
//   const names = list.querySelectorAll('.name');

//   names.forEach((name) => {
//     // console.log(typeof name.innerHTML);
//     let bookName = name.innerHTML.toLowerCase();

//     if(bookName.search(term) >= 0){
//       name.parentNode.removeAttribute('hidden');
//     }else{
//       name.parentNode.setAttribute('hidden', 'hidden');
//     }

//   });
  
// });