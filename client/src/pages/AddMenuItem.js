import React, { useState, useEffect } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { ADD_MENU_ITEM, EDIT_MENU_ITEM, FETCH_MENU_ITEM } from '../gql/quieries';

const AddMenuItem = ({ match, history }) => {
    const itemId = match.params.itemId,
        [values, setValues] = useState({
            type: 'Side',
            name: '',
            price: '',
            photo: ''
        }),
        [isLoadingPhoto, setIsLoadingPhoto] = useState(false),
        [addItem] = useMutation(ADD_MENU_ITEM),
        [updateItem] = useMutation(EDIT_MENU_ITEM),
        { loading, error, data } = useQuery(FETCH_MENU_ITEM, { variables: { _id: itemId } }),

        onChangeFile = async ({
            target: {
            validity,
            files: [file],
            },
        }) => {
            try {
                if (validity.valid) {
                    setValues({
                        ...values,
                        photo: file
                    })

                    let data = new FormData();
                    data.append('file', file)
                    data.append('upload_preset', 'reactcafe')

                    setIsLoadingPhoto(true)
                    let res = await fetch('https://api.cloudinary.com/v1_1/dymelpf7v/image/upload', {
                        method: 'POST',
                        body: data
                    })

                    let fileJson = await res.json();
                    setValues({
                        ...values,
                        photo: fileJson.secure_url
                    })
                    setIsLoadingPhoto(false)
                }

            } catch (error) {
                console.log(error)
            }
        },

        onChange = (value, e) => {
            setValues({
                ...values,
                [value]: e.target.value
            })
        },
        onSubmit = async (e) => {
            try {
                const { type, name, price, photo } = values;
                e.preventDefault();
                if(photo && type && name && price && !isLoadingPhoto) {
                    if(itemId){
                        await updateItem({ variables: { _id: itemId, type, name, price: Number(price), photo } });
                    } else {
                        await addItem({ variables: { type, name, price: Number(price), photo } });
                    }

                    history.push('/')
                    window.location.reload()
                }
            } catch (error) {
                console.log(error)
            }
        }

    useEffect(() => {
        let isMounted = true;
        (async () => {
            try {
        
                if(data){
                    const { type, name, price, photo } = data.item;
                    if(isMounted){
                        setValues({
                            ...values,
                            type,
                            name,
                            price,
                            photo
                        })
                    }
                }
                
            } catch (error) {
                console.log(error)
            }    
        })();

        return () => {
            isMounted = false;
        };
    }, [data]);

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
                        <button type='submit'>
                            {itemId ? 'Edit Item' : 'Save Item'}
                        </button>
                    </div>
                </section>
            </form>
        </main>
    )
}

export default AddMenuItem;