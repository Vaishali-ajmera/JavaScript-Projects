console.log("This is library");

// to build constructor
function Book(name, author, type){
    this.name = name;
    this.author = author;
    this.type = type;
}

// Display Constructor
function Display(){

}

// Add methods to display prototype
Display.prototype.add = function(book){
    console.log("Adding to UI");
    tableBody = document.getElementById('tableBody');
    let uiString = `
        <tr>
            <td>${book.name}</td>
            <td>${book.author}</td>
            <td>${book.type}</td>
        </tr>`;
        tableBody.innerHTML += uiString;

}

// implementing the clear function
Display.prototype.clear = function(){
    let libraryForm = document.getElementById("libraryForm");
    libraryForm.reset();
}

// implementing the validate function
Display.prototype.validate = function(book){
    if(book.name.length <2 || book.author.length <2){
        return false;
    }
    else{
        return true;
    }
}

// implementing the show function
Display.prototype.show = function(type, displayMessage){
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

      }, 2000);                  

}




// Add submit event listener to libraryForm
let libraryForm = document.getElementById("libraryForm");
libraryForm.addEventListener('submit', libraryFormSubmit);

// function libraryFormSubmit
function libraryFormSubmit(e){
    console.log("You have submitted library form");
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
    console.log(book);

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