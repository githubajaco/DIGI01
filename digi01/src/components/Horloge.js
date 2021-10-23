import {Component} from 'react';

export default class Horloge extends Component {
    constructor(props) {
        super(props)
        this.state = {date : new Date(),horloge : 'Horloge'}
    }
    /*
     * Monter : on va configurer notre
     * Timer avec l'appel de la méthode
     * Tick()
     */
    componentDidMount() {
        /*
         * Création automatiquement
         * de la propiété globale et publique
         * timerID de la classe Horloge
         */
        this.timerID = setInterval( 
             () => this.tick(),1000   );
    }
    componentWillUnmount() {
        /**
         * On va supprimer le Timer
         */
        clearInterval(this.timerID);
    }
    tick() {
       this.setState({ date: new Date(),
         horloge : "Titre Tick" });

       //this.state = {date : new Date()}
    }

    render() {
        return (
            <div>
                <h1>{this.state.horloge}</h1>
                <h1>{this.state.date.toLocaleTimeString()}</h1>
            </div>
        )
    }
}