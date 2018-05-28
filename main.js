//Plans to write the code: 
// a. Calculate the number of pages 
// 
// b. Show the search bar 
// c. Load the page into 10 individuals per page 

const people = document.getElementsByTagName('li'); 

function getNumberOfPages(lists){
    let num = lists.length; 
    let page = 0; 
    do{
      num = num - 10; 
      page +=1; 
    }while(num>0)
    return page; 
}

