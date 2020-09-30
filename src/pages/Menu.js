import React from 'react';
import ItemCard from '../components/ItemCard';
import { useQuery, gql } from '@apollo/client';

const MENU_LIST = gql`
    query GetMenuItems {
        items {
            # id
            type
            name
            price
            photo
        }
    }
`;

const Menu = ({ history }) => {
    const { loading, error, data } = useQuery(MENU_LIST);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return (
        <main>
            <section className="main-head">
                <h3>Menu</h3>
                <div>
                    <button onClick={() => history.push('/AddMenuItem')}>Add menu item</button>
                </div>
            </section>
            <section className="cards-wrapper">
                {data.items.length > 0 && data.items.map((item, index) => (
                    <ItemCard key={index} {...item} />
                ))}
            </section>
        </main>
    )
}

export default Menu;