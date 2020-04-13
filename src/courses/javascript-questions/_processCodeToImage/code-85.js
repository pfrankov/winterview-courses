fetch('https://www.website.com/api/user/1')
  .then(res => res.json())
  .then(res => console.log(res))