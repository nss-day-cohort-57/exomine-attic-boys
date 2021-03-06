import { FacilitiesHTML } from "./Facilities.js";
import { MineralsHTML } from "./Minerals.js";
import { GovernorsHTML } from "./Governors.js";
import { CartHTML } from "./Cart.js";
import { ColonyResourcesHTML } from "./ColonyResources.js";

export const RenderHTML = () => {
    return `
    <header class="titleHeader">
      <h1 class="title">Solar System Mining Marketplace</h1>
    </header>
    <article class="govColContainer">
        <section class="governorsDropdownContainer">
            <h3>Choose a governor</h3>
            ${GovernorsHTML()}
        </section>


        <section class="colonyMineralsContainer">
            <h3>Colony Minerals</h3>
        </section>
    </article>
    <article class="facilitiesDropdownContainer">
    <h3 style="text-align: start;">Choose a facility</h3>
    <select name="facility"><option value="0">Choose a facility</option></select>
    </article>
    <div id="fac-cart">
    <article class="mineralOptionsContainer"><h3>Facility Minerals</h3></article>
    
    <article class="cartContainer">
        <h3>Space Cart</h3>
        <section class="itemsInCart">
       
        </section>
        <button id="buyButton">Purchase Mineral</button>
    </article>
    </div>
    `;
};