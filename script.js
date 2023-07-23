// JSON data containing names and links to websites
const websitesData = {
    "websites": [
      {
        "name": "Sarah's Joy Hostel",
        "link": "https://www.myhostelapp.com/sarahsjoy/"
      },
      {
        "name": "Samel Hostel",
        "link": "https://www.myhostelapp.com/samel/"
      }
      ,
      {
        "name": "Rush In Hostel",
        "link": "https://www.myhostelapp.com/rush_in/"
      }
      ,
      {
        "name": "American Hostel",
        "link": "https://www.myhostelapp.com/american/"
      }
      ,
      {
        "name": "Rush In Hostel",
        "link": "https://www.myhostelapp.com/rush_in/"
      }
      ,
      {
        "name": "Zion Hostel",
        "link": "https://www.myhostelapp.com/zion/"
      }
      ,
      {
        "name": "Baidoo Hostel",
        "link": "https://www.myhostelapp.com/baidoo/"
      }
      ,
      {
        "name": "A Klass Hostel",
        "link": "https://www.myhostelapp.com/aklass/"
      }
      ,
      {
        "name": "Select Hostel",
        "link": "https://www.myhostelapp.com/select/"
      }
      ,
      {
        "name": "Service Hostel",
        "link": "https://www.myhostelapp.com/service/"
      }
      ,
      {
        "name": "Patience Hostel",
        "link": "https://www.myhostelapp.com/patience/"
      }
      ,
      {
        "name": "Franco Hostel (1800)",
        "link": "https://www.myhostelapp.com/franco/"
      }
      ,
      {
        "name": "D.K. Agyemang Hostel",
        "link": "https://www.myhostelapp.com/dkagyemang/"
      }
      ,
      {
        "name": "Las Vegas Hostel",
        "link": "https://www.myhostelapp.com/lasvegas/"
      }
      ,
      {
        "name": "Horrib Hostel",
        "link": "https://www.myhostelapp.com/horrib/"
      }
      ,
      {
        "name": "Twillight Hostel",
        "link": "https://www.myhostelapp.com/twilight/"
      }
      ,
      {
        "name": "Domimay Hostel",
        "link": "https://www.myhostelapp.com/domimay/"
      }
      ,
      {
        "name": "Elilite Hostel",
        "link": "https://www.myhostelapp.com/elilite/"
      }
      ,
      {
        "name": "Glasoche Hostel",
        "link": "https://www.myhostelapp.com/glasoche/"
      }
      ,
      {
        "name": "Sifaross Hostel",
        "link": "https://www.myhostelapp.com/SIFAROSS_1/"
      }
      ,
      {
        "name": "Let God Judge Homestel",
        "link": "https://www.myhostelapp.com/letgodjudge/"
      }
    ]
  };
  
  // Function to render search results
  function renderResults(results) {
    const searchResultsDiv = document.getElementById("search-results");
    searchResultsDiv.innerHTML = ""; // Clear previous results
  
    results.forEach((result) => {
      const resultDiv = document.createElement("div");
      resultDiv.classList.add("result");
      resultDiv.textContent = result.name;
      resultDiv.addEventListener("click", () => {
        window.location.href = result.link;
      });
  
      searchResultsDiv.appendChild(resultDiv);
    });
  }
  
  // Function to handle search and provide autocomplete suggestions
  function handleSearch() {
    const searchQuery = document.getElementById("search-bar").value.toLowerCase();
  
    // Filter the JSON data based on the search query
    const searchResults = websitesData.websites.filter((website) =>
      website.name.toLowerCase().includes(searchQuery)
    );
  
    renderResults(searchResults);
  
    // Provide autocomplete suggestions based on the search query
    const datalist = document.getElementById("suggestions");
    datalist.innerHTML = ""; // Clear previous suggestions
  
    searchResults.forEach((result) => {
      const option = document.createElement("option");
      option.value = result.name;
      datalist.appendChild(option);
    });
  }
  
  // Add event listeners to the search bar
  const searchInput = document.getElementById("search-bar");
  searchInput.addEventListener("input", handleSearch);
  