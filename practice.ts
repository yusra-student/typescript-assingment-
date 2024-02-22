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



const usernames: string[] = ["admin"]; // Empty array of usernames

// Check if the user list is empty
// if (usernames.length === 0) {
//   console.log("We need to find some users!");
// } else {
//   for (const username of usernames) {
//     if (username === "admin") {
//       console.log(`Hello ${username}, would you like to see a status report?`);
//     } else {
//       console.log(`Hello ${username}, thank you for logging in again!`);
//     }
//   }
// }

// 32.Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.

// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted


// const currentUsers: string[] = ["john", "jane", "mary", "alex", "david"];
// const newUsers: string[] = ["Emma", "JOHN", "sara", "michael", "ALEX"];

// function checkUsernameAvailability(username: string): boolean {
//   // Convert username to lowercase for case-insensitive comparison
//   const lowercaseUsername = username.toLowerCase();

//   for (const currentUser of currentUsers) {
//     if (lowercaseUsername === currentUser.toLowerCase()) {
//       return false; // Username already exists
//     }
//   }

//   return true; // Username is available
// }

// for (const newUser of newUsers) {
//   const available = checkUsernameAvailability(newUser);

//   if (available) {
//     console.log(`Username ${newUser} is available!`);
//   } else {
//     console.log(`Username ${newUser} already exists. Please choose a different one.`);
//   }


// 33.Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
// • Store the numbers 1 through 9 in a array.

// • Loop through the array.

// • Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.


// const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// for (const number of numbers) {
//   let ordinalSuffix: string;

//   // Handle special cases first
//   if (number === 1) {
//     ordinalSuffix = "st";
//   } else if (number === 2) {
//     ordinalSuffix = "nd";
//   } else if (number === 3) {
//     ordinalSuffix = "rd";
//   } else {
//     // For other numbers, check the last digit
//     const lastDigit = number % 10;

//     // Use "th" for specific cases (11, 12, 13)
//     if (lastDigit === 1 && number !== 11 || lastDigit === 2 && number !== 12 || lastDigit === 3 && number !== 13) {
//       ordinalSuffix = "th";
//     } else {
//       ordinalSuffix = ["th", "st", "nd", "rd", "th", "th", "th", "th", "th", "th"][lastDigit];
//     }
//   }

//   console.log(`${number}${ordinalSuffix}`);
// }


// 34.Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.

// • Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza

// const favoritePizzas: string[] = ["Pepperoni", "Hawaiian", "Margherita"];

// // Print each pizza with a sentence
// for (const pizza of favoritePizzas) {
//   console.log(`I like ${pizza.toLowerCase()} pizza.`);
// }

// // Express love for pizza outside the loop
// console.log("I really love pizza!");


// 35.Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!


// const friendlyAnimals: string[] = ["dog", "cat", "rabbit"];

// // Print statements about each animal
// for (const animal of friendlyAnimals) {
//   console.log(`${animal.charAt(0).toUpperCase() + animal.slice(1)}s are friendly and make great pets!`);
// }

// // Print statement about their common characteristic
// console.log("These animals all share the trait of being friendly and loving companions.");

// 36.T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.

// function makeShirt(size: string, message: string): void {
//     console.log(`You ordered a size ${size} shirt with the message: "${message}"`);
//   }
  
//   // Call the function with different sizes and messages
//   makeShirt("L", "Hello, World!");
//   makeShirt("M", "Keep Calm and Code On");

// 37.Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message
  
// function makeShirt(size: string = "large", message: string = "I love TypeScript"): void {
//     console.log(`You ordered a size ${size} shirt with the message: "${message}"`);
//   }
  
//   // Call the function with different sizes and messages
//   makeShirt(); // Large shirt with default message
//   makeShirt("medium"); // Medium shirt with default message
//   makeShirt("small", "Python is cool too!"); // Small shirt with custom message
  

// 38.Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country

// function describeCity(city: string, country = "Pakistan"): void {
//     // Capitalize the first letter of each word for better readability
//     const formattedCity = city.charAt(0).toUpperCase() + city.slice(1);
//     const formattedCountry = country.charAt(0).toUpperCase() + country.slice(1);
  
//     console.log(`${formattedCity} is in ${formattedCountry}.`);
//   }
  
//   // Call the function for three different cities
//   describeCity("Karachi"); // Use default country (Pakistan)
//   describeCity("Tokyo", "Japan"); // Specify different country
//   describeCity("New York", "United States"); // Specify different country
  
// 39.City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:

// "Lahore, Pakistan"

// Call your function with at least three city-country pairs, and print the value that’s returned


// function cityCountry(city: string, country: string): string {
//     return `${city}, ${country}`;
//   }
  
//   // Call the function with different city-country pairs and print the result
//   console.log(cityCountry("London", "England"));
//   console.log(cityCountry("Berlin", "Germany"));
//   console.log(cityCountry("Tokyo", "Japan"));


// 40.Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album
  
// interface Album {
//     artist: string;
//     title: string;
//     tracks?: number; // Optional property for number of tracks
//   }
  
//   function makeAlbum(artist: string, title: string, tracks?: number): Album {
//     return {
//       artist,
//       title,
//       tracks, // Include tracks if provided
//     };
//   }
  
//   // Create albums with different information
//   const album1: Album = makeAlbum("The Beatles", "Abbey Road");
//   const album2: Album = makeAlbum("Queen", "A Night at the Opera");
//   const album3: Album = makeAlbum("Pink Floyd", "The Dark Side of the Moon", 9);
  
//   // Print album information
//   console.log(album1);
//   console.log(album2);
//   console.log(album3);
  
// 41.Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array
  
// function showMagicians(magicianNames: string[]): void {
//     for (const magicianName of magicianNames) {
//       console.log(magicianName);
//     }
//    }
   
//    // Create an array of magician names
//    const magicians: string[] = ["David Copperfield", "Penn & Teller", "David Blaine", "Shin Lim"];
   
//    // Pass the array to the show_magicians() function
//    showMagicians(magicians);

// 42.Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

// function showMagicians(magicianNames: string[]): void {
//     for (const magicianName of magicianNames) {
//       console.log(magicianName);
//     }
//   }
  
//   function makeGreat(magicianNames: string[]): string[] {
//     // Create a new array to avoid modifying the original
//     const updatedMagicians: string[] = [];
  
//     for (const magicianName of magicianNames) {
//       updatedMagicians.push(`${magicianName} the Great`);
//     }
  
//     return updatedMagicians;
//   }
  
//   // Create an array of magician names
//   const magicians: string[] = ["David Copperfield", "Penn & Teller", "David Blaine", "Shin Lim"];
  
//   // Show the original list
//   console.log("Original Magician List:");
//   showMagicians(magicians);
  
//   // Modify the list using make_great() and show the updated list
//   console.log("\nGreat Magician List:");
//   showMagicians(makeGreat(magicians));
   
// 43.Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

// function showMagicians(magicianNames: string[]): void {
//     for (const magicianName of magicianNames) {
//       console.log(magicianName);
//     }
//   }
  
//   function makeGreat(magicianNames: string[]): string[] {
//     // Create a new array to avoid modifying the original
//     const updatedMagicians: string[] = [];
  
//     for (const magicianName of magicianNames) {
//       updatedMagicians.push(`${magicianName} the Great`);
//     }
  
//     return updatedMagicians;
//   }
  
//   // Create an array of magician names
//   const magicians: string[] = ["David Copperfield", "Penn & Teller", "David Blaine", "Shin Lim"];
  
//   // Show the original list
//   console.log("Original Magician List:");
//   showMagicians(magicians);
  
//   // Create a copy of the array and modify it
//   const greatMagicians: string[] = makeGreat([...magicians]); // Spread operator for copying
  
//   // Show the original list again to confirm it's unchanged
//   console.log("\nOriginal Magician List (Unchanged):");
//   showMagicians(magicians);
  
//   // Show the updated list
//   console.log("\nGreat Magician List:");
//   showMagicians(greatMagicians);
  

// 44.Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time
   
// function makeSandwich(...ingredients: string[]): void {
//     if (ingredients.length === 0) {
//       console.log("Your sandwich is a bit plain, maybe add some toppings!");
//       return;
//     }
  
//     console.log(`You ordered a sandwich with:`);
//     ingredients.forEach((ingredient) => console.log(`- ${ingredient}`));
  
//     const lastIngredient = ingredients.pop();
//     console.log(`On ${lastIngredient ? `bread with ` + lastIngredient : "bread alone."}`);
//   }
  
//   // Call the function with different ingredient lists
//   makeSandwich("ham", "cheese", "lettuce");
//   makeSandwich("turkey", "avocado", "mustard");
//   makeSandwich(); // No ingredients


// 45.Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.


// interface Car {
//     manufacturer: string;
//     model: string;
//     color?: string; // Optional property for color
//     feature?: string; // Optional property for feature
//     [key: string]: any; // Allow additional properties
//   }
  
//   function makeCar(manufacturer: string, model: string, ...optionalInfo: [string, string][]): Car {
//     const car: Car = {
//       manufacturer,
//       model,
//     };
  
//     // Extract key-value pairs from optional info and add them to the car object
//     for (const [key, value] of optionalInfo) {
//       car[key as keyof Car] = value; // Type-safe assignment using keyof
//     }
  
//     return car
//   }
//   // Call the function with different information
//   const car1: Car = makeCar("Toyota", "Camry", ["color", "red"], );
//   const car2: Car = makeCar("Honda", "Civic", ["color", "blue"] , );
  
//   console.log("Car 1:", car1);
//   console.log("Car 2:", car2);
  
  
  



  




  


