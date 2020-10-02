import React, { useState } from 'react';
import { gql, useMutation } from '@apollo/client';

const ADD_MENU_ITEM = gql`
    mutation AddMenuItem($type: String!, $name: String!, $price: Int!, $photo: String!) {
    addItem(type: $type, name: $name, price: $price, photo: $photo) {
        type
        name
        price
        photo
    }
  }
`;


const AddMenuItem = () => {
    const [values, setValues] = useState({
        type: 'Side',
        name: '',
        price: '',
        photo: {}
    });
    const [addItem, { data }] = useMutation(ADD_MENU_ITEM);

    const onChangeFile = async ({
        target: {
          validity,
          files: [file],
        },
      }) => {
        try {
            if (validity.valid) {
                console.log('file', file)
                setValues({
                    ...values,
                    photo: file
                })

                let data = new FormData();
                data.append('file', file)
                data.append('upload_preset', 'reactcafe')

                let res = await fetch('https://api.cloudinary.com/v1_1/dymelpf7v/image/upload', {
                    method: 'POST',
                    body: data
                })

                let fileJson = await res.json();
                console.log('file fetched', fileJson)
                setValues({
                    ...values,
                    photo: fileJson.secure_url
                })
            }

        } catch (error) {
            console.log(error)
        }
    }

    const onChange = (value, e) => {
        setValues({
            ...values,
            [value]: e.target.value
        })
    }

    const onSubmit = async (e) => {
        try {
            const { type, name, price, photo } = values;
            e.preventDefault();
            console.log('values', values)
            // let res = await addItem({ variables: { type, name, price, photo } });
            console.log('photo before sent', photo)
            if(photo) {
                let res = await addItem({ variables: { type, name, price: Number(price), photo } });
                console.log('res.data.addItem', res.data.addItem)

            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <main>
            <section className="main-head">
                <h3>Add Menu Item</h3>
            </section>
            <form onSubmit={onSubmit}>
                <section className="form-section">
                    <div className="form-row">
                        <label>Type</label>
                        <select
                            onChange={e => onChange('type', e)}
                            value={values.type}
                        >
                            <option value='Side'>Side</option>
                            <option value='Main Course'>Main Course</option>
                        </select>
                    </div>
                    <div className="form-row">
                        <label>Name</label>
                        <input type="text" value={values.name} onChange={e => onChange('name', e)} />
                    </div>
                    <div className="form-row">
                        <label>Price</label>
                        <input type="number" value={values.price} onChange={e => onChange('price', e)} />
                    </div>
                    <div className="form-row">
                        <label>Photo</label>
                        <div className="myLabel">
                            <div className="custom-file-input">
                                <input type="file" onChange={onChangeFile} />
                                <button>Choose photo</button>
                            </div>
                        </div>
                    </div>
                    <div className="form-row">
                        <button type='submit'>Save Item</button>
                    </div>
                </section>
            </form>
        </main>
    )
}

export default AddMenuItem;