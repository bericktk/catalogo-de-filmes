async function exibirResultado(e){
    e.preventDefault()

    const filme = document.querySelector('.form-input').value
    if(filme){
        const url = `http://www.omdbapi.com/?apikey=b58710e2&s=${filme}`

        const response = await fetch(url)
        const filmes = await response.json()
        
        let content = ""
        for(movie of filmes.Search){
            content += '<li class="all-movies-card">'
            content += '<figure class="all-movies-figure">'
            content += `<img class="all-movies-thumb" src="${movie.Poster}">`
            content += '</figure>'
            content += '<legend class="all-movies-legend">'
            content += `<span class="all-movies-year">${movie.Year}</span>`
            content += `<h2 class="all-movies-title">${movie.Title}</h2>`
            content += '</legend>'
            content += '</li>'
        }
        document.querySelector("#movies").innerHTML = content
    }

}

const form = document.querySelector('.form')
form.addEventListener('submit', exibirResultado)
