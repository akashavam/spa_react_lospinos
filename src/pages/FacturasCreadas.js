import axios from "axios"
import { useEffect, useState } from "react"
import { Card, Col, Container, Row } from "react-bootstrap"
import { FACTURASCREADAS_GET_ENDPOINT } from "../connections/helpers/endpoints"
import {FacturaCard} from "../components/FacturaCard"

const FacturasCreadas= ()=>{

    const [facturas, setFacturas] = useState([])
    const [buscando, setBuscando] = useState(true)

    useEffect(()=>{
        axios.get(FACTURASCREADAS_GET_ENDPOINT)
        .then(respuesta=>{
            console.log(respuesta);
            setFacturas(respuesta.data)
            setBuscando(false)
        }).catch(e=>{
            console.error(e)
            setBuscando(false)
        })
    },[])

    return (
    <Container className="mt-3 mb-3">
        <Row className="justify-content-md-center">
            <Col sm="12" md="8" lg="6">
                <h3 className="text-center">Facturas creadas</h3>
                <Card.Body>                   
                    {buscando ? "Cargando..." : (facturas.length===0 && "No hay facturas disponibles")}
                    {facturas.map(factura => 
                        <FacturaCard key={factura.idFactura} factura={factura} editable={false}/>)
                    }
                </Card.Body>
            </Col>
        </Row>
    </Container>
    )
}

export {FacturasCreadas}