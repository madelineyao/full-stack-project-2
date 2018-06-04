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
// c. add functionality to search button 
//      Let the user write the keyword --> try to let the keyword match info in the webpage 
//               Two situations to consider: 
//                       (1) No result match --> print the message to the webpage 
//                       (2) results match --> calculate number of items 
 
//                       if fewer than 10 items, just use 1 pagination link and display all info 
//                       if more than 10 items, just use more pagination links and display all info 
//                        if statement 
//                        no result ---> print the message 
//                        results ---> create buttons ---> use showeachpageinfo to display information 


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

//create the pagination links
const all_buttons = createButtons(pages,"pagination", webpage[0]).querySelectorAll('.pagination li'); 
showFirstPage(people); 

//
for(let i = 0; i < all_buttons.length; i+=1 ){
    all_buttons[i].addEventListener('click', ()=>{
        showEachPageInfo(all_buttons[i].textContent, people); 
    }); 
}

//create a search button 
const search_button = document.createElement('div');
search_button.className = "student-search"; 
const input = document.createElement('input'); 
input.placeholder = "Search for students..."; 
const button_for_search = document.createElement('button'); 
button_for_search.textContent = "Search"; 
search_button.appendChild(input); 
search_button.appendChild(button_for_search);
page_header[0].appendChild(search_button); 

let value = document.querySelector('.student-search input').value; 
let people_list = document.createElement('ul'); 
button_for_search.addEventListener('click', ()=>{
    hideAll(people); 
    
    for(let i=0; i < people.length; i+=1){
        
        let student_detail = people[i].querySelector('.student-details'); 
        let name = student_detail.querySelector('h3'); 
        let email = student_detail.querySelector('.email'); 
        
        if(name.textContent.includes(value.toLowerCase) || email.textContent.includes(value.toLowerCase)){
            people[i].style.display = 'block'; 
            people_list.appendChild(people[i]); 
        }
    }
    
    if(people_list.length === 0){
        hideAll(all_buttons); 
        let statement_cover = document.createElement('div'); 
        let statement = document.createElement('p'); 
        statement.value = "Sorry we cannot find anything in our record that matches your keyword search";
        statement_cover.appendChild(statement); 
        webpage.insertBefore(statement_cover, people); 
        statement.style.display = 'block'; 
    
        
    } else {
        
        hideAll(all_buttons); 
        let pagination_number = getNumberOfPages(people_list); 
        let search_result_buttons = createButtons(pagination_number,"pagination",webpage[0]); 
        for(let i = 0; i < search_result_buttons.length; i+=1 ){
            search_result_buttons[i].addEventListener('click', ()=>{
            showEachPageInfo(search_result_buttons[i].value, people_list); 
    }); 

    }
    }
    
}); 




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

function createButtons(page, className, location){
   
    let buttons = document.createElement('div');
    buttons.className = className; 
    let button_list = document.createElement('ul');
 
    for(let i=0; i<page; i+=1){
        let button = document.createElement('li'); 
        let atag = document.createElement('a'); 

        atag.textContent = i+1; 
        button.appendChild(atag); 
        button_list.appendChild(button); 

    }
    buttons.appendChild(button_list); 
    location.appendChild(buttons);
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






 
 

