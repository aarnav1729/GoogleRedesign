document.addEventListener('DOMContentLoaded', function () {
    const searchForm = document.querySelector('#search-form'); // Changed the selector
    
    searchForm.addEventListener('submit', function (event) {
      event.preventDefault();
      const query = searchForm.querySelector('input').value.trim(); // Use searchForm to find the input
      if (query.length > 0) {
        const encodedQuery = encodeURIComponent(query);
        const searchURL = `https://www.google.com/search?q=${encodedQuery}`;
        window.location.href = searchURL;
      }
    });
  });  