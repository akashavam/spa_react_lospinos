import axios from "axios"
import { Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { ELIMINARFACTURA_DELETE_ENDPOINT } from "../connections/helpers/endpoints"

function EliminarFacturaBoton({id}){

    const navegar= useNavigate()

    const eliminar= async ()=>{

        axios.delete(`${ELIMINARFACTURA_DELETE_ENDPOINT}/${id}`
          ).then(respuesta=>{
          navegar("/")
        }).catch(err=>{
            console.error(err)
        })
    }

    const crearAlerta= ()=>{
        
      const titulo= `Eliminar factura \n ¿Desea eliminar la factura${id} ?`

      return (window.confirm(titulo) == true) ? eliminar() : ()=>{}
    }

    return (
        <Button
          variant="danger" size="sm" onClick={crearAlerta}
        >
          Eliminar
        </Button>
      )
}

export {EliminarFacturaBoton}