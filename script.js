const searchBar = document.getElementById('search-bar');
const responsiveDivs = document.querySelectorAll('.responsive');

searchBar.addEventListener('input', function () {
    const searchTerm = searchBar.value.toLowerCase();

    responsiveDivs.forEach((div) => {
        const divName = div.getAttribute('data-name').toLowerCase();
        div.style.display = divName.includes(searchTerm) ? 'block' : 'none';
    });
});


