1. List the symbols for each of the below Javascript operators


Arithmetic Operators: +, -, /, *, **, %, ++, --


Assignment Operators: =, +=, -=, /=, %=, **=, *=


Comparison Operators: >, <, ==, ===, !=, !==, >=, <=


Logical Operators: &&, ||, !


Bitwise Operators: &, |, ~, <<, >>, >>>


2. For each JavaScript Operator, write 2 examples.


Arithmetic Operators: 

(a) let x = 2


    let y = 3


    let z = x + y


    //5

                      
    b) let num1 = 2


       let num2 = 3
        

       let result = num1 * num2 / num2


        
        //2


Assignment Operators: 


(a) let x = 6
                          
                          
    let z = 5


    z *= x //same as (z = z*x)


    //30


    (b) let num1 = 2


      let num2 = 4


      num2 += num1 //same as(num2 = num2 + num1)


      //6


Comparison Operators: 


(a) num1 = 5
  
  
    num2 = 10


    if (num1 > num2){


       console.log(num1);


       }else {

      
      console.log(num2);


      }
      //num2(10)

                      (b) let num1 = "2"
                          let num2 = 2
                          if (num1 === num2){
                            console.log(num1);
                          } else {
                            console.log(num2);
                          }//num2(2)
                          
Logical Operators: (a) let credits = 100
                        let age = 5
                        if (age = 5 && credits < 20) {
                        console.log("Give Credits")
                        } else {
                          console.log("Give Age")
                        } //"Give Age"

                    (b) let credits = 100
                        let age = 5
                        if (age = 5 || credits < 20) {
                        console.log("Give Credits")
                        } else {
                          console.log("Give Age")
                        } //"Give Credits"

Bitwise Operators: (a) & (AND)
                       let a = 12; 
                       let  b = 25; 

                       result = a & b;
                       console.log(result); // 8

                        In binary,
                        12 = 01100
                        25 = 11001

                        // Bitwise AND Operation of 12 and 25

                            00001100
                        &   00011001
                            ---------
                            00001000  = 8 (In decimal)

                    (b) ^ (XOR)
                        let a = 12; 
                        let  b = 25; 

                        result = a ^ b; 
                        console.log(result); // 21

                        In binary,

                        12 = 01100
                        25 = 11001

                        // Bitwise XOR Operation of 12 and 25

                            00001100
                        ^   00011001
                            --------
                            00010101  = 21 (In decimal)

4. for (i = 1; i < 20; i += 7) {
    console.log(i);
} //Answer: 1 8 15