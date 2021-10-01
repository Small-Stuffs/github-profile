'use strict'
const APIURL = 'https://api.github.com/users/'
const form = document.querySelector('.form')

form.addEventListener('submit', function(e) {
  e.preventDefault()

  const search = document.querySelector('#search').value

  const nameSearch = search.split(' ').join('') // to remove spaces of string


  // alert(nameSearch)

  fetch(APIURL + nameSearch)
  .then((result) => result.json())
  .then((data) => {
    console.log(data)

  })
  
  

})

