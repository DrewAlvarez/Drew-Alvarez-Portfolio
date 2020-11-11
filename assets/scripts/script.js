const portArr = [
    {
        appName: "Movie Binge",
        imgName: "movieBinge",
        appUrl: "https://drewalvarez.github.io/Project-Movie-Binge/",
        appRepo: "https://github.com/DrewAlvarez/Project-Movie-Binge"
    },
    {
        appName: "Pizza Claw",
        imgName: "pizzaClaw",
        appUrl: "https://pizzaclawdrew.herokuapp.com/",
        appRepo: "https://github.com/Feda2020/Project2"
    },
    {
        appName: "Coming Soon",
        imgName: "project3temp",
        appUrl: "#",
        appRepo: "#"
    }
]
const carousel = $(".carousel-inner")

for(var i = 0; i < portArr.length; i++){
    let carouselItem = $("<div>");
    let carouselImage = $("<img>");

    if(i===0){
        carouselItem.attr("class", "carousel-item active")
    }else{
        carouselItem.attr("class", "carousel-item")
    }

    
    carouselImage.attr("src", "assets/img/"+ portArr[i].imgName + ".png");
    carouselImage.attr("class", "d-block w-100 carouselImg")
    carouselImage.attr("title", portArr[i].appName)
    carouselItem.append(carouselImage)
    carousel.append(carouselItem)
    let title = portArr[i].appName
    let appBtn = portArr[i].appUrl
    let repoBtn = portArr[i].appRepo
    let imgEl = portArr[i].imgName

    carouselImage.on("click", function(){
        $(".modal-title").text(title)
        $("#modalImg").attr("src", "assets/img/"+ imgEl + ".png")
        $("#repoBtn").attr("href", repoBtn)
        $("#appBtn").attr("href", appBtn)
        $(".modal").modal("show")

    })


}
