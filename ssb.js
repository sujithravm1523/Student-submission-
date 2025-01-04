document.getElementById("studentForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Retrieve marks for 10th and 12th
    const marks10 = [
        parseInt(document.getElementById("marks10_1").value),
        parseInt(document.getElementById("marks10_2").value),
        parseInt(document.getElementById("marks10_3").value),
        parseInt(document.getElementById("marks10_4").value),
        parseInt(document.getElementById("marks10_5").value),
    ];

    const marks12 = [
        parseInt(document.getElementById("marks12_1").value),
        parseInt(document.getElementById("marks12_2").value),
        parseInt(document.getElementById("marks12_3").value),
        parseInt(document.getElementById("marks12_4").value),
        parseInt(document.getElementById("marks12_5").value),
    ];

    // Sum and Average Calculation
    let sum = 0;
    let count = 0;
    for (let i = 0; i < 5; i++) {
        sum += marks10[i] + marks12[i];
        count += 2; // 10th and 12th marks for each subject
    }

    let average = sum / count;

    // Display result
    document.getElementById("sum").textContent = sum;
    document.getElementById("average").textContent = average.toFixed(2);

    // Generate acknowledgment number
    const acknowledgmentNumber = "ACK-" + Math.floor(Math.random() * 1000000);
    document.getElementById("acknowledgment").value = acknowledgmentNumber;
});


// Data for Taluks and Villages
const locationData = {
    district1: {
        taluks: ["Taluk 1A", "Taluk 1B", "Taluk 1C"],
        villages: {
            "Taluk 1A": ["Village 1A-1", "Village 1A-2", "Village 1A-3"],
            "Taluk 1B": ["Village 1B-1", "Village 1B-2", "Village 1B-3"],
            "Taluk 1C": ["Village 1C-1", "Village 1C-2", "Village 1C-3"],
        }
    },
    district2: {
        taluks: ["Taluk 2A", "Taluk 2B", "Taluk 2C"],
        villages: {
            "Taluk 2A": ["Village 2A-1", "Village 2A-2", "Village 2A-3"],
            "Taluk 2B": ["Village 2B-1", "Village 2B-2", "Village 2B-3"],
            "Taluk 2C": ["Village 2C-1", "Village 2C-2", "Village 2C-3"],
        }
    },
    district3: {
        taluks: ["Taluk 3A", "Taluk 3B", "Taluk 3C"],
        villages: {
            "Taluk 3A": ["Village 3A-1", "Village 3A-2", "Village 3A-3"],
            "Taluk 3B": ["Village 3B-1", "Village 3B-2", "Village 3B-3"],
            "Taluk 3C": ["Village 3C-1", "Village 3C-2", "Village 3C-3"],
        }
    }
};

// Function to update Taluks and Villages based on selected District
function updateTalukAndVillage() {
    const districtSelect = document.getElementById("district");
    const talukSelect = document.getElementById("taluk");
    const villageSelect = document.getElementById("village");

    // Get selected District
    const selectedDistrict = districtSelect.value;

    // Clear existing Taluk and Village options
    talukSelect.innerHTML = "";
    villageSelect.innerHTML = "";

    // Populate Taluk options
    if (locationData[selectedDistrict]) {
        locationData[selectedDistrict].taluks.forEach(taluk => {
            const option = document.createElement("option");
            option.value = taluk;
            option.textContent = taluk;
            talukSelect.appendChild(option);
        });

        // Populate Village options for the first Taluk by default
        updateVillageOptions(locationData[selectedDistrict].taluks[0]);
    }

    // Update Villages when Taluk changes
    talukSelect.addEventListener("change", function () {
        updateVillageOptions(this.value);
    });
}

// Function to update Village options based on selected Taluk
function updateVillageOptions(selectedTaluk) {
    const districtSelect = document.getElementById("district");
    const villageSelect = document.getElementById("village");

    const selectedDistrict = districtSelect.value;
    villageSelect.innerHTML = "";

    if (locationData[selectedDistrict].villages[selectedTaluk]) {
        locationData[selectedDistrict].villages[selectedTaluk].forEach(village => {
            const option = document.createElement("option");
            option.value = village;
            option.textContent = village;
            villageSelect.appendChild(option);
        });
    }
}

// Initialize the form with the first district selected
document.addEventListener("DOMContentLoaded", () => {
    updateTalukAndVillage();
});
