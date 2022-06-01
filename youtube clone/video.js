let data = JSON.parse(localStorage.getItem("video"))

let display = (data) => {
    console.log(data);
    if (data.id) {
        let uid = data.id
        let iframe = document.createElement("iframe");
        iframe.src = `https://www.youtube.com/embed/${uid}`;
        iframe.allow = "fullscreen";
        let title = document.createElement("h2")
        title.innerHTML = data.title
        document.querySelector("#fullvideo").append(iframe, title)
    }
    else if (data.videoId) {
        let uid = data.videoId
        let iframe = document.createElement("iframe");
        iframe.src = `https://www.youtube.com/embed/${uid}`;
        iframe.allow = "fullscreen";
        let title = document.createElement("h2")
        title.innerHTML = data.title
        document.querySelector("#fullvideo").append(iframe, title)
    }

}
display(data)