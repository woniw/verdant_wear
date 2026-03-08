import { add_user_data } from '/utils/new_user.js';
import { add_to_cart } from '/utils/add_to_cart.js';
let data = JSON.parse(localStorage.getItem("user_data"));
let add_nike_cart = document.getElementById("add_nike_cart");
let add_blue_hoodie = document.getElementById("add_blue_hoodie");
let add_jeans = document.getElementById("Jeans");
let add_green_sweater = document.getElementById("Green_Sweater")


add_nike_cart.addEventListener("click", () => {add_to_cart("Nike")});
add_blue_hoodie.addEventListener("click", () => {add_to_cart("Blue Hoodie")});
add_jeans.addEventListener("click", () => {add_to_cart("Jeans")})
add_green_sweater.addEventListener("click", () => {add_to_cart("Green_Sweater")})

function recently_viewed_element_creation() {
    let recently_viewed_container = document.getElementById("recently_viewed_container")
    const recently_viewed_label_container = document.createElement("div")
    const recently_viewed_label = document.createElement("label")
    const recently_viewed_section = document.createElement("span")


    recently_viewed_label_container.classList = ["recently_viewed_label_container"]
    recently_viewed_label.classList = ["recently_viewed_label"]
    recently_viewed_section.classList = ["recently_viewed_section"]


    recently_viewed_container.appendChild(recently_viewed_label_container)
    recently_viewed_label_container.appendChild(recently_viewed_label)  
    recently_viewed_container.appendChild(recently_viewed_section)


    recently_viewed_label.textContent = "Recently Viewed"

    return recently_viewed_section
}
function card_creation(recently_viewed_section, item_path, item_desc, item_name) {
    const ff_px_gap  = document.createElement("div")
    const item_card  = document.createElement("div")
    const item_image = document.createElement("img")
    const t_px_gap   = document.createElement("div")
    const card_title = document.createElement("label")
    const card_info = document.createElement("p")

    item_card.classList = ["card"]
    item_image.classList = ["recently_viewed_card_image"]
    card_title.classList = ["card_title"]

    t_px_gap.style.height = "10px";
    ff_px_gap.style.height = "50px";
    card_info.style.color = "#353535"

    recently_viewed_section.appendChild(ff_px_gap);
    recently_viewed_section.appendChild(item_card);
    item_card.appendChild(item_image)
    item_card.appendChild(t_px_gap)
    item_card.appendChild(card_title)
    item_card.appendChild(card_info)
    item_card.appendChild(t_px_gap)

    item_image.src = item_path
    card_info.textContent = item_desc
    card_title.textContent = item_name
}



console.log(localStorage)
if(!localStorage.getItem("hasRun")){ //if false/if it hasnt ran yet
    localStorage.setItem("hasRun", "yes");
    add_user_data()
}
else if(localStorage){};
    
console.log(localStorage)
let clear_button = document.getElementById("clear_button")
clear_button.addEventListener("click", () => {
    // window.alert("clearing all user data")
    localStorage.clear()
})

if (data["recently_viewed"].length >= 1) {
    console.log("recently viewed label has reached an index of 1 or higher")
    let card_paramter_req = recently_viewed_element_creation()
} else {
    console.log("recently viewed label has not reached an index of 1 or higher")
}