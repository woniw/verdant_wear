// <div class="full_example_item">
//     <div class="example_item_stat">
//         <img class="example_item_image" src="/assets/home_page_card_images/green_vest.avif" alt="">
//         <div class="example_item_details">
//             <label class="example_item_details example_item_name">Green Vest</label><br>
//             <label class="example_item_details example_item_price">Price: $29.99</label><br>
//             <label class="example_item_details example_item_size">Size: Medium</label>
//         </div>
//         <div class="remove_item_container">
//             <button class="button-style">Remove</button>
//         </div>
//         </div class="example_item_numerical_container">
//             <label class="stats quantity">1</label>
//             <label class="stats price">$29.99</label>
//         </div>
//     </div>
// </div>
const cart_item_container = document.getElementById("cart_item_container")

function add_item_to_cart(img_path, item_name, item_size, item_price, item_quantity) {    
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
    
    cart_item_container.appendChild(full_div_container);
    full_div_container.appendChild(item_stat_div_container);

    item_stat_div_container.appendChild(item_image);
    item_stat_div_container.appendChild(item_detail_container);
    item_stat_div_container.appendChild(remove_item_container);
    item_stat_div_container.appendChild(numerical_item_container);

    item_detail_container.appendChild(item_name_label);
    item_detail_container.appendChild(item_price_label);
    item_detail_container.appendChild(item_size_label);
    numerical_item_container.appendChild(item_quantity_label);
    numerical_item_container.appendChild(item_price_label_2);
}

add_item_to_cart("/assets/home_page_card_images/green_vest.avif", "test", "large", 29.99, 2)