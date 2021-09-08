const sources = [
  { name: 'NASA', url: 'aaa'},
  { name: 'Animals', url: 'bbb'},
  { name: 'Scenery', url: 'ccc'}
]

//Button Listeners and HTMl elements
  document.querySelector('#btnGetPic').addEventListener('click', getPic)


console.log("Hello from the JS file")
function getPic(){
  const source = sources.filter(s=> s.name==document.getElementById('sources').value)
  console.log(source)
  document.getElementById('tmpAnswer').innerText =  source[0].name + ' / '
  document.getElementById('tmpAnswer').innerText +=  source[0].url
  // connect to URL
  // get image
  // return to page
}