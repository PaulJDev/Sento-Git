import fetch from 'node-fetch'
;(async () => {
  const response = await fetch('https://rickandmortyapi.com/api/character', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  const data = await response.json()
  console.log(data)
})()
