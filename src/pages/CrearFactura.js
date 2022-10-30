import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import { CREARFACTURA_POST_ENDPOINT } from '../connections/helpers/endpoints';
import {CrearFacturaFormulario} from '../components/CrearFacturaFormulario';
import { Alert, Card, Col, Container, Row } from 'react-bootstrap'

function CrearFactura() {

    const [errores, setErrores]= useState({});
    const navegar=useNavigate();

    const crear= async ({fechaFactura, fechaVencimiento, valorPagar, valorMora, valorFactura}) => {

        const errores={};
        setErrores(errores);
       
        axios.post(CREARFACTURA_POST_ENDPOINT, {fechaFactura, fechaVencimiento, valorPagar, valorMora, valorFactura}
            ).then(response=>{
                console.log(response);
                navegar(`/factura/${response.data.idFactura}`);
        })
        .catch(error=>{
            setErrores({new: error.response.data.message});
        })
    }

    return (
        <Container className="mt-3 mb-3">
            <Row className="justify-content-md-center">
                <Col sm="12" md="8" lg="6">
                    <h3 className="text-center">Crear factura</h3>
                    <Card.Body>
                        {errores.new && <Alert variant="danger">{errores.new}</Alert>}
                        <CrearFacturaFormulario errores={errores} callback={crear} editable={false}/>
                    </Card.Body>
                </Col>
            </Row>
        </Container>
    )
}

export {CrearFactura}
