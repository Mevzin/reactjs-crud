import React, { useState } from 'react';

const FormCad = () => {

    // Var captura de dados

    const camposIniciaisDeValores ={
        nomeCompleto: '',
        telefone:'',
        email:'',
        endereco:''
    }

    let{values,setValues} = useState(camposIniciaisDeValores);

    const manipuladorInputChange = e => {
        let { nomeCompleto, value} = e.target

        setValues({
            ...values,
            [nomeCompleto]: value
        })
    }

    const manipuladorForEnvio = e => {
        e.preventDefault()
    }

    return (
        <fom autoComplete="off" onSubmit="{manipuladorForEnvio}">
            <div className="form-group input-group">
                <div className="input-grou-prepend">
                    <div className="input-group-text">
                        <i className="fas fa-user"></i>
                    </div>
                </div>
                <input className="form-control" placeholder="Nome Completo" name="nomeCompleto" value={values.nomeCompleto}
                onChange={manipuladorInputChange}/>
            </div>
            <div className="row">
                <div className="form-group input-group col-md-6">
                    <div className="input-grou-prepend">
                        <div className="input-group-text">
                            <i className="fas fa-mobile-alt"></i>
                        </div>
                    </div>
                    <input className="form-control" placeholder="Telefone" name="telefone" value={values.telefone} 
                    onChange={manipuladorInputChange}/>
                </div>
                <div className="form-group input-group col-md-6">
                    <div className="input-grou-prepend">
                        <div className="input-group-text">
                            <i className="fas fa-envelope"></i>
                        </div>
                    </div>
                    <input className="form-control" placeholder="Email" name="email" value={values.email}
                    onChange={manipuladorInputChange}/>
                </div>
            </div>
        </fom>

    )
}

export default FormCad;