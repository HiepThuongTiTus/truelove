import React from 'react'

const TrueLove = () =>{
    return (
        <div className="container center">
            <div className="item">
               <a href="/layout" className="btn btn-outline-warning" role="button" aria-disabled="true">Click me!</a> <br/>
               <p> Xin chào cậu ^^</p>
            </div>
        </div>
    )
};
export default React.memo(TrueLove);
