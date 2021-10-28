import React,{useRef} from 'react';


function AddMovie(props) {
    const titleRef=useRef(null) ;
    const openingTextRef=useRef(null);
    const releaseDateRef=useRef(null);


    function submitHandler(event) {
        event.preventDefault();
        //console.log('Hello');
        //add validation code here
        //console.log(titleRef.current);
        const movie={
            title:titleRef.current.value,
            openingText:openingTextRef.current.value,
            releaseDate:releaseDateRef.current.value,
        };
        
        props.onAddMovie(movie);
    }

    return (
        <form onSubmit={submitHandler}>
            <div>
                <label htmlFor="title">Title</label>
                <input type="text" id="title" ref={titleRef} />
            </div>
            <div>
                <label htmlFor="opening-text">Opening Text</label>
                <input type="text" id="opening-text" ref={openingTextRef} />
            </div>
            <div>
                <label htmlFor="date">Release Date</label>
                <input type="text" id="date" ref={releaseDateRef} />
            </div>
            <button> Add Movie</button>
        </form>

    );
}

export default AddMovie;

