// 1. <-- Main Selectors -->
let tableFilter = document.getElementById("table-filter"),
    tableBody = document.getElementById("table-body");

// 2. <-- Main Variables -->

let declarations = [
    {
        id: 101,
        companyName: "Acme Corp",
        penaltyMonthAndYear: "2023-10",
        delayDays: 5,
        penaltyAmount: 150.0,
    },
    {
        id: 102,
        companyName: "Globex Corporation",
        penaltyMonthAndYear: "2023-11",
        delayDays: 12,
        penaltyAmount: 350.5,
    },
    {
        id: 104,
        companyName: "Initech",
        penaltyMonthAndYear: "2023-12",
        delayDays: 20,
        penaltyAmount: 1000.0,
    },
    {
        id: 103,
        companyName: "Soylent Corp",
        penaltyMonthAndYear: "2023-11",
        delayDays: 2,
        penaltyAmount: 50.0,
    },
    {
        id: 103,
        companyName: "test",
        penaltyMonthAndYear: "2025-9",
        delayDays: 2,
        penaltyAmount: 50.0,
    },
];

let filterMode = "date-added";

// 3. <-- Main Function -->

const updateTable = (arr) => {
    // Empty the table
    tableBody.innerHTML = "";

    // Put data in the table
    for (let declaration of arr) {
        tableBody.innerHTML += `
            <tr>
                <td>${declaration.id}</td>
                <td title="${declaration.companyName}">
                ${
                    declaration.companyName.length <= 10
                        ? declaration.companyName
                        : declaration.companyName.slice(0, 10) + "..."
                }
                </td>
                <td>${declaration.penaltyMonthAndYear}</td>
                <td>${declaration.delayDays}</td>
                <td>${declaration.penaltyAmount}</td>
            </tr>
        `;
    }
};

const filterData = () => {
    switch (filterMode) {
        case "date-added":
            updateTable(declarations);
            break;
        case "year":
            updateTable(sortedData(filterMode));
            break;
        case "month":
            updateTable(sortedData(filterMode));
    }
};

const sortedData = (type) => {
    let arrToFilter = [...declarations];

    switch (type) {
        case "year":
            return arrToFilter.sort((a, b) =>
                a.penaltyMonthAndYear
                    .slice(0, -2)
                    .localeCompare(
                        b.penaltyMonthAndYear.slice(0, -2),
                        undefined,
                        {
                            numeric: true,
                        }
                    )
            );

        case "month":
            return arrToFilter.sort((a, b) =>
                a.penaltyMonthAndYear
                    .slice(-2)
                    .localeCompare(b.penaltyMonthAndYear.slice(-2), undefined, {
                        numeric: true,
                    })
            );
    }
};

// 4. <-- Set Data in the Page -->

updateTable(declarations);

// 5. <-- Filter Data -->

tableFilter.addEventListener("change", () => {
    filterMode = tableFilter.value;

    filterData();
});
