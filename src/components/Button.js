import React from 'react'
import '../bootstrap-4.0.0/bootstrap-4.0.0/dist/css/bootstrap.min.css'

export default function Button(props) {
    return (
        <div>
           <button type="button" class="btn btn-dark">
        <span class="badge"><b>{props.title}</b></span>
      </button>
    
            
        </div>
    )
}
