import React, { useEffect, useState } from 'react';

function Dashboard() {
  const [data, setData] = useState([]);
  const [Cart, setCart] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const serverResponse = await fetch('https://fakestoreapi.com/products');
      const jsonData = await serverResponse.json();
      setData(jsonData); 
      console.log(jsonData); 
    }
    fetchData();
  }, []);

  function AddToCart(ele) {
    setCart(item => [...item, ele]);
    alert(Cart.length);
  }

  return (
    <div>
      {
        Cart.length === 0 ? (
          <h2>Cart is empty</h2>
        ) : (
          Cart.map(ele => (
            <div>
              <h2>{ele.title}</h2>
            </div>
          ))
        )
      }
      <div>
        {
          data.length === 0 ? (
            <h2>Data is not available</h2>
          ) : (
            <div>
              {data.map(ele => (
                <div style={{border:'2px solid green'}}>
                  <img src={ele.image} width={100} height={100} alt={ele.title} />
                  <h2>{ele.title}</h2>
                  <h2>{ele.price}</h2>
                  <h2>{ele.description}</h2>
                  <h2>{ele.category}</h2>
                  <button onClick={() => AddToCart(ele)}>Add to cart</button>
                </div>
              ))}
            </div>
          )
        }
        {
          // JSON.stringify(data)
        }
      </div>
    </div>
  );
}

export default Dashboard;
