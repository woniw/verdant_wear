import { clothing_list } from '../../utils/clothing.js'

let data = JSON.parse(localStorage.getItem("user_data"));
const cart_item_container = document.getElementById("cart_item_container");
let items_label = document.getElementById("items_label");
let subtotal_label = document.getElementById("subtotal_label");
let tax_label = document.getElementById("tax_label");
let shipping_label = document.getElementById("shipping_label");
let subtotal_int = 0
let item_int = 0
function add_item_to_cart(img_path, item_name, item_price, item_remove_btn_id) {  
    const shopping_cart_item_divider = document.createElement("div");
    const full_div_container = document.createElement("div");
    const item_stat_div_container = document.createElement("div");
    const item_image = document.createElement("img");
    const item_detail_container = document.createElement("div");
    const item_name_label = document.createElement("label");
    const item_price_label = document.createElement("label");
    const remove_item_container = document.createElement("div");
    const remove_button = document.createElement("button");
    const numerical_item_container = document.createElement("div");
    const item_price_label_2 = document.createElement("label");
    const br = document.createElement("br");
    
    shopping_cart_item_divider.classList.add("break");
    full_div_container.classList.add("full_example_item");
    item_stat_div_container.classList.add("example_item_stat");
    item_image.classList.add("example_item_image");
    item_detail_container.classList.add("example_item_details");
    item_name_label.classList.add("example_item_details", "example_item_name");
    item_price_label.classList.add("example_item_details", "example_item_price");
    remove_item_container.classList.add("remove_item_container");
    remove_button.classList.add("button-style");
    remove_button.id = item_remove_btn_id;
    numerical_item_container.classList.add("example_item_numerical_container");
    item_price_label_2.classList.add("stats", "price");

    cart_item_container.appendChild(shopping_cart_item_divider);
    cart_item_container.appendChild(full_div_container);
    full_div_container.appendChild(item_stat_div_container);

    item_stat_div_container.appendChild(item_image);
    item_stat_div_container.appendChild(item_detail_container);
    item_stat_div_container.appendChild(remove_item_container);
    item_stat_div_container.appendChild(numerical_item_container);

    item_detail_container.appendChild(item_name_label);
    item_detail_container.appendChild(br)
    item_detail_container.appendChild(item_price_label);
    item_detail_container.appendChild(br)
    item_detail_container.appendChild(remove_button)

    numerical_item_container.appendChild(item_price_label_2);

    item_image.src = img_path;
    item_name_label.innerHTML = `${item_name}<br>`;
    item_price_label.innerHTML = `Price: $${item_price}<br>`;
    
    remove_button.textContent = "Remove";

}
for (let count = 0; count < data["cart"].length; count++) {
    let item_name = data["cart"][count];

    let clothing_item = clothing_list.find(clothing => clothing["name"] === item_name);
    if (!clothing_item) continue

    let item_path = clothing_item["img_path"];
    let item_price = clothing_item["price"];
    let item_remove_btn_id = clothing_item["item_remove_btn_id"];

    add_item_to_cart(item_path, item_name, item_price, item_remove_btn_id);

    item_int = data["cart"].length
    items_label.innerHTML = item_int
    subtotal_int += item_price
    subtotal_label.innerHTML = `$${subtotal_int}`
    tax_label.innerHTML = `$${subtotal_int * 0.5}`
    shipping_label.innerHTML = `$${subtotal_int * 0.5 + 5}`

    let cart_index = count;

    let removeBtn = document.getElementById(item_remove_btn_id);
    if (removeBtn) {
        removeBtn.addEventListener("click", () => {
            data["cart"].splice(cart_index, 1);
            localStorage.setItem('user_data', JSON.stringify(data));
            window.location.reload();
        });
    }
}
