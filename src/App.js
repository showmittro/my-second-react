import logo from './logo.svg';
import './App.css';

function App() {
  const products =[
    {name:'Laptop', price: 139000},
    {name:'Phone', price: 39000},
    {name:'watch', price: 9000},
    {name:'Books', price: 3000}
  ]

  return (
    <div className="App">
      {
        products.map(product => <Product name={product.name} price={product.price}></Product>)
      }
      {/* <Product name="Laptop" price='55000'></Product>
      <Product name="Phone" price='45000'></Product>
      <Product name="Watch" price='3500'></Product>
      <Product name="Books" price='5000'></Product> */}
    </div>
  );
}


function Product (props){
  return(
    <div className='product'>
      <h3>Name: {props.name}</h3>
      <p>Price: {props.price}</p>
    </div>
  )
}

export default App;
