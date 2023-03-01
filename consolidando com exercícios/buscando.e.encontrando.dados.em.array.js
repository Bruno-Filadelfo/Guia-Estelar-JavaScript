/* 
   Buscando e contanto dados em Arrays

   Baseado no Array de Livros por Categoria 
   abaixo, faça os seguintes desafios.

    . Contar o número de categorias e o número de livros em cada categoria 
    . Contar o número de autores
    . Mostrar livros do autor Augusto Cury
    . Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor.
*/

const booksByCategory = [
    {
        category: 'Riqueza',
        books: [
            {
                title: 'O Senhor dos Anéis',
                author: 'J. R. R. Tolkien',
            },
            {
                title: "Harry Potter e a Pedra Filosofal",
                author: "J. K. Rowling",
            },
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker",
            },
        ],
    },
    {
        category: 'Inteligência Emocional',
        books: [
            {
                title: "Você é Insubstituível",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade - Como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey",  
            },
        ],
    },    
];

const totalCategories = booksByCategory.length

console.log(totalCategories);
for(let category of booksByCategory) {
    console.log('Total de livros da categoria: ', category.category)
    console.log(category.books.length)
}

function countAuthors() {
    let authors = [];

    for(let category of booksByCategory) {
        for(let book of category.books) {
            if(authors.indexOf(book.author) == -1) {
                authors.push(book.author)
            }
        }
    }

    console.log("Total de authors: ", authors.length)

}

countAuthors();

function booksOfAugustoCury() {
    let books = [];

    for(let category of booksByCategory) {
        for(let book of category.books) {
            if(book.author === 'Augusto Cury') {
                books.push(book.title)
            }
        }
    }

    console.log("Livros do autor: ", books)

}

booksOfAugustoCury();

function booksOfAuthor(author) {
    let books = [];

    for(let category of booksByCategory) {
        for(let book of category.books) {
            if(book.author === author) {
                books.push(book.title)
            }
        }
    }

    console.log(`Livros do autor ${author}: ${books.join(", ")}`)
}

booksOfAuthor('Augusto Cury');

function booksOfAuthor(author) {
    let books = [];

    for(let category of booksByCategory) {
        for(let book of category.books) {
            if(book.author === author) {
                books.push(book.title)
            }
        }
    }

    console.log(`Livros do autor ${author}: ${books.join(", ")}`)
}

booksOfAuthor('J. K. Rowling');

function booksOfAuthor(author) {
    let books = [];

    for(let category of booksByCategory) {
        for(let book of category.books) {
            if(book.author === author) {
                books.push(book.title)
            }
        }
    }

    console.log(`Livros do autor ${author}: ${books.join(", ")}`)
}

booksOfAuthor('J. R. R. Tolkien');





