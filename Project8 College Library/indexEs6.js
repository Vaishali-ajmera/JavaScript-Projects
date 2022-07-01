// console.log("This is library");
displayBook();

//displayBook prototype
function displayBook(){
    let oldBook = localStorage.getItem('oldBook');
    if( oldBook == null){
        
         oldBook = [];
    }
    else{
        oldBook = JSON.parse(oldBook);
    }
    // console.log(oldBook);

    let uiString = ''; 

    oldBook.forEach((element, index)=> {

        uiString += `
        <tr>
        <td>${index+1}</td>
        <td>${element.name}</td>
        <td>${element.author}</td>
        <td>${element.type}</td>
        <td><button type="button" id="${index}" onclick="deleteBtn(this.id)" class="btn btn-outline-danger">Delete</button></td>
        </tr>`;
    })

    let tHead = "";
    tHead = `
                <tr>                
                <th scope="col">Sno.</th>
                <th scope="col">Name</th>
                <th scope="col">Author</th>
                <th scope="col">Type</th>
                <th scope="col">Delete</th>
                
            </tr>`
    let tableHead = document.getElementById('tableHead');
    let tableBody = document.getElementById('tableBody');
    if(oldBook.length != 0 ){

        tableHead.innerHTML = tHead;
        tableBody.innerHTML = uiString;
        
    }
    else{

        tableHead.innerHTML = "No book to display!";
        tableBody.innerHTML = "";


    }

}






// creating constructor classes

// Book class
class Book{
    constructor(name, author, type){
        this.name = name;
        this.author = author;
        this.type = type;
    }

}


// create constructor class display.
class Display{

    
    // add prototype
    add(book){
        // console.log("Adding to UI");
        let oldBook = localStorage.getItem('oldBook');
        if( oldBook == null){
            
             oldBook = [];
        }
        else{
            oldBook = JSON.parse(oldBook);
        }

        oldBook.push(book); 
        localStorage.setItem('oldBook', JSON.stringify(oldBook));  
        
        displayBook();
    
    }

    // clear prototype
    clear(){
        let libraryForm = document.getElementById("libraryForm");
        libraryForm.reset();
    }

    // validate prototype
    validate(book){
        if(book.name.length <2 || book.author.length <2){
            return false;
        }
        else{
            return true;
        }
    }

    // show prototype
    show(type, displayMessage){
        let message = document.getElementById('message');
        let boldText;
        if(type === 'success'){
            boldText = "Success: ";
        }
        else{
            boldText = "Error!: ";
        }
    
        message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                                <strong>${boldText}</strong> ${displayMessage}
                                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                            </div>`
        
          setTimeout(() => {
              message.innerHTML = '';
    
          }, 4000);                  
    
    }
    
    
}



// Add submit event listener to libraryForm
let libraryForm = document.getElementById("libraryForm");
libraryForm.addEventListener('submit', libraryFormSubmit);

// function libraryFormSubmit
function libraryFormSubmit(e){
    // console.log("You have submitted library form");
    let name = document.getElementById('bookName').value;
    let author = document.getElementById('author').value;
    let type;

    let fiction = document.getElementById('fiction');
    let programming = document.getElementById('programming');
    let cooking = document.getElementById('cooking');
    

    if(fiction.checked){
        type = fiction.value;
    }

    else if(programming.checked){
        type = programming.value;
    }

    else if(cooking.checked){
        type = cooking.value;
    }

    // creating  book object using constructor
    let book = new Book(name, author, type);
    // console.log(book);

    // creating display object to display the books using Display Constructor
    let display = new Display();

    if(display.validate(book)){
        
        display.add(book);
        display.clear();
        display.show('success', 'Your book has been successfully added.');
        
    }
    else{
        // show error to the user
        display.show('danger','Sorry you cannot add this book.');
    }
    e.preventDefault();
}

// delete button js
function deleteBtn(index){
    console.log('deleting the book...');
    let oldBook = localStorage.getItem('oldBook');
    if( oldBook == null){
        
         oldBook = [];
    }
    else{
        oldBook = JSON.parse(oldBook);
    }
    oldBook.splice(index,1);
    localStorage.setItem('oldBook', JSON.stringify(oldBook));
    displayBook();
}