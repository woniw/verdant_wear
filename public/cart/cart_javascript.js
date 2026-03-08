import { clothing_list } from '../../utils/clothing.js'

let data = JSON.parse(localStorage.getItem("user_data"));
const cart_item_container = document.getElementById("cart_item_container");

function add_item_to_cart(img_path, item_name, item_size, item_price, item_quantity, item_remove_btn_id) {  
    const shopping_cart_item_divider = document.createElement("div");
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
    const br = document.createElement("br");
    
    shopping_cart_item_divider.classList.add("break");
    full_div_container.classList.add("full_example_item");
    item_stat_div_container.classList.add("example_item_stat");
    item_image.classList.add("example_item_image");
    item_detail_container.classList.add("example_item_details");
    item_name_label.classList.add("example_item_details", "example_item_name");
    item_price_label.classList.add("example_item_details", "example_item_price");
    item_size_label.classList.add("example_item_details", "example_item_size");
    remove_item_container.classList.add("remove_item_container");
    remove_button.classList.add("button-style");
    remove_button.id = item_remove_btn_id;
    numerical_item_container.classList.add("example_item_numerical_container");
    item_quantity_label.classList.add("stats", "quantity");
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
    item_detail_container.appendChild(item_size_label);
    item_detail_container.appendChild(br)
    item_detail_container.appendChild(remove_button)
    numerical_item_container.appendChild(item_quantity_label);
    numerical_item_container.appendChild(item_price_label_2);

    item_image.src = img_path;
    item_name_label.innerHTML = `${item_name}<br>`;
    item_price_label.innerHTML = `Price: ${item_price}<br>`;
    item_size_label.textContent = `Size: ${item_size}`;
    
    remove_button.textContent = "Remove";

    item_quantity_label.textContent = item_quantity;
    item_price_label_2.textContent = `$${item_price * item_quantity}`

}
for (let count = 0; count < data["cart"].length; count++) {
    let item_name = data["cart"][count];

    for (let count_2 = 0; count_2 < clothing_list.length; count_2++) {
        if (clothing_list[count_2]["name"] == item_name) {
            console.log(`Looking for ${item_name} || Found: ${clothing_list[count_2]["name"]}`)
            console.log("found!")
            let item_path = clothing_list[count_2]["img_path"];
            let item_price = clothing_list[count_2]["price"];
            let item_remove_btn_id = clothing_list[count_2]["item_remove_btn_id"];

            add_item_to_cart(item_path, item_name, "Medium", item_price, 2, item_remove_btn_id)
            
            document.getElementById(clothing_list[count_2]["item_remove_btn_id"]).addEventListener("click", () => {
                let item_index = data["cart"].indexOf(item_name)
                console.log(`Current Cart: ${data["cart"]}`)
                console.log(`Looking to remove number ${item_index}`)
            })
        }
        else if (clothing_list[count_2]["name"] != item_name) {
            console.log(`Looking for ${item_name} || Found: ${clothing_list[count_2]["name"]}`)
            console.log("item has not been found")
        }
    }
}
