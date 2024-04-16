document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("widget-container");

  const search = container.dataset.search;

  const query = search ? search : "snickare";

  const populateTable = (data) => {
    // console.log(data);
    const tableBody = document.getElementById("table-body");

    tableBody.innerHTML = "";

    data.forEach((item) => {
      const row = document.createElement("tr");

      if (data.indexOf(item) % 2 !== 0) {
        row.style.backgroundColor = "#f2f2f2";
      }

      row.innerHTML = `
        <td style="border: 1px solid #ddd; padding: 8px; text-align: left;"><a>${item.headline}</a></td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: left;">${item.duration.label}</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: left;">${item.number_of_vacancies}</td>
      `;
      tableBody.appendChild(row);
    });

    const anchors = Array.from(tableBody.getElementsByTagName("a"));

    anchors.forEach((i) => {
      i.href = data[anchors.indexOf(i)].webpage_url;
    });
  };

  fetch(
    "https://jobsearch.api.jobtechdev.se/search?q=" +
      query +
      "&qfields=location&qfields=occupation&offset=0&limit=100&sort=relevance",
    {
      headers: {
        accept: "application/json",
        "x-feature-freetext-bool-method": "or",
      },
    }
  )
    .then((res) => res.json())
    .then((data) => populateTable(data.hits))
    .catch((e) => {
      // console.error(e);
      alert("An error occured while fetching data.");
    });
});
