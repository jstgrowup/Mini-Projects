let id;
async function searchChar(val) {
    try {
        let url = `https://swapi.dev/api/people/?search=${val}`
        let res = await fetch(url)
        let data = await res.json()
        return data.results

    }
    catch {
        console.log("something wrong");
    }
}


async function main() {
    let val = document.querySelector("#myin").value
   
    let response = searchChar(val)

    let data = await response
    console.log('data:', data)
    display(data)


}
function display(data) {
    document.querySelector("#searchbar").innerHTML = null
    data.forEach(function (el) {
        let name = document.createElement("p")
        name.innerHTML = el.name
         name.setAttribute("click",myfun)
        document.querySelector("#searchbar").append(name)

    })
    //  console.log('data:', data)


}
function debouce(fun, delay) {
    if (id) {
        clearTimeout(id)
    }
    id = setTimeout(function () {
        fun()
    }, delay)
}