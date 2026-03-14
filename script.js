let department = "";
let subjects = [];

//clears the input value when you reload the webpage
window.onload = function(){

    document.querySelectorAll("input").forEach(input => {
        input.value = "";
    });

};


//moves cursor immediately to next subject once you click enter
document.querySelectorAll("input").forEach((input, index, inputs) => {

    input.addEventListener("keydown", function(event){

        if(event.key === "Enter"){
            event.preventDefault();

            if(index + 1 < inputs.length){
                inputs[index + 1].focus();
            }
        }

    });

});

//gives alert immediately when invalid number is entered
document.querySelectorAll("input").forEach(input => {

    input.addEventListener("input", function(){

        let value = parseFloat(this.value);

        if(value < 0 || value > 100){
            alert("Marks must be between 0 and 100");
            this.value = "";
            this.focus();
        }

    });

});

//conversion of percentage to pointer
function toPointer(mark){
    if(mark > 100 || mark < 0){
        alert("Marks must be between 0 and 100");
        return;
    }
    if(mark>=91 && mark<=100){
        return 10;
    }
    else if(mark>=81){
        return 9;
    }
    else if(mark>=71){
        return 8;
    }
    else if(mark>=61){
        return 7;
    }
    else if(mark>=51){
        return 6;
    }
    else if(mark>=41){
        return 5;
    }
    else if(mark>=31){
        return 4;
    }
    else if(mark>=21){
        return 3;
    }
    else if(mark>=11){
        return 2;
    }
    else
        return 1;
    
}


function showTable(dep){
    document.querySelectorAll("input").forEach(input => {
        input.value = "";
    });


    department = dep;

    document.querySelector(".container").style.display = "block";
    
    //initially hides table unless department is selected
    document.getElementById("ceTable").style.display = "none";
    document.getElementById("itTable").style.display = "none";
    document.getElementById("entcTable").style.display = "none";
    document.getElementById("aidsTable").style.display = "none";
    document.getElementById("eceTable").style.display = "none";


    if(dep === "CE"){

        document.getElementById("ceTable").style.display = "table";

        subjects = [
            {id:"se",credit:2},
            {id:"dms",credit:3},
            {id:"dmsl",credit:2},
            {id:"os",credit:2},
            {id:"osl",credit:1},
            {id:"pbl",credit:2},
            {id:"ep",credit:1},
            {id:"epl",credit:1},
            {id:"cdc",credit:1},
            {id:"icsr",credit:1},
            {id:"cep",credit:1},
            {id:"mdm2",credit:2},
            {id:"mdm2l",credit:1},
            {id:"oe",credit:2}
        ];
    }

    else if(dep === "IT"){

        document.getElementById("itTable").style.display = "table";

        subjects = [
            {id:"adsa",credit:2},
            {id:"dis",credit:2},
            {id:"dsm",credit:3},
            {id:"adsal",credit:2},
            {id:"disl",credit:2},
            {id:"mdm2",credit:2},
            {id:"mdm2l",credit:1},
            {id:"oe",credit:2},
            {id:"pbl",credit:1},
            {id:"cdc",credit:1},
            {id:"ipse",credit:2},
            {id:"icsr",credit:1},
            {id:"cep",credit:1}
        ];
    }

    else if(dep === "ENTC"){

        document.getElementById("entcTable").style.display = "table";

        subjects = [
            {id:"pce", credit:3},
            {id:"pcel", credit:1},
            {id:"dcd", credit:3},
            {id:"dcdl", credit:1},
            {id:"cs", credit:3},
            {id:"pbl", credit:2},
            {id:"pmfe", credit:2},
            {id:"mdm2", credit:2},
            {id:"mdm2l", credit:1},
            {id:"oe", credit:2},
            {id:"cdc", credit:1},
            {id:"icsr", credit:1},
            {id:"cep", credit:1}
        ];

    }

    else if(dep === "AIDS"){

        document.getElementById("aidsTable").style.display = "table";

        subjects = [
            {id:"ml", credit:3},
            {id:"dbms", credit:2},
            {id:"os", credit:2},
            {id:"fcn", credit:1},
            {id:"lp1", credit:2},
            {id:"ksel", credit:2},
            {id:"mdm2", credit:2},
            {id:"mdm2l", credit:1},
            {id:"oe", credit:2},
            {id:"cdc", credit:1},
            {id:"pm", credit:2},
            {id:"icsr", credit:1},
            {id:"cep", credit:1}
        ];
    }

    else if(dep === "ECE"){

        document.getElementById("eceTable").style.display = "table";

        subjects = [
            {id:"adc", credit:3},
            {id:"ma", credit:3},
            {id:"ecel1", credit:1},
            {id:"oop", credit:3},
            {id:"oopl", credit:1},
            {id:"pbl", credit:1},
            {id:"ispm", credit:2},
            {id:"mdm2", credit:2},
            {id:"mdm2l", credit:1},
            {id:"oe", credit:2},
            {id:"cdc", credit:1},
            {id:"icsr", credit:1},
            {id:"cep", credit:1}
        ];
    }
}

function calculate(){

    let totalPoints = 0;
    let totalCredits = 0;

    subjects.forEach(sub => {

        let marks = Number(document.getElementById(sub.id).value);

        let pointer = toPointer(marks);

        totalPoints += pointer * sub.credit;
        totalCredits += sub.credit;
    });

    let cgpa = totalPoints / totalCredits;

    document.getElementById("result").innerText =
        "SGPA: " + cgpa.toFixed(2);
}



// let department = "";

// function toPointer(mark){
//     if(mark > 100 || mark < 0){
//         alert("Marks must be between 0 and 100");
//         return;
//     }
//     if(mark>=91 && mark<=100){
//         return 10;
//     }
//     else if(mark>=81){
//         return 9;
//     }
//     else if(mark>=71){
//         return 8;
//     }
//     else if(mark>=61){
//         return 7;
//     }
//     else if(mark>=51){
//         return 6;
//     }
//     else if(mark>=41){
//         return 5;
//     }
//     else if(mark>=31){
//         return 4;
//     }
//     else if(mark>=21){
//         return 3;
//     }
//     else if(mark>=11){
//         return 2;
//     }
//     else
//         return 1;
    
// }

// function showTable(dep){

//     department = dep;
    
//     if(department == 'CE'){
//         document.querySelector(".container").style.display = "block";
//         document.getElementById("marksTable").style.display = "table";
//         const subjects = [
//             {id: "se", credit: 2},
//             {id: "dms", credit: 3},
//             {id: "dmsl", credit: 2},
//             {id: "os", credit: 2},
//             {id: "osl", credit: 1},
//             {id: "pbl", credit: 2},
//             {id: "ep", credit: 1},
//             {id: "epl", credit: 1},
//             {id: "cdc", credit: 1},
//             {id: "icsr", credit: 1},
//             {id: "cep", credit: 1},
//             {id: "bfsi", credit: 2},
//             {id: "bfsil", credit: 1},
//             {id: "oe", credit: 2}
//         ];

//     }

//     else if(department == 'IT'){
//         document.querySelector(".container").style.display = "block";
//         document.getElementById("marksTable").style.display = "table";
//         const subjects = [
//             {id: "adsa", credit: 2},
//             {id: "dis", credit: 2},
//             {id: "dsm", credit: 3},
//             {id: "adsal", credit: 2},
//             {id: "disl", credit: 2},
//             {id: "mdm-2", credit: 2},
//             {id: "mdm-2#", credit: 1},
//             {id: "oe", credit: 2},
//             {id: "pbl", credit: 1},
//             {id: "cdc", credit: 1},
//             {id: "ipse", credit: 2},
//             {id: "icsr", credit: 1},
//             {id: "cep", credit: 1},
//         ];
//     }
    

// }

// function calculate(){
//             let SE = Number(document.getElementById("se").value);
//             // let DMS = Number(document.getElementById("dms").value);
//             // let DMSL = Number(document.getElementById("dmsl").value);
//             // let OS = Number(document.getElementById("os").value);
//             // let OSL = Number(document.getElementById("osl").value);
//             // let PBL = Number(document.getElementById("pbl").value);
//             // let EP = Number(document.getElementById("ep").value);
//             // let EPL = Number(document.getElementById("epl").value);
//             // let CDC = Number(document.getElementById("cdc").value);
//             // let ICSR = Number(document.getElementById("icsr").value);
//             // let CEP = Number(document.getElementById("cep").value);
//             // let BFSI = Number(document.getElementById("bfsi").value);
//             // let BFSIL = Number(document.getElementById("bfsil").value);
//             // let OE = Number(document.getElementById("oe").value);
        
//             // let se = toPointer(SE);
//             // let dms = toPointer(DMS);
//             // let dmsl = toPointer(DMSL);
//             // let os = toPointer(OS);
//             // let osl = toPointer(OSL);
//             // let pbl = toPointer(PBL);
//             // let ep = toPointer(EP);
//             // let epl = toPointer(EPL);
//             // let cdc = toPointer(CDC);
//             // let icsr = toPointer(ICSR);
//             // let cep = toPointer(CEP);
//             // let bfsi = toPointer(BFSI);
//             // let bfsil = toPointer(BFSIL);
//             // let oe = toPointer(OE);
            
//             let totalPoints = 0;
//             let totalCredits = 0;

//             subjects.forEach(sub => {

//                 let marks = Number(document.getElementById(sub.id).value);
//                 let pointer = toPointer(marks);

//                 totalPoints += pointer * sub.credit;
//                 totalCredits += sub.credit;

//             });

//             let cgpa = totalPoints / totalCredits;

//             document.getElementById("result").innerText =
//                 "CGPA: " + cgpa.toFixed(2);

// }
