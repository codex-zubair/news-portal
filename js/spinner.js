// spinner Start
const spinnerStart = ()=>{
    const spinner = document.getElementById('spinner');
    spinner.classList.remove('hidden');
    // item found hide for spinner
    document.getElementById('item-found').classList.add("hidden")
};
// spinner Start



// spinner Stop
const spinnerStop = ()=>{
    const spinner = document.getElementById('spinner');
    spinner.classList.add('hidden');
    // item found show after spinner
    document.getElementById('item-found').classList.remove("hidden")
};
// spinner Start




