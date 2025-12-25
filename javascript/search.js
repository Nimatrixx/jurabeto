document.addEventListener('DOMContentLoaded', function () {
    const searchButton = document.querySelector('.search-submit');
    const searchInput = document.querySelector('.search-field');
    //const searchForm = document.querySelector('.search-form');

    // perform search function
    function executeSearch() {
        const searchTerm = searchInput.value.trim();

        // validate input
        if (!searchTerm) {
            window.alert("متن جستجو نمیتواند خالی باشد");
            return;
        }

        // in real implementation, this would make an API call
        console.log(`searching for: ${searchTerm}`);
    }

    // button click event
    searchButton.addEventListener('click', executeSearch);
});