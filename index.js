document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('joke-form')
  const jokeList = document.getElementById('joke-list')
  let joke

  function fetchJoke(){
    return fetch('https://icanhazdadjoke.com/', {
      headers: {
        "Accept": "application/json"
      }
    })
    .then(res => res.json())
    .then(jokeData => joke = jokeData.joke)
  }

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const username = document.getElementById('name-input').value

    if(username !== "") {
    // return;
      fetchJoke().then(whatever => {
        const newJokeLi = document.createElement('li')
        newJokeLi.innerHTML = `<span class="username">${username} says:</span> ${joke}`
        // debugger

        jokeList.appendChild(newJokeLi)
      })
    }
  })
})
