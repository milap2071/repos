const getTheTitles = function(arrBooks) {

    let arrTitle = [];

    for(let book of arrBooks){
        arrTitle.push(book["title"]);
    }
    return arrTitle;

};

const books = [
    {
      title: 'Book',
      author: 'Name'
    },
    {
      title: 'Book2',
      author: 'Name2'
    }
  ]

  console.log(getTheTitles(books));
  

// Do not edit below this line
module.exports = getTheTitles;
