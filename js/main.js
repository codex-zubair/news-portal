//! Getting Categories Start

const categoriesApi = async () => {



    try {

        const url = await "https://openapi.programming-hero.com/api/news/categories";
        const response = await fetch(url);
        const category = await response.json();
        categoryList(category.data.news_category);
    }

    catch (error) {
        console.log(error);
    }


}

//! Getting Categories End






// ! Categories List Start
const categoryList = (categories) => {

    //Parent section of Category...
    const parentCategorySection = document.getElementById('category-section');
    
    parentCategorySection.innerHTML = ``;
    
    
    // Looping inside category list array.
    categories.forEach(category => {
    
        // creating button for categories...
        const button = document.createElement('button');

        button.innerText = category.category_name;



        // Adding Class list for Button.
        button.classList.add("hover:text-blue-500", "focus:text-blue-700", "focus:bg-blue-100", "px-5", "rounded-sm");
        button.setAttribute('onclick', `newsApi('${category.category_id}','${category.category_name}')`);
        button.setAttribute('id', `${category.category_id}`);




        // appending button as a child into Parent section.
        parentCategorySection.appendChild(button);







    });

    // !Set Home Page Start
    newsApi('01', 'Breaking News');
    // !Set Home Page End


}
// ! Categories List End














categoriesApi()


