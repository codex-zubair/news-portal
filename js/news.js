// !Checking News Start

const newsApi = async (newsId, categoryName) => {

    try {
        spinnerStart();
        const url = `https://openapi.programming-hero.com/api/news/category/${newsId}`;
        const response = await fetch(url);
        const news = await response.json();
        let itemFound = await (news.data).length;
        itemFoundResult(itemFound, categoryName);
        listOfNews(news.data);
        spinnerStop();



    }

    catch (error) {
        console.log(error);
    }
}
// !Checking News End




// !News List Start
const listOfNews = (newsList) => {

    // getting parent of section by id...
    var parentCardSection = document.getElementById('news-card');

    // Clearing HTML of parent Section...
    parentCardSection.innerHTML = ``;





    newsList.sort((news1, news2) => (news2.total_view - news1.total_view)).forEach(data => {
        addingDataIntoSection(data);



    });



}

//! News List End





// !Counting items And Showing The Total Found items Number Start...
const itemFoundResult = (totalItem, categoryName) => {

    let itemFound = document.getElementById('item-found');

    if (totalItem != 0) {
        itemFound.innerText = `${totalItem} item Found For ${categoryName}`
    }
    else {
        itemFound.innerText = `No item Found For ${categoryName}`
    }

}

// !Counting items And Showing The Total Found items Number End...





const addingDataIntoSection = (news) => {



    // getting parent of section by id...
    var parentCardSection = document.getElementById('news-card');



    // Ternary Operation...
    let authorName = news.author.name ? news.author.name : "Not Found!";
    let totalViews = news.total_view ? news.total_view : "Not Found!";
    // Slicing by ternary operation...
    let details = news.details.length > 20 ? news.details.slice(0, 100) + '...' : news.details;






    // Creating anchor for Card...
    const card = document.createElement('a');



    // Adding All the needed Class into anchor tag.

    card.classList.add("flex", "flex-col", "items-center", "bg-white", "rounded-lg", "border", "shadow-md", "md:flex-row", "hover:bg-gray-100", "dark:border-gray-700", "dark:bg-gray-800", "dark:hover:bg-gray-700");




    card.innerHTML = `<img onclick="showDetails('${news.category_id}','${news._id}')" class="cursor-pointer object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
      src="${news.thumbnail_url}" alt="">
  <div class="flex flex-col justify-between p-4 leading-normal">
      <h5 class="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">${news.title}</h5>
      <p class="h-24  mb-3 overflow-hidden overflow-ellipsis  font-normal text-gray-700 dark:text-gray-400">${details}</p>
      <!-- Extra Info Section Start -->
      <div class="extra-info-div flex justify-between">


          <div style="display:flex; align-items:center;"  class="flex align-middle justify-center col-span-2">
              <div>
                  <img class="rounded-full" width="50px" height="50px" src="${news.author.img}" alt="image">
              </div>
              <div class="ml-2 flex align-middle">
                  <p class ="text-center font-semibold" >${authorName}</p>
                  
                  </div>
                  
          </div>
          <div class= "col-span-1 my-auto text-center">
              <p class="font-semibold">Views: ${totalViews}</p>
          </div>
      </div>
      <!-- Extra Info Section Start -->

  </div>`;


    // * Appending the Card div into Parent Section.
    parentCardSection.appendChild(card);
}









