import React from 'react';

const Menu = ({ history }) => {
    return (
        <main>
            <section className="main-head">
                <h3>Menu</h3>
                <div>
                    <button onClick={() => history.push('/AddMenuItem')}>Add menu item</button>
                </div>
            </section>
        </main>
    )
}

export default Menu;