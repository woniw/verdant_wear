import { locate_clothing } from "../../../utils/locate_clothing.js";

let nike_view = document.getElementById("nike_view");

//view file elements
let view_item_image = document.querySelector("item_image");
let view_item_label = document.querySelector("item_label");
let view_description_text = document.querySelector("description_text");

nike_view.onclick = () => {
    locate_clothing("nike")
    window.location.replace("/public/buy/view_item.html")
}