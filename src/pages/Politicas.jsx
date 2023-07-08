import React, { useContext, createContext, useEffect, useState } from 'react';


const Politicas = () => {


    return (
        <div className="container">
        <div className="row">
          <div className="col-md-6">
          <div>POLITICAS Y PRIVACIDAD DEL SITIO</div>
            
              <div className="form-group">
                <label for="nombre">Nombre:</label>
                <input type="text" className="form-control" id="nombre" placeholder="Ingrese su nombre"/>
              </div>
              <div className="form-group">
                <label for="email">Email:</label>
                <input type="email" className="form-control" id="email" placeholder="Ingrese su correo electrónico"/>
              </div>
              <div className="form-group">
                <label for="telefono">Teléfono:</label>
                <input type="tel" className="form-control" id="telefono" placeholder="Ingrese su número de teléfono"/>
              </div>
           
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label for="mensaje">Mensaje:</label>
              <textarea className="form-control" id="mensaje" rows="5" placeholder="Ingrese su mensaje"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Enviar</button>
          </div>
        </div>
      </div>
    );
}
export default Politicas;