let rubricki_a = document.querySelectorAll(".rubricki_a");
const Filter_Items = categorie => {
    let Items = document.querySelectorAll(".posts[data-categories]");
    Items.forEach(item => {
        let categoriesItem = item.dataset.categories.split(', ');
        let result = categoriesItem.find(it => {
            return post_category === it;
        });

        if (item.classList.contains("block"))
            item.classList.remove("block")
        else
            item.classList.remove("hide")

        item.classList.add(result ? "block" : "hide");
    })
};

categories_button.forEach(it => {
    it.addEventListener("click", () => { FilterMainItems(it.dataset.categories) });
});