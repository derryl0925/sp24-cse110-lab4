1. 3
Explanation: The var keyword scopes the variable i to the entire function, not just the loop block. Therefore, after the loop exits when i equals prices.length (which is 3 for the array [100, 200, 300]), i is still accessible and retains this value. The console.log(i) statement on line 12 prints the value 3.

2. 150
Explanation: On the last iteration of the loop, discountedPrice is calculated as 300 * 0.5 = 150 and then it retains this value after the loop exits.

3. 150
Explanation: The console.log(finalPrice); on line 14 will output 150 because finalPrice is declared with var at the start of the discountPrices function, giving it function scope. It remains accessible within the function, and each iteration of the loop updates it to the latest discounted price of each item in the prices array. After the last iteration, finalPrice holds 150, which is the final discounted price for the last item in the array (300 discounted by 50%).

4. nothing is printed
Explanation: The function discountPrices as provided will not output anything to the console by itself, as it does not contain any console.log() statements outside of the commented-out lines. When executed, it calculates discounted prices based on the input array [100, 200, 300] and discount 0.5 and returns the array of discounted prices, but it does not print these values. To see the output we want, we can type: console.log(discountPrices([100, 200, 300], 0.5)); at line 19.

5. ReferenceError: i is not defined
Explanation: At line 12 in the provided function, attempting to log the variable i outside of the loop in which it's declared will cause an error. This is because i is declared with the let keyword inside the for loop, which limits its scope strictly to that loop. Unlike variables declared with var, which have function scope, let provides block scope. This means i is not accessible outside the block in which it is declared, hence trying to access it on line 12 results in a ReferenceError indicating that i is not defined.

6. ReferenceError: discountedPrice is not defined
Explanation: At line 13 in the provided function, trying to log the variable discountedPrice outside of the for loop will cause an error. This is due to discountedPrice being declared with the let keyword inside the for loop, which confines its scope to the loop block. Therefore, once the loop execution is complete, discountedPrice goes out of scope and is not accessible outside the loop block. Attempting to access it on line 13 results in a ReferenceError, indicating that discountedPrice is not defined in that scope.

7. 150
Explanation: The output of 150 at line 14 comes from the last iteration of the for loop where finalPrice is calculated. Since the finalPrice is declared with let outside the loop but within the function's scope, it remains accessible after the loop ends. The last iteration calculates the discounted price for the last value in the prices array, which is 300, with a 50% discount. The calculation 300 x (1 - 0.5) = 150 is then rounded to the nearest integer (though in this case, it remains 150 as it's already an integer). Since this is the final value assigned to finalPrice before the loop exits, this value is printed out when console.log(finalPrice) is called.

8. nothing is printed
Explanation: Similar to part 2 q4. Nothing is printed but add console.log() if you want to see the printed result, which should be the discounted prices array but halved: [50, 100, 150]

9. ReferenceError: i is not defined
Explanation: At line 11, there will be an error because the variable i is declared within the for loop with the let keyword, giving it block scope. This means that i is only accessible within the for loop and is not accessible outside of it. Therefore, when the code attempts to log the value of i at line 11, outside the loop, it will throw a reference error, indicating that i is not defined.

10. 3
Explanation: At line 12, the console.log(length); statement will successfully print 3 because the variable length is declared with the const keyword at the function scope level of discountPrices, and it stores the length of the prices array which is [100, 200, 300]. Since const provides block scope but is accessible throughout the function in which it's defined, there is no error and the correct length of the array, 3, is printed.

11. nothing is printed
Explanation: Similar to part 2 q4 and q8. Nothing is printed but add console.log() if you want to see the printed result, which should be the discounted prices array but halved: [50, 100, 150]

12. 
    - A: student.name
    - B: student['Grad Year']
    - C: student.greeting()
    - D: student['Favorite Teacher'].name
    - E: student.courseLoad[0]

13. 
    - A: '32', The number 2 is converted to a string and concatenated with '3', resulting in the string '32'.
    - B: 1, The string '3' is converted to a number, and 2 is subtracted from it, resulting in the number 1.
    - C: 3, null is converted to 0 in numeric contexts, so the result is 3 + 0 = 3.
    - D: '3null', null is converted to the string 'null', and concatenated with '3'.
    - E: 4, true is converted to 1 in numeric contexts, so 1 + 3 = 4.
    - F: 0, false and null are both converted to 0 in numeric contexts, resulting in 0 + 0 = 0.
    - G: '3undefined', undefined is converted to the string 'undefined', and concatenated with '3'.
    - H: NaN, undefined is converted to NaN when involved in a numeric operation, so any operation with NaN results in NaN.

14. 
    - A: true, the string '2' is converted to the number 2, which is greater than 1.
    - B: false, when comparing strings, JavaScript compares character codes lexicographically, where '2' is greater than '1'.
    - C: true, JavaScript performs type coercion and converts the string '2' to the number 2.
    - D: false, the strict equality operator === does not perform type coercion, so a number compared with a string results in false.
    - E: false, true is converted to 1 in numeric contexts, and 1 is not equal to 2.
    - F:true, Boolean(2) evaluates to true, and since both are of type Boolean and hold the same value, the result is true.

15. 
    - The == operator, also known as the equality operator, performs type coercion if the operands are of different types, before comparing them for equality.
    - The === operator, known as the strict equality operator, checks both the value and the type of the operands. If the types are different, the result is immediately false, without attempting to coerce the values.

16. 

    redCars: 21
    blueCars: 45
    raceCars: 5
    rareCars: 2

17. [2, 4, 6]
Explanation: The modifyArray function accepts two parameters: an array and a callback function. When modifyArray([1, 2, 3], doSomething) is called, the function iterates through each element of the array [1, 2, 3] and applies the doSomething callback to each element. The doSomething function simply doubles the number it receives. Thus, each number in the array is doubled: 1 becomes 2, 2 becomes 4, and 3 becomes 6. These results are then pushed into a new array newArr inside modifyArray. Consequently, modifyArray returns a new array [2, 4, 6] containing these doubled values. This output demonstrates a basic usage of callbacks for transforming array elements in JavaScript.

18. Code is in expose/javascript/part2-question18.js

19. 
1

4

3

2

Explanation: The JavaScript function printNums() executes a series of console logs interspersed with setTimeout calls, leading to the following output sequence: "1", "4", "3", "2". Initially, "1" is printed directly. Next, there are two setTimeout functions scheduled: one to print "2" after 1000 milliseconds and another to print "3" immediately after 0 milliseconds. However, due to JavaScript's event-driven, non-blocking I/O model, these setTimeout calls do not execute until the current execution stack is clear. This means that "4" is printed next because it follows directly in the code without delay. The setTimeout for "3" then executes as its delay is zero, but it had to wait for the stack to clear, coming after "4". Lastly, after the full second elapses, "2" is printed, concluding the sequence determined by the timeouts and their respective delays.
