// var Apikey="f69b3aa4"
 
 function searchMovie(){
    let movie=document.getElementById("movie").value
    let date= document.getElementById("date").value
      console.log(movie)

      let url=`http://www.omdbapi.com/?t=${movie}&apikey=d5c826c7&y=${date}`

      async function getData(){
        try{
            let res= await fetch(url)
    
            //  console.log(res)
        
            let users= await res.json()
        
            // append(users)
            displayMovies(users)
            console.log(users)
        }catch(err){
            console.log(err)
        }
     }
    
     getData()
 }

 function displayMovies(movie){
      let div = document.createElement("div")

      let image=document.createElement("img")
      image.src=movie.Poster

      let title=document.createElement("p")
      title.innerHTML="Title:"+ movie.Title

      let year= document.createElement("p")
      year.innerText="Year:"+ movie.Year

      let released= document.createElement("p")
      released.innerText="Released:"+ movie.Released


      div.append(image,title,year,released)
      document.querySelector("#container").append(div)


 }
 

