import React from 'react';
import ItemCard from '../components/ItemCard';

const Menu = ({ history }) => {
    return (
        <main>
            <section className="main-head">
                <h3>Menu</h3>
                <div>
                    <button onClick={() => history.push('/AddMenuItem')}>Add menu item</button>
                </div>
            </section>
            <section className="cards-wrapper">
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
            </section>
        </main>
    )
}

export default Menu;