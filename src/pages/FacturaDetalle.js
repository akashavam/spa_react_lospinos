import axios from "axios"
import { useEffect, useState } from "react"
import { Badge, Card, Col, Container, Row } from "react-bootstrap"
import { FACTURADETALLE_GET_ENDPOINT } from "../connections/helpers/endpoints.js"
import { useNavigate, useParams } from "react-router-dom"
import moment from "moment"

const FacturaDetalle= ()=>{

    const [factura, setFactura] = useState(null)
    const {id}= useParams()
    const navegar= useNavigate()


    useEffect(()=>{
        axios.get(`${FACTURADETALLE_GET_ENDPOINT}/${id}`)
        .then(respuesta=>{
            setFactura(respuesta.data)
        }).catch(e=>{
            navegar(-1)
        })
    },[id, navegar])

    
    return (
    <Container className="mt-3 mb-3">
        <Row className="justify-content-md-center">
            <Col sm="12" md="8" lg="6">
                <h3 className="text-center">Detalle factura</h3>
                {factura && (
                    <Card className="mt-3 mb-3">
                        <Card.Header className="mi-card">
                            {factura.estado ? 
                                    <Badge className="mi-badge-pagada">Pagada</Badge> : 
                                    <Badge className="mi-badge-pendiente">Pendiente</Badge>
                            }                        
                        </Card.Header>
                        <Card.Body>
                            <p>
                                Valor Pagar
                                <Badge className="mi-badge-valor">{factura.valorPagar}</Badge> 
                                Valor Mora
                                <Badge className="mi-badge-valor">{factura.valorMora}</Badge> 
                                Valor Factura
                                <Badge className="mi-badge-valor">{factura.valorFactura}</Badge> 
                            </p>
                            Fecha: {moment(factura.fechaFactura).format("D[/]MM[/]YYYY")}
                        </Card.Body>

                    </Card>
                )}
            </Col>
        </Row>
    </Container>
    )
}

export {FacturaDetalle}