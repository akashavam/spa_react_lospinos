import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import { ACTUALIZARFACTURA_PUT_ENDPOINT, FACTURADETALLE_GET_ENDPOINT } from '../connections/helpers/endpoints'
import {CrearFacturaFormulario} from '../components/CrearFacturaFormulario';
import { Alert, Card, Col, Container, Row } from 'react-bootstrap'

function EditarFactura() {

    const {id} = useParams();
    const [errores, setErrores]= useState({});
    const [factura, setFactura]= useState(null);
    const navegar=useNavigate();


    useEffect(() =>{
        axios.get(`${FACTURADETALLE_GET_ENDPOINT}/${id}`
        ).then(respuesta=>{
            setFactura(respuesta.data);
        }).catch(error =>{
            navegar('/')
        })        
    }, [id, navegar]);

    const editar= async({valorPagar, valorMora, valorFactura}) => {

        const error={};
        setErrores(error);

        axios.put(`${ACTUALIZARFACTURA_PUT_ENDPOINT}/${factura.idFactura}`, {valorPagar, valorMora, valorFactura})
        .then(respuesta=>{
            navegar("/");
        })
        .catch(err=>{
            setErrores({update: err.respuesta.data.message});
        })
        
    }

    return (

        <Container className="mt-3 mb-3">
            <Row className="justify-content-md-center">
                <Col sm="12" md="8" lg="6">
                    <h3 className="text-center">Editar factura</h3>
                    <Card.Body>
                        {errores.update && <Alert variant="danger">{errores.update}</Alert>}

                        { factura && 
                            <CrearFacturaFormulario 
                                errores={errores} 
                                callback={editar}
                                fFechaFactura={factura.creado}
                                fFecheVencimiento={factura.fFecheVencimiento}
                                fValorPagar={factura.valorFactura}
                                fValorMora={factura.valorMora}
                                fValorFactura={factura.valorFactura}
                                editable={true}
                            ></CrearFacturaFormulario>    
                        }                    
                    </Card.Body>
                </Col>
            </Row>
        </Container>
    )
}

export {EditarFactura}

