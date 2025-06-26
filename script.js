const groceries = [
    { name: "Apples", quantity: "1 dozen", storeA: 249, storeB: 279, storeC: 239, image: "https://images.fineartamerica.com/images-medium-large/apples-in-a-bowl-lori-coleman.jpg" },
    { name: "Bananas", quantity: "1 dozen", storeA: 50, storeB: 45, storeC: 55, image: "https://th.bing.com/th/id/OIP.RRqW7Ijs1-NHLAOCxiMXLAHaE8?w=288&h=193&c=7&r=0&o=5&pid=1.7" },
    { name: "Carrots", quantity: "1kg", storeA: 60, storeB: 65, storeC: 55, image: "https://www.jessicagavin.com/wp-content/uploads/2019/02/carrots-benefits-social.jpg" },
    { name: "Tomatoes", quantity: "1kg", storeA: 80, storeB: 90, storeC: 75, image: "https://th.bing.com/th/id/OIP.almNbC0oefM7BNKQnQ1uRAHaEK?w=293&h=180&c=7&r=0&o=5&pid=1.7" },
    { name: "Milk", quantity: "1L", storeA: 60, storeB: 58, storeC: 65, image: "https://upload.wikimedia.org/wikipedia/commons/f/fc/004-soymilk.jpg" },
    { name: "Bread", quantity: "1 loaf", storeA: 40, storeB: 42, storeC: 38, image: "https://th.bing.com/th/id/OIP.3dVQtJtj6O_gy2Ht8WWR4AHaEy?w=269&h=180&c=7&r=0&o=5&pid=1.7" },
    { name: "Eggs", quantity: "1 dozen", storeA: 80, storeB: 85, storeC: 78, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY-xaLI2O1uW2bdVmZOTp1AobOBP8FPndn6g8SA2a8hz59InLdVnLQkiwsPaOhH-KjI-I&usqp=CAU" },
    { name: "Chicken", quantity: "1kg", storeA: 200, storeB: 210, storeC: 195, image: "https://th.bing.com/th?q=Cut+Up+Chicken&w=120&h=120&c=1&rs=1&qlt=90&cb=1&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247" },
    { name: "Rice", quantity: "1kg", storeA: 70, storeB: 68, storeC: 75, image: "https://th.bing.com/th/id/OIP.Sdp8FUbEa21cinA_itsGoAHaFj?w=307&h=184&c=7&r=0&o=5&pid=1.7" },
    { name: "Pasta", quantity: "500g", storeA: 90, storeB: 95, storeC: 85, image: "https://th.bing.com/th/id/OIP.nUXcqy9LL_PiMcuDy3GyKwHaJ4?w=189&h=252&c=7&r=0&o=5&pid=1.7" },
    { name: "Cheese", quantity: "200g", storeA: 250, storeB: 260, storeC: 240, image: "https://th.bing.com/th/id/OIP.SONFqB3o9qE_aIQwXPRp9AHaHa?w=170&h=180&c=7&r=0&o=5&pid=1.7" },
    { name: "Oranges", quantity: "1kg", storeA: 120, storeB: 130, storeC: 115, image: "https://th.bing.com/th/id/OIP.E2uBS1bFIK3-GRXyZdeDPAHaEK?w=321&h=180&c=7&r=0&o=5&pid=1.7" },
    { name: "Butter", quantity: "500g", storeA: 200, storeB: 205, storeC: 195, image: "https://th.bing.com/th/id/OIP.p72nqloxw2SVlLQ7AMSSUQHaFj?w=219&h=180&c=7&r=0&o=5&pid=1.7" },
    { name: "Yogurt", quantity: "500g", storeA: 90, storeB: 95, storeC: 85, image: "https://www.happysimpleliving.com/wp-content/uploads/2024/02/homemade-greek-yogurt-featured-500x500.jpg" },
    { name: "Coffee", quantity: "250g", storeA: 400, storeB: 420, storeC: 390, image: "https://th.bing.com/th/id/OIP.Y1zBUzvDdV9OgY9I6r9yeQHaEK?w=312&h=180&c=7&r=0&o=5&pid=1.7" },
    { name: "Tea", quantity: "250g", storeA: 150, storeB: 160, storeC: 140, image: "https://th.bing.com/th/id/OIP.Y1zBUzvDdV9OgY9I6r9yeQHaEK?w=312&h=180&c=7&r=0&o=5&pid=1.7" },
    { name: "Flour", quantity: "1kg", storeA: 100, storeB: 110, storeC: 95, image: "https://th.bing.com/th/id/OIP.-wZ4RSI6_okmk_0moIovZAHaFj?w=233&h=180&c=7&r=0&o=5&pid=1.7" },
    { name: "Sugar", quantity: "1kg", storeA: 50, storeB: 55, storeC: 45, image: "https://th.bing.com/th/id/OIP.y3WaMsn9Z3vEiDpCRMgtpgHaEK?w=275&h=180&c=7&r=0&o=5&pid=1.7" },
    { name: "Salt", quantity: "1kg", storeA: 25, storeB: 30, storeC: 22, image: "https://th.bing.com/th/id/OIP.5VvaqG7qioPXJc_g0CqA-QHaFk?w=226&h=180&c=7&r=0&o=5&pid=1.7" },
    { name: "Oil", quantity: "1L", storeA: 200, storeB: 210, storeC: 195, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1kY0GpkQtcjoEC9Nbh82iX7FRDr7LYTfcQg&s" },
    { name: "Honey", quantity: "500g", storeA: 350, storeB: 360, storeC: 340, image: "https://th.bing.com/th/id/OIP.cEWXCrwxTcJU0A84A3WJfAHaFY?w=267&h=194&c=7&r=0&o=5&pid=1.7" },
    { name: "Vinegar", quantity: "500ml", storeA: 90, storeB: 95, storeC: 85, image: "https://static.toiimg.com/thumb/msid-116995835,width-1280,height-720,resizemode-4/116995835.jpg" },
    { name: "Ketchup", quantity: "500g", storeA: 100, storeB: 110, storeC: 95, image: "https://th.bing.com/th/id/OIP.SowuqRdToCgIoHeCKZuG0QHaEK?w=326&h=183&c=7&r=0&o=5&pid=1.7" },
    { name: "Mustard", quantity: "250g", storeA: 90, storeB: 100, storeC: 85, image: "https://th.bing.com/th/id/OIP.p4VEKbdaPUDioSi4tauiowHaFj?w=252&h=189&c=7&r=0&o=5&pid=1.7" },
    { name: "Mayonnaise", quantity: "500g", storeA: 180, storeB: 190, storeC: 170, image: "https://th.bing.com/th/id/OIP.bS7TAocvsjkSaRfx3BKoUgHaFU?w=220&h=180&c=7&r=0&o=5&pid=1.7" },
];

// Populate the dropdown with grocery items
const selectElement = document.getElementById("grocery-select");
groceries.forEach(grocery => {
    let option = document.createElement("option");
    option.value = grocery.name;
    option.textContent = grocery.name;
    selectElement.appendChild(option);
});

// Compare prices and display results
document.getElementById("search-button").addEventListener("click", function () {
    const selectedItem = selectElement.value;
    const resultDiv = document.getElementById("comparison-result");

    if (!selectedItem) {
        resultDiv.innerHTML = "<p>Please select an item.</p>";
        return;
    }

    const grocery = groceries.find(item => item.name === selectedItem);
    if (!grocery) {
        resultDiv.innerHTML = "<p>Item not found.</p>";
        return;
    }

    let cheapestStore = "Store A";
    let cheapestPrice = grocery.storeA;

    if (grocery.storeB < cheapestPrice) {
        cheapestStore = "Store B";
        cheapestPrice = grocery.storeB;
    }
    if (grocery.storeC < cheapestPrice) {
        cheapestStore = "Store C";
        cheapestPrice = grocery.storeC;
    }

    resultDiv.innerHTML = `
        <div class="result-item" style="animation: bounce 0.5s ease-in-out;">
            <img src="${grocery.image}" alt="${grocery.name}">
            <div>
                <h2>${grocery.name} (${grocery.quantity})</h2>
                <p>Store A: ₹${grocery.storeA}</p>
                <p>Store B: ₹${grocery.storeB}</p>
                <p>Store C: ₹${grocery.storeC}</p>
                <h3 style="color:#FF69B4;">Cheapest: ${cheapestStore} - ₹${cheapestPrice}</h3>
            </div>
        </div>
    `;
});
document.getElementById("search-button").addEventListener("click", function () {
    const selectedItem = selectElement.value;
    const resultDiv = document.getElementById("comparison-result");

    if (!selectedItem) {
        resultDiv.innerHTML = "<p>Please select an item.</p>";
        return;
    }

    const grocery = groceries.find(item => item.name === selectedItem);
    if (!grocery) {
        resultDiv.innerHTML = "<p>Item not found.</p>";
        return;
    }

    let cheapestStore = "Store A";
    let cheapestPrice = grocery.storeA;

    if (grocery.storeB < cheapestPrice) {
        cheapestStore = "Store B";
        cheapestPrice = grocery.storeB;
    }
    if (grocery.storeC < cheapestPrice) {
        cheapestStore = "Store C";
        cheapestPrice = grocery.storeC;
    }

    resultDiv.innerHTML = `
        <div class="result-item" style="animation: bounce 0.5s ease-in-out; display: flex; flex-direction: column; align-items: center; padding: 20px; border: 2px solid #ffb6c1; border-radius: 10px; background-color: #fffaf0; box-shadow: 0px 4px 10px rgba(0,0,0,0.1);">
            <img src="${grocery.image}" alt="${grocery.name}" style="width:150px; border-radius: 10px; margin-bottom: 10px;">
            <h2 style="color: #ff69b4;">${grocery.name} (${grocery.quantity})</h2>
           
            <div style="width: 100%; text-align: center;">
                <p style="font-size: 18px;"><b>Store A:</b> ₹${grocery.storeA}</p>
                <p style="font-size: 18px;"><b>Store B:</b> ₹${grocery.storeB}</p>
                <p style="font-size: 18px;"><b>Store C:</b> ₹${grocery.storeC}</p>
            </div>

            <h3 style="color:#ff1493; margin-top: 10px;">Cheapest: ${cheapestStore} - ₹${cheapestPrice}</h3>

            <div style="display: flex; gap: 10px; margin-top: 15px;">
                <a href="storeA.html" target="_blank" style="text-decoration: none;">
                    <button style="background-color: #ff69b4; color: white; border: none; padding: 10px 15px; border-radius: 5px; cursor: pointer;">Visit Store A</button>
                </a>
                <a href="storeB.html" target="_blank" style="text-decoration: none;">
                    <button style="background-color: #ff69b4; color: white; border: none; padding: 10px 15px; border-radius: 5px; cursor: pointer;">Visit Store B</button>
                </a>
                <a href="storeC.html" target="_blank" style="text-decoration: none;">
                    <button style="background-color: #ff69b4; color: white; border: none; padding: 10px 15px; border-radius: 5px; cursor: pointer;">Visit Store C</button>
                </a>
            </div>
        </div>
    `;
});
