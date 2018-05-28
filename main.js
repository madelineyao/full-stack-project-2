//Plans to write the code: 
//
// a. Load the page into 10 individuals per page(priority)
//    create the button --> let the original page disappear ---> show the first 10 people 
//     ----> assign events to buttons 
// b. add people to the webpage by JavaScript 
//     locate the object(the place to add and the object added) --> order the one object to add another

const people = document.getElementsByClassName("student-item"); 
const pages = getNumberOfPages(people); 
const webpage = document.getElementsByClassName('page'); 


const buttons = document.createElment('div');
buttons.className = 'pagination'; 
const button_list = document.createElement('ul'); 
buttons.appendChild(button_list); 
for(let i=0; i<pages; i+=1){
    let button = document.createElement('li'); 
    let atag = document.createElement('a'); 
    button.appendChild(atag); 
    atag.textContent = i; 
    button_list.appendChild(button); 
    
}

webpage[0].appendChild(buttons); 

hideAll(); 

for(let i = 0; i< 10; i+=1){
    people[i].style.display = 'block'; 
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

function hideAll(){
    for(let i = 0; i < people.length; i+=1){
        people[i].style.display = 'none'; 
    }
}

 

