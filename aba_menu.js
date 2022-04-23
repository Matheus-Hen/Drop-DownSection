var menu = document.getElementById("IMGMenu");
var menu2 = document.getElementById("IMGLogoDoMenu")
menu.addEventListener("click", Abre, false)
menu2.addEventListener("click", Fecha, false)
function Abre() {
    var menu = document.getElementById("IMGMenu");
    var menuEscondido = document.getElementById("LogoSeparado");
    var menu2 = document.getElementById("IMGLogoDoMenu").style
    var SecStyle = document.getElementById("Seçoes").style
    var SecCat = document.getElementById("Categories").style
    var StyleMenu = menuEscondido.style;
    StyleMenu.display = "block"


    menu.style.display = "none"


    SecStyle.display = "flex"
    SecStyle.flexDirection = "column"
    SecStyle.justifyContent = "space-between"
    SecStyle.position = "absolute"
    SecStyle.top = "0px"
    SecStyle.right = "-50px"
    SecStyle.zIndex = "9999"
    SecStyle.width = "200px"
    SecStyle.height = "980px"
    SecStyle.borderRadius = "5px"
    SecStyle.background = "white"
    SecStyle.textAlign = "center"
    SecStyle.borderColor = "white"
    //SecStyle.webkitBoxShadow = "-50px 0px 50px 50px #000000; 
SecStyle.boxShadow = "-200px 0px 50px 50px rgba(0,0,0,0.64)";

    SecCat.alignSelf = "baseline"
    SecCat.height = "900px"
    SecCat.justifyContent = "flex-start"
    SecCat.display = "flex"
    SecCat.flexDirection = "column"


    menu2.display = "flex"
    menu2.width = "26px"
    menu2.height = "26px"
    menu.style.textAlign = "left"
}

function Fecha() {
    document.getElementById("LogoSeparado").style.display = "none"
    var menu2 = document.getElementById("IMGLogoDoMenu").style
    menu2.display = "none"

    var menu = document.getElementById("IMGMenu").style
    menu.display = "block"
}