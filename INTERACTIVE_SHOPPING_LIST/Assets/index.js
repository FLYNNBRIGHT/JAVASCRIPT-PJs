const add_items = document.querySelector("#add_items");
const item_list = document.querySelector("#l1");
const ol_list = document.querySelector("ol");



add_items.addEventListener('click', (event) => {
    event.preventDefault();

    const shopping_input = document.querySelector("#user_input");
    const shopping_item = shopping_input.value;

    if (shopping_item == "") {
        window.alert("Please input the Item you want to add to the shopping list");
    }
    else {
        const new_item = document.createElement("li");
        const item = document.createElement("span");
        const remove_item = document.createElement("button");

        new_item.appendChild(item);
        item.textContent = shopping_item;
        item.appendChild(remove_item);
        remove_item.classList.add("fa-solid");
        remove_item.classList.add("fa-xmark");
        remove_item.style.color = "red";
        remove_item.style.marginLeft = "2rem";

        ol_list.appendChild(new_item);
    }
    shopping_input.value = '';
});

const remove_item = document.querySelector(".fa-xmark");

// remove_item.addEventListener('click', () => {
//     console.log("Item removed")
// });