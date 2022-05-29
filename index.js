// var Apikey="f69b3aa4"
 
 function searchMovie(){
    let movie=document.getElementById("movie").value
    let date= document.getElementById("date").value
      console.log(movie)

      let url=`http://www.omdbapi.com/?s=${movie}&apikey=f69b3aa4&y=${date}`

      async function getData(){
        try{
            let res= await fetch(url)
    
            //  console.log(res)
        
            let users= await res.json()
        
            // append(users)
            displayMovies(users.Search)
            // console.log(users.sear)
        }catch(err){
            console.log(err)
        }
     }
    
     getData()
 }

 function displayMovies(movie){

     console.log(movie)
      let div = document.createElement("div")
movie.forEach(elem => {
    let image=document.createElement("img")
      image.src=elem.Poster

      let title=document.createElement("p")
      title.innerHTML="Title:"+ elem.Title

      let year= document.createElement("p")
      year.innerText="Year:"+ elem.Year


      let ratings= document.createElement("p")
      ratings.innerText= "Ratings:"+ elem.imdbID


      div.append(image,title,year,ratings)
      document.querySelector("#container").append(div)

});
      

 }
 

