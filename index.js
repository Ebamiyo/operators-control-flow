// Subjects allocation based on Class Group
let generalSubjects = "English, Mathematics"
let scienceSubjects = "Physics, Chemistry, Biology, Technical Drawing" + "," + " " + generalSubjects
let socialScienceSubjects = "Accounting, Commerce, Marketing, Geography" + "," + " " +  generalSubjects
let artsSubjects = "Government, Economics, Literature, History" + "," + " " +  generalSubjects

// assign a class group
let classGroup = "Arts"

if (classGroup === "science") {
    console.log(scienceSubjects);
} else if (classGroup === "Social Science") {
    console.log(socialScienceSubjects);
} else if (classGroup === "Arts") {
    console.log(artsSubjects);
} else {
    console.log(generalSubjects);
}


function nearestNumber(num){
        n = 0
        while(n < num){
            for (n = 0; n < num; n++) {
                console.log(n);
            }
        }  
}
nearestNumber(3)


