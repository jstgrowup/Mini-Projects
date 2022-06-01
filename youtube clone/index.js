let rec = async () => {
  const key = "AIzaSyA34gim9-Jn8EdkXgdgVu0yjyVc5egBO_A";
  let famurl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=100&regionCode=IN&key=${key}`;
  let res = await fetch(famurl);
  let data = await res.json();
  popdis(data.items);
};

rec();
let popdis = (data) => {
  document.querySelector(".display").innerHTML = null;
  console.log(data);
  data.forEach(
    ({
      id,
      snippet: {
        title,
        thumbnails: {
          default: { url },
        },
      },
    }) => {
      let div = document.createElement("div");
      div.setAttribute("class", "cards");
      let img = document.createElement("img");
      img.src = url;
      img.setAttribute("class", "thumbnails");
      // let iframe = document.createElement("iframe");
      // iframe.src = `https://www.youtube.com/embed/${id}`;
      // iframe.allow = "fullscreen";
      let h3 = document.createElement("h3");
      h3.innerText = title;

      div.append(img, h3);

      let video = {
        title,
        id,
      };

      div.onclick = () => {
        playVideo(video);
        bigscr(video);
      };

      document.querySelector(".display").append(div);
    }
  );
};

let playVideo = (video) => {
  localStorage.setItem("video", JSON.stringify(video));
  window.location.href = "video.html";
};
//new syntax(ES6)
let searchVideos = async (q) => {
  const api_key = "AIzaSyA34gim9-Jn8EdkXgdgVu0yjyVc5egBO_A";
  try {
    let url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${q}&key=${api_key}`;

    let response = await fetch(url);
    let data = await response.json();

    return data.items;
  } catch {
    console.log("error");
  }
};
let myfun = async () => {
  let query = document.querySelector("#query").value;
  let x = searchVideos(query);
  let data = await x;
  display(data);
};

let display = (data) => {
  document.querySelector(".display").innerHTML = null;

  // console.log(data);
  // data.forEach((el) => { el.id.videoId/ el.snippet.title
  data.forEach(({ id: { videoId }, snippet: { title, thumbnails } }) => {
    let div = document.createElement("div");
    div.setAttribute("class", "cards");
    let iframe = document.createElement("iframe");
    iframe.src = `https://www.youtube.com/embed/${videoId}`;
    iframe.allow = "fullscreen";
   iframe.setAttribute("class", "thumbnails");
    let h3 = document.createElement("h3");
    h3.innerText = title;

    div.append(iframe, h3);

    let video = {
      title,
      videoId,
    };

    div.onclick = () => {
      playVideo(video);
    };

    document.querySelector(".display").append(div);
  });
};
