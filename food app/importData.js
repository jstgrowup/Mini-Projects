let fun=async(url,query)=>{
  let res=await fetch(url)
  let data=await res.json()
  return data
}

let display=(data,div)=>{
    data.forEach((el)=>{

          let Sdiv=document.createElement("div")
          let p1=document.createElement("p")
          p1.innerHTML=el.strArea
          let p2=document.createElement("p")
          p2.innerHTML=el.strCategory
          let p3=document.createElement("p")
          p3.innerHTML=el.strIngredient1
          let p4=document.createElement("p")
          p4.innerHTML=el.strIngredient2
          let p5=document.createElement("p")
          p5.innerHTML=el.strIngredient3
          let p6=document.createElement("p")
          p6.innerHTML=el.strIngredient4
          let p7=document.createElement("p")
          p7.innerHTML=el.strIngredient5
          let p8=document.createElement("p")
          p8.innerHTML=el.strIngredient6
          let p9=document.createElement("p")
          p9.innerHTML=el.strIngredient7
          let p10=document.createElement("p")
          p10.innerHTML=el.strIngredient8
          
          let m1=document.createElement("p")
          m1.innerHTML=el.strMeasure1
          let m2=document.createElement("p")
          m2.innerHTML=el.strMeasure2
          let m3=document.createElement("p")
          m3.innerHTML=el.strMeasure3
          let m4=document.createElement("p")
          m4.innerHTML=el.strMeasure4
          let m5=document.createElement("p")
          m5.innerHTML=el.strMeasure5
        Sdiv.append(p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,m1,m2,m3,m4,m5)
         div.append(Sdiv)
    })
}

export {fun,display}