import React from 'react';

function CardPequeno(props) {
    return (
        <div>
            <div>
                <h4>E-mail:{props.email}</h4>
            </div>
            <div>
                <h4>Endereço:{props.endereco}</h4>
            </div>
        </div>
    )
}

export default CardPequeno;