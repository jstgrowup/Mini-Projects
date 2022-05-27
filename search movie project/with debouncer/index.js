let id;
async function search(filter) {
    try {
        let url = `http://www.omdbapi.com/?apikey=cc21903c&s=${filter}`;
        let res = await fetch(url)
        let data = await res.json()
        return data.Search

    }
    catch {
        alert("Something is wrong")
    }
}
async function main() {
    let filter = document.querySelector("#myInput").value;
    let response = search(filter)
    let data = await response
    display(data)
}

function display(data) {
    document.querySelector("#show").innerHTML = "";
    if (data === undefined) {
        return false
    }
    data.forEach(function (el) {
        // console.log('data:', data)
        let card = document.createElement("div");
        card.setAttribute("class", "card");

        let image = document.createElement("img");
        if (el.Poster == "N/A") {
            image.src =
                "https://us.123rf.com/450wm/pavelstasevich/pavelstasevich1811/pavelstasevich181101028/112815904-no-image-available-icon-flat-vector-illustration.jpg?ver=6";
        } else {
            image.src = el.Poster;
        }

        let tit = document.createElement("h3");
        tit.innerHTML = el.Title;
        let type = document.createElement("h3");
        type.innerHTML = `Category ${el.Type}`;
        let saal = document.createElement("p");
        saal.innerHTML = `Release year--${el.Year}`;
        // console.log(el.Title);
        let rating = document.createElement("h4");
        rating.innerHTML = `IMDB rating ${el.imdbRating}`;

        card.append(image, tit, type, saal);
        document.querySelector("#show").append(card);
    });
}

function debounceFunction(fun, delay) {

    if (id) {
        clearTimeout(id)
    }
    id = setTimeout(function () {
        fun()
    }, delay)


}