import { clothing_list } from '../../../utils/clothing.js'
import { add_to_cart } from '/utils/add_to_cart.js';

let data = JSON.parse(localStorage.getItem("user_data"));

function get_all_fitered_checkbox() {
    let user_filter = []
    let red_checkbox = document.getElementById("red_checkbox").checked;
    let blue_checkbox = document.getElementById("blue_checkbox").checked;
    let yellow_checkbox = document.getElementById("yellow_checkbox").checked;
    let green_checkbox = document.getElementById("green_checkbox").checked;
    let fashion_checkbox = document.getElementById("fashion_checkbox").checked;
    let comfort_checkbox = document.getElementById("comfort_checkbox").checked;
    let sports_checkbox = document.getElementById("sports_checkbox").checked;
    let on_sale_checkbox = document.getElementById("on_sale_checkbox").checked;
    let low_stock_checkbox = document.getElementById("low_stock_checkbox").checked;
    let holiday_checkbox = document.getElementById("holiday_checkbox").checked;

    if (red_checkbox) { user_filter.push("red") }
    if (blue_checkbox) {user_filter.push("blue")}
    if (yellow_checkbox) {user_filter.push("yellow")}
    if (green_checkbox) {user_filter.push("green")}
    if (fashion_checkbox) {user_filter.push("fashion")}
    if (comfort_checkbox) {user_filter.push("comfort")}
    if (sports_checkbox) {user_filter.push("sports")}
    if (on_sale_checkbox) {user_filter.push("on_sale")}
    if (low_stock_checkbox) {user_filter.push("low_stock")}
    if (holiday_checkbox) { user_filter.push("holiday") }
    
    return user_filter
}
filter_btn.addEventListener("click", () => {
    let user_filter = get_all_fitered_checkbox()
    console.log(user_filter)

    for (let count = 1; count < clothing_list.length; count++) {
        console.log(`Clothing attribute: ${clothing_list[count]["attribute"]}`)
        user_filter.forEach(filter_attribute => {
            if (clothing_list[count]["attribute"].includes(filter_attribute)) {
                console.log(`${clothing_list[count]["name"]} includes ${filter_attribute}`)
                if (data["filtered_clothes"].includes(clothing_list[count]["name"])) {
                    console.log("filtered item is already in list") 
                    window.location.replace('/public/buy/mens_shop_filtered.html')

                }
                else {
                    data["filtered_clothes"].push(clothing_list[count]["name"])
                    localStorage.setItem("user_data", JSON.stringify(data))
                    console.log(data)
                    window.location.replace('/public/buy/mens_shop_filtered.html')
                }
            }
        });
    }
})