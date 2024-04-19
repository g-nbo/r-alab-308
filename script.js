// // R-ALAB 308.4.1: Working with Data Collections

// Part 1: Refactoring Old Code
// Part 2: Expanding Functionality
function part1and2() {
    // Original CSV String
    let data = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor's Assistant,26";
    
    // Store the number of columns in each row of data within the CSV, accept any number of columns
    let cellArr = [];
    // Outer Array
    let completeArray = [];
    let word = "";

    for (let i = 0; i <= data.length; i++) {
        
        word += data[i];
        
        
        if (data[i] === ',') {
            
            cellArr[i] = word.replace(",", "");
            word = "";
            
        }

        if (data[i + 1] === '\n') {
            cellArr[i] = word.replace("\n", "");
            word = "";
        }

        if (i + 1 === data.length) {
            cellArr[i] = word;
        }
        
        
        if (data[i] === "\n") {
            word = "";
            cellArr = [];
            continue;
        }

        if (data[i + 1] === '\n' || i + 1 === data.length) {
            //filter out empty space in arr
            filterCells = cellArr.filter(element => element)
            // push filtered cells into Outer Array "completeArray"
            completeArray.push(filterCells);
            
        }
    }
    console.log(completeArray);
    
}

// Part 3: Transforming Data
function part3() {
    let data = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor's Assistant,26";
    
    let doneBefore = 0;
    let firstItArray = [];
    
    let cellArr = [];
    const completeArray = [];
    let word = "";
    

    for (let i = 0; i <= data.length; i++) {
        
        word += data[i];
        
        
        if (data[i] === ',') {
            
            cellArr[i] = word.replace(",", "");
            word = "";
            
        }

        if (data[i + 1] === '\n') {
            cellArr[i] = word.replace("\n", "");
            word = "";
        }

        if (i + 1 === data.length) {
            cellArr[i] = word;
        }
        
        if (data[i] === "\n") {
            word = "";
            cellArr = [];
            continue;
        }     

        if (data[i + 1] === '\n' || i + 1 === data.length) {

            // Only on the first iteration store the array in a "firstItArray" variable for later use
            if(!doneBefore) {
                firstItArray = cellArr.filter(element => element);
                doneBefore++;
                continue;
            }

            // Same Filter
            filterCells = cellArr.filter(element => element)
            // Turns the filtered Array into an object using the spread operator
            const arrTurnedObj = {...filterCells};
            // Iterate over each element in the first ever array and make its elements the keys for all arrays that come after it
            firstItArray.forEach((element, i) => {
                arrTurnedObj[element.toLowerCase()] = arrTurnedObj[i];
                // Delete old obj that have incorrect keys
                delete arrTurnedObj[i];
            })
            completeArray.push(arrTurnedObj);

            
            
        }
    }
    
    
    console.log(completeArray);

}

// Part 4: Sorting and Manipulating Data
function part4() {
    let data = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor's Assistant,26";
    
    let doneBefore = 0;
    let firstItArray = [];
    
    let cellArr = [];
    const completeArray = [];
    let word = "";
    

    for (let i = 0; i <= data.length; i++) {
        
        word += data[i];
        
        
        if (data[i] === ',') {
            
            cellArr[i] = word.replace(",", "");
            word = "";
            
        }

        if (data[i + 1] === '\n') {
            cellArr[i] = word.replace("\n", "");
            word = "";
        }

        if (i + 1 === data.length) {
            cellArr[i] = word;
        }
        
        if (data[i] === "\n") {
            word = "";
            cellArr = [];
            continue;
        }

        if (data[i + 1] === '\n' || i + 1 === data.length) {
            if(!doneBefore) {
                firstItArray = cellArr.filter(element => element);
                doneBefore++;
                continue;
            }
           
            filterCells = cellArr.filter(element => element)
            const arrTurnedObj = {...filterCells};

            firstItArray.forEach((element, i) => {
                arrTurnedObj[element.toLowerCase()] = arrTurnedObj[i];
                delete arrTurnedObj[i];
            })
            
            
            
            completeArray.push(arrTurnedObj);
            
            
            
        }
    }

    // 1. Remove the last element from the array
    completeArray.pop(); 
    // 2. Insert the following object at index 1:
    completeArray.splice(1, 0, { id: "48", name: "Barry", occupation: "Runner", age: "25" }); 
    // 3. Add following object to the end of the array:
    completeArray.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" }); 
    console.log(completeArray);

    // Calculate the average age of the group.
    let totalAge = 0;
    completeArray.forEach((element) => {
        totalAge += parseInt(element.age);
    });

    let avgAge = totalAge / completeArray.length;
    console.log('Average Age of the group: ', avgAge);
}

// Part 5: Full Circle
function part5() {
    let data = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor's Assistant,26";
    
    let doneBefore = 0;
    let firstItArray = [];
    
    let cellArr = [];
    const completeArray = [];
    let word = "";
    

    for (let i = 0; i <= data.length; i++) {
        
        word += data[i];
        
        
        if (data[i] === ',') {
            
            cellArr[i] = word.replace(",", "");
            word = "";
            
        }

        if (data[i + 1] === '\n') {
            cellArr[i] = word.replace("\n", "");
            word = "";
        }

        if (i + 1 === data.length) {
            cellArr[i] = word;
        }
        
        if (data[i] === "\n") {
            word = "";
            cellArr = [];
            continue;
        }

        if (data[i + 1] === '\n' || i + 1 === data.length) {
            if(!doneBefore) {
                firstItArray = cellArr.filter(element => element);
                doneBefore++;
                continue;
            }
           
            filterCells = cellArr.filter(element => element)
            const arrTurnedObj = {...filterCells};

            firstItArray.forEach((element, i) => {
                arrTurnedObj[element.toLowerCase()] = arrTurnedObj[i];
                delete arrTurnedObj[i];
            })
            
            completeArray.push(arrTurnedObj);

        }
    }

    // 1. Remove the last element from the array
    completeArray.pop(); 
    // 2. Insert the following object at index 1:
    completeArray.splice(1, 0, { id: "48", name: "Barry", occupation: "Runner", age: "25" }); 
    // 3. Add following object to the end of the array:
    completeArray.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" }); 
    // console.log(completeArray);


    // Part 5: Transform the final set of data back into CSV format

    let newCSV = "";

    newCSV = Object.keys(completeArray[0]).toString();
    
    completeArray.forEach((element, i) => {
        newCSV += "\n";
        newCSV += Object.values(completeArray[i]).toString();
    })
    console.log(newCSV);
    console.log(data);

}

console.log("<=============== Part 2 ==================>");
part1and2();
console.log("<=============== Part 3 ==================>");
part3();
console.log("<=============== Part 4 ==================>");
part4();
console.log("<=============== Part 5 ==================>");
part5();
console.log("<=============== Complete ================>");