import React from 'react';
import { Card, Col, Row } from 'antd';
import { useFetch } from './useFetch';
const { Meta } = Card;
const List = () => {
  const { data, error, loading } = useFetch('http://localhost:3000/products');
  return (
    <>
      <div style={{ background: 'white', padding: '50px' }}>
        <Row gutter={16}>
          {data.map((elemento) => {
            return(
            <Col span={8} key={elemento.id}>
              <Card  hoverable title={elemento.name} bordered={true} cover={<img alt="Zapatillas" src={elemento.image} />}>
              <Meta title={`Precio: ${elemento.price}`} description={`Stock: ${elemento.stock}`}/>
            </Card>
            </Col>
            )

          })}


        </Row>
      </div>


    </>
  )
}
export {
  List
}
