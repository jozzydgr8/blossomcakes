import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import { LayOut } from './Layout';
import { Home } from './Home';

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/blossomcakes' element={<LayOut/>}>
      <Route index element={<Home/>} />
      <Route path='cakes' />
    </Route>
  ))
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
