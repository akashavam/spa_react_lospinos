import { Badge, Button, Card } from "react-bootstrap"
import { Link, NavLink } from "react-router-dom"
import moment from "moment"
import { EliminarFacturaBoton } from "./EliminarFacturaBoton"

const FacturaCard= ({factura, editable})=>{

    return (
        <Card className="mt-3 mb-3">
            <Card.Header className="mi-card">
                {factura.estado ? 
                        <Badge className="mi-badge-pagada">Pagada</Badge> 
                        : 
                        <Badge className="mi-badge-pendiente">Pendiente</Badge>
                }
                { editable ?
                    <div>
                        <Button variant="primary" size="sm" className="me-2"
                                as={NavLink} to={`/editarfactura/${factura.idFactura}`}
                        >
                            Pagar
                        </Button>
                        <EliminarFacturaBoton id={factura.idFactura}/>
                    </div>
                    :""
                }
            </Card.Header>
            <Card.Body>
                <Card.Title>
                    <Link to={`/factura/${factura.idFactura}`}>
                    </Link>
                </Card.Title>            
                <Card.Text>
                    Fecha: {moment(factura.fecha).format("D[/]MM[/]YYYY")}
                </Card.Text>

            </Card.Body>
        </Card>
    )
}


export {FacturaCard}