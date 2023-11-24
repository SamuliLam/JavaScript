const tvform = document.querySelector("form")

tvform.addEventListener('submit', async function(evt){
    evt.preventDefault()

    const usersearch = document.querySelector('input[id=query]').value
    try {
        const response = await fetch(`https://api.tvmaze.com/search/shows?q=${usersearch}`);
        const jsonData = await response.json()
        console.log(jsonData)
    } catch (error) {
        console.log(error.message)
    }
})
