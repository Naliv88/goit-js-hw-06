const catRef = document.querySelectorAll('#categories>li')

// console.log(catRef)

console.log("Number of categories:",catRef.length)

catRef.forEach((li)=>{console.log("Category:", li.firstElementChild.textContent, "\nElements:", li.lastElementChild.childElementCount)})

 




