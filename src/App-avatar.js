import './App.css'
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
      <div>
        <h1>This year is {currentYear}</h1>
        <h3>You are {currentYear - birthYear} years old</h3>
        {/* <h3>{person}</h3> */}
        <h3>{students}</h3>
        <h3>{students.join(' ')}</h3>
        <a href={url}>Google</a>
      </div>


      <div className="avatar">
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
      </div>

    </>

  );
}

export default App;
