import React from 'react';

const Form  = () => {
    return(
        <form>
<div className="SignInForm">
    <div className="parent"> 
                <h1 className="h">Sign In</h1>      
    
       <div className="input1"> 
         <label htmlFor="email" className="label"></label> 
               <input type="email" className="input" placeholder="Email "></input> 

       </div>


       <div className="input1">
               <label htmlFor="pasowrd" className="label"> </label> 
    
               <input type='password' className="input" placeholder="password"></input>
           
       </div>
            <div>
                <p>Need an account ? ,<a href="./Components/SignupForm">Sign Up</a></p>
                
            </div>
    
       <button className="button" type="submit">sign In</button>

    </div>
</div>    
        </form>
        
    );
}

export default Form;