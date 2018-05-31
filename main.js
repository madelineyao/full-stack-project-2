//Plans to write the code: 
//
// a. Load the page into 10 individuals per page(priority)
//    create the button --> let the original page disappear ---> show the first 10 people 
//     ----> assign events to buttons 
//  how to assign events to buttons: 
//      (1) create a function to show the individual information 
//      (2) make the page number available 
//      (3) give instructions by combining the page number and the function in (1)
// b. add people to the webpage by JavaScript 
//     locate the object(the place to add and the object added) --> order the one object to add another


const people = document.getElementsByClassName("student-item"); 
const pages = getNumberOfPages(people); 
const webpage = document.getElementsByClassName("page"); 
const page_header = document.getElementsByClassName("page-header"); 

//const buttons = document.createElement('div');
//buttons.className = 'pagination'; 
//const button_list = document.createElement('ul'); 





//buttons.appendChild(button_list); 
//for(let i=0; i<pages; i+=1){
//    let button = document.createElement('li'); 
//    let atag = document.createElement('a'); 
    
//    atag.textContent = i; 
//    button.appendChild(atag); 
 //   button_list.appendChild(button); 
    
//}

//webpage[0].appendChild(buttons); 

createButtons(webpage,"pagination"); 
showFirstPage(people); 

const all_buttons = createButtons(webpage, "pagination").querySelectorAll('li'); 

for(let i = 0; i < all_buttons.length; i+=1 ){
    all_buttons[i].addEventListener('click', ()=>{
        showEachPageInfo(pages, people); 
    }); 
}

const search_button = document.createElement('div');
search_button.className = "student-search"; 
const input = document.createElement('input'); 
input.placeholder = "Search for students..."; 
const button_for_search = document.createElement('button'); 
button_for_search.textContent = "Search"; 
search_button.appendChild(input); 
search_button.appendChild(button_for_search);
page_header.appendChild(search_button); 



function showEachPageInfo(page, list){
    for(let i = 0; i < list.length; i+=1){
        let end_item = page*10 - 1; 
        let first_item = page*10 - 10; 
        list[i].style.display = 'none'; 
       if(i<= end_item && i >= first_item){
        list[i].style.display = 'block'; 
     }
    }
}


function showFirstPage(list){
    hideAll(list); 

    for(let i = 0; i< 10; i+=1){
        list[i].style.display = 'block'; 
    }
}

function createButtons(page, className){
   
    let buttons = document.createElement('div');
    buttons.className = className; 
    let button_list = document.createElement('ul');
 
    for(let i=0; i<pages; i+=1){
        let button = document.createElement('li'); 
        let atag = document.createElement('a'); 

        atag.textContent = i+1; 
        button.appendChild(atag); 
        button_list.appendChild(button); 

    }
    buttons.appendChild(button_list); 
    page[0].appendChild(buttons); 
    return button_list; 
}









function getNumberOfPages(lists){
    let num = lists.length; 
    let page = 0; 
    do{
      num = num - 10; 
      page +=1; 
    }while(num>0)
    return page; 
}

function hideAll(list){
    for(let i = 0; i < list.length; i+=1){
        list[i].style.display = 'none'; 
    }
}




 
 

