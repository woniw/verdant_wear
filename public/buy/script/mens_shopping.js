import { locate_clothing } from "../../../utils/locate_clothing.js";

let view_beans_hoodie = document.getElementById("beans_hoodie_view");
let view_black_shirt_design = document.getElementById("black_shirt_design_view");
let view_black_suit = document.getElementById("black_suit_view");
let view_blue_button_up_shirt = document.getElementById("blue_button_up_shirt_view");
let view_blue_hoodie_view = document.getElementById("blue_hoodie_view");
let view_blue_suit = document.getElementById("blue_suit_view");
let view_nike = document.getElementById("nike_view");
let view_white_shirt_view = document.getElementById("white_shirt_view");
let view_black_shirt_view = document.getElementById("black_shirt_view");
let view_yellow_shirt = document.getElementById("yellow_shirt_view");
let view_mona_lisa_shirt = document.getElementById("mona_lisa_shirt_view");
let view_camo_shorts = document.getElementById("camo_shorts_view");
// not very pretty code :(
view_beans_hoodie.addEventListener("click", () => {locate_clothing("Beans Hoodie"); window.location.replace('/public/buy/view_item.html');})
view_black_shirt_design.addEventListener("click", () => {locate_clothing("Black Shirt With Design"); window.location.replace('/public/buy/view_item.html');})
view_black_suit.addEventListener("click", () => {locate_clothing("Black Suit"); window.location.replace('/public/buy/view_item.html');})
view_blue_button_up_shirt.addEventListener("click", () => {locate_clothing("Blue Button Up Shirt"); window.location.replace('/public/buy/view_item.html');})
view_blue_hoodie_view.addEventListener("click", () => {locate_clothing("view_blue_hoodie_view"); window.location.replace('/public/buy/view_item.html');})
view_blue_suit.addEventListener("click", () => {locate_clothing("Blue Suit"); window.location.replace('/public/buy/view_item.html');})
view_nike.addEventListener("click", () => {locate_clothing("Blue Suit"); window.location.replace('/public/buy/view_item.html');})
view_white_shirt_view.addEventListener("click", () => {locate_clothing("White Shirt"); window.location.replace('/public/buy/view_item.html');})
view_black_shirt_view.addEventListener("click", () => {locate_clothing("Black Shirt"); window.location.replace('/public/buy/view_item.html');})
view_yellow_shirt.addEventListener("click", () => {locate_clothing("Yellow Shirt"); window.location.replace('/public/buy/view_item.html');})
view_mona_lisa_shirt.addEventListener("click", () => {locate_clothing("Mona Lisa Shirt"); window.location.replace('/public/buy/view_item.html');})
view_camo_shorts.addEventListener("click", () => {locate_clothing("Camo Shorts"); window.location.replace('/public/buy/view_item.html');})
