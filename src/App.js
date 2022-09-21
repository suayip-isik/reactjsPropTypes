import './App.css';
import User from './components/User';

function App() {

  const friends = ["Ali", "Ahmet", "Esra", "Ümit", "Şuayip"]

  return (
    <>

      <User
        name="Abdul"
        surname="Bari"
        isLoggedIn={true}
        age={"24"}
        friends={friends}
        adress={{
          title: "Home",
          zip: 16000
        }}
      />
    </>
  );
}

export default App;