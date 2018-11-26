import React, { Component } from 'react';

class Minuteur extends Component{ 

    // Configuration de mon minuteur
         
    constructor(props){
        super(props)
        this.state = {
            sec: 0,
            min: 0,
            title: "",
            input_show: true,
             finish: ""
            }
    }
      
      //Fonction qui cache mes inputs
        show_input = () => (
        this.setState({
           input_show: false, 
        })
      )
      

      //Fonctions qui prennent mes valeurs de mes inputs
        handleChange = (e) => (
        this.setState({
          title: e.target.value
        })
      )
      
      handleChangesec = (e) => (
      this.setState({ 
          sec: e.target.value,
      })
      )
      
       handleChangemin= (e) => (
      this.setState({ 
          min: e.target.value,
      })
      )
         
      // Fonction qui envoie mes données de mes inputs
       submit = (e) => {
        e.preventDefault()
         
         this.show_input();
         this.verif();
         this.componentDidMount();
         
      
      }
    

      //Fonction qui va vérifier si les chiffres rentrés sont négatifs
      verif(){

        if (this.state.min < 0) {
 
                this.setState ({
                        min: 0  
               })
             
        }

        if (this.state.sec < 0) { 

                  this.setState ({
                    sec: 59 
           })
            } 
        }

 
    
    //Fonction qui va permettre de faire le calcul de mon minuteur
    calcul() {
     
    
        // Tant que je suis à plus de 1 min sur mon minuteur
        if (this.state.min > 0 ) {
      
        if  (this.state.sec > 59 ) {
            this.setState ({
                    sec: 59,
           })
        } 
      
          if (this.state.sec > 0) {
                
            this.setState ({
                    sec : this.state.sec - 1
            })
        } else {
        
              this.setState ({
                    sec: 59,
                    min : this.state.min - 1
            })
            
        }
       
     } 
     
     //Mon minuteur est à moin d'une minute
      else {

         
      
        if (this.state.min === 0 && this.state.sec > 0 && this.state.input_show === false) {
        
            this.setState ({
                  sec: this.state.sec - 1, 
            })
            
        } else { 
            clearInterval(this.time)
            if (this.state.input_show === false) {
                
                this.setState ({
                    finish: "prêt"
               })

            }
           
          
       }
     
     }
    
    }
    
    //Fonction qui va permettre de faire l'interval de seconde sur mon minuteur
     componentDidMount(){
          this.time = setInterval( () => this.calcul(), 1000)
      }
    
    
    //Affichage de la page
     render(){ 
     
       return (
        
         <div className= {this.state.finish === "prêt" ? 'pret' : 'attente' }>
         
           
          
          <form onSubmit={this.submit}>
             <p>{ this.state.input_show ? <input onChange={this.handleChange} value={this.state.title} placeholder="Saisissez le titre de votre minuteur"/> :  this.state.title  }</p>

                <div className="numbers">
                <p>{ this.state.input_show ?  <input type="number" className="number"  onChange={this.handleChangemin}   value={this.state.min} /> :
                  (this.state.min < 10 ? '0' + this.state.min : this.state.min)
                }</p>
                <p>:</p>
                <p> { this.state.input_show ?  <input type="number" className="number" onChange={this.handleChangesec}   value={this.state.sec} /> : (this.state.sec < 10 ? '0' + this.state.sec : this.state.sec ) }</p>
               
                </div>
            
              
            </form> 

           
             
            
             { this.state.input_show ?   <button onClick={this.submit}>START </button> : "" }
            
             { this.state.finish === 'prêt' ?   <p>Prêt</p> : "" }
             
          
         
       </div> 
            
        )
      }
    
    }

    
export default Minuteur;
