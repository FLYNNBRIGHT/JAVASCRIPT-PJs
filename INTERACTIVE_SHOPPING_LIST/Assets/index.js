const add_items = document.querySelector("#add_items");
const item_list = document.querySelector("#l1");
const ul_list = document.querySelector("ul");



add_items.addEventListener('click', (event) => {
    event.preventDefault();
    const shopping_input = document.querySelector("#user_input");
    const shopping_item = shopping_input.value;

    if (shopping_item == "") {
        window.alert("Please type in the Item you want to add to the shopping list");
    }
    else {
        const new_item = document.createElement("li");
        ul_list.appendChild(new_item);
        const remove_item = document.createElement("button");
        remove_item.classList.add("fa-solid");
        remove_item.classList.add("fa-xmark");
        remove_item.style.color = "red";
        remove_item.style.marginLeft = "2rem";

        new_item.textContent = shopping_item;
        const listed_item = document.querySelector("li");
        listed_item.appendChild(remove_item);
    }

    shopping_input.value = '';
});