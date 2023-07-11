import React, { useContext, createContext, useEffect, useState } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.min.js';
import '../styles/main.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import { faYoutube } from "@fortawesome/free-brands-svg-icons"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"



const Footer = () => {
    const [lgShow, setLgShow] = useState(false);

    const handleClose = () => {
        setLgShow(false)
    };


    return (
        <footer id="home" className="clearfix">
            {/*<Button onClick={() => setLgShow(true)}>Large modal</Button>*/}
            <Modal
                size="lg"
                show={lgShow}
                onHide={() => setLgShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        POLÍTICAS DE PRIVACIDAD
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <b>Políticas de Privacidad y Uso de Datos</b> <br></br>
                    Las presentes políticas de privacidad aplican para brindar protección al Usuario del sitio de
                    Internet <b>SITIO</b>. El uso o navegación por parte de cualquier persona del sitio de Internet
                    antes mencionado le concede la calidad de Usuario.
                    <br></br><br></br><br></br>
                    <b>Tipo de información que se obtiene</b><br></br>
                    El concepto <b>“datos personales”</b> en estas políticas se refiere a toda aquella información  de carácter
                    personal (tales como nombre, fecha de nacimiento, domicilio o correo electrónico) que pueda ser usada
                    para identificación del Usuario.<br></br>
                    Se ampara en esta política de privacidad todos los datos personales que el usuario ingrese voluntariamente
                    al sitio de Internet objeto de las presentes políticas, durante el proceso de registro y cualquiera
                    otra ocasión. El sitio web puede usar esta dirección <b>“Internet Protocol”</b> para sistemas administrativos
                    o para recolectar cierta información adicional, la cual tendrá el mismo carácter de confidencial.
                    <br></br><br></br><br></br>
                    <b>Declaración de privacidad</b><br></br>
                    El sitio web no recopila datos personales sobre el Usuario excepto cuando el Usuario brinde dicha información
                    voluntariamente, al registrarse en el sitio Internet señalando anteriormente o al enviar correo electrónico
                    u otra comunicación dirigida a la dinámica. El sitio web no procesará ni pondrá a disposición de terceros
                    los datos personales sin previo consentimiento  del Usuario, mediante la aceptación electrónica al ingresar
                    sus datos dentro del contenido y funciones del sitio de Internet objeto de las presentes políticas.
                    <br></br><br></br><br></br>
                    <b>Finalidad que tendrá la información</b><br></br>
                    Los datos personales contenidos en la información confidencial, son utilizados para proveerle al Usuario un
                    servicio personalizado y acorde a sus necesidades, en su caso, ofreciendo contenidos que puedan llegar a
                    serle de interés.
                    <br></br><br></br><br></br>
                    <b>¿Qué son los cookies?</b><br></br>
                    La página de nuestro sitio Web utiliza cookies, los cuales son pequeños ficheros de datos que se generan en
                    la computadora del Usuario que graban sus datos personales cuando se conecta al sitio web y se modifican al
                    abandonar el servicio y las cuales permiten obtener la información siguiente:<br></br><br></br>
                    <ul>
                        <li> La fecha y hora de la última vez que el usuario visitó nuestro sitio Web.</li>
                        <li> El diseño de contenidos o preferencias que el usuario escogió en su primera visita a nuestro sitio web </li>
                        <li> Elementos de seguridad que intervienen en el control de acceso a las áreas restringidas.</li>
                    </ul>
                    Los cookies son anónimos. El acceso a la información por medio de los cookies, permite ofrecer al Usuario un
                    servicio personalizado, ya que almacenan no sólo sus datos personales sino también la frecuencia de
                    utilización del servicio y las secciones de la red visitadas, reflejando así sus hábitos y preferencias.
                    Las redes publicitarias que insertan avisos en nuestras páginas pueden también utilizar sus propios cookies.<br></br>
                    El Usuario tiene la opción de impedir la generación de cookies, mediante la selección de la correspondiente
                    opción en la configuración de su navegador de Internet. Sin embargo, el sitio web no se responsabiliza de
                    que la desactivación de los mismos, ya que impedirían el buen funcionamiento del sitio de Internet.
                    <br></br><br></br><br></br>
                    <b>Confidencialidad de la información</b><br></br>
                    El sitio web se compromete a no compartir la información confidencial proporcionada por el Usuario, con
                    ningún tercero, excepto que tenga autorización del Usuario, a pesar de su política de no divulgar los datos
                    personales,  podrá divulgar dicha información:<br></br><br></br>
                    <ol>
                        <li>Cuando considere dicha información necesaria para identificar, comunicarse con, o emprender una acción
                            legal en contra de alguien que pudiera estar perjudicando u obstaculizando los derechos o la propiedad del sitio web.</li>
                        <li>Según sea necesario para hacer respetar y cumplir los <b>“Términos y condiciones de uso del sitio de Internet”</b>.</li>
                        <li>Según lo requiera la legislación o alguna Autoridad que en el ámbito de su competencia lo solicite.</li>
                    </ol>
                    De acuerdo a lo explicado anteriormente, el Usuario entiende y concuerda en que esta política de privacidad no
                    aplica a la información que el Usuario proporcione voluntariamente al comunicarse con otras personas mediante
                    correspondencia electrónica, en chats, otras actividades similares. Es responsabilidad del Usuario ser prudente
                    en el tipo de información que entrega al participar en estas actividades públicas. El sitio web no se
                    responsabiliza por la privacidad o políticas de recolección de datos de terceros proveedores de servicios y
                    productos o de cómo esos terceros proveedores de servicios o productos usen la información que el Usuario
                    brinde.
                    <br></br><br></br><br></br>
                    <b>Modificación / actualización /eliminación de la información personal</b><br></br>
                    Los datos personales proporcionados por el Usuario formarán parte de un archivo que contendrá su perfil.
                    Accediendo al mismo, el Usuario puede modificarlos / actualizarlos en cualquier momento. El sitio web
                    aconseja al Usuario que actualice sus datos cada vez que estos sufran alguna modificación, ya que ello
                    permitirá brindarle un servicio más personalizado.<br></br>
                    Al procesar datos personales, el sitio web se compromete a que nuestro personal y los mecanismos del sitio
                    de Internet cumplan con los estándares de seguridad y confidencialidad necesarios para procurar la seguridad,
                    integridad y privacidad de la información recopilada de los usuarios en el sitio de Internet. El sitio web
                    tomará medidas razonables para permitir que los usuarios actualicen los datos personales que hayan
                    inscrito y cuando el Usuario lo solicite procurará eliminar sistemáticamente el registro del Usuario y
                    sus datos personales de la base de datos; sin embargo, podría ser imposible borrar por completo los datos
                    del Usuario debido a las copias de seguridad y los registros de los datos eliminados.
                    <br></br><br></br><br></br>
                    <b>Protección de la información personal</b><br></br>
                    La información proporcionada por el usuario está protegida por diversos mecanismos de seguridad, mediante
                    los cuales el Usuario podrá acceder a ellos. Debido a que ninguna transmisión por Internet puede garantizar
                    su seguridad al 100%, el sitio web no puede garantizar que la información transmitida utilizando su servicio
                    sea completamente segura, con lo cual el Usuario corre su propio riesgo. El Usuario es el único responsable
                    de mantener en secreto su clave y la información de su cuenta, que en un momento dado El sitio web pudiera
                    asignarle. Para disminuir los riesgos el sitio web recomienda al Usuario salir de su cuenta y cerrar la
                    ventana de su navegador cuando finalice su actividad, más aún si comparte su computadora con alguien o
                    utiliza una computadora en un lugar público como una biblioteca o un cibercafé.
                    <br></br><br></br><br></br>
                    <b>Aceptación de los términos</b><br></br>
                    Esta declaración de confidencialidad / privacidad, que describe la Política de Privacidad de el sitio web,
                    constituye un acuerdo válido entre el Usuario y el sitio web; si el Usuario utiliza los servicios de el
                    sitio web significa que ha leído, entendido, aceptado y consecuentemente acordado con el sitio web los
                    términos antes expuestos. En caso de no estar de acuerdo con ellos, el Usuario NO deberá proporcionar
                    ninguna información personal, ni utilizar este servicio o cualquier información relacionada con el sitio
                    de Internet.
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        Entiendo
                    </Button>
                </Modal.Footer>
            </Modal>
            <ul>
                <li>
                <Link to="https://www.youtube.com/channel/UCtj7D7DgNXQY5MFnE9bD5wA/videos" target="_blank" >
                        <FontAwesomeIcon icon={faYoutube} size="2x" />
                    </Link>
                </li>
                <li>
                    <Link to="https://twitter.com/beatrizparedes" target="_blank" >
                        <FontAwesomeIcon icon={faTwitter} size="2x" />
                    </Link>
                </li>
                <li>
                    <Link to="https://www.facebook.com/BeatrizParedesR" target="_blank" >
                        <FontAwesomeIcon icon={faFacebook} size="2x" />
                    </Link>
                </li>
                <li>
                    <a onClick={() => setLgShow(true)} target="_blank" className="animated_link" data-toggle="modal" data-target="#privacy-txt">Políticas de privacidad
                    </a>
                </li>
            </ul>

            <p>
                ©2023 Beatriz Paredes Rangel, Derechos Reservados.
            </p>
        </footer>
    );
}


export default Footer;