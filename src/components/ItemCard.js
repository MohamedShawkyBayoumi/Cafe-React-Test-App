import React from 'react'

const ItemCard = () => {
    return (
        <div className="item-card">
            <div
                style={{
                    background: `url('${require('../assets/pizza.jpg')}') no-repeat center`
                }}
                className="card-img"
            />
            <div className="card-info">
                <div>
                    <h4>MAIN COURSE</h4>
                    <h3>Pizza Margherita</h3>
                </div>
                <h5>$5</h5>
            </div>
        </div>
    )
}

export default ItemCard;