// // R-ALAB 308.4.1: Working with Data Collections


// let data = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor's Assistant,26";
// // let data = "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232";


// let cell1 = [];
// let cell2 = [];
// let cell3 = [];
// let cell4 = [];
// let cell = 1;
// // rows

// for (let i = 0; i < data.length; i++) {

//     if (data[i] === ',') {
//         cell++;
//         continue;
//     }

//     if (data[i] === "\n") {
//         cell = 1;
//         cell1 = [];
//         cell2 = [];
//         cell3 = [];
//         cell4 = [];
//         continue;
//     }

//     switch (cell) {
//         case 1:
//             cell1 += data[i];
//             break;
//         case 2:
//             cell2 += data[i];
//             break;
//         case 3:
//             cell3 += data[i];
//             break;
//         case 4:
//             cell4 += data[i];
//             break;
//     }

//     if (cell === 4 && data[i + 1] === '\n' || i + 1 === data.length) {
//         console.log(cell1, cell2, cell3, cell4);
//     }

// }


function dataCollection() {
    let data = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor's Assistant,26";
    
    let cell1 = "";
    let cell2 = "";
    let cell3 = "";
    let cell4 = "";

    let cell = 1;

    

    for (let i = 0; i < data.length; i++) {

        if (data[i] === ',') {
            cell++;
            continue;
        }
    
        if (data[i] === "\n") {
            cell = 1;
            cell1 = "";
            cell2 = "";
            cell3 = "";
            cell4 = "";
            continue;
        }

        if (cell === 1) {
            cell1 += data[i];
        } else if (cell === 2) {
            cell2 += data[i];
        } else if (cell === 3) {
            cell3 += data[i];
        } else if (cell === 4) {
            cell4 += data[i];
        }

        if (cell === 4 && data[i + 1] === '\n' || i + 1 === data.length) {
            let newArray = [];
            newArray.push(cell1, cell2, cell3, cell4)
            console.log(newArray)
            
            
        }
    }
    

    // console.log(data.split(',').join(" ").split("\n"))
    
    // const arrayOfData = data.split(',').join(" ").split("\n");
    

    // for (i = 0; i < arrayOfData.length; i++){

    //     console.log(arrayOfData.slice(i, i + 1))
        
    // }

   

    
    
}

dataCollection();