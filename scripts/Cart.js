import { getCartMineral } from "./database"
import { getMinerals } from "./database"
import { executePurchase } from "./database";

document.getElementById("buyButton").addEventListener("click", () => {
    executePurchase();
});

export const CartHTML = () => {
    if (getCartMineral().id != -1) {
        const currMin = getMinerals().find(x => x.id == getCartMineral().id)
        return `<p class="cartmin">${currMin.name}</p>`;
    }
    return "";
}