import './App.css';
import React from 'react';

// Transformer l'App.js en un composant basé sur des classes.
class App extends React.Component {
  constructor(props){
    super(props);
    // Implémenter un état pour cette classe contenant une Personne ={ fullName,bio, imgSrc, profession} 
    this.state = {
      Personne: {
        fullName: "AMARA GBOKO ANZOUMANAN",
        bio: "Développeur Logiciel travaillant à la fois avec des technologies côté client ",
        bio1:' et côté serveur ',
        imgSrc: "/dev.jpeg", 
        profession: "Developpeur Full Stack",
        frontend: ' HTML, CSS, JavaScript, React etc ',
        backend: " Node.js, mongoDb, mongoose etc."
      },
      // et un booléen montre.
      show: false,
      pastTime: 0,
    };
  }

  // Methode pour bascule l'état
   toggleBio = () =>{
    this.setState(prevState =>({
      show: !prevState.show
    }));
  }

  // Methode pour  indique l'intervalle de temps écoulé depuis le montage
  updateTime = () =>{
    this.setState(prevState =>({
      pastTime: prevState.pastTime + 1}));
  }

  componentDidMount (){
    this.timer = setInterval(this.updateTime, 1000);
  }

  componentWillUnmount(){
    clearInterval(this.timer);
  }

  render() {
    const {fullName, bio, imgSrc, profession, frontend, backend, bio1} = this.state.Personne;
    const {show, pastTime} = this.state;
  return (
    <div className="App">
      
      {show && (
        <header className="App-header">
      
      <img src={imgSrc}  alt={fullName} className="App-logo" />
      <p>
        {fullName}
      </p>
      <p>
        <strong>Profession :</strong> {profession} 
      </p>
      <p>
         {bio} <i>{frontend}</i>{bio1} <i>{backend}</i>
      </p>
  
    </header>
  )}
  <p>le temps ecoule est : {pastTime}</p>
      <button onClick={this.toggleBio}
      >
        {show?'cache la bio':'montre la bio'}
      </button>
  </div>
  );    
};
}

export default App;
