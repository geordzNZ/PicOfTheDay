const sources = [
  { name: 'NASA', url: 'https://api.nasa.gov/planetary/apod', apiKey: '?api_key=p4L7TAJ6ADYtFw9WQJnegCHzshkRjFEsoIychPR3'},
  { name: 'Animals', url: 'bbb'},
  { name: 'Scenery', url: 'ccc'}
]

//Button Listeners and HTMl elements
  document.querySelector('#btnGetPic').addEventListener('click', getPic)


console.log("Hello from the JS file")
function getPic(){
  const source = sources.filter(s=> s.name==document.getElementById('sources').value)
  console.log(source)
  document.getElementById('tmpAnswer').innerText =  source[0].name + '\n'
  document.getElementById('tmpAnswer').innerText +=  source[0].url + '\n'
  document.getElementById('tmpAnswer').innerText +=  source[0].apiKey + '\n'
  // connect to URL
  // get image
  // return to page
}