                // PUT,PATCH => Updating a resource 

// const putData = async () => {
//     const res = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
//         method:"PUT",
//         body:JSON.stringify({
//             id: 1,
//             title: 'javascript',
//             body: 'courses',
//             userId: 1,
//         }),
//         headers: {
//                 'Content-type': 'application/json; charset=UTF-8',
//             },
//     })
//     const data = await res.json();
//     console.log(data);
// }
// putData();

// const patchData = async () => {
//     const res = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
//         method:"PATCH",
//         body:JSON.stringify({
//             title: 'javascript',
//         }),
//         headers: {
//                 'Content-type': 'application/json; charset=UTF-8',
//             },
//     })
//     const data = await res.json();
//     console.log(data);
// }
// patchData();

                // DELETE => Deleting a resource
// const deleteData = async () => {
//     const res = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
//         method:"DELETE"})
//     const data = await res.json();
//     console.log(data);
// }
// deleteData();

                // regex 
// https://regexr.com
// write between the (/ /)

// \w => A-Z a-z and numbers but \W => any things except A_Z a_z and numbers
// \d =>  numbers but \D => any things except number
// \s => except space 
// (karet)\^ => except in the start
// \$ => except in the end
// . => except all char..
// hi | hello 
// + , * , ? , 1{2,4}

// /^[a-zA-Z0-9_\.]+@[a-zA-Z]+\.[a-zA-Z]{2,3}$/ => for email 

// const email = "sarafarzamnia0@gmail.com";
// const regex = /^[a-zA-Z0-9_\.]+@[a-zA-Z]+\.[a-zA-Z]{2,3}$/;
// const result = regex.test(email);
// console.log(result);

// const string = "Hi I am saro and my phone number is 09046764745";
// const regex = /09\d{9}/;
// const result = string.replace(regex,"***********");
// console.log(result);

// const string = "Hi I am Nilofar and my phone numbers is 09141842661 and 09215314294";
// const regex = /09\d{9}/g;
// const result = string.match(regex);
// console.log(result);

// g => global
// i => case insensitive
// m => multiline
// s => single line (dotall)
// u => unicode
// y => sticky

// / /gimsuy