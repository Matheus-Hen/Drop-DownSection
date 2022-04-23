var button_Feat = document.getElementById("Company");
var AreaSecoesFeat = document.getElementById("Seçoes_Company")
var logoUp = document.createElement("img")
logoUp.src = "./images/icon-arrow-up.svg"
button_Feat.addEventListener("mouseover", Abre, false);
button_Feat.addEventListener("mouseout", Fecha, false)

function Abre() {
    var Comp = document.getElementById("Company")
    var SecComp = document.getElementById("Seçoes_Company");
    var SecCompStyle = SecComp.style
    document.getElementById("Button_Company").style.visibility = "collapse"
    document.getElementById("Seçoes_Company").style.display = "block"
    Comp.style.backgroundImage = "url(./images/icon-arrow-up.svg)"
    Comp.style.backgroundRepeat = "no-repeat"
    Comp.style.backgroundPositionX = "80px"
    Comp.style.backgroundPositionY = "5px"
    Comp.style.cursor = "pointer"

    document.getElementById("DivHistory").style.cursor = "pointer"
    document.getElementById("DivOurTeam").style.cursor = "pointer"
    document.getElementById("DivBlog").style.cursor = "pointer"

    SecCompStyle.display = "block"
    SecCompStyle.position = "absolute"
    SecCompStyle.cursor = "default"
    SecCompStyle.zIndex = "9999"
    SecCompStyle.height = "130px"
    SecCompStyle.width = "150px"
    SecCompStyle.borderRadius = "5px"
    SecCompStyle.background = "white"
    SecCompStyle.textAlign = "center"
    SecCompStyle.borderColor = "white"
    SecCompStyle.boxShadow = "15px 15px 30px #bebebe"
}
function Fecha() {
    document.getElementById("Seçoes_Company").style.display = "none"
    document.getElementById("Company").style.backgroundImage = "none"
    document.getElementById("Button_Company").style.visibility = "visible"
}