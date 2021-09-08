const sources = [
  { name: 'NASA', url: 'https://api.nasa.gov/planetary/apod', apiKey: '?api_key=p4L7TAJ6ADYtFw9WQJnegCHzshkRjFEsoIychPR3'},
  { name: 'Animals', url: 'bbb'},
  { name: 'Scenery', url: 'ccc'}
]

//Button Listeners and HTMl elements
  document.querySelector('#btnGetPic').addEventListener('click', getPic)

  let targetImg = document.getElementById('returnImg')
  


console.log("Hello from the JS file")
function getPic(){
  const source = sources.filter(s=> s.name==document.getElementById('sources').value)

  fetch(source[0].url + source[0].apiKey)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      targetImg.src = data.url
      targetImg.title = data.title
    })

  // get image
  // return to page
}