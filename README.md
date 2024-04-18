## Installation

To use this widget in your project, follow these steps:

- Copy the HTML snippet below and paste it into your HTML file where you want the widget to appear.

- If you're using React, follow the instructions for integrating in react.

- Add the provided link to the `<head>` tag of your HTML file.

### HTML Integration

```html
<div
  id="job-search-widget-container"
  data-search="Städare"
  style="width: 80%; margin: 0 auto; padding: 20px; border: 1px solid #ccc"
>
  <h2>Job search</h2>
  <table
    id="data-table"
    style="width: 100%; border-collapse: collapse; margin-top: 20px"
  >
    <thead>
      <tr>
        <th
          style="border: 1px solid #ddd; padding: 8px; text-align: left;background-color: #f2f2f2;"
        >
          Titel
        </th>
        <th
          style="border: 1px solid #ddd; padding: 8px; text-align: left; background-color: #f2f2f2;"
        >
          Omfattning
        </th>
        <th
          style="border: 1px solid #ddd; padding: 8px; text-align: left; background-color: #f2f2f2;"
        >
          Antal
        </th>
      </tr>
    </thead>
    <tbody id="job-search-widget-container-table-body"></tbody>
  </table>

  <div
    style="padding-top: 1rem; padding-bottom: 1rem; display: flex; align-items: center; justify-content: center; gap: 0.5rem; flex-direction: row; flex-wrap: wrap; flex-shrink: 0;"
  >
    <p
      style="font-size: 0.875rem; margin-right: auto"
      id="job-search-widget-pagination"
    ></p>

    <div style="display: flex; gap: 0.5rem">
      <button
        style="font-size: 0.875rem; border: 1px solid #000; padding: 0.375rem 0.75rem; cursor: pointer;"
        id="job-search-widget-previous-button"
      >
        Previous
      </button>

      <button
        style="font-size: 0.875rem; border: 1px solid #000; padding: 0.375rem 0.75rem; cursor: pointer;"
        id="job-search-widget-next-button"
      >
        Next
      </button>
    </div>
  </div>
</div>

<script
  src="https://victoribironke.github.io/job-search-widget/script.js"
  defer
  async
  id="external"
  type="text/javascript"
  crossorigin="anonymous"
></script>
```

### React Integration

```html
<div id="job-search-widget-container" data-search="Städare" style={{ width: "80%", margin: "0 auto", padding: "20px", border: "1px solid #ccc"}}>
    <h2>Job search</h2>
    <table id="data-table" style={{ width: "100%", borderCollapse: "collapse", marginTop: "20px"}}>
        <thead>
            <tr>
                <th style={{ border: "1px solid #ddd", padding: "8px", textAlign: "left", backgroundColor: "#f2f2f2"}}>
                    Titel
                </th>
                <th style={{ border: "1px solid #ddd", padding: "8px", textAlign: "left", backgroundColor: "#f2f2f2"}}>
                    Omfattning
                </th>
                <th style={{ border: "1px solid #ddd", padding: "8px", textAlign: "left", backgroundColor: "#f2f2f2"}}>
                    Antal
                </th>
            </tr>
        </thead>
        <tbody id="job-search-widget-container-table-body"></tbody>
    </table>

    <div style={{ paddingTop: "1rem", paddingBottom: "1rem", display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem", flexDirection: "row", flexWrap: "wrap", flexShrink: 0}}>
        <p style={{ fontSize: "0.875rem", marginRight: "auto"}} id="job-search-widget-pagination"></p>

        <div style={{ display: "flex", gap: "0.5rem"}}>
            <button style={{ fontSize: "0.875rem", border: "1px solid #000", padding: "0.375rem 0.75rem", cursor: "pointer"}} id="job-search-widget-previous-button">
                Previous
            </button>

            <button style={{ fontSize: "0.875rem", border: "1px solid #000", padding: "0.375rem 0.75rem", cursor: "pointer"}} id="job-search-widget-next-button">
                Next
            </button>
        </div>
    </div>
</div>
```

### Adding the script to a Next.js app

```js
import Script from "next/script";

// Add this to the same component you placed the react template in
<Script
  src="https://victoribironke.github.io/job-search-widget/script.js"
  defer
  async
  id="external"
  type="text/javascript"
  crossOrigin="anonymous"
/>;
```
