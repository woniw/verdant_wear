import { locate_clothing } from "../../../utils/locate_clothing.js";

let view_nike = document.getElementById("nike_view");

view_nike.addEventListener("click", () => {
    locate_clothing("nike");
    window.location.replace('/public/buy/view_item.html');
    }
)