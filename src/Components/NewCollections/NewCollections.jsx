import React, { useEffect, useState, lazy, Suspense } from 'react';
import './NewCollections.css';
import Spinner from '../Spinner/Spinner';

const Item = lazy(() => import('../Item/Item'));

const NewCollections = () => {
    const [new_collection, setNew_collection] = useState([]);

    useEffect(() => {
        fetch('https://trendmart-backend.onrender.com/newcollections')
            .then((res) => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                return res.json();
            })
            .then((data) => setNew_collection(data))
            .catch((error) => {
                console.error('Error fetching new collections:', error);
            });
    }, []);

    return (
        <div className='new-collections'>
            <h1>NEW COLLECTIONS</h1>
            <hr />
            <div className='collections'>
                <Suspense fallback={<Spinner />}>
                    {new_collection.map((item, i) => (
                        <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                    ))}
                </Suspense>
            </div>
        </div>
    );
};

export default NewCollections;
