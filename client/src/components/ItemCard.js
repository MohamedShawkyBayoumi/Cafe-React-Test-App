import React from 'react';
import { withRouter } from 'react-router-dom';
import { gql, useMutation } from '@apollo/client';

const REMOVE_MENU_ITEM = gql`
    mutation RemoveMenuItem($_id: String!) {
    removeItem(_id: $_id) {
        _id
        # type
        # name
        # price
        # photo
    }
  }
`;


const ItemCard = ({ _id, type, name, price, photo, history }) => {

    const [removeItem, { data }] = useMutation(REMOVE_MENU_ITEM);

    const deleteItem = async _id => {
        try {
            let res = await removeItem({ variables: { _id } });
            console.log('res', res)
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