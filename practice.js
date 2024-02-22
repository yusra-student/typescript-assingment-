//2.Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
//let firstname:string ="saima waheed";
//console.log(`hello ${firstname}, would you like tolearnsome python today?`);
//3 Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
//let firstname:string ="saima waheed";
//console.log(firstname.toLowerCase());
//console.log(firstname.toUpperCase());
//console.log(firstname.charAt(0).toUpperCase() +firstname.slice(1));
//4 Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:
//console.log('Rashid manhaz shaeed said, "sher ki aik din ki zindagi gidder ki so sala zindagi se bhatr he."');
//5 Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
//let famous_person:string = "Rashid manhaz";
//let massage:string =
//"sher ki aik din ki zindagi gidder ki so sala zindagi se bhatr he."
//console.log(`${famous_person} said"${massage}`);
// 6.Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
//console.log("Helloworld");
//console.log("Hello\tworld");
//console.log("Hello\nworld");
// 7.Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.
// let a:number = 10
// let b:number = 5
// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);
// console.log(a%b);
// console.log(a==b);
//8.You should create four lines that look like this:
//console.log(5 + 3)
//Your output should simply be four lines with the number 8 appearing once on each line.
// console.log(5+3);
// console.log(18-10);
// console.log(2*4);
// console.log(16/2);
//9.Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.
// let num:number = 2024;
// console.log(`my favorit number is ${num}`);
//10.Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.
//addition programme 
//let a:number = 10;
//let b:number = 20;
//console.log(`${a}+${b}=${a+b}`);
//subtraction programme
//console.log(`${b}-${a}=${b-a}`);
// 11.Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
//let names:string[] = ["saima","waheed","ansharah"];
// console.log(name
// console.log(names[2]);s[0]);
// console.log(names[1]);
//12.Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
// let massage:string = "is the student of piaic";
// console.log(names[0] +" "+massage);
// console.log(names[1] +" "+massage);
// console.log(names[2] +" "+massage);
//13.Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
// let vehicles:string[] = [
//     "honda motor cycle"
//     "honda city",
//     "Honda civics",
//     "BMW",
//     "Audi R8",
// ];
// vehicles.map((item) => 
//     console.log(`i would liketo on a${item}`));
//14. Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
//let guestArr:string[] = ["saima","waheed","ansharah"];
// guestArr.map((item)=>
// console.log(`dear ${item}, you are corodially invited to a dinner`)
// );
// 15 +16.Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.• 
//.Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
//• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
//• Print a second set of invitation messages, one for each person who is still in your list
// console.log(guestArr);
//let canNotAttend:string = "saima";
//console.log(canNotAttend +" "+"can not make it for dinner");
//let newGuest:string = "yusra"
//guestArr[guestArr.indexOf(canNotAttend)] = newGuest;
//console.log(guestArr);
// guestArr.map((item) =>
// console.log(`dear${item},you are corodiallyinvited to a dinner`)  );
//guestArr.unshift("sono");
//console.log(guestArr);
//let middleguest:string = "typescript master Ibrahim";
//let middleIndex = guestArr.length / 2;
//guestArr.splice(middleIndex,0,middleguest);
//console.log(guestArr);
//guestArr.push("michael");
//console.log(guestArr);
//guestArr.map((item) =>
//console.log(`dear${item},you are corodiallyinvited to a dinner`)  );
// 17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
//  • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
//  • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
//  • Print a message to each of the two people still on your list, letting them know they’re still invited.
//  • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program
// console.log("Ican invite only to dinner");
// while(guestArr.length > 2){
//     let RemoveGuest = guestArr.pop();
//     console.log(`Dear${RemoveGuest},you are invite to the dinner`);
// }
// guestArr.map((item) =>
// console.log(`Dear ${item},you are still invited to the dinner`)
//  );
//  guestArr.pop();
//  guestArr.pop();
//  console.log(guestArr);
//19.Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
//console.log(guestArr.length+"people" + " " + "are invite to dinner");
// 18. Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed. 
//let countryArr = [
//"Pakistan", 
// "India",
//"China",
//"America",
//"Canada",
// ]
//console.log(countryArr);
//console.log(countryArr.sort());
// console.log(countryArr);
// console.log(countryArr.reverse());
// console.log(countryArr);
// let sortedArray = [
//     "Pakistan",
//     "India",
//     "Argentina",
//     "Zimbabwe",
//     "China",
//     "Iran",
// ];
// sortedArray.sort();
// console.log(sortedArray);
// sortedArray.reverse();
// console.log(sortedArray);
//20. Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
// let proglanguages:string[] = ["HTML","CSS","Javascript/Typescript","php"];
// proglanguages.map((item) => console.log(item));
//21.They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
// let person:{name:string,fname:string,age:number} = 
// {name:"saima",fname:"Sultan Ahmed",age:30}
// console.log(person);
// 22.Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
// const programminglanguage: string[]=[
//     "python",
//     "html",
//     "css",
//     "typescript",
//     "javascript",
// ];
// console.log(programminglanguage[6]);
// console.log(programminglanguage[3]);
//23.Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
// let car = 'subaru';
// console.log("Is car == 'subaru'? I predict True.")
// console.log(car == 'subaru')
// • Look closely at your results, and make sure you understand why each line evaluates to True or False.
// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False
// let car = 'subaro';
// console.log("is car =='subraru'?i pridict true otherwise i pridict false");
// console.log(car == 'subaru');
// console.log(car == 'toyota');
// console.log(car=='subaro');
// console.log(car == 'ODI');
// let flower ='Rose';
// console.log("is flower =='Rose'?i pridict true otherwise i pridict false");
// console.log(flower =='Rose');
// console.log(flower == 'jasmin');
// let num:any = 23
// console.log("is num == 23(in nmber)?i pridict true otherwise i pridict false");
// console.log(num == 23);
// console.log(num =="23");
// Conditional Tests:
// Here are 10 conditional tests with predictions and explanations:
// J// Test 1
// let num = 5;
// console.log("Is num == 5? I predict True.");
// console.log(num == 5); // True (number comparison)
// // Test 2
// let word = "hello";
// console.log("Is word == 'hello'? I predict True.");
// console.log(word == "hello"); // True (string comparison)
// // Test 3
// let dec = 1.0;
// console.log("Is dec == 1? I predict False.");
// console.log(dec == 1); // False (floating-point vs. integer comparison)
// // Test 4
// let arr1 = [1, 2, 3];
// console.log("Is arr1 == [1, 2, 3]? I predict True.");
// console.log(arr1 == [1, 2, 3]); // True (array comparison checks reference)
// // Test 5
// let arr2 = [1, 2, 3];
// let arr3 = arr2;
// console.log("Is arr2 == arr3? I predict True.");
// console.log(arr2 == arr3); // True (same reference)
// // Test 6
//var obj1 = { name: "Alice" };
//var obj2 = { name: "Alice" };
//console.log("Is obj1 == obj2? I predict False.");
//console.log(obj1 == obj2); // False (objects compared by reference, not value)
// // Test 7
// let boolTrue = true;
// console.log("Is boolTrue == false? I predict False.");
// console.log(boolTrue == false); // False (boolean comparison)
// // Test 8
// let emptyStr = "";
// console.log("Is emptyStr == null? I predict False.");
// console.log(emptyStr == null); // False (empty string is not null)
// // Test 9
// let undeclaredVar;
// console.log("Is undeclaredVar == undefined? I predict True.");
// console.log(undeclaredVar == undefined); // True (undeclared variable is undefined)
// // Test 10
// let x = 10;
// let y = "10";
// console.log("Is x === y? I predict False.");
// console.log(x === y); // False (strict comparison checks type and valueavaScript
// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
// const string1:string = "apple";
// const string2:string ="orange";
// console.log(string1 === string2);
// console.log(string1 !== string2);
// const mixedcasestring:string = "hello world";
// console.log(mixedcasestring.toLowerCase()==="hellowworld");
// const num1:number = 10;
// const num2:number = 5;
// console.log(num1 === num2);
// console.log(num1 !== num2);
// console.log(num1 > num2);
// console.log(num1 < num2);
// console.log(num1 >= num2);
// console.log(num1 <= num2);
//test using "and" and "or" operator
// const condition1: boolean =true;
// const condition2: boolean =false;
// console.log(condition1 && condition2);
// console.log(condition1 || condition2);
// const fruits: string[] = ["apple","orange","banana","grapes"];
// console.log(fruits.includes("apple"));
// console.log(fruits.includes("banana"));
//Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
//• Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
//. Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)
//let aliencolor:string='green';
//verwsion that passes the if test (green alein)
//if (aleincolor === 'green') {
//  console.log("player just earned 5 points!");
//}
//version that fails the if test (red alein)
// aliencolor = 'red';
// if ( aliencolor=== 'green') {
//     console.log("player just earned 5 points!"); 
//}//2.Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
//let firstname:string ="saima waheed";
//console.log(`hello ${firstname}, would you like tolearnsome python today?`);
//3 Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
//let firstname:string ="saima waheed";
//console.log(firstname.toLowerCase());
//console.log(firstname.toUpperCase());
//console.log(firstname.charAt(0).toUpperCase() +firstname.slice(1));
//4 Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:
//console.log('Rashid manhaz shaeed said, "sher ki aik din ki zindagi gidder ki so sala zindagi se bhatr he."');
//5 Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
//let famous_person:string = "Rashid manhaz";
//let massage:string =
//"sher ki aik din ki zindagi gidder ki so sala zindagi se bhatr he."
//console.log(`${famous_person} said"${massage}`);
// 6.Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
//console.log("Helloworld");
//console.log("Hello\tworld");
//console.log("Hello\nworld");
// 7.Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.
// let a:number = 10
// let b:number = 5
// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);
// console.log(a%b);
// console.log(a==b);
//8.You should create four lines that look like this:
//console.log(5 + 3)
//Your output should simply be four lines with the number 8 appearing once on each line.
// console.log(5+3);
// console.log(18-10);
// console.log(2*4);
// console.log(16/2);
//9.Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.
// let num:number = 2024;
// console.log(`my favorit number is ${num}`);
//10.Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.
//addition programme 
//let a:number = 10;
//let b:number = 20;
//console.log(`${a}+${b}=${a+b}`);
//subtraction programme
//console.log(`${b}-${a}=${b-a}`);
// 11.Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
//let names:string[] = ["saima","waheed","ansharah"];
// console.log(name
// console.log(names[2]);s[0]);
// console.log(names[1]);
//12.Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
// let massage:string = "is the student of piaic";
// console.log(names[0] +" "+massage);
// console.log(names[1] +" "+massage);
// console.log(names[2] +" "+massage);
//13.Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
// let vehicles:string[] = [
//     "honda motor cycle"
//     "honda city",
//     "Honda civics",
//     "BMW",
//     "Audi R8",
// ];
// vehicles.map((item) => 
//     console.log(`i would liketo on a${item}`));
//14. Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
//let guestArr:string[] = ["saima","waheed","ansharah"];
// guestArr.map((item)=>
// console.log(`dear ${item}, you are corodially invited to a dinner`)
// );
// 15 +16.Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.• 
//.Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
//• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
//• Print a second set of invitation messages, one for each person who is still in your list
// console.log(guestArr);
//let canNotAttend:string = "saima";
//console.log(canNotAttend +" "+"can not make it for dinner");
//let newGuest:string = "yusra"
//guestArr[guestArr.indexOf(canNotAttend)] = newGuest;
//console.log(guestArr);
// guestArr.map((item) =>
// console.log(`dear${item},you are corodiallyinvited to a dinner`)  );
//guestArr.unshift("sono");
//console.log(guestArr);
//let middleguest:string = "typescript master Ibrahim";
//let middleIndex = guestArr.length / 2;
//guestArr.splice(middleIndex,0,middleguest);
//console.log(guestArr);
//guestArr.push("michael");
//console.log(guestArr);
//guestArr.map((item) =>
//console.log(`dear${item},you are corodiallyinvited to a dinner`)  );
// 17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
//  • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
//  • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
//  • Print a message to each of the two people still on your list, letting them know they’re still invited.
//  • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program
// console.log("Ican invite only to dinner");
// while(guestArr.length > 2){
//     let RemoveGuest = guestArr.pop();
//     console.log(`Dear${RemoveGuest},you are invite to the dinner`);
// }
// guestArr.map((item) =>
// console.log(`Dear ${item},you are still invited to the dinner`)
//  );
//  guestArr.pop();
//  guestArr.pop();
//  console.log(guestArr);
//19.Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
//console.log(guestArr.length+"people" + " " + "are invite to dinner");
// 18. Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed. 
//let countryArr = [
//"Pakistan", 
// "India",
//"China",
//"America",
//"Canada",
// ]
//console.log(countryArr);
//console.log(countryArr.sort());
// console.log(countryArr);
// console.log(countryArr.reverse());
// console.log(countryArr);
// let sortedArray = [
//     "Pakistan",
//     "India",
//     "Argentina",
//     "Zimbabwe",
//     "China",
//     "Iran",
// ];
// sortedArray.sort();
// console.log(sortedArray);
// sortedArray.reverse();
// console.log(sortedArray);
//20. Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
// let proglanguages:string[] = ["HTML","CSS","Javascript/Typescript","php"];
// proglanguages.map((item) => console.log(item));
//21.They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
// let person:{name:string,fname:string,age:number} = 
// {name:"saima",fname:"Sultan Ahmed",age:30}
// console.log(person);
// 22.Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
// const programminglanguage: string[]=[
//     "python",
//     "html",
//     "css",
//     "typescript",
//     "javascript",
// ];
// console.log(programminglanguage[6]);
// console.log(programminglanguage[3]);
//23.Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
// let car = 'subaru';
// console.log("Is car == 'subaru'? I predict True.")
// console.log(car == 'subaru')
// • Look closely at your results, and make sure you understand why each line evaluates to True or False.
// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False
// let car = 'subaro';
// console.log("is car =='subraru'?i pridict true otherwise i pridict false");
// console.log(car == 'subaru');
// console.log(car == 'toyota');
// console.log(car=='subaro');
// console.log(car == 'ODI');
// let flower ='Rose';
// console.log("is flower =='Rose'?i pridict true otherwise i pridict false");
// console.log(flower =='Rose');
// console.log(flower == 'jasmin');
// let num:any = 23
// console.log("is num == 23(in nmber)?i pridict true otherwise i pridict false");
// console.log(num == 23);
// console.log(num =="23");
// Conditional Tests:
// Here are 10 conditional tests with predictions and explanations:
// J// Test 1
// let num = 5;
// console.log("Is num == 5? I predict True.");
// console.log(num == 5); // True (number comparison)
// // Test 2
// let word = "hello";
// console.log("Is word == 'hello'? I predict True.");
// console.log(word == "hello"); // True (string comparison)
// // Test 3
// let dec = 1.0;
// console.log("Is dec == 1? I predict False.");
// console.log(dec == 1); // False (floating-point vs. integer comparison)
// // Test 4
// let arr1 = [1, 2, 3];
// console.log("Is arr1 == [1, 2, 3]? I predict True.");
// console.log(arr1 == [1, 2, 3]); // True (array comparison checks reference)
// // Test 5
// let arr2 = [1, 2, 3];
// let arr3 = arr2;
// console.log("Is arr2 == arr3? I predict True.");
// console.log(arr2 == arr3); // True (same reference)
// // Test 6
//var obj1 = { name: "Alice" };
//var obj2 = { name: "Alice" };
//console.log("Is obj1 == obj2? I predict False.");
//onsole.log(obj1 == obj2); // False (objects compared by reference, not value)
// // Test 7
// let boolTrue = true;
// console.log("Is boolTrue == false? I predict False.");
// console.log(boolTrue == false); // False (boolean comparison)
// // Test 8
// let emptyStr = "";
// console.log("Is emptyStr == null? I predict False.");
// console.log(emptyStr == null); // False (empty string is not null)
// // Test 9
// let undeclaredVar;
// console.log("Is undeclaredVar == undefined? I predict True.");
// console.log(undeclaredVar == undefined); // True (undeclared variable is undefined)
// // Test 10
// let x = 10;
// let y = "10";
// console.log("Is x === y? I predict False.");
// console.log(x === y); // False (strict comparison checks type and valueavaScript
// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
// const string1:string = "apple";
// const string2:string ="orange";
// console.log(string1 === string2);
// console.log(string1 !== string2);
// const mixedcasestring:string = "hello world";
// console.log(mixedcasestring.toLowerCase()==="hellowworld");
// const num1:number = 10;
// const num2:number = 5;
// console.log(num1 === num2);
// console.log(num1 !== num2);
// console.log(num1 > num2);
// console.log(num1 < num2);
// console.log(num1 >= num2);
// console.log(num1 <= num2);
//test using "and" and "or" operator
// const condition1: boolean =true;
// const condition2: boolean =false;
// console.log(condition1 && condition2);
// console.log(condition1 || condition2);
// const fruits: string[] = ["apple","orange","banana","grapes"];
// console.log(fruits.includes("apple"));
// console.log(fruits.includes("banana"));
//Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
//• Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
//. Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)
//let aliencolor:string='green';
//verwsion that passes the if test (green alein)
//if (aleincolor === 'green') {
//  console.log("player just earned 5 points!");
//}
//version that fails the if test (red alein)
// aliencolor = 'red';
// if ( aliencolor=== 'green') {
//     console.log("player just earned 5 points!"); 
//}
// 26. Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
// • Write one version of this program that runs the if block and another that runs the else block
// let aliencolor:string = 'green';
// aliencolor ="red"
// // version that passes the if test (green alien)
// if (aliencolor === 'green') {
//      console.log("player just earned 5 points!");
//     }
// else {
//     console.log("player just earned 10 points!");
// }
// // version that passes the else condition
// aliencolor ="red"
// if (aliencolor === 'green') {
//     console.log("player just earned 5 points!");
//    }
//   else {
//     console.log("player just earned 5 points!");
//    }
//27. Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.
// • Write three versions of this program, making sure each message is printed for the appropriate color alien.
//alien color is yellow
// let aliencolor:string = 'yellow';
// if (aliencolor === 'green') {
//          console.log("player just earned 5 points!");
//         }
//      else if(aliencolor === 'yellow') {
//         console.log("player just earned 10 points!");
//      }
//      else if(aliencolor === 'red') {
//         console.log("player just earned 15 points!");
//      }
// alien color is red
// let aliencolor:string = 'red';
// if (aliencolor === 'green') {
//          console.log("player just earned 5 points!");
//         }
//      else if(aliencolor === 'yellow') {
//         console.log("player just earned 10 points!");
//      }
//      else if(aliencolor === 'red') {
//         console.log("player just earned 15 points!");
//      }
// 28.Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
// • If the person is less than 2 years old, print a message that the person is a baby.
// • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
// • If the person is at least 4 years old but less than 13, print a message that the person is a kid.
// • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
// • If the person is at least 20 years old but less than 65, print a message that the person is an adult.
// • If the person is age 65 or older, print a message that the person is an elder
// let age:number =27
// if (age <2) {
//     console.log("the person is a baby");
// }
// else if (age>= 2 && age <4) {
// console.log("the person is todler");
// }
// else if (age>= 4 && age <13) {
//     console.log("the person is kid");
//     }
//     else if (age>= 13 && age <20) {
//         console.log("the person is teenager");
//         }
//         else if (age>= 20 && age <65) {
//             console.log("the person is adult");
//         }
//             else if(age >=65){
//                 console.log("the person is elder ");
//             }
// 29.Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
// const favoriteFruits = ["Mango", "Banana", "Apple" ,"grapes"];
// // Check for each fruit and print a message if it's in the array
// if (favoriteFruits.includes("Mango")) {
//   console.log("You really like mangoes!");
// }
// if (favoriteFruits.includes("Banana")) {
//   console.log("You really like bananas!");
// }
// if (favoriteFruits.includes ("Apple")) {
//   console.log("You really like apples!");
// }
// if (favoriteFruits.includes("Orange")) {
//   console.log("You really like oranges!"); // Change this fruit according to your preference
// }
// if (favoriteFruits.includes("Grapes")) {
//   console.log("You really like grapes!")
// }
// 30.Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again
// const usernames: string[] = ["admin", "Eric", "Maria", "John", "Alice"];
// for (const username of usernames) {
//   if (username === "admin") {
//     console.log(`Hello ${username}, would you like to see a status report?`);
//   } else {
//     console.log(`Hello ${username}, thank you for logging in again!`);
//   }
// }
// 31.No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed
var usernames = ["admin"]; // Empty array of usernames
function makeCar(manufacturer, model) {
    var optionalInfo = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        optionalInfo[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        model: model,
    };
    // Extract key-value pairs from optional info and add them to the car object
    for (var _a = 0, optionalInfo_1 = optionalInfo; _a < optionalInfo_1.length; _a++) {
        var _b = optionalInfo_1[_a], key = _b[0], value = _b[1];
        car[key] = value; // Type-safe assignment using keyof
    }
    return car;
}
