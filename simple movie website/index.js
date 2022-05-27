let movies = [
  {
    name: "KGF Chapter 2",
    release_date: "1st january",
    poster:
      "https://www.koimoi.com/wp-content/new-galleries/2022/05/kgf-chapter-2-box-office-all-languages-detailed-analysis-of-profits-made-by-yash-starrer-0001.jpg",
    IMDB: 7.4,
  },
  {
    name: "AVATAR:The Way of Water",
    release_date: "5th january",
    poster:
      "https://www.aroged.com/wp-content/uploads/2022/04/The-sequel-to-Avatar-will-be-called-Avatar-The-Way.jpg",
    IMDB: 8.8,
  },
  {
    name: "The Northman",
    release_date: "7th january",
    poster:
      "https://variety.com/wp-content/uploads/2021/12/The-Northman.jpg?w=1000",
    IMDB: 7.5,
  },
  {
    name: "The Batman",
    release_date: "10th january",
    poster:
      "https://images.hindustantimes.com/img/2022/03/04/1600x900/the_batman_review_1646365281127_1646365281244.jpeg",
    IMDB: 9.9,
  },
  {
    name: "The Lost City",
    release_date: "12th january",
    poster:
      "https://s3.amazonaws.com/static.rogerebert.com/uploads/review/primary_image/reviews/the-lost-city-movie-review-2022/the-lost-city-movie-review-2022.jpeg",
    IMDB: 7.7,
  },
  {
    name: "Everything Everywhere All at Once",
    release_date: "13th january",
    poster:
      "https://static01.nyt.com/images/2022/04/07/arts/everything-anatomy1/everything-anatomy1-superJumbo.jpg",
    IMDB: 6.8,
  },
  {
    name: "Top Gun: Maverick",
    release_date: "14th january",
    poster: "https://i.ytimg.com/vi/giXco2jaZ_4/maxresdefault.jpg",
    IMDB: 5.5,
  },
  {
    name: "Firestarter",
    release_date: "16th january",
    poster:
      "https://dx35vtwkllhj9.cloudfront.net/universalstudios/firestarter/images/regions/us/share.png",
    IMDB: 7.8,
  },
  {
    name: "Senior Year",
    release_date: "2nd feb",
    poster:
      "https://www.theilluminerdi.com/wp-content/uploads/2022/04/SY-1280x640.png?ezimgfmt=rs:371x185/rscb1/ng:webp/ngcb1",
    IMDB: 8.8,
  },
];

let i = 0;
let slido = document.querySelector("#slideshow");
display(movies);
goru(movies);
function display(data) {
  const guru = document.createElement("img");
  guru.setAttribute("src", data[0].poster);
  slido.append(guru);
  i++;

  setInterval(function () {
    if (i === data.length) {
      i = 0;
    }
    slido.innerHTML = null;

    const huru = document.createElement("img");
    huru.setAttribute("src", data[i].poster);
    slido.append(huru);
    i++;
  }, 2000);
}
function goru(data) {
  document.querySelector("#movies").innerHTML = "";
  data.forEach(function (el) {
    const cards = document.createElement("div");
    cards.setAttribute("class", "huru");
    const images = document.createElement("img");
    images.setAttribute("src", el.poster);

    const name = document.createElement("h3");
    name.innerHTML = el.name;
    const release = document.createElement("h4");
    release.innerHTML = "Releasing On--" + el.release_date;

    const imdb = document.createElement("p");

    imdb.innerHTML = "IMDB--" + el.IMDB;

    cards.append(images, name, release, imdb);
    document.querySelector("#movies").append(cards);
  });
}
document.querySelector("#sort-lh").addEventListener("click", myfun);
document.querySelector("#sort-hl").addEventListener("click", mynegative);
function myfun() {
  movies.sort(function (a, b) {
    if (a.IMDB < b.IMDB) {
      return -1;
    } else {
      return 1;
    }
    return 0;
  });
  goru(movies);
}
function mynegative() {
  movies.sort(function (a, b) {
    if (a.IMDB < b.IMDB) {
      return 1;
    } else {
      return -1;
    }
    return 0;
  });
  goru(movies);
}
