import React from 'react';
import ListItems from '../components/ListItems';

const Menu = ({ history }) => {
    return (
        <main>
            <section className="main-head">
                <h3>Menu</h3>
                <div>
                    <button onClick={() => history.push('/AddMenuItem')}>Add menu item</button>
                </div>
            </section>
            <ListItems />
        </main>
    )
}

export default Menu;