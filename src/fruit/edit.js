// import { useNavigate,useParams } from "react-router-dom";
// import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
const Edit = () => {
    // const navigate = useNavigate();
    // const params = useParams();
    const navigate = useNavigate();

    return(
        <>
       <input
                type="text"
                placeholder='Edit fruit name...'
                // value={newFruit}
                // onChange={(e) => setNewFruit(e.target.value)}
                required
            />
                <Button variant="contained" color="success"  onClick={()=> navigate('/')}>OK</Button>
        </>
    );
    
}
export default Edit;