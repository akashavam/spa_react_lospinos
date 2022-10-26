import '../css/App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import {Navegacion} from "../layouts/Navegacion"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {FacturasCreadas} from "../pages/FacturasCreadas"
import { FacturaDetalle } from '../pages/FacturaDetalle';
import "moment/locale/es"
import { Signup } from '../pages/Signup';
import { Provider } from 'react-redux';
import { store } from '../states/store';
import { getAutenticacionToken } from '../connections/helpers/token';
import { Signin } from '../pages/Signin';
import { RutaPrivada } from './RutaPrivada';
import { Misfacturas } from '../pages/Misfacturas';
import { CrearFactura } from '../pages/CrearFactura';
import { EditarFactura } from '../pages/EditarFactura';

getAutenticacionToken()

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navegacion />
        <Routes>
          <Route path='/' element={<FacturasCreadas />}/>
          <Route path='/factura/:id' element={<FacturaDetalle />}/>
          <Route path='/signup' element={<Signup />}/>
          <Route path='/signin' element={<Signin />}/>
          <Route element={<RutaPrivada />}>
            <Route path='/misfacturas' element={<Misfacturas />}/>
            <Route path='/crearfactura' element={<CrearFactura />}/>
            <Route path='/editarfactura/:id' element={<EditarFactura />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
