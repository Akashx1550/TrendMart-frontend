import React, { useEffect, useState, lazy, Suspense } from 'react';
import './Popular.css';
import Spinner from '../Spinner/Spinner';

const Item = lazy(() => import('../Item/Item'));

const Popular = () => {
    const [popularProducts, setPopularProducts] = useState([]);

    useEffect(() => {
        fetch('https://trendmart-backend.onrender.com/popularinwomen')
            .then((res) => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                return res.json();
            })
            .then((data) => setPopularProducts(data))
            .catch((error) => {
                console.error('Error fetching popular in women products:', error);
            });
    }, []);

    return (
        <div className='popular'>
            <h1>POPULAR IN WOMEN</h1>
            <hr />
            <div className="popular-item">
                <Suspense fallback={<Spinner />}>
                    {popularProducts.map((item, i) => (
                        <Item
                            key={i}
                            id={item.id}
                            name={item.name}
                            image={item.image}
                            new_price={item.new_price}
                            old_price={item.old_price}
                        />
                    ))}
                </Suspense>
            </div>
        </div>
    );
};

export default Popular;
