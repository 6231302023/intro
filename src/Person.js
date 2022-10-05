const Person = ({person}) => {
    // const {img ,text} =props;
    return (  
        <div className="avatar" >
        <img src={person.picture} alt={person.text} />
        <div className='name'>{person.text}</div>
      </div>
    );
}
 
export default Person;