import React from 'react'

const  User = ({ picture, bio, email, repoes, link, location , name}) => {

    return (
            
      <article className = "container" >
        
        <div className = "card-container">

            <div className = "card">

                <figure className = "front-card">
                    <img src = { picture } alt = ''/>
                </figure>
                
                <figure className = "back-card">

                    <h1>{ name }</h1>
                    <ul>
                        <li>
                            <strong>Github Link:</strong><a target = "blank" href = { link }> { link }</a>
                        </li>
                        <li>
                            <strong>Email:</strong>{ email }
                        </li>
                        <li>
                            <strong>Location:</strong> { location }
                        </li>
                        <li>
                            <strong>Public repos:</strong> { repoes }
                        </li>
                        <li>
                            <strong>Bio:</strong>{ bio }
                        </li>
                    </ul>

                </figure>

            </div>

        </div>
        
      </article>

    )
}

export default User;
