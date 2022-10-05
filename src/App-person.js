import './App.css'
import Person from './Person';

function App() {
  const currentYear = new Date().getFullYear();
  const birthYear = 2001;
  // const person = {name : "mario" , country: "Japan"};
  const students = ['aaa', 'bbb'];
  const url = "http://www.google.com";
  // const ig = "img/ig.jpg";
  const users = [
    { text: "IG", picture: "img/ig.jpg" },
    { text: "WHATAPPS", picture: "img/whatapps.jpg" },
    { text: "YOUTUBE", picture: "img/youtube.jpg" },
  ];
  return (
    <>
      


      {/* <div className="avatar">
        <img src={users[0].picture} alt={users[0].text} />
        <div className='name'>{users[0].text}</div>
      </div>

      <div className="avatar">
        <img src={users[1].picture} alt={users[1].text} />
        <div className='name'>{users[1].text}</div>
      </div>

      <div className="avatar">
        <img src={users[2].picture} alt={users[2].text} />
        <div className='name'>{users[2].text}</div>
      </div> */}
      {users.map((value, index) => {
        // return <h1 key={index} >{value.text}</h1>;
        return (
          <Person person={value} key={index} />
        )
      })
      }

    </>

  );
}

export default App;
