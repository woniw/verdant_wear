let data = {
    "recently_viewed": [],
    "cart": [],
    "current_viewing": {
        "item_name": "",
        "image_path": "",
        "item_description": "",
        "item_price": 0,
        "item_stock": 0
    },
    "filtered_clothes": []
}

export function add_user_data() {
    localStorage.setItem("user_data", JSON.stringify(data));
}
