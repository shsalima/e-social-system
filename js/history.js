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
        id: 103,
        companyName: "Soylent Corp",
        penaltyMonthAndYear: "2023-11",
        delayDays: 2,
        penaltyAmount: 50.0,
    },
    {
        id: 104,
        companyName: "Initech",
        penaltyMonthAndYear: "2023-12",
        delayDays: 20,
        penaltyAmount: 1000.0,
    },
];

// 3. <-- Main Function -->

const updateTable = () => {
    // Empty the table
    tableBody.innerHTML = "";

    // Put data in the table
    for (let declaration of declarations) {
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

// 4. <-- Set Data in the Page -->

updateTable();
