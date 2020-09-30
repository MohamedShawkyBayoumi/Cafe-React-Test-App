import React from 'react'

const ItemCard = ({ type, name, price, photo }) => {
    return (
        <div className="item-card">
            <div
                style={{
                    background: `url('${photo}') no-repeat center`
                }}
                className="card-img"
            />
            <div className="card-info">
                <div>
                    <h4>{type}</h4>
                    <h3>{name}</h3>
                </div>
                <h5>${price}</h5>
            </div>
        </div>
    )
}

export default ItemCard;