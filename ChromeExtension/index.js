// chrome://extensions/

let myLeads = []
const inputEl = document.getElementById("input-el")
// Event listener example
const saveEl = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("tab-btn")

// localStorage.setItem("myLeads","www.pavi.com")
// console.log(localStorage.getItem("myLeads"))
// localStorage.clear()

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

if(leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

tabBtn.addEventListener("click",function(){
    //console.log(tabs[0].url)
    //get the url of current tab
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads",JSON.stringify(myLeads))
        render(myLeads)
    
      })
})

deleteBtn.addEventListener("dblclick",function(){
    localStorage.clear()
    myLeads = []
    render(myLeads)
})

saveEl.addEventListener("click", function () { 
    myLeads.push(inputEl.value)
    inputEl.value = ""
    // save the myLeads array to localStorage
    localStorage.setItem("myLeads",JSON.stringify(myLeads))
    render(myLeads)
})

// for (let i=0 ; i<myLeads.length ; i++){
//     //ulEl.innerHTML += "<li>" + myLeads[i] + "</li> " 
//   //example for creating html element, adding text to li and appending li to ul  
//     const li = document.createElement("li")
//     //set text content
//     li.textContent = myLeads[i]
//     //append to ul
//     ulEl.append(li)
// }
function render(leads){
    let listItems = ""
    for (let i=0 ; i<leads.length ; i++){
        // listItems +=  "<li><a href = ' " + myLeads[i] + "' target ='_blank'>"+ myLeads[i] + "</a></li>"
        listItems += `
            <li>
                <a href = '${myLeads[i]}' target  = '_blank'> ${myLeads[i]} </a>
            </li>
        ` 
    }
    ulEl.innerHTML = listItems
}