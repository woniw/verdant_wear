import { locate_clothing } from "../../../utils/locate_clothing.js";


let data = JSON.parse(localStorage.getItem("user_data"));
const cart_item_container = document.getElementById("cart_item_container")

function add_item_to_cart(img_path, item_name, item_size, item_price, item_quantity) {  
    const shopping_cart_item_divider = document.createElement("div")
    const full_div_container = document.createElement("div");
    const item_stat_div_container = document.createElement("div");
    const item_image = document.createElement("img");
    const item_detail_container = document.createElement("div");
    const item_name_label = document.createElement("label");
    const item_price_label = document.createElement("label");
    const item_size_label = document.createElement("label");
    const remove_item_container = document.createElement("div");
    const remove_button = document.createElement("button");
    const numerical_item_container = document.createElement("div");
    const item_quantity_label = document.createElement("label");
    const item_price_label_2 = document.createElement("label");
    const line_break = document.createElement("br")
    
    shopping_cart_item_divider.classList.add("break")
    full_div_container.classList.add("full_example_item");
    item_stat_div_container.classList.add("example_item_stat");
    item_image.classList.add("example_item_image");
    item_detail_container.classList.add("example_item_details");
    item_name_label.classList.add("example_item_details", "example_item_name");
    item_price_label.classList.add("example_item_details", "example_item_price");
    item_size_label.classList.add("example_item_details", "example_item_size");
    remove_item_container.classList.add("remove_item_container");
    remove_button.classList.add("button-style");
    numerical_item_container.classList.add("example_item_numerical_container");
    item_quantity_label.classList.add("stats", "quantity");
    item_price_label_2.classList.add("stats", "price");

    cart_item_container.append(shopping_cart_item_divider)
    cart_item_container.appendChild(full_div_container);
    full_div_container.appendChild(item_stat_div_container);

    item_stat_div_container.appendChild(item_image);
    item_stat_div_container.appendChild(item_detail_container);
    item_stat_div_container.appendChild(remove_item_container);
    item_stat_div_container.appendChild(numerical_item_container);

    item_detail_container.appendChild(item_name_label);
    item_detail_container.appendChild(line_break)
    item_detail_container.appendChild(item_price_label);
    item_detail_container.appendChild(line_break)
    item_detail_container.appendChild(item_size_label);
    item_detail_container.appendChild(line_break)
    numerical_item_container.appendChild(item_quantity_label);
    numerical_item_container.appendChild(item_price_label_2);

    item_image.src = img_path;
    item_name_label.textContent = item_name;
    item_price_label.textContent = `Price: ${item_price}`;
    item_size_label.textContent = `Size: ${item_size}`;
    
    remove_button.textContent = "Remove";

    item_quantity_label.textContent = item_quantity;
    item_price_label_2.textContent = `$${item_price * item_quantity}`
}
for (let count = 0; count < data["cart"].length; count++) {
    locate_clothing(data["cart"][count]);

    item_name = data["current_viewing"]["item_name"]
    data["current_viewing"]["img_path"]
    data["current_viewing"]["price"]

    add_item_to_cart()
}