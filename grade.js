function studentGrade(grade) {
    //Take care of grades that dont count 

    //grade conditions  
    if (grade < 0 || grade > 100) {
      return "Invalid Grade";
    }
      if (grade >79 && grade <=100)
      {
          return "A";
      } 
      else if (grade >=60  && grade <=79)
      {
          return "B";
  
      }   
      else if (grade >=49 && grade <=59)
      {
          return "C";
      }
      else if (grade >=39 && grade <=49)
      {
          return "D";
      }
      else(grade <40)
      {
          return "E";
      }
  
  }
  
  //user input for grades in readline 
  const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Enter your grade: ', (input) => {
    const grade = parseInt(input); //converts input to number
  
    // Validate input (optional, but recommended for robustness)
    if (isNaN(grade)) {
      console.error("Invalid input: Please enter a number.");
      readline.close();
      return;
    }
  
    const result = studentGrade(grade);
    console.log("Your grade is:", result);
    readline.close();
  });
  