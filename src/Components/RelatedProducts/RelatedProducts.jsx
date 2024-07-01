import React, {useState, useEffect} from 'react'
import './RelatedProducts'
import data_product from '../Assets/data'
import Item from '../Item/Item'
import './RelatedProducts.css'
const RelatedProducts = ({category}) => {

    const [data_product, setDataProducts] = useState([]);

    useEffect(()=>{
        fetch(`https://trendmart-backend.onrender.com/relatedproducts/${category}`)
        .then((res)=> res.json())
        .then((data) => setDataProducts(data));
    },[])
    return (
        <div className='relatedproducts'>
            <h1>Related Products</h1>
            <hr />
            <div className="relatedproducts-items">
                {data_product.map((item,i)=>{
                    return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                })}
            </div>
        </div>
    )
}

export default RelatedProducts