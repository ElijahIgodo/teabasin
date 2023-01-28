
var ulist = document.getElementById("blog-lists");
var newListItem = document.createElement("li");
var newAnchor = document.createElement("a");
newAnchor.textContent = "How To Cure Malaria And Typhoid";
newAnchor.setAttribute('href', "shop.html");
newListItem.appendChild(newAnchor);
ulist.appendChild(newListItem);



function firstP () {
  let fP = document.getElementById("first-p")
  let sP = document.getElementById("second-p")
  let menuBarDiv = document.getElementById("menu-bar-div")

  if (fP.style.display == "none") {
    fP.style.display = "block";
  }
  else{
    fP.style.display = "none";
  }

  if (menuBarDiv.style.display == "block") {
    menuBarDiv.style.display = "none";
  }
  else{
    menuBarDiv.style.display = "block";
  }
  menuBarDiv.style.left = "0";
  document.getElementById("menu-bar-div").style.transition = "all 4s";
  

  if (sP.style.display == "block") {
    sP.style.display = "none";
  }
  else{
    sP.style.display = "block";
  }
}


function secondP () {
  let fP2 = document.getElementById("first-p")
  let sP2 = document.getElementById("second-p")
  let menuBarDiv2 = document.getElementById("menu-bar-div")
  document.getElementById("menu-bar-div").style.transition = "all 4s";

  if (fP2.style.display == "block") {
    fP2.style.display = "none";
  }
  else{
    fP2.style.display = "block";
  }

  if (menuBarDiv2.style.display == "none") {
    menuBarDiv2.style.display = "block";
  }
  else{
    menuBarDiv2.style.display = "none";
  }

  if (sP2.style.display == "none") {
    sP2.style.display = "block";
  }
  else{
    sP2.style.display = "none";
  }
}




function category (){
  let selectIconRight = document.querySelector(".fa-caret-right")
  let selectIconDown = document.querySelector(".fa-sort-down")
  let topBtns = document.getElementById("topbtn")

  if (topBtns.style.display == "block") {
      topBtns.style.display = "none";
  }
  else {
    topBtns.style.display = "block";
  }

  if (selectIconRight.style.display == "none") {
    selectIconRight.style.display = "block";
}
  else {
    selectIconRight.style.display = "none";
 }

 if (selectIconDown.style.display == "block") {
    selectIconDown.style.display = "none";
}
  else {
    selectIconDown.style.display = "block";
}
}


/*THIS IS THE FOOTER YEAR UPDATE*/

const year = new Date();
document.getElementById("footer-year").innerHTML = (year.getFullYear());




const element = document.querySelector('.bloggingDiv');
const observer = new IntersectionObserver(entries => {
  element.classList.toggle( 'animation', entries[0].isIntersecting );
});

observer.observe(element);

const element2 = document.querySelector('.productionDiv');
const observer2 = new IntersectionObserver(entries => {
  element2.classList.toggle( 'animation', entries[0].isIntersecting );
});

observer2.observe(element2);

const element3 = document.querySelector('.pharmacyDiv');
const observer3 = new IntersectionObserver(entries => {
  element3.classList.toggle( 'animation', entries[0].isIntersecting );
});

observer3.observe(element3);



/*THIS IS THE BLOG POST BUTTON PROGRAM*/

function postBtn (){
  let folderOpen = document.getElementById("fa-folder-open");
  let folderClosed = document.getElementById("fa-folder-closed");
  let postUl = document.getElementById("ul");

  if (postUl.style.display == "block") {
      postUl.style.display = "none";
  }
  else{
      postUl.style.display = "block";
  }

  if (folderClosed.style.display == "none") {
    folderClosed.style.display = "inline-block";
}
else{
    folderClosed.style.display = "none";
}

if (folderOpen.style.display == "inline-block") {
  folderOpen.style.display = "none";
}
else{
  folderOpen.style.display = "inline-block";
}
}



