import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Button from '@mui/material/Button';
const Add = () => {
    // const [fruits, setFruits] = useState([]);
    const [newFruit, setNewFruit] = useState('');
    // const navigate = useNavigate();
    // const params = useParams();
    const navigate = useNavigate();
    const addFruit = async(name, image) => {
        // console.log(newFruit);
        //clone fruit array
        // let newFruits = [...fruits];

        // //create object of new fruit 
        // const item = { name: newFruit, image: 'apple.png', id: newFruits.length + 101 }

        // //add new item to array
        // newFruits.push(item);

        // const test = [...fruits,{ name: newFruit, image: 'apple.png', id: newFruits.length + 101 }]
        // //update state
        // setFruits(newFruits);
        // setNewFruit('');
        await fetch('http://localhost:9000/fruits', {
            method: "POST",
            body: JSON.stringify({
              name: newFruit,
              image: "apple.png",
              id: newFruit.length + 101
            }),
            headers: {
              "Content-type": "application/json; charset=UTF-8"
            }
          })
            .then((res) => {
              if (res.ok) {
                navigate('/');
              } 
            })
            
            .catch((err) => {
              console.log(err);
            });



    }
    return (
        <>
            <input
                type="text"
                placeholder='Enter fruit...'
                value={newFruit}
                onChange={(e) => setNewFruit(e.target.value)}
                required
            />
            <Button variant="contained" onClick={addFruit}><Link to="/">OK</Link> </Button>
        </>
    );

}
export default Add;