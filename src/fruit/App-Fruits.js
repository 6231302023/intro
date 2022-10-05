import { useEffect, useState } from 'react';
import './App-fruits.css'
import Fruit from './components/Fruit';
import * as React from 'react';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import '../data/fruits.json'
// import {  Link, Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function AppFruits() {
    //state variable
    const [fruits, setFruits] = useState([]);

    useEffect(() => {
        fetch('http://localhost:9000/fruits')
            .then(response => response.json())
            .then(json => setFruits(json))


    }, []);
    const navigate = useNavigate();
    //state variable to hide/show add and edit dialogs
    const [addHidden, setAddHidden] = useState(true);
    const [editHidden, setEditHidden] = useState(true);
    //state variable for new item

    const [newFruit, setNewFruit] = useState('');
    //state variable to keep selected fruit index in array
    const [fruitIndex, setFruitIndex] = useState(0);
    const [editFruitName, setEditFruitName] = useState('');
    //==============Add item===============
    const addFruit = () => {
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
        var name = document.getElementById("name").value;
        var image = document.getElementById("email").value;
        fetch("http://localhost:9000/fruits/", {
            method: "POST",
        }).then(res => res.text()) // or res.json()
            .then(res => setFruits(res))




    }
    //==============Prepare to Edit item===============
    const beforeEdit = (index, fruitName) => {
        setEditHidden(!editHidden);
        setFruitIndex(index);
        setEditFruitName(fruitName);
    }

    //==============Edit item===============
    const editFruit = () => {
        let newFruits = [...fruits];
        newFruits[fruitIndex].name = editFruitName;
        setFruits(newFruits);
        setEditHidden(true);

    }

    //==============Delete item===============
    const deleteFruit = (id) => {
        // const newFruits = fruits.filter((fruit) => {
        //     return fruit.id !== id;
        // });
        // setFruits(newFruits);

        fetch("http://localhost:9000/fruits/" + id, {
            method: "DELETE",
        })
    }

    // const fruits = [
    //   { name: 'Apple', id: 100 },
    //   { name: 'Banana', id: 101 },
    //   { name: 'Orange', id: 102 },
    // ];


    return (
     
        <>


        
            <h1>Fruits</h1>
            <div id='divadd'>
                <Button variant="contained" id='btnadd' onClick={()=> navigate('/add')}>Add</Button>
                {/* {---------------add dialog----------} */}

                {!addHidden && <> <input
                    type="text"
                    placeholder='Enter fruit...'
                    value={newFruit}
                    onChange={(e) => setNewFruit(e.target.value)}
                    required
                />
                    <Button variant="contained" onClick={addFruit}>Ok</Button>
                    <Button variant="contained" onClick={() => { setAddHidden(!addHidden); setNewFruit(''); }}>Cancel</Button>
                </>}
                {/* {---------------add dialog----------} */}
            </div>

            {
                fruits.map((fruit, index) => {
                    return (
                        <Fruit fruit={fruit} index={index}
                            deleteFruit={deleteFruit}
                            beforeEdit={beforeEdit} />
                    );
                })
            }
            {/* {---------------edit dialog----------} */}
            <div hidden={editHidden}>
                <TextField id="standard-basic" variant="outlined"
                    size='small'
                    color="secondary" focused
                    value={editFruitName}
                    onChange={(e) => setEditFruitName(e.target.value)}
                    required
                />
                <Button variant="contained" color="success" onClick={editFruit}>Ok</Button>
                <Button variant="contained" color="error" onClick={() => { setEditHidden(!editHidden); setEditFruitName(''); }}>Cancel</Button>
            </div>
            {/* {---------------edit dialog----------} */}

        </>
    
    );
}

export default AppFruits;
