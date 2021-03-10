// jQuery
// $(document).ready(function() {
  // code
// });

// Vanilla JS


// global variable and constants
const menu_button = document.getElementById("menu-button");
const video_cover = document.getElementById("video-cover");
const video_player = document.getElementsByClassName('video-player');
const menu = document.getElementById("menu");
const items = document.getElementsByClassName("item");
const button_modal = document.getElementById('button-modal');
const modal_wiki = document.getElementsByClassName('modal-wiki');
const close_modal = document.getElementById('close-modal');
const extract = document.getElementsByClassName('extract');

window.onload = function() {
  
  //slide menu
  menu_button.addEventListener("click", function(){
    if (menu.className === "menu -active"){
      menu.className = "menu"
    }else{
      menu.className = "menu -active"
    }
  })

  //video cover
  video_cover.addEventListener("click", function(){
    video_cover.className = "video-cover -inactive"
    video_player[0].play()
  })

  //accordion items
  for(let i = 0; i < items.length; i++){
    items[i].addEventListener('click', function(){
      if (items[i].className === 'item'){
        items[i].className = 'item -active'
      }else{
        items[i].className = 'item'
      } 
    })
  }

  // fetch da api         cors-anywhere tá com 'too many requests' >:(
  fetch(`https://api.allorigins.win/get?url=${encodeURIComponent('https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Alber%20Einstein')}`)
  .then(response => {
    if (response.ok) return response.json()
    throw new Error('Network response was not ok.')
  })
  .then(data => JSON.parse(data.contents))
  .then(data => extract[0].innerText = data.query.pages[736].extract)

  //modal
  button_modal.addEventListener('click', function(){
    modal_wiki[0].className = "modal-wiki -active"
  })
  close_modal.addEventListener('click', function(){
    modal_wiki[0].className = 'modal-wiki'
  })
};