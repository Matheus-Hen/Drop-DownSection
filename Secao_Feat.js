var button_Feat = document.getElementById("Features");
var AreaSecoesFeat = document.getElementById("Seçoes_Features")
var logoUp = document.createElement("img")
logoUp.src = "./images/icon-arrow-up.svg"
button_Feat.addEventListener("mouseover", Abre, false);
button_Feat.addEventListener("mouseout", Fecha, false)

function Abre(){
    var Feat = document.getElementById("Features");
    var SecFeat = document.getElementById("Seçoes_Features");
    var SecFeatStyle = SecFeat.style;
    document.getElementById("Button_Features").style.visibility = "collapse"
    Feat.style.backgroundImage = "url(./images/icon-arrow-up.svg)"
    Feat.style.backgroundRepeat = "no-repeat"
    Feat.style.backgroundPositionX = "80px"
    Feat.style.backgroundPositionY = "5px"
    Feat.style.cursor = "pointer"

    document.getElementById("TodoList").style.cursor = "pointer"
    document.getElementById("Calendar").style.cursor = "pointer"
    document.getElementById("Reminders").style.cursor = "pointer"
    document.getElementById("Planning").style.cursor = "pointer"

    SecFeatStyle.display = "block"
    SecFeatStyle.position = "absolute"
    SecFeatStyle.zIndex = "9999"
    SecFeatStyle.cursor = "default"
    SecFeatStyle.height = "170px"
    SecFeatStyle.width = "150px"
    SecFeatStyle.borderRadius = "10px"
    SecFeatStyle.background = "white    "
    SecFeatStyle.textAlign = "center"
    SecFeatStyle.boxShadow = "15px 15px 30px #bebebe"
}
function Fecha(){
    document.getElementById("Seçoes_Features").style.display = "none"
    document.getElementById("Features").style.backgroundImage = "none"
    document.getElementById("Button_Features").style.visibility = "visible"
}