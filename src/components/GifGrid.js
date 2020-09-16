import React from 'react';
import PropTypes from 'prop-types';
import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';


const GifGrid = ({ category }) => {

    const { data, loading } = useFetchGifs(category);


    return (
        <>
            <h2>{category}</h2>
            <div className="card-grid">    
                <hr/>
                { loading && 'Loading...'}
                { data.map((img)=> {
                    return <GifGridItem  key={img.id} {...img}></GifGridItem>
                })}
            </div>
        </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string
}

GifGrid.defaultProps = {

}

export default GifGrid;