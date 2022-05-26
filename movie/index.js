function myfun() {
    let filter = document.querySelector("#myInput").value;
    let url = `http://www.omdbapi.com/?apikey=cc21903c&s=${filter}`;

    fetch(url)
      .then(function (val) {
        return val.json();
      })
      .then(function (val) {
        // console.log(val);
        console.log(val.Search);

        if (val.Response == "False") {
          document.querySelector("#show").innerHTML = "";
          let img = document.createElement("img");
          img.setAttribute("id", "error");
          img.src = "https://i.makeagif.com/media/11-04-2015/mfnzwt.gif";
          document.querySelector("#show").append(img);
        } else {
          display(val.Search);
        }
      });
  }

  function display(data) {
    document.querySelector("#show").innerHTML = "";
    data.forEach(function (el) {
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

 
  
  