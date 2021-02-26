let nowShowing = ['https://www.awn.com/sites/default/files/styles/original/public/image/attached/1050958-soul1-1200.jpg?itok=ibB2Oopa', 'https://static.miraheze.org/awfulmovieswiki/thumb/6/6f/VYrI7RahX7IxcakB7dY5qnhA7yO.jpg/330px-VYrI7RahX7IxcakB7dY5qnhA7yO.jpg', 'https://pics.filmaffinity.com/andra_sidan-531003232-mmed.jpg', 'https://animetroop.com/wp-content/uploads/2020/10/de3d02a9d9f45d751f9414ce0b6ba6e51602562746_main.jpg', 'https://m.media-amazon.com/images/M/MV5BZDU4MGQyMjYtNGI5My00NjAzLWJlYzUtYTJlNjgwN2I4NGJhXkEyXkFqcGdeQXVyMjg0MTI5NzQ@._V1_UY268_CR4,0,182,268_AL_.jpg', 'https://www.denverfilm.org/wp-content/uploads/2020/09/There-Is-No-Evil-Poster--725x1024.png']
let movieName = ['Soul', 'Fantasy Island', 'Andra Sidan', 'The Promised Neverland', 'Your Name Engraved Herein', 'There Is No Evil']

nowShowing.forEach(function(){
    document.querySelector(".display").innerHTML = 
    `<div class="row" id="R1">
        <div class="movie">
            <div class="poster">
                <img class="poster-img" src="https://www.awn.com/sites/default/files/styles/original/public/image/attached/1050958-soul1-1200.jpg?itok=ibB2Oopa">
            </div>
            <p class="name">Soul</p>
        </div>
        <div class="movie">
            <div class="poster">
                <img class="poster-img" src="https://static.miraheze.org/awfulmovieswiki/thumb/6/6f/VYrI7RahX7IxcakB7dY5qnhA7yO.jpg/330px-VYrI7RahX7IxcakB7dY5qnhA7yO.jpg">
            </div>
            <p class="name">Fantasy Island</p>
        </div>
    </div>
    <div class="row" id="R2">
        <div class="movie">
            <div class="poster">
                <img class="poster-img" src="https://pics.filmaffinity.com/andra_sidan-531003232-mmed.jpg">
            </div>
            <p class="name">Andra Sidan</p>
        </div>
        <div class="movie">
            <div class="poster">
                <img class="poster-img" src="https://animetroop.com/wp-content/uploads/2020/10/de3d02a9d9f45d751f9414ce0b6ba6e51602562746_main.jpg">
            </div>
            <p class="name">The Promised Neverland</p>
        </div>
    </div>
    <div class="row" id="R3">
        <div class="movie">
            <div class="poster">
                <img class="poster-img" src="https://m.media-amazon.com/images/M/MV5BZDU4MGQyMjYtNGI5My00NjAzLWJlYzUtYTJlNjgwN2I4NGJhXkEyXkFqcGdeQXVyMjg0MTI5NzQ@._V1_UY268_CR4,0,182,268_AL_.jpg">
            </div>
            <p class="name">Your Name Engraved Herein</p>
        </div>
        <div class="movie">
            <div class="poster">
                <img class="poster-img" src="https://www.denverfilm.org/wp-content/uploads/2020/09/There-Is-No-Evil-Poster--725x1024.png">
            </div>
            <p class="name">There Is No Evil</p>
        </div>
    </div>`
})

function add(){
    const newName = document.getElementById("movieName").value
    movieName.pop()
    movieName.unshift(newName)
    document.querySelector(".name").innerHTML = `<p class="name">${movieName[0]}</p>`
    const newMovie = document.getElementById("movieImage").value
    nowShowing.pop()
    nowShowing.unshift(newMovie)
    document.querySelector(".poster").innerHTML = `<img class="poster-img" src="${nowShowing[0]}">`
}
