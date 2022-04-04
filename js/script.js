const notRegistered = document.querySelector(".not-registered");
const getRegistrationData = async function () {
    const request = await fetch("https://gist.githubusercontent.com/skillcrush-curriculum/4bfa96d3762f86d2327d389063b3ea8d/raw/86e50e48e98c662ead6d9bd191ef7db381e9f4b4/fieldtrip.json");
    const data = await request.json();
    displayContactLIst(data);
}

const displayContactLIst = function (data) {
    for (let student of data) {
        if (student.registered === "no") {
            console.log(student.name);
            const listName = document.createElement("li");
            listName.innerText = `${student.name}`;
            notRegistered.append(listName);
        }
    }
}

getRegistrationData();