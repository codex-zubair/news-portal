// !Calling API TO SHOW IN MODAL Start...
const showDetails = async (categoryId, objectId) => {


    try {
        spinnerStart();
        const url = `https://openapi.programming-hero.com/api/news/category/${categoryId}`;
        const response = await fetch(url);
        const news = await response.json();
        showModal(news.data, objectId);

    }

    catch (error) {
        console.log(error);
    }


}
// !Calling API TO SHOW IN MODAL End...


// !showing Modal
showModal = (newsData, objectId) => {

   

    newsData.forEach(news => {
        if (news._id === objectId) {
            newsDetails = news;
        }

    });

    



    let authorName = newsDetails.author.name? newsDetails.author.name: "Not Found!";
    let totalViews = newsDetails.total_view? newsDetails.total_view: "Not Found!";
    let date = newsDetails.author.published_date? newsDetails.author.published_date: "Not Found!";


    // getting Modal parent Section...
    const modal = document.getElementById('modal-section');
    // Show Modal
    modal.classList.remove('hidden');


    // creating div for modal...
    const div = document.createElement('div');



    // Add Class for modal div...
    div.classList.add("modal", 'fade', "fixed", "top-10", "left-1/4", "w-6/12", "max-h-96", "outline-none", "overflow-x-hidden", "overflow-y-scroll")




    div.innerHTML = `
    <div class="modal-dialog modal-lg relative w-auto pointer-events-none"><div class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
        <div class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
          <h5 class="text-2xl mr-2 font-semibold leading-normal text-gray-800">
            ${newsDetails.title}
          </h5>


         
          
        </div>
        <!-- Extra Info Section Start -->
        <div class="extra-info-div ">


            
            <div>
            <p class = "ml-2">Author ${authorName}</p>
            <p class = "ml-2">Publish Date ${date}</p>
                <p class = "ml-2">Views: ${totalViews}</p>
            </div>
        </div>
        <!-- Extra Info Section Start -->
        <div class="modal-body relative p-4">
          <p class="pb-5">${newsDetails.details}
          <hr>
                                <div class="flex justify-center mt-5">
                                    <button onclick="modalClose()" type="button"
                                class=" box-content mb-2 mt-2 text-white border-none opacity-100 focus:shadow-none focus:outline-none focus:opacity-100  hover:bg-blue-700 hover:no-underline font-medium bg-blue-600 px-7 p-1 rounded-sm"
                                aria-label="Close">Close</button>
                                </div></p></p>
        </div>

    </div>
  `


    modal.appendChild(div);

    // Stopping the Spinner After full load//
    spinnerStop();

}
// !showing Modal




//!Close Modal Start
const modalClose = () => {
    const modal = document.getElementById('modal-section');

    modal.innerHTML = ``;
    modal.classList.add('hidden');
}


document.body.addEventListener('click', () => {
    const modal = document.getElementById('modal-section');

    modal.innerHTML = ``;
    modal.classList.add('hidden');

})
//!Close Modal End