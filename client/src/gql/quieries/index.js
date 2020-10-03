import { gql} from '@apollo/client';

// GET all Menu Items
export const MENU_LIST = gql`
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

// DELETE Menu Item
export const REMOVE_MENU_ITEM = gql`
    mutation RemoveMenuItem($_id: String!) {
    removeItem(_id: $_id) {
        _id
    }
  }
`;

// POST Menu Item
export const ADD_MENU_ITEM = gql`
    mutation AddMenuItem($type: String!, $name: String!, $price: Int!, $photo: String!) {
    addItem(type: $type, name: $name, price: $price, photo: $photo) {
        type
        name
        price
        photo
    }
  }
`;

// UPDATE Menu Item
export const EDIT_MENU_ITEM = gql`
    mutation EditMenuItem($_id: String!, $type: String!, $name: String!, $price: Int!, $photo: String!) {
    updateItem(_id: $_id, type: $type, name: $name, price: $price, photo: $photo) {
        _id
        type
        name
        price
        photo
    }
  }
`;

// GET Single Menu Item
export const FETCH_MENU_ITEM = gql`
    query GetMenuItem ($_id: String!){
        item(_id: $_id) {
            _id
            type
            name
            price
            photo
        }
    }
`;