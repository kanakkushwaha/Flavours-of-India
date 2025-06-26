const recipes = [
    {
      name: "Chocolate Mousse 🍫",
      category: "quick",
      img: "https://source.unsplash.com/featured/?chocolate,mousse",
      ingredients: ["1 cup heavy cream", "1/2 cup chocolate chips", "1 tbsp sugar"],
      steps: ["Melt chocolate.", "Whip cream and sugar.", "Fold chocolate into cream and chill."]
    },
    {
      name: "Chocolate Chip Cookies 🍪",
      category: "quick",
      img: "https://source.unsplash.com/featured/?cookies",
      ingredients: ["1 cup butter", "1 cup sugar", "2 cups flour", "1 cup chocolate chips"],
      steps: ["Cream butter and sugar.", "Add flour and chips.", "Bake at 350°F for 10-12 mins."]
    },
    {
      name: "Brownies 🍫",
      category: "quick",
      img: "https://source.unsplash.com/featured/?brownies",
      ingredients: ["1/2 cup butter", "1 cup sugar", "2 eggs", "1/3 cup cocoa powder", "1/2 cup flour"],
      steps: ["Mix all ingredients.", "Bake at 350°F for 20-25 mins.", "Cool before serving."]
    },
    {
      name: "Rice Pudding 🍚",
      category: "vegan",
      img: "https://source.unsplash.com/featured/?rice,pudding",
      ingredients: ["1/2 cup rice", "2 cups almond milk", "1/4 cup sugar", "1 tsp cinnamon"],
      steps: ["Cook rice in milk.", "Add sugar and cinnamon.", "Simmer until creamy."]
    },
    {
      name: "Lemon Bars 🍋",
      category: "quick",
      img: "https://source.unsplash.com/featured/?lemon,bars",
      ingredients: ["1 cup flour", "1/2 cup butter", "2 eggs", "1/2 cup lemon juice", "1 cup sugar"],
      steps: ["Make crust with flour and butter.", "Mix filling and pour on crust.", "Bake and cool."]
    },
    {
      name: "Banoffee Pie 🍌🥧",
      category: "no-bake",
      img: "https://source.unsplash.com/featured/?banoffee,pie",
      ingredients: ["Graham crust", "1 banana", "Caramel sauce", "Whipped cream"],
      steps: ["Layer banana and caramel on crust.", "Top with cream.", "Chill and serve."]
    },
    {
      name: "Apple Crisp 🍎",
      category: "quick",
      img: "https://source.unsplash.com/featured/?apple,crisp",
      ingredients: ["2 apples", "1/2 cup oats", "1/4 cup sugar", "Cinnamon"],
      steps: ["Slice apples and place in dish.", "Top with oat mixture.", "Bake at 375°F for 30 mins."]
    },
    {
      name: "Pudding Cups 🍮",
      category: "quick",
      img: "https://source.unsplash.com/featured/?pudding",
      ingredients: ["Instant pudding mix", "Milk", "Whipped cream"],
      steps: ["Prepare pudding with milk.", "Chill in cups.", "Top with whipped cream."]
    },
    {
      name: "No-Bake Cheesecake 🍰",
      category: "no-bake",
      img: "https://source.unsplash.com/featured/?cheesecake",
      ingredients: ["Graham cracker crust", "Cream cheese", "Sugar", "Whipped topping"],
      steps: ["Mix filling and pour on crust.", "Chill for 4 hours.", "Serve cold."]
    },
    {
      name: "Fudge 🍫",
      category: "no-bake",
      img: "https://source.unsplash.com/featured/?fudge",
      ingredients: ["2 cups chocolate chips", "1 can condensed milk", "1 tsp vanilla"],
      steps: ["Melt all ingredients.", "Pour into pan.", "Chill until firm."]
    },
    {
      name: "Cupcakes 🧁",
      category: "quick",
      img: "https://source.unsplash.com/featured/?cupcakes",
      ingredients: ["Cake mix", "Eggs", "Oil", "Water"],
      steps: ["Prepare batter.", "Fill liners.", "Bake at 350°F for 15-20 mins."]
    },
    {
      name: "Cinnamon Rolls 🍥",
      category: "quick",
      img: "https://source.unsplash.com/featured/?cinnamon,rolls",
      ingredients: ["Refrigerated dough", "Cinnamon", "Brown sugar", "Icing"],
      steps: ["Roll dough with filling.", "Slice and bake.", "Drizzle with icing."]
    },
    {
      name: "Sugar Cookies 🍬",
      category: "quick",
      img: "https://source.unsplash.com/featured/?sugar,cookies",
      ingredients: ["2 cups flour", "1 cup sugar", "1 egg", "1/2 cup butter"],
      steps: ["Mix dough.", "Cut shapes.", "Bake at 350°F for 10 mins."]
    },
    {
      name: "Coconut Macaroons 🥥",
      category: "no-bake",
      img: "https://source.unsplash.com/featured/?coconut,macaroons",
      ingredients: ["2 cups shredded coconut", "1 can condensed milk", "1 tsp vanilla"],
      steps: ["Mix all ingredients.", "Scoop onto sheet.", "Bake at 325°F for 15 mins."]
    },
    {
      name: "Marshmallow Treats 🍡",
      category: "quick",
      img: "https://source.unsplash.com/featured/?marshmallow,treats",
      ingredients: ["3 tbsp butter", "4 cups mini marshmallows", "6 cups cereal"],
      steps: ["Melt butter & marshmallows.", "Mix in cereal.", "Press into pan."]
    },
    {
      name: "Strawberry Shortcake 🍓",
      category: "quick",
      img: "https://source.unsplash.com/featured/?strawberry,shortcake",
      ingredients: ["Shortcake biscuits", "Strawberries", "Whipped cream"],
      steps: ["Slice berries.", "Layer with cream and biscuit.", "Serve chilled."]
    },
    {
      name: "Peach Cobbler 🍑",
      category: "quick",
      img: "https://source.unsplash.com/featured/?peach,cobbler",
      ingredients: ["1 can peaches", "1 cup sugar", "1 cup flour", "1 tsp baking powder"],
      steps: ["Pour peaches in pan.", "Top with mixed batter.", "Bake until golden."]
    },
    {
      name: "Lemon Sorbet 🍋",
      category: "vegan",
      img: "https://source.unsplash.com/featured/?lemon,sorbet",
      ingredients: ["1 cup lemon juice", "1 cup sugar", "2 cups water"],
      steps: ["Mix ingredients.", "Freeze, stirring every 30 mins.", "Serve frozen."]
    },
    {
      name: "Panna Cotta 🍮",
      category: "quick",
      img: "https://source.unsplash.com/featured/?pannacotta",
      ingredients: ["1 cup cream", "1/4 cup sugar", "1 tsp gelatin", "Vanilla"],
      steps: ["Heat cream & sugar.", "Add gelatin.", "Chill in molds."]
    },
    {
      name: "Mango Sticky Rice 🥭",
      category: "vegan",
      img: "https://source.unsplash.com/featured/?mango,sticky,rice",
      ingredients: ["1 cup sticky rice", "1 mango", "Coconut milk", "Sugar"],
      steps: ["Cook rice.", "Mix with sweet coconut milk.", "Top with mango slices."]
    },
    {
      name: "Pavlova 🍓",
      category: "quick",
      img: "https://source.unsplash.com/featured/?pavlova",
      ingredients: ["Egg whites", "Sugar", "Cornstarch", "Cream", "Fruit"],
      steps: ["Make meringue base.", "Bake and cool.", "Top with cream and fruit."]
    },
    {
      name: "Ice Cream Sundaes 🍨",
      category: "quick",
      img: "https://source.unsplash.com/featured/?icecream,sundae",
      ingredients: ["Ice cream", "Chocolate syrup", "Cherries", "Whipped cream"],
      steps: ["Scoop ice cream.", "Top with toppings.", "Serve immediately."]
    },
    {
      name: "Fried Ice Cream 🍦",
      category: "quick",
      img: "https://source.unsplash.com/featured/?fried,icecream",
      ingredients: ["Vanilla ice cream", "Cornflakes", "Cinnamon", "Oil"],
      steps: ["Freeze scoops.", "Coat in cornflakes.", "Quick fry and serve."]
    },
    {
      name: "Fruit Salad 🍍🍇",
      category: "vegan",
      img: "https://source.unsplash.com/featured/?fruit,salad",
      ingredients: ["Mixed fruits", "Honey", "Mint"],
      steps: ["Chop fruits.", "Drizzle honey.", "Top with mint."]
    },
    {
      name: "Fruit Parfait 🍓🥣",
      category: "quick",
      img: "https://source.unsplash.com/featured/?fruit,parfait",
      ingredients: ["Yogurt", "Granola", "Berries"],
      steps: ["Layer ingredients in cup.", "Serve immediately."]
    },
    {
      name: "Chocolate Covered Strawberries 🍓🍫",
      category: "no-bake",
      img: "https://source.unsplash.com/featured/?chocolate,strawberries",
      ingredients: ["Strawberries", "Melted chocolate"],
      steps: ["Dip strawberries in chocolate.", "Chill to set."]
    },
    {
      name: "Nutella Crepes 🌰🥞",
      category: "quick",
      img: "https://source.unsplash.com/featured/?nutella,crepes",
      ingredients: ["Crepes", "Nutella", "Banana slices"],
      steps: ["Spread Nutella on crepe.", "Add bananas.", "Fold and serve."]
    },
    {
      name: "Churros 🥖",
      category: "quick",
      img: "https://source.unsplash.com/featured/?churros",
      ingredients: ["1 cup flour", "1 cup water", "2 tbsp sugar", "Cinnamon", "Oil"],
      steps: ["Boil water with sugar.", "Add flour.", "Pipe and fry.", "Roll in cinnamon sugar."]
    },
    {
      name: "S'mores 🔥🍫",
      category: "no-bake",
      img: "https://source.unsplash.com/featured/?smores",
      ingredients: ["Graham crackers", "Marshmallows", "Chocolate"],
      steps: ["Stack chocolate and marshmallow between crackers.", "Microwave or toast.", "Enjoy!"]
    }
  ];
  recipes.push(
    {
      name: "Vegan Chocolate Cake 🌱🍫",
      category: "vegan",
      img: "https://source.unsplash.com/featured/?vegan,chocolate,cake",
      ingredients: ["1.5 cups flour", "1 cup sugar", "1/3 cup cocoa", "1 cup almond milk", "1/3 cup oil", "1 tsp vinegar"],
      steps: ["Mix all ingredients.", "Bake at 350°F for 30 mins.", "Cool and frost if desired."]
    },
    {
      name: "Blueberry Muffins 🫐",
      category: "quick",
      img: "https://source.unsplash.com/featured/?blueberry,muffins",
      ingredients: ["1.5 cups flour", "1/2 cup sugar", "1 egg", "1 cup blueberries", "1/2 cup milk", "1/4 cup butter"],
      steps: ["Mix dry & wet ingredients.", "Fold in blueberries.", "Bake at 375°F for 20 mins."]
    },
    {
      name: "Avocado Chocolate Pudding 🥑🍫",
      category: "vegan",
      img: "https://source.unsplash.com/featured/?avocado,pudding",
      ingredients: ["1 avocado", "1/4 cup cocoa", "1/4 cup maple syrup", "1/2 tsp vanilla"],
      steps: ["Blend all ingredients.", "Chill and serve."]
    },
    {
      name: "No-Bake Peanut Butter Bars 🥜",
      category: "no-bake",
      img: "https://source.unsplash.com/featured/?peanutbutter,bars",
      ingredients: ["1 cup peanut butter", "1 cup graham cracker crumbs", "1/2 cup sugar", "Chocolate topping"],
      steps: ["Mix base and press into pan.", "Pour melted chocolate.", "Chill and slice."]
    },
    {
      name: "Watermelon Pops 🍉",
      category: "vegan",
      img: "https://source.unsplash.com/featured/?watermelon,popsicle",
      ingredients: ["Watermelon slices", "Lime juice", "Mint"],
      steps: ["Stick popsicle sticks in watermelon.", "Freeze.", "Serve with mint and lime."]
    },
    {
      name: "Chocolate Banana Bites 🍌🍫",
      category: "no-bake",
      img: "https://source.unsplash.com/featured/?banana,chocolate",
      ingredients: ["Banana", "Chocolate chips", "Peanut butter"],
      steps: ["Slice banana.", "Sandwich with peanut butter.", "Dip in chocolate and chill."]
    },
    {
      name: "Oreo Truffles ⚫🍬",
      category: "no-bake",
      img: "https://source.unsplash.com/featured/?oreo,truffles",
      ingredients: ["Oreo cookies", "Cream cheese", "Chocolate coating"],
      steps: ["Crush Oreos and mix with cream cheese.", "Roll balls.", "Dip in chocolate and chill."]
    },
    {
      name: "Berry Smoothie Bowl 🍓🥣",
      category: "vegan",
      img: "https://source.unsplash.com/featured/?smoothie,bowl",
      ingredients: ["Frozen berries", "Banana", "Almond milk", "Granola", "Coconut flakes"],
      steps: ["Blend fruits with milk.", "Pour in bowl.", "Top with granola and coconut."]
    },
    {
      name: "Pumpkin Pie 🎃🥧",
      category: "quick",
      img: "https://source.unsplash.com/featured/?pumpkin,pie",
      ingredients: ["Pumpkin puree", "Pie crust", "Spices", "Condensed milk", "Eggs"],
      steps: ["Mix filling.", "Pour into crust.", "Bake at 350°F for 45 mins."]
    },
    {
      name: "Carrot Cake 🥕🍰",
      category: "quick",
      img: "https://source.unsplash.com/featured/?carrot,cake",
      ingredients: ["2 cups grated carrots", "1.5 cups flour", "1 cup sugar", "2 eggs", "1 tsp cinnamon"],
      steps: ["Mix all ingredients.", "Bake at 350°F for 30–35 mins.", "Frost with cream cheese."]
    },
    {
      name: "Date Energy Balls 🌰✨",
      category: "no-bake",
      img: "https://source.unsplash.com/featured/?date,energy,balls",
      ingredients: ["Dates", "Nuts", "Cocoa powder", "Coconut flakes"],
      steps: ["Blend all ingredients.", "Roll into balls.", "Chill before serving."]
    },
    {
      name: "Apple Nachos 🍎🧂",
      category: "quick",
      img: "https://source.unsplash.com/featured/?apple,snack",
      ingredients: ["Apple slices", "Peanut butter", "Chocolate drizzle", "Granola"],
      steps: ["Arrange apples.", "Drizzle toppings.", "Serve fresh."]
    },
    {
      name: "Mango Sorbet 🥭",
      category: "vegan",
      img: "https://source.unsplash.com/featured/?mango,sorbet",
      ingredients: ["2 cups mango chunks", "2 tbsp maple syrup", "1 tbsp lemon juice"],
      steps: ["Blend all ingredients.", "Freeze and scoop."]
    },
    {
      name: "Trail Mix Clusters 🥜🍫",
      category: "no-bake",
      img: "https://source.unsplash.com/featured/?trailmix,snack",
      ingredients: ["Trail mix", "Melted chocolate"],
      steps: ["Mix chocolate with trail mix.", "Scoop into clusters.", "Chill until firm."]
    },
    {
      name: "Frozen Yogurt Bark 🍓🍦",
      category: "quick",
      img: "https://source.unsplash.com/featured/?frozen,yogurt,bark",
      ingredients: ["Yogurt", "Fruit slices", "Honey", "Granola"],
      steps: ["Spread yogurt on tray.", "Top with fruit.", "Freeze and break into pieces."]
    },
    {
      name: "Raspberry Crumble Bars 🍇🍰",
      category: "quick",
      img: "https://source.unsplash.com/featured/?raspberry,bars",
      ingredients: ["1.5 cups oats", "1 cup flour", "1/2 cup sugar", "1/2 cup jam", "Butter"],
      steps: ["Press half crust into pan.", "Spread jam.", "Top with crumble and bake."]
    },
    {
      name: "Coconut Chia Pudding 🥥",
      category: "vegan",
      img: "https://source.unsplash.com/featured/?chia,pudding",
      ingredients: ["1 cup coconut milk", "1/4 cup chia seeds", "Maple syrup"],
      steps: ["Mix and refrigerate overnight.", "Stir and top with fruit."]
    },
    {
      name: "Chocolate Lava Cake 🍫🌋",
      category: "quick",
      img: "https://source.unsplash.com/featured/?lava,cake",
      ingredients: ["1/2 cup chocolate", "1/4 cup butter", "1/4 cup flour", "1/4 cup sugar", "1 egg"],
      steps: ["Melt chocolate and butter.", "Mix in rest.", "Bake for 12 mins at 425°F."]
    },
    {
      name: "Gingerbread Cookies 🎄",
      category: "quick",
      img: "https://source.unsplash.com/featured/?gingerbread,cookies",
      ingredients: ["2.5 cups flour", "1/2 cup molasses", "1 egg", "Spices", "1/2 cup butter"],
      steps: ["Make dough.", "Cut shapes.", "Bake and decorate."]
    },
    {
      name: "Pineapple Upside-Down Cake 🍍🍰",
      category: "quick",
      img: "https://source.unsplash.com/featured/?pineapple,cake",
      ingredients: ["Cake mix", "Pineapple rings", "Brown sugar", "Butter", "Cherries"],
      steps: ["Arrange pineapple and sugar in pan.", "Pour cake batter.", "Bake."]
    },
    {
      name: "Chocolate Tofu Mousse 🌱🍫",
      category: "vegan",
      img: "https://source.unsplash.com/featured/?tofu,mousse",
      ingredients: ["Silken tofu", "Melted chocolate", "Maple syrup", "Vanilla"],
      steps: ["Blend all ingredients.", "Chill before serving."]
    },
    {
      name: "Almond Butter Cups 🥜🍫",
      category: "no-bake",
      img: "https://source.unsplash.com/featured/?almondbutter,cups",
      ingredients: ["Almond butter", "Chocolate", "Coconut oil"],
      steps: ["Spoon almond butter into molds.", "Top with melted chocolate.", "Chill."]
    },
    {
      name: "Cherry Cobbler 🍒",
      category: "quick",
      img: "https://source.unsplash.com/featured/?cherry,cobbler",
      ingredients: ["Cherry pie filling", "Biscuit dough", "Sugar"],
      steps: ["Pour filling in dish.", "Top with biscuits.", "Bake until golden."]
    }
  );
  recipes.push(
    {
      name: "No-Bake S'mores Bites 🔥🍫",
      category: "no-bake",
      img: "https://source.unsplash.com/featured/?smores,dessert",
      ingredients: ["Graham crackers", "Mini marshmallows", "Chocolate chips", "Butter"],
      steps: ["Mix crushed crackers & butter.", "Add marshmallows and chips.", "Chill in mini cups."]
    },
    {
      name: "Strawberry Shortcake 🍓🍰",
      category: "quick",
      img: "https://source.unsplash.com/featured/?strawberry,shortcake",
      ingredients: ["Shortcake biscuits", "Whipped cream", "Strawberries", "Sugar"],
      steps: ["Slice strawberries & sweeten.", "Layer with cream and biscuit."]
    },
    {
      name: "Peach Crisp 🍑",
      category: "quick",
      img: "https://source.unsplash.com/featured/?peach,crisp",
      ingredients: ["Peach slices", "Oats", "Flour", "Sugar", "Butter"],
      steps: ["Mix peaches & sugar.", "Top with oat crumble.", "Bake until golden."]
    },
    {
      name: "Frozen Banana Pops 🍌🍭",
      category: "vegan",
      img: "https://source.unsplash.com/featured/?banana,popsicle",
      ingredients: ["Bananas", "Dark chocolate", "Chopped nuts"],
      steps: ["Dip banana halves in chocolate.", "Roll in nuts.", "Freeze."]
    },
    {
      name: "Mocha Mousse ☕🍫",
      category: "quick",
      img: "https://source.unsplash.com/featured/?mocha,mousse",
      ingredients: ["Whipped cream", "Instant coffee", "Cocoa powder", "Sugar"],
      steps: ["Whip all ingredients together.", "Chill before serving."]
    },
    {
      name: "Apple Crisp 🍏",
      category: "quick",
      img: "https://source.unsplash.com/featured/?apple,crisp",
      ingredients: ["Apples", "Brown sugar", "Cinnamon", "Oats", "Butter"],
      steps: ["Slice apples & mix with cinnamon.", "Top with oat mixture.", "Bake."]
    },
    {
      name: "Choco Coconut Balls 🍫🥥",
      category: "no-bake",
      img: "https://source.unsplash.com/featured/?chocolate,coconut",
      ingredients: ["Desiccated coconut", "Condensed milk", "Cocoa powder"],
      steps: ["Mix all ingredients.", "Roll into balls.", "Chill."]
    },
    {
      name: "Cinnamon Rolls 🍥",
      category: "quick",
      img: "https://source.unsplash.com/featured/?cinnamon,rolls",
      ingredients: ["Pre-made dough", "Cinnamon sugar", "Butter", "Icing"],
      steps: ["Roll out dough.", "Spread cinnamon mix.", "Roll, slice, bake, and ice."]
    },
    {
      name: "Fruit Parfait 🍒🥣",
      category: "vegan",
      img: "https://source.unsplash.com/featured/?fruit,parfait",
      ingredients: ["Vegan yogurt", "Mixed fruits", "Granola"],
      steps: ["Layer yogurt, fruits, granola in glass.", "Chill & enjoy."]
    },
    {
      name: "Lemon Bars 🍋",
      category: "quick",
      img: "https://source.unsplash.com/featured/?lemon,bars",
      ingredients: ["Lemon juice", "Sugar", "Eggs", "Flour", "Butter"],
      steps: ["Bake crust.", "Add lemon mix.", "Bake again and chill."]
    },
    {
      name: "No-Bake Chocolate Oat Cookies 🍪🍫",
      category: "no-bake",
      img: "https://source.unsplash.com/featured/?oatmeal,chocolate,cookies",
      ingredients: ["Oats", "Cocoa", "Sugar", "Peanut butter", "Butter"],
      steps: ["Boil sugar, butter & cocoa.", "Stir in oats & PB.", "Scoop and chill."]
    },
    {
      name: "Berry Galette 🍇🥧",
      category: "quick",
      img: "https://source.unsplash.com/featured/?berry,galette",
      ingredients: ["Pie crust", "Mixed berries", "Sugar", "Cornstarch"],
      steps: ["Fill crust with berries & sugar.", "Fold edges.", "Bake until golden."]
    },
    {
      name: "Banana Ice Cream 🍌🍦",
      category: "vegan",
      img: "https://source.unsplash.com/featured/?banana,icecream",
      ingredients: ["Frozen bananas", "Vanilla extract", "Plant milk (optional)"],
      steps: ["Blend bananas until creamy.", "Freeze and scoop."]
    },
    {
      name: "Chocolate Dipped Strawberries 🍓🍫",
      category: "no-bake",
      img: "https://source.unsplash.com/featured/?chocolate,strawberries",
      ingredients: ["Strawberries", "Melted chocolate"],
      steps: ["Dip berries in chocolate.", "Chill until firm."]
    },
    {
      name: "Churro Bites 🍩",
      category: "quick",
      img: "https://source.unsplash.com/featured/?churros,dessert",
      ingredients: ["Pre-made dough", "Cinnamon", "Sugar", "Oil"],
      steps: ["Fry dough bits.", "Toss in cinnamon sugar."]
    },
    {
      name: "Cranberry Bliss Bars 🍒🍰",
      category: "quick",
      img: "https://source.unsplash.com/featured/?cranberry,bars",
      ingredients: ["White chocolate", "Dried cranberries", "Cream cheese", "Sugar"],
      steps: ["Bake base with cranberries.", "Top with frosting & drizzle."]
    },
    {
      name: "Peanut Butter Fudge 🥜🍬",
      category: "no-bake",
      img: "https://source.unsplash.com/featured/?peanutbutter,fudge",
      ingredients: ["Peanut butter", "Butter", "Powdered sugar", "Vanilla"],
      steps: ["Microwave PB & butter.", "Add sugar.", "Chill in pan."]
    },
    {
      name: "Baked Apples 🍎🔥",
      category: "quick",
      img: "https://source.unsplash.com/featured/?baked,apple",
      ingredients: ["Apples", "Cinnamon", "Brown sugar", "Raisins", "Butter"],
      steps: ["Core apples.", "Stuff with mix.", "Bake until tender."]
    },
    {
      name: "Chocolate Avocado Brownies 🥑🍫",
      category: "vegan",
      img: "https://source.unsplash.com/featured/?avocado,brownies",
      ingredients: ["Avocado", "Cocoa powder", "Flour", "Maple syrup"],
      steps: ["Blend wet & dry ingredients.", "Bake until fudgy."]
    },
    {
      name: "Rice Krispie Treats 🍚✨",
      category: "no-bake",
      img: "https://source.unsplash.com/featured/?ricekrispies,treats",
      ingredients: ["Rice cereal", "Marshmallows", "Butter"],
      steps: ["Melt butter & marshmallows.", "Mix in cereal.", "Spread and cut."]
    }
  );
  
  const grid = document.getElementById("dessertGrid");
  const modal = document.getElementById("recipeModal");
  const closeBtn = document.querySelector(".close-button");
  const recipeTitle = document.getElementById("recipeTitle");
  const recipeIngredients = document.getElementById("recipeIngredients");
  const recipeSteps = document.getElementById("recipeSteps");
  
  // Generate cards
  recipes.forEach((recipe, index) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `<h3>${recipe.name}</h3>`;
    card.addEventListener("click", () => showRecipe(index));
    grid.appendChild(card);
  });
  const randomIndex = Math.floor(Math.random() * recipes.length);
  const daily = recipes[randomIndex];
  
  const dailyCard = document.getElementById("dailyCard");
  dailyCard.innerHTML = `
    <h3>${daily.name}</h3>
    <p>Try this today! 🍬</p>
    <button onclick="showRecipe(${randomIndex})">View Recipe</button>
  `;
  function filterCategory(category) {
    document.querySelectorAll(".tab").forEach(tab => tab.classList.remove("active"));
    event.target.classList.add("active");
  
    document.querySelectorAll(".card").forEach((card, i) => {
      const recipe = recipes[i];
      if (category === "all" || recipe.category === category) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  }
  
  
  // Show modal
  function showRecipe(index) {
    const recipe = recipes[index];
    recipeTitle.textContent = recipe.name;
  
    recipeIngredients.innerHTML = "";
    recipe.ingredients.forEach(ing => {
      const li = document.createElement("li");
      li.textContent = ing;
      recipeIngredients.appendChild(li);
    });
  
    recipeSteps.innerHTML = "";
    recipe.steps.forEach(step => {
      const li = document.createElement("li");
      li.textContent = step;
      recipeSteps.appendChild(li);
    });
  
    modal.style.display = "block";
  }
  
  // Close modal
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });
  window.addEventListener("click", e => {
    if (e.target == modal) modal.style.display = "none";
  });
  window.addEventListener("load", () => {
    document.getElementById("loader").style.display = "none";
  });
  
