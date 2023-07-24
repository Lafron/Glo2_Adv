//1)

let lang = prompt("Choose your language: EN/RU");

if (lang == "EN") {
    console.log("sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday");
}
else if (lang == "RU") {
    console.log("воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота");
}
else {
    console.log("Error");
};


switch (lang) {
    case "EN":
        console.log("sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday");
        break;
    case "RU":
        console.log("воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота");
        break;
    default:
        console.log("Error");
        break;
};


const DaysArr = [
    ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"],
    ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"]
];

lang == "EN"
    ? DaysArr[0].forEach(day => {
        console.log(day);
    })
    : lang == "RU"
        ? DaysArr[1].forEach(day => {
            console.log(day);
        })
        : console.log("Error");

//2)
let namePerson = prompt("Enter your name:");

namePerson == "Артем"
    ? console.log("директор")
    : namePerson == "Александр" 
        ? console.log("преподаватель")
        : console.log("студент");