import React from 'react';

const Form  = () => {
    return(
        <form>
<div className="possision">
    <div className="parent"> 
                <h1 className="h">Register</h1>      
       <div className="input1">  
           <label htmlFor="username" className="label"> </label>
               <input type="text" className="input" placeholder="User name" ></input>
           
       </div>


       <div className="input1"> 
         <label htmlFor="email" className="label"></label> 
               <input type="email" className="input" placeholder="Email adress"></input> 

       </div>


       <div className="input1">
               <label htmlFor="pasowrd" className="label"> </label> 
    
               <input type='password' className="input" placeholder="password"></input>
           
       </div>


       <div className="input1">
           <label htmlFor="pasoerd" className="label"></label> 
               <input type='password' className="input" placeholder="Confirm password"></input> 

           
       </div>
       <div>
          
       </div>

       <button className="button" type="submit">sign up</button>

    </div>
</div>    
        </form>
        
    );
}

export default Formm ;