// =========================
// SEARCH COURSE
// =========================

const searchInput = document.getElementById("searchInput");

const searchButton = document.getElementById("searchButton");


searchButton.addEventListener("click", function () {

    const searchText = searchInput.value.trim();


    if (searchText === "") {

        alert("Please enter a course name.");

    } else {

        alert("You searched for: " + searchText);

    }

});