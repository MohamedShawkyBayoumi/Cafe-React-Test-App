import React from 'react';
import ItemCard from '../components/ItemCard';
import { useQuery, gql } from '@apollo/client';

const MENU_LIST = gql`
    query GetMenuItems {
        items {
            _id
            type
            name
            price
            photo
        }
    }
`;

function ListItems() {
    const { loading, error, data } = useQuery(MENU_LIST);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return (
        <section className="cards-wrapper">
            {data.items.length > 0 && data.items.map((item, index) => (
                <ItemCard key={index} {...item} />
            ))}
        </section>
    )
}

export default ListItems;