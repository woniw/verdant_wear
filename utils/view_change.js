import { clothing_list } from '../../../utils/clothing.js';
import { locate_clothing } from "../../../utils/locate_clothing.js";
import { add_to_cart } from '/utils/add_to_cart.js';

let data = JSON.parse(localStorage.getItem("user_data"));

if (!data["current_viewing"]) {
    data["current_viewing"] = {};
    localStorage.setItem("user_data", JSON.stringify(data));
}

let current_item_name = data["current_viewing"]["item_name"];

if (!data["recently_viewed"]) data["recently_viewed"] = [];

let rv_list = data["recently_viewed"];
let item_index = rv_list.indexOf(current_item_name);

if (rv_list["length"] >= 4) {
    rv_list.splice(item_index, 1);
    rv_list.push(current_item_name);
    localStorage.setItem("user_data", JSON.stringify(data));
} else {
    rv_list.push(current_item_name);
    localStorage.setItem("user_data", JSON.stringify(data));
}

data["recently_viewed"] = rv_list;

let clothing_item = null;
for (let count = 0; count < clothing_list["length"]; count++) {
    if (clothing_list[count]["name"] === current_item_name) {
        clothing_item = clothing_list[count];
    }
}

if (!clothing_item) {
    console.log(`Item not found in clothing_list: ${current_item_name}`);
} else {
    let view_item_image = document.getElementById("item_image");
    let view_item_label = document.getElementById("item_label");
    let view_description_text = document.getElementById("description_text");
    let view_price_label = document.getElementById("price_label");
    let view_stock_label = document.getElementById("stock_label");
    let add_to_cart_btn = document.getElementById("add-to-cart");

    view_item_image.src = clothing_item["img_path"];
    view_item_label.textContent = clothing_item["name"];
    view_description_text.textContent = clothing_item["description"];
    view_price_label.textContent = `Price: $${clothing_item["price"]}`;
    view_stock_label.textContent = `Stock: ${clothing_item["stock"]}`;

    add_to_cart_btn.addEventListener("click", () => {
        add_to_cart(clothing_item["name"])
    });
}
