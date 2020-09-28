import React from 'react';

const AddMenuItem = () => {
    return (
        <main>
            <section className="main-head">
                <h3>Add Menu Item</h3>
            </section>
            <form>
                <section className="form-section">
                    <div className="form-row">
                        <label>Type</label>
                        <select>
                            <option value='Side'>Side</option>
                            <option value='Main Course'>Main Course</option>
                        </select>
                    </div>
                    <div className="form-row">
                        <label>Name</label>
                        <input type="text" />
                    </div>
                    <div className="form-row">
                        <label>Price</label>
                        <input type="number" />
                    </div>
                    <div className="form-row">
                        <label>Photo</label>
                        <div className="myLabel">
                            <div className="custom-file-input">
                                <input type="file" />
                                <button>Choose photo</button>
                            </div>
                        </div>
                    </div>
                    <div className="form-row">
                        <button>Save Item</button>
                    </div>
                </section>
            </form>
        </main>
    )
}

export default AddMenuItem;