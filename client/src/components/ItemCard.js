import React from 'react';
import { withRouter } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { REMOVE_MENU_ITEM } from '../gql/quieries';

const ItemCard = ({ _id, type, name, price, photo, history }) => {

    const [removeItem] = useMutation(REMOVE_MENU_ITEM),
        deleteItem = async _id => {
            try {
                await removeItem({ variables: { _id } });
                window.location.reload();
            } catch (error) {
                console.log(error)
            }
        }
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
                    <button onClick={() => history.push(`/AddMenuItem/${_id}`)}>Edit</button>
                    <button onClick={() => deleteItem(_id)}>Delete</button>
                </div>
                <h5>${price}</h5>
            </div>
        </div>
    )
}

export default withRouter(ItemCard);