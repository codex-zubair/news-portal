// nav Toggle Display

var count = 1;


const navbarOpenAndOf = () => {

    if (count % 2) {
        document.getElementById('navbar-solid-bg').classList.remove('hidden');
    }

    else {
        document.getElementById('navbar-solid-bg').classList.add('hidden');
    }
    count += 1;

}

