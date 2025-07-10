books = [
    {"title": "Infinite Jest", "rating": 4.5, "genre": "Fiction"},
    {"title": "The Catcher in the Rye", "rating": 3.9, "genre": "Fiction"},
    {"title": "Sapiens", "rating": 4.9, "genre": "History"},
    {"title": "A Brief History of Time", "rating": 4.8, "genre": "Science"},
    {"title": "Clean Code", "rating": 4.7, "genre": "Technology"},
];
const getTitle=(books)=>{
 return books.map (books => books.title)
};
console.log(getTitle(books));
// map is an array datatype ,Array of object into array of string,both transformation and length must be same
const getFictionMovies=(books)=>{
    //filter
const getFictionMovies =(book) =>(book.filter(books)) => (book.genre=="fiction"));
 //transform
return fictionMovies.map((book) => book.title);
};
// number of elements is reduced so we use the filter option ,,will not transform the data type,since need to do transformation we use map