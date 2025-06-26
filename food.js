document.getElementById("searchButton").addEventListener("click", function () {
    console.log("Search button clicked");

    // Get input values (trimmed for better accuracy)
    const spices = document.getElementById("spices").value.trim() !== "";
    const vegetables = document.getElementById("vegetables").value.trim() !== "";
    const dairy = document.getElementById("dairy").value.trim() !== "";
    const grains = document.getElementById("grains").value.trim() !== "";
    const fruits = document.getElementById("fruits").value.trim() !== "";
    const proteins = document.getElementById("proteins").value.trim() !== "";
    const sauces = document.getElementById("sauces").value.trim() !== "";
    const bread = document.getElementById("bread").value.trim() !== "";
    const pulses = document.getElementById("pulses").value.trim() !== "";

    let recipeSuggestions = [];

    // --- Existing Recipes ---
    if (spices && vegetables && dairy) {
        recipeSuggestions.push({
            name: "Spicy Veggie Curry",
            description: "A flavorful curry made with your favorite spices and vegetables.",
            image: "https://images.immediate.co.uk/production/volatile/sites/30/2022/06/Courgette-curry-c295fa0.jpg",
            link: "https://www.recipetineats.com/vegetable-curry/"
        });
    }

    if (proteins && grains && vegetables) {
        recipeSuggestions.push({
            name: "Protein-Packed Stir Fry",
            description: "A healthy stir-fry using proteins, grains, and vegetables.",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjuuUXJx33aLtwT4bz2kwCUHPWHMoU2WxQcA&s",
            link: "https://kellyjonesnutrition.com/high-protein-vegan-stir-fry/"
        });
    }

    if (fruits && dairy) {
        recipeSuggestions.push({
            name: "Fruit & Yogurt Parfait",
            description: "A refreshing fruit and yogurt parfait, perfect for a snack.",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1elIOAfIlnXRDby_LITKMCCkQuqJ7bPKnhQ&s",
            link: "https://feelgoodfoodie.net/recipe/fruit-yogurt-parfait/"
        });
    }

    // --- New Recipes ---
    if (grains && vegetables) {
        recipeSuggestions.push({
            name: "Vegetable Pulao",
            description: "A fragrant rice dish cooked with spices and fresh vegetables.",
            image: "https://th.bing.com/th/id/OIP.0rUaUWEqxiaWgX2FPotp5AHaEK?rs=1&pid=ImgDetMain",
            link: "https://www.indianhealthyrecipes.com/pulao-recipe-veg-pulao-recipe/"
        });
    }

    if (bread && dairy) {
        recipeSuggestions.push({
            name: "Cheesy Garlic Bread",
            description: "Crispy garlic bread with melted cheese, perfect as a side dish.",
            image: "https://www.yellowblissroad.com/wp-content/uploads/2017/04/Cheesy-Garlic-Bread-10.jpg",
            link: "https://therecipecritic.com/cheesy-garlic-bread/"
        });
    }

    if (pulses && spices) {
        recipeSuggestions.push({
            name: "Dal Tadka",
            description: "A comforting lentil dish tempered with flavorful Indian spices.",
            image: "https://dailydish.co.uk/wp-content/uploads/2021/10/dal-tadka-instagram-1-scaled.jpg",
            link: "https://www.indianhealthyrecipes.com/dal-tadka/"
        });
    }

    if (proteins && sauces) {
        recipeSuggestions.push({
            name: "Soy Sauce Chicken",
            description: "Tender chicken cooked in a rich soy sauce glaze.",
            image: "https://th.bing.com/th/id/OIP.raBa6bR399vzuE5LbpPhJwHaJQ?w=720&h=900&rs=1&pid=ImgDetMain",
            link: "https://www.theendlessmeal.com/soy-sauce-chicken/"
        });
    }

    if (vegetables && dairy) {
        recipeSuggestions.push({
            name: "Palak Paneer",
            description: "A creamy spinach curry with soft paneer cubes, a North Indian favorite.",
            image: "https://littlespicejar.com/wp-content/uploads/2021/01/Best-Garlicky-Palak-Paneer-13-710x1065.jpg",
            link: "https://www.indianhealthyrecipes.com/palak-paneer-recipe-easy-paneer-recipes-step-by-step-pics/"
        });
    }

    if (fruits && grains) {
        recipeSuggestions.push({
            name: "Oats & Banana Smoothie Bowl",
            description: "A nutritious smoothie bowl topped with fresh fruits and nuts.",
            image: "https://th.bing.com/th/id/OIP.L2Plrf1n3WkKcBC57_wRdwHaHW?rs=1&pid=ImgDetMain",
            link: "https://www.seiskamimura.com/home/banana-oat-smoothie-bowl"
        });
    }

    if (bread && sauces) {
        recipeSuggestions.push({
            name: "Chaat Style Pav",
            description: "Pav bread topped with spicy and tangy chutneys for a street food experience.",
            image: "https://i.ytimg.com/vi/0ysy36Td1jo/maxresdefault.jpg",
            link: "https://www.tarladalal.com/masala-pav--chaat-recipe--2814r"
        });
    }

    if (grains && dairy) {
        recipeSuggestions.push({
            name: "Creamy Masala Oats",
            description: "Spiced oats cooked with milk and veggies for a nutritious breakfast.",
            image: "https://www.sharmispassions.com/wp-content/uploads/2021/12/masala-oats4.jpg",
            link: "https://www.indianhealthyrecipes.com/masala-oats-recipe/"
        });
    }

    if (spices && grains && pulses) {
        recipeSuggestions.push({
            name: "Khichdi",
            description: "A one-pot dish made with lentils, rice, and spices—perfect for comfort food!",
            image: "https://holycowvegan.net/wp-content/uploads/2021/09/masala-khichdi-4.jpg",
            link: "https://www.indianhealthyrecipes.com/dal-khichdi-recipe/"
        });
    }

    if (proteins && bread && sauces) {
        recipeSuggestions.push({
            name: "Egg Sandwich",
            description: "A delicious and quick sandwich filled with eggs, spices, and sauces.",
            image: "https://images.media-allrecipes.com/userphotos/700787.jpg",
            link: "https://www.indianhealthyrecipes.com/egg-sandwich-recipe/"
        });
    }

    if (vegetables && proteins && dairy) {
        recipeSuggestions.push({
            name: "Vegetable Omelette",
            description: "A protein-rich omelette packed with fresh vegetables and cheese.",
            image: "https://th.bing.com/th/id/OIP.4_ewFFPIWkyNv-YQIsYpuwHaE8?rs=1&pid=ImgDetMain",
            link: "https://www.liveeatlearn.com/how-to-make-an-omelette/"
        });
    }

    if (fruits && dairy && grains) {
        recipeSuggestions.push({
            name: "Banana Pancakes",
            description: "Fluffy banana pancakes made with oats and milk—perfect for breakfast!",
            image: "https://th.bing.com/th/id/OIP.wmBw1K2KB7H7Kj7LBxva_gHaLH?rs=1&pid=ImgDetMain",
            link: "https://www.allrecipes.com/recipe/20334/banana-pancakes-i/"
        });
    }

    if (vegetables && pulses && spices) {
        recipeSuggestions.push({
            name: "Chole (Chickpea Curry)",
            description: "A rich and spicy chickpea curry cooked with flavorful Indian spices.",
            image: "https://th.bing.com/th/id/OIP.obmdei48J3UJT8HqyS-tUQHaE8?rs=1&pid=ImgDetMain",
            link: "https://www.cookwithmanali.com/punjabi-chole-chickpeas-curry/"
        });
    }

    // --- Default Recipe ---
    if (recipeSuggestions.length === 0) {
        recipeSuggestions.push({
            name: "No matching recipes found.",
            description: "Try selecting different ingredients.",
            image: "https://via.placeholder.com/400x300.png?text=No+Recipes+Found",
            link: "#"
        });
    }

    console.log("Recipes found:", recipeSuggestions);

    // --- Display Section ---
    const recipeSection = document.getElementById("recipeSuggestions");
    if (!recipeSection) {
        console.error("Element with ID 'recipeSuggestions' not found!");
        return;
    }

    recipeSection.innerHTML = "";
    recipeSuggestions.forEach(recipe => {
        const recipeElement = document.createElement("div");
        recipeElement.classList.add("recipe");
        recipeElement.innerHTML = `
            <h3>${recipe.name}</h3>
            <img src="${recipe.image}" alt="${recipe.name}">
            <p>${recipe.description}</p>
            <a href="${recipe.link}" target="_blank">View Recipe</a>
        `;
        recipeSection.appendChild(recipeElement);
    });
});
