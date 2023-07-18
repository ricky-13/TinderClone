import React, {useEffect, useState} from 'react';
import axios from './axios';
import { useNavigate } from 'react-router-dom';


const AddCard = () => {
    const [name, setName] = useState('');
    const [imgUrl, setImgUrl] = useState('');
    const history = useNavigate();

    const handleSubmit = (e) => {
        // e.preventDefault();
        const card = {name, imgUrl};

        axios.post('/tinder/cards', card)
            .then((res) => {
                console.log('Server response : ', res.data);
                history('/');
            })
            .catch((error) => {
                console.error('Error deleting resource:', error);
                // Handle any errors that occurred during the request
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                Name:
                <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
                </label>
            </div>
            <div>
                <label>
                URL:
                <input type="text" name="imgUrl" value={imgUrl} onChange={(e) => setImgUrl(e.target.value)} />
                </label>
            </div>
            <button type="submit">Submit</button>
    </form>
    )
}

export default AddCard;