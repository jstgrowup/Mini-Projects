document.getElementById("myForm").addEventListener("submit", myfun);
let huru = 0;
let image_data = [
  {
    image:
      "https://natashaskitchen.com/wp-content/uploads/2019/04/Best-Burger-4-500x375.jpg",
    id: "Burger",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFb2g1zDHMZeLb3yIWVBVh1P6Q-T_-OuVY9IAxV4XrzviTzqBPkGtWwB1YAcuG1ftD2r0&usqp=CAU",
    id: "Fries",
  },
  {
    image:
      "https://5.imimg.com/data5/SELLER/Default/2020/10/NY/NA/DL/17936098/600-ml-coca-cola-cold-drink-500x500.jpg",
    id: "Coke",
  },
  {
    image:
      "https://media-cdn.tripadvisor.com/media/photo-s/0e/a0/60/f3/salamina.jpg",
    id: "Pizza",
  },
];
function myfun() {
 let holo= document.querySelector("#number")
 holo.innerHTML=""
 holo.innerHTML="Your Order number is "+Math.floor(Math.random() * 400) + 1;
  let mainarr = [];
  event.preventDefault();
  let val = document.querySelectorAll("input");
  for (let i = 0; i < val.length; i++) {
    if (val[i].checked == true) {
      // console.log(val);
      mainarr.push(val[i].value);

      localStorage.setItem("data", JSON.stringify(mainarr));
    }
  }

  let here = document.querySelector("#here");
  function checkout() {
    return true;
  }
  let content = new Promise(function (resolve, reject) {
  
    setTimeout(function () {
      if (checkout()) {
        resolve("added");
      } else {
        reject("not");
      }
    }, 4000);
  });
  content.then(function (value) {
    here.innerHTML = "Your "+ mainarr + " is/are almost ready";
  });
  content.catch(function (value) {
    here.innerHTML = "no content";
  });

  let fufu = document.querySelector("#image");
  setTimeout(function () {
    //   console.log(image_data);

    fufu.innerHTML = "";
    for (let i = 0; i < image_data.length; i++) {
      for (let j = 0; j < mainarr.length; j++) {
        //   console.log(image_data[i].id,mainarr[j])
        if (image_data[i].id == mainarr[j]) {
          // console.log(image_data[i].id);

          console.log(mainarr[j]);
          let div = document.createElement("div");
          div.setAttribute("class", "cards");
          let img = document.createElement("img");
          img.src = image_data[i].image;
          div.append(img);
          fufu.append(div);
        }
      }
    }
  }, 4000);
}
