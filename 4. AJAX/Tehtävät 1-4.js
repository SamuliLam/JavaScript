const tvform = document.querySelector("form")



tvform.addEventListener('submit', async function(evt){
    evt.preventDefault()

    const usersearch = document.querySelector('input[id=query]').value
    try {
        const response = await fetch(`https://api.tvmaze.com/search/shows?q=${usersearch}`);
        const jsonData = await response.json();

        document.getElementById('results').innerHTML = "";

        jsonData.forEach(element => {

            let div = document.createElement('div');
            div.innerHTML = element.show.summary;

            let article = document.createElement('article');


            let h2 = document.createElement('h2');
            h2.innerText = element.show.name;
            article.appendChild(h2);
            article.appendChild(div);

            let img = document.createElement('img');
            img.alt = element.show.name;
            img.src = element.show.image ? element.show.image.medium : "https://via.placeholder.com/210x295?text=Not%20Found";
            article.appendChild(img);

            let url = document.createElement('a');
            url.href = element.show.url;
            url.innerText = element.show.url;
            url.target = "_blank";
            article.appendChild(url);

            document.getElementById('results').appendChild(article);
        });
        console.log(jsonData)
    } catch (error) {
        console.log(error.message)
    }
})
