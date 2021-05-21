import SearchList from 'react';

function SearchList(props){
    return (
        <div className="container">
            {
                props.livros.map((livro, index)=>{
                    return <BookCard livro={livro}/>
                })
            }
        </div>
    )
}

export default SearchList;

