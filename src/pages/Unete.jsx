import React, { useContext, createContext, useEffect, useState } from 'react';
import axios from 'axios';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.min.js';
import '../styles/main.css';
import '../styles/mobile.css';
import Footer from '../components/Footer';
import Select from 'react-select';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import makeAnimated from 'react-select/animated';
import { SELECTSEX } from '../hooks/data';
import { ESTADOS } from '../hooks/data';
import { MUNICIPIOS } from '../hooks/data';
import imgPrincipal from '../images/principal.png'

const animatedComponents = makeAnimated();
const Unete = () => {
    const [PostalCode, setPostalCode] = useState("");
    const [Celphone, setCelphone] = useState("");
    const [catalogMunicipios, setCatalogMunicipios] = useState([]);
    const [currentDate, setcurrentDate] = useState("");
    const [statusForm, setStatusForm] = useState(false);
    const [sexoUser, setSexoUser] = useState({});
    const [postalCodeUser, setPostalCodeUser] = useState(0);
    const [stateUser, setStateUser] = useState({});
    const [munUser, setMunUser] = useState({});
    const [birthdayUser, setBirthdayUser] = useState({});
    const urlPost = process.env.REACT_APP_URL_SERVICES;
    //const urlPost = "https://5273-2806-264-440c-88bc-c88b-6802-4be9-5dda.ngrok-free.app/campaign/api/volunteers/v1/volunteer";
    const [show, setShow] = useState(false);
    const [txtValidation, setTxtValidation] = useState("asd");
    const [smShow, setSmShow] = useState(false);

    const handleClose = () => {
        setShow(false)
        window.location.reload(true);
    };
    const handleShow = () => setShow(true);



    function changeSex(e) {
        setSexoUser(e.value);
    }
    function changeState(e) {
        //console.log(e.label)
        setStateUser(e.label);
        MUNICIPIOS.forEach((item) => {
            if (item.value == e.value) {
                setCatalogMunicipios(item.municipios);
                console.log(item)
            }
        })
    }
    function changeMun(e) {
        setMunUser(e.label);
    }

    function ChangePostalCode(e) {
        if (e.target.value.match("^[0-9]+$") != null) {
            setPostalCode(e.target.value);
        }
    }
    function ChangeCelphone(e) {
        if (e.target.value.match("^[0-9]+$") != null) {
            setCelphone(e.target.value);
        }
    }
    function FdateStart(e) {
        var ds = e.split("-");
        var d1 = new Date(e);
        d1.setDate(d1.getDate() + 1);
        console.log("d1: " + d1);
        setBirthdayUser(d1);
    }
    function aproveData(e) {
        if (e.target.checked)
            setStatusForm(true)
        if (!e.target.checked)
            setStatusForm(false)

    }

    const sendDataUser = () => {
        var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        const name = document.getElementById("txtNombre").value;
        const lastName = document.getElementById("txtAp_pat").value;
        const sexo = sexoUser;
        const postalCode = document.getElementById("txtCp").value;
        const state = stateUser;
        const mun = munUser;
        const email = document.getElementById("txtEmail").value;
        const phone = document.getElementById("txtCel").value;
        const birthday = birthdayUser;
        if (document.getElementById("txtNombre").value != "") {
            if (document.getElementById("txtAp_pat").value != "") {
                if (Object.keys(sexoUser).length > 0) {
                    if (Object.keys(state).length > 0) {
                        if (Object.keys(mun).length > 0) {
                            if (document.getElementById("txtEmail").value != "") {
                                if (document.getElementById("txtEmail").value.match(validRegex)) {
                                    if (document.getElementById("txtCel").value != "") {
                                        console.log("********Envíar información al servicio********");

                                        axios.post(urlPost, {
                                            headers: {
                                                'Access-Control-Allow-Origin': '*',
                                                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                                            },
                                            name: document.getElementById("txtNombre").value,
                                            surname: document.getElementById("txtAp_pat").value,
                                            email: document.getElementById("txtEmail").value,
                                            phoneNumber: document.getElementById("txtCel").value,
                                            state: state,
                                            municipality: mun,
                                            postalCode: document.getElementById("txtCp").value,
                                            gender: sexoUser,
                                            birthdate: birthdayUser
                                        })
                                            .then(function (response) {
                                                console.log(JSON.stringify(response));
                                                setShow(true);
                                            })
                                            .catch(function (error) {
                                                console.log(JSON.stringify(error));
                                            });

                                    }else {
                                        setTxtValidation("El *TELÉFONO* es requerido");
                                        setSmShow(true);
                                    }
                                }else {
                                    setTxtValidation("El campo *EMAIL* tiene una estructura INCORRECTA");
                                    setSmShow(true);
                                }
                            }else {
                                setTxtValidation("El *EMAIL* es requerido");
                                setSmShow(true);
                            }
                        }else {
                            setTxtValidation("El *MUNICIPIO* es requerido");
                            setSmShow(true);
                        }
                    }else {
                        setTxtValidation("El *ESTADO* es requerido");
                        setSmShow(true);
                    }
                }else {
                    setTxtValidation("El *SEXO* es requerido");
                    setSmShow(true);
                }
            }else {
                setTxtValidation("Los *APELLIDOS* son requeridos");
                setSmShow(true);
            }
        }else {
            setTxtValidation("El *NOMBRE* es requerido");
            setSmShow(true);
        }
    }


    useEffect(() => {
        setcurrentDate("2005-05-20")
    }, [])



    return (
        <>
        <div className='container'>
            <div className='form_container'>
                <div className="spinner-border" role="status" >
                    <span className="sr-only">Loading...</span>
                </div>



                {/*<Button variant="primary" onClick={handleShow}>
                    Launch demo modal
                </Button>*/}

                <Modal show={show} onHide={handleClose}
                    backdrop="static"
                    keyboard={false}>
                    <Modal.Header closeButton>
                        <Modal.Title>¡Listo, estás anotad@!</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Pronto se comunicarán contigo por celular y/o correo electrónico.
                        <br></br><br></br>
                        Si tienes un amigo o familiar que quiera entrarle, comparte este sitio.
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={handleClose}>
                            Cerrar
                        </Button>
                    </Modal.Footer>
                </Modal>

{/********MODAL ALERTAS ******** */}
                <Modal
                    size="sm"
                    show={smShow}
                    centered
                    onHide={() => setSmShow(false)}
                    aria-labelledby="example-modal-sizes-title-sm"
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="example-modal-sizes-title-sm">
                            Datos faltantes
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>{txtValidation}</Modal.Body>
                </Modal>




                <div className='row'>
                    <div className='col-md-6'>

                    <div id="left_form" height="600px">
                            <figure id="figure-st">
                                <img id="logoFormulario" src={imgPrincipal} className="img-fluid" height="576px" alt="Enrique de la madrid perfil"/>
                            </figure>
							<br></br>
                            <p id="municipio" className="m-0"></p>
                            <p id="organizacion" className="m-0"></p>
                            <p id="coordinador" className="m-0"></p>
                        </div>

                    </div>
                    <div className='col-md-6'>
                        <div className='form-container'>
                            <div className='card'>
                                <p id="registro" className="text-center p-0 m-0 h2 pt-3">
                                    BEATRIZ PAREDES RANGEL
                                </p>
                                <p className="txt-form text-center mb-0">
                                    <br></br>
                                    Gracias por participar como voluntari@ en la recolección de las firmas necesarias para mi registro como aspirante a encabezar el Frente Amplio por México.
                                    <br></br>
                                    <br></br>
                                    Al unirte estaremos en contacto para escucharte e informarte del proceso de registro de tu firma en la plataforma del Frente Amplio y lograr nuestra meta juntos.
                                    <br></br>
                                    <br></br>
                                    ¡Construyamos entre todos el México de oportunidades que mereces!
                                    <br></br>
                                    <br></br>
                                    ¡Muchas gracias!
                                    <br></br>
                                    Con tu apoyo un mejor México sí es posible.
                                </p>
                                <div className='inputs-form'>
                                    <div className='row'>
                                        <div className='col-md-6'>
                                            <label className="form-group">

                                                <input type="text" name="txtNombre" id="txtNombre" className="required" placeholder="Nombre(s)*" />
                                                <span className='span-txt'>Nombre(s)*</span>
                                            </label>
                                        </div>
                                        <div className='col-md-6'>
                                            <label className="form-group">
                                                <input type="text" name="txtAp_pat" id="txtAp_pat" className="required" placeholder="Apellidos*" />
                                                <span className='span-txt'>Apellidos*</span>
                                            </label>
                                        </div>
                                        <div className='col-md-6'>
                                            <label className="form-group pt-4 fg">
                                                <span className='span-txt txtcal'>Sexo:</span>
                                                {
                                                    (SELECTSEX) != null ?
                                                        <Select id="selectSex"
                                                            components={animatedComponents}
                                                            placeholder={'Sexo'}
                                                            options={SELECTSEX}
                                                            onChange={e => changeSex(e)}
                                                        />
                                                        :
                                                        <Select></Select>
                                                }
                                            </label>
                                        </div>
                                        <div className='col-md-6'>
                                            <label className="form-group">
                                                <input value={PostalCode} onChange={ChangePostalCode} type="text" name="txtCp" id="txtCp" maxLength="5" placeholder=" " />
                                                <span className='span-txt'>Código Postal</span>
                                            </label>
                                        </div>
                                        <div className='col-md-6'>
                                            <label className="form-group pt-4 fg">
                                                <span className='span-txt txtcal'>Estado*:</span>
                                                {
                                                    (ESTADOS) != null ?
                                                        <Select id="selectMun"
                                                            components={animatedComponents}
                                                            placeholder={'Estado*'}
                                                            options={ESTADOS}
                                                            onChange={e => changeState(e)}
                                                        />
                                                        :
                                                        <Select></Select>
                                                }
                                            </label>
                                        </div>
                                        <div className='col-md-6'>
                                            <label className="form-group pt-4 fg">
                                                <span className='span-txt txtcal'>Municipio*:</span>
                                                {
                                                    (catalogMunicipios) != null ?
                                                        <Select id="selectMun"
                                                            components={animatedComponents}
                                                            placeholder={'Municipio*'}
                                                            options={catalogMunicipios}
                                                            onChange={e => changeMun(e)}
                                                        />
                                                        :
                                                        <Select></Select>
                                                }
                                            </label>
                                        </div>
                                        <div className='col-md-6'>
                                            <label className="form-group">
                                                <input type="email" name="txtEmail" id="txtEmail" className="required" placeholder=" " />
                                                <span className='span-txt'>Correo*</span>
                                            </label>
                                        </div>
                                        <div className='col-md-6'>
                                            <label className="form-group">
                                                <input value={Celphone} onChange={ChangeCelphone} type="text" name="txtCel" id="txtCel" className="" maxLength={10} placeholder=" " />
                                                <span className='span-txt'>Celular*</span>
                                            </label>
                                        </div>
                                        <div className='col-md-6'>
                                            <label className="form-group fg">
                                                <span className='span-txt txtcal'>Fecha de nacimiento:</span>

                                                <Form.Group controlId="dobStart" >
                                                    <Form.Control type="date" name="dobStart"
                                                        /*min={currentDate}*/
                                                        max={currentDate}
                                                        /*defaultValue={lastDateViewRequests}*/
                                                        className='calendarF'
                                                        onChange={(e) => FdateStart(e.target.value)}
                                                        placeholder="" />
                                                </Form.Group>
                                            </label>
                                        </div>
                                    </div>


                                    <div className='row'>
                                        <div className='col-md-12 form-group'>
                                            <div className="form-group d-flex">
                                                <div className='col-md-1'>
                                                    <Form.Check
                                                        className="checkData"
                                                        onChange={(e) => aproveData(e)}
                                                        type={"checkbox"}
                                                        id={'default-checkbox'}
                                                        value={'yes'}
                                                    />
                                                    {/*<div className="icheckbox_square-grey">
                                                        <input name="apoyo" id="cDatos" type="checkbox" className="icheck required" value="yes" />
                                                        <ins className="iCheck-helper" onClick={(e) => aproveData(e)}>
                                                        </ins>
                                                    </div>*/}
                                                </div>
                                                <div className='col-md11'>
                                                    <label onChange={(e) => aproveData(e)} className="text-justify">
                                                        Comparto mis datos por voluntad propia,
                                                        estoy de
                                                        acuerdo en recibir notificaciones y noticias.
                                                        Conozco y estoy de acuerdo con los términos y
                                                        Políticas de privacidad.
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    <br></br><br></br>
                                    <div id="bottom-wizard">
                                        <button id="bEnviar" type="button" onClick={sendDataUser} name="process" className="btnsubmit" disabled={!statusForm}>
                                            <b>Enviar</b>
                                        </button>
                                    </div>

                                </div>
                            </div>
                        </div>




                    </div>
                    {/*<div className='col-2'></div>*/}
                </div>
            </div>
        </div>
<Footer/>
</>


    );
}
export default Unete;