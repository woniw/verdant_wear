import { clothing_list } from '../../../utils/clothing.js';
import { locate_clothing } from "../../../utils/locate_clothing.js";

let data = JSON.parse(localStorage.getItem("user_data"));
localStorage.setItem("user_data", JSON.stringify(data));

function card_creation(item_path, item_desc, item_name, item_view_id) {
    let product_section = document.getElementById("product_section");
    const ff_px_gap  = document.createElement("div");
    const item_card  = document.createElement("div");
    const item_image = document.createElement("img");
    const t_px_gap   = document.createElement("div");
    const card_title = document.createElement("label");
    const card_info = document.createElement("p");

    item_card.id = item_view_id;
    item_card.classList = ["card"];
    item_image.classList = ["trending_card_image"];
    card_title.classList = ["card_title"];

    t_px_gap.style.height = "10px";
    ff_px_gap.style.height = "50px";
    card_info.style.color = "#353535";

    product_section.appendChild(item_card);
    item_card.appendChild(item_image);
    item_card.appendChild(t_px_gap);
    item_card.appendChild(card_title);
    item_card.appendChild(card_info);
    item_card.appendChild(t_px_gap);
    product_section.appendChild(ff_px_gap);

    item_image.src = item_path;
    card_info.textContent = item_desc;
    card_title.textContent = item_name;

    return item_card;
}

data["filtered_clothes"].forEach(item_name => {
    let clothing_item = clothing_list.find(clothing => clothing["name"] === item_name);
    if (!clothing_item) return;

    let item_card = card_creation(
        clothing_item["img_path"],
        clothing_item["description"],
        item_name,
        clothing_item["view"]
    );

    item_card.addEventListener("click", () => {
        data["current_viewing"] = {
            "item_name": clothing_item["name"],
            "img_path": clothing_item["img_path"],
            "description": clothing_item["description"],
            "price": clothing_item["price"],
            "stock": clothing_item["stock"],
            "view": clothing_item["view"]
        };
        data["filtered_clothes"] = [];
        localStorage.setItem("user_data", JSON.stringify(data));
        window.location.replace('/public/buy/view_item.html');
    });
});
