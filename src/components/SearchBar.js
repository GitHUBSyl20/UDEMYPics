import React, {Component} from 'react';

class SearchBar extends Component {

    state = { term: "" }

    onFormSubmit=(e)=>{
        //pour éviter d'envoyer les données comme le fait un formulaire 
        //normalement. Ainsi la page n'est pas rafraichie
        e.preventDefault();

        //une props qui provient de app et permet de faire passer le terme récupérér dans le state
        // qui a été mise à jour de facon automatique dans l'input (controlled mode)
        // ce state sera alors récupéré et utilisé par la fonction onSubmit du parent app 
        //Ce parent contient l'enfant SearchBar dans lequel on a passé en props eun fonction on submit
        //que l'on va donc réupéré avec props.onSubmit
        this.props.onSubmitParent(this.state.term);
    };

    render() { 
        return ( 
        <div className="ui segement">
            <form onSubmit={this.onFormSubmit} className="ui form"> 
            <label>Image Search</label>
            <div className="field">
            <input type="text" value ={this.state.term} onChange={(e=>this.setState({term :e.target.value}))}/>
            </div>
           
            </form>
           
        </div>);
    }
}
 
export default SearchBar;