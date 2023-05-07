class FoodCard extends HTMLElement {
    constructor() {
        super();

        this.img = "";
        this.titlu = "";
        this.price = "";
        this.description = "";
    }

    connectedCallback() {
        this.img = this.getAttribute("img");
        this.titlu = this.getAttribute("titlu");
        this.price = this.getAttribute("price");
        this.description = this.getAttribute("description");

        this.render();
    }

    render() {
        this.innerHTML = `
            <img src="./${this.img}" alt="1" class="food-image">
            <div class="ingredients">
            <div class="details">
                <h5 class="details-title">${this.titlu}</h5>
                <h5 class="details-price">${this.price}</h5>
            </div>
            <p>${this.description}</p>
        </div>
    `;
        this.className="food";
    }
}

customElements.define("food-card", FoodCard);