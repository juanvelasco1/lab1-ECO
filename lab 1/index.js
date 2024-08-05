document.getElementById("fetch-button").addEventListener("click", fetchData);





async function fetchData() {
  console.log("Fetching data...");
  renderLoadingState();
  try {
    const response = await fetch("https://api.jikan.moe/v4/anime");
    console.log("Response received:", response);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    console.log("Data received:", data);
    renderData(data);
  } catch (error) {
    console.error("Fetch error:", error);
    renderErrorState();
  }
}

// function fetchData = async(limit,query,type) =>{
//   renderLoadingState();
//   fetch("https://api.jikan.moe/v4/anime")
//     .then((response) => {
//       console.log(response);
//       if (!response.ok) {
//         throw new Error("Network response was not ok");
//       }
//       return response.json();
//     })
//     .then((data) => renderData(data))
//     .catch(() => renderErrorState());
// }


function renderErrorState() {
  const container = document.getElementById("data-container");
  container.innerHTML = ""; // Clear previous data
  container.innerHTML = "<p>Failed to load data</p>";
  console.log("Failed to load data");
}

function renderLoadingState() {
  const container = document.getElementById("data-container");
  container.innerHTML = ""; // Clear previous data
  container.innerHTML = "<p>Loading...</p>";
  console.log("Loading...");
}

function renderData(data) {
  const container = document.getElementById("data-container");
  container.innerHTML = ""; // Clear previous data

  const div = document.createElement("div");
  div.className = "item";
  div.innerHTML = ` <img src="${data.data[0].images.jpg.image_url}" alt="Image">`;
  container.appendChild(div);
}
