import React from 'react';
import FormCad from './FormCad';
const Cadastro = () => {
    return (
        <div>
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4">Cadastro de Pacientes</h1>
                    <p className="lead"> This intal space</p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-5">
                    <FormCad/>
                </div>
                <div>
                    <h2>
                        lista de pacientes
                    </h2>
                </div>
            </div>
        </div>
    )
}

export default Cadastro;