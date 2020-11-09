let portfolioArr = [
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
        appName: "Weather Dashboard",
        imgName: "weatherDashboard",
        appUrl: "https://drewalvarez.github.io/HW-6-Weather-Dashboard/",
        appRepo: "https://github.com/DrewAlvarez/HW-6-Weather-Dashboard"
    },
    {
        appName: "Code Quiz",
        imgName: "codeQuiz",
        appUrl: "https://drewalvarez.github.io/HW-4-Code-Quiz/",
        appRepo: "https://github.com/DrewAlvarez/HW-4-Code-Quiz/"
    },
    {
        appName: "Work Day Scheduler",
        imgName: "workDayScheduler",
        appUrl: "https://drewalvarez.github.io/HW-5-Work_Day_Scheduler/",
        appRepo: "https://github.com/DrewAlvarez/HW-5-Work_Day_Scheduler/"
    },
    {
        appName: "Password Generator",
        imgName: "pwGenerator",
        appUrl: "https://drewalvarez.github.io/HW-3_Password-Generator/",
        appRepo: "https://github.com/DrewAlvarez/HW-3_Password-Generator/"
    },
    {
        appName: "Refractor/Accessibility Assignment",
        imgName: "hwRefractor",
        appUrl: "https://drewalvarez.github.io/HW-1-Refractory-Homework/",
        appRepo: "https://github.com/DrewAlvarez/HW-1-Refractory-Homework/"
    },
    {
        appName: "Template Engine",
        imgName: "teamImg",
        appUrl: "#",
        appRepo: "https://github.com/DrewAlvarez/HW-10-Template-Engine"
    }
]

var imageBank = $("#image-bank");

for(var i = 0; i < portfolioArr.length; i++){
    var linkEl = $("<div>").addClass("imageHov");
    var imageEl = $("<img>");

    linkEl.attr("href", portfolioArr[i].appUrl);
    imageEl.attr("class", "imgSize");
    imageEl.attr("src", "assets/img/"+ portfolioArr[i].imgName + ".png");
    linkEl.attr("title", portfolioArr[i].appName)
    linkEl.append(imageEl);
    imageBank.append(linkEl);
    let title = portfolioArr[i].appName
    let appBtn = portfolioArr[i].appUrl
    let repoBtn = portfolioArr[i].appRepo
    let imgEl = portfolioArr[i].imgName

    imageEl.on("click", function(){
        $(".modal-title").text(title)
        $("#modalImg").attr("src", "assets/img/"+ imgEl + ".png")
        $("#repoBtn").attr("href", repoBtn)
        $("#appBtn").attr("href", appBtn)
        $(".modal").modal("show")

    })


}