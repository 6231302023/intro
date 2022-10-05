// import '../App-fruits.css';
import * as React from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

import { useNavigate } from "react-router-dom";
import { Card} from '@mui/material';

const Fruit = ({ fruit, index, deleteFruit, beforeEdit }) => {
    const navigate = useNavigate();
    return (<Card variant="outlined" className='fruit-item' key={fruit.id}>

        <img src={`img/${fruit.image}`} alt={fruit.name} />
        <h2>{fruit.name}</h2>




        <Button variant="outlined" id='btnEdit' onClick={() => navigate('/edit/:id')}><EditIcon /></Button>
        <Button variant="outlined" id='btndelete' onClick={() => deleteFruit(fruit.id)}><DeleteIcon /></Button>


    </Card>);
}
export default Fruit;