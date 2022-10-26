import React, {useState} from 'react'
import {Form, Button, Row, Col} from "react-bootstrap"
import moment from 'moment';

function CrearFacturaFormulario({errores, callback, 
    fFechaFactura="", fFecheVencimiento="", fValorPagar="0", fValorMora="0", fValorFactura="0", editable}) {

    const [fechaFactura, setFechaFactura]=useState(fFechaFactura);
    const [fechaVencimiento, setFechaVencimiento]=useState(fFecheVencimiento);
    const [valorPagar, setValorPagar]=useState(fValorPagar);
    const [valorMora, setValorMora]=useState(fValorMora);
    const [valorFactura, setValorFactura]=useState(fValorFactura);

    const enviar = (e) => {
        e.preventDefault();
        (!editable) ? callback({fechaFactura, fechaVencimiento}) : callback({valorFactura, valorMora, valorFactura})
    }

    return (
        <Form onSubmit={enviar}>        
            {!editable &&
                <Row>
                    <Col md="6" xs="12">
                        <Form.Group className="mt-3 mb-3" controlId="fechaFactura">              
                            <Form.Label>Fecha Factura</Form.Label>
                            <Form.Control 
                                type="date" 
                                value={moment(fecha).format('yyyy-MM-DD')} 
                                min={moment().format('yyyy-MM-DD')}
                                onChange={e=>setFechaFactura(e.target.value)}
                                isInvalid={errores.fecha}                      
                            >                        
                            </Form.Control>          
                            
                            <Form.Control.Feedback type="invalid">
                                {errores.fecha}
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Col>                           
                </Row>
            }
            {!editable &&
                <Row>
                    <Col md="6" xs="12">
                        <Form.Group className="mt-3 mb-3" controlId="fechaVencimiento">              
                            <Form.Label>Fecha Vencimiento</Form.Label>
                            <Form.Control 
                                type="date" 
                                value={moment(fecha).format('yyyy-MM-DD')} 
                                min={moment().format('yyyy-MM-DD')}
                                onChange={e=>setFechaVencimiento(e.target.value)}
                                isInvalid={errores.fecha}                      
                            >                        
                            </Form.Control>          
                            
                            <Form.Control.Feedback type="invalid">
                                {errores.fecha}
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Col>                           
                </Row>
            }
            {editable &&
                <Row>
                    <Col md="6" xs="12">
                        <Form.Group controlId="valorPagar">
                            <Form.Label>Valor Pagar</Form.Label>
                            <Form.Control 
                            type="number"
                            value={valorPagar}
                            onChange={e=>setValorPagar(e.target.value)}
                            isInvalid={errores.valorPagar} />

                            <Form.Control.Feedback type="invalid">
                                {errores.valorPagar}
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                    <Col md="6" xs="12">
                        <Form.Group controlId="valorMora">
                            <Form.Label>Valor Mora</Form.Label>
                            <Form.Control 
                            type="number"
                            value={valorMora}
                            onChange={e=>setValorMora(e.target.value)}
                            isInvalid={errores.valorMora} />

                            <Form.Control.Feedback type="invalid">
                                {errores.valorMora}
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                    <Col md="6" xs="12">
                        <Form.Group controlId="valorFactura">
                            <Form.Label>Valor Factura</Form.Label>
                            <Form.Control 
                            type="number"
                            value={valorFactura}
                            onChange={e=>setValorFactura(e.target.value)}
                            isInvalid={errores.valorFactura} />

                            <Form.Control.Feedback type="invalid">
                                {errores.valorFactura}
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                            
                </Row>
            }
            <Button variant="primary" type="submit" className="mt-3">
                {!editable ? "Crear " : "Editar "}
                factura
            </Button>
        </Form>        
    )
}

export {CrearFacturaFormulario}

