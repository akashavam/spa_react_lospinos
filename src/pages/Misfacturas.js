import axios from "axios"
import { useEffect, useState } from "react"
import { Card, Col, Container, Row } from "react-bootstrap"
import {FacturaCard} from "../components/FacturaCard"
import { MISFACTURAS_GET_ENDPOINT } from "../connections/helpers/endpoints"


const Misfacturas= ()=>{

    const [facturas, setFacturas] = useState([])
    const [buscando, setBuscando] = useState(true)

    useEffect(()=>{
        axios.get(MISFACTURAS_GET_ENDPOINT)
        .then(respuesta=>{
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
                <h3 className="text-center">Mis facturas</h3>
                <Card.Body>                   
                    {buscando ? "Cargando..." : (facturas.length===0 && "No hay facturas disponibles")}
                    {facturas.map(factura => 
                        <FacturaCard key={factura.idFactura} factura={factura} editable={true}/>)
                    }
                </Card.Body>
            </Col>
        </Row>
    </Container>
    )
}

export {Misfacturas}