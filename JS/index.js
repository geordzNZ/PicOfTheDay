const providers = [
  { name: 'NASA', url: ''},
  { name: 'Animals', url: ''},
  { name: 'Scenery', url: ''}
}

//Button Listeners and HTMl elements
  document.querySelector('#btnGetPic').addEventListener('click', getPic)

  let source = document.getElementById('cmboSources').value


function getPic(){
  document.getElementById('tmpAnswer').innerText =   // connect to URL
  // get image
  // return to page
}