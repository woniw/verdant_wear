import { clothing_list } from './clothing.js'

export function locate_clothing(item) {
    console.log("|----------  LOCATE CLOTHING SCRIPT ----------|")
    console.log(`Clothing list index amount: ${clothing_list.length}`)
    let data = JSON.parse(localStorage.getItem("user_data"))
    for (let count = 1; count < clothing_list.length; count++) {        
        if (clothing_list[count]["name"] == item) {
            console.log("item found");
            //clothing data
            console.log(clothing_list[count]["name"])
            console.log(clothing_list[count]["description"])
            console.log(clothing_list[count]["img_path"])
            console.log(clothing_list[count]["price"])
            console.log(clothing_list[count]["stock"])
            
            data["current_viewing"]["item_name"] = clothing_list[count]["name"];
            data["current_viewing"]["description"] = clothing_list[count]["description"];
            data["current_viewing"]["img_path"] = clothing_list[count]["img_path"];
            data["current_viewing"]["price"] = clothing_list[count]["price"];
            data["current_viewing"]["item_stock"] = clothing_list[count]["stock"]

            localStorage.setItem("user_data", JSON.stringify(data));
            console.log(data)
        console.log("|--------------------|")      
        }
    }
}