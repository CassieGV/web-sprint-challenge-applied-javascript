// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header(dateData, tempData) {
    let headerContainer = document.querySelector(".header-container")

    let header = document.createElement("div");
    header.classList.add("header");
    headerContainer.appendChild(header)

    
    let date = document.createElement("span");
    date.classList.add("date");
    date.textContent = dateData
    header.appendChild(date);
    
    let title = document.createElement("h1");
    console.log(document.querySelector("title"))
    let Title = document.querySelector("title").textContent
    title.textContent = Title;
    header.appendChild(title);

    let temp = document.createElement("span");
    temp.classList.add("temp");
    temp.textContent = tempData
    header.appendChild(temp);

    console.log(header)
    return header
}

Header("MARCH 28, 2020", "98°")

