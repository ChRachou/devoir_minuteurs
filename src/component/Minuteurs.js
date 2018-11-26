import React, { Component } from 'react';
import Minuteur from './Minuteur'; 


class Minuteurs extends Component{ 


    //Constructeur de ma liste de Minuteur
    constructor(props){
        super(props)
        this.state = {
            items : []
         }
      }
      

      //Fonction qui va ajouter un minuteur à ma liste de minuteur
     add(){
        const newMinuteur = {
          title: "",
          min: 0,
          sec: 0
        }  
        
        this.state.items.push(newMinuteur);

        this.setState({
            items: this.state.items
        }
     
    )

     /*  console.log(this.state.items); 
      console.log(this.state.items.length);  */
        
      }
     
     //Affichage de ma liste de minuteur
     render(){        
   
          
         const minuteur =this.state.items.map((item, index) => 
         <Minuteur   key={index} title={item.ing} min={item.min} sec={item.sec} /> 
         
                )
  
         return (
           <div > 
             <main>   
               { minuteur } 
               <div id="selection">
                    {(this.state.items.length === 0 ? <p>cliquer ici pour afficher votre minuteur</p> : <p>ajouter un minuteur </p> )}
                    <button onClick={ this.add.bind(this) }>+</button>
               </div>
             </main>
           </div>
         );
       }
   
   }

   export default Minuteurs; 