export function add_to_cart(item_name) {
    let data = JSON.parse(localStorage.getItem("user_data"));
    if (data['cart'].includes(item_name)) {}
    else {
    data['cart'].push(item_name);
    console.log(`${item_name} has been added to cart`)
    localStorage.setItem("user_data", JSON.stringify(data))
    }
}