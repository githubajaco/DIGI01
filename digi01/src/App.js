import './App.css';
import Horloge from './components/Horloge';

/**
 * Composant principal App
 * qui utilise deux composants dans le fichier
 * App.js (ces composants sont privés pas d'export devant
 * chaque function.)
 * @returns 
 */

export default function App() {
  let vtitre = "REACT JS 01"
  return (
    <div>
      <Header head="Titre entête"/>
      <Comp01 titre={vtitre} />
      <Horloge />
    </div>    
  );
}
  /*
  * Composant Header car renvoie un render
  * @param {} props 
  * @returns 
  */
function Header (props) {
  return (
    <div>
      <h1>{props.head}</h1>
    </div>
  )
}
/*
* Composant Comp01
* @param {*} props 
* @returns 
*/
function Comp01 (props) {
  return (
    <div>
      <h3>{props.titre}</h3>
    </div>
  )
}
 
  
 
