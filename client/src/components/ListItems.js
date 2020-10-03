import React, { useEffect } from 'react';
import ItemCard from '../components/ItemCard';
import { useLazyQuery } from '@apollo/client';
import { MENU_LIST } from '../gql/quieries';

function ListItems() {
    const [getItems, { loading, error, data }] = useLazyQuery(MENU_LIST)

    useEffect(() => {
        let isMounted = true;
        if(isMounted) {
            getItems();
        }

        return () => {
            isMounted = false;
        };
    }, [data])

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return (
        <section className="cards-wrapper">
            {data && data.items.length > 0 && data.items.map((item, index) => (
                <ItemCard key={index} {...item} />
            ))}
        </section>
    )
}

export default ListItems;