import { ListBooks,books } from "./models.js";

console.log("************** DELIVERABLE 04 *********************");

function isBookRead(books:ListBooks[], titleToSearch:string):boolean {    
    return books.some(book => book.title === titleToSearch && book.isRead === true);
} 

console.log("Devastación is read: " , isBookRead(books, "Devastación")); 
console.log("Canción de hielo y fuego is read: " ,isBookRead(books, "Canción de hielo y fuego"));  
console.log("Los Pilares de la Tierra: " ,isBookRead(books, "Los Pilares de la Tierra")); 
console.log("Otro: " ,isBookRead(books, "Otro")); 
