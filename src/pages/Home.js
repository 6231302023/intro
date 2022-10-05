import { useNavigate } from "react-router-dom";
const Home = () => {
    const navigate = useNavigate();
    return(
        <>
        <h1>HomePage</h1>
        <button onClick={()=> navigate('/about')}>About</button>
        <button onClick={()=> navigate('/about/555')}>Login</button>
        </>
    );
    
}
export default Home;