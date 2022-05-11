import { useEffect, useState } from "react";
import {Card,Button,Container} from "react-bootstrap"

const Count = ()=>{
    const [count, setCount]= useState(0)
    const stock=10
    return(
        <Container>
            <Card style={{width:'22rem'}}>
                <Card.Body>
                    <Card.Title>
                        Llantas R20
                    </Card.Title>
                    <Card.Text>
                        Llantas Rodado 20 para Fiat Uno 2010-2015
                        Aleacion de acero y aluminio 
                        Costo:$2500
                        Disponible: {stock}
                    </Card.Text>
                    <div className="d-inline-flex p-3 bd-highlight">
                    <div className="p-2 bd-highlight">
                    <Button variant="primary" onClick={()=>{setCount(count - 1)}} disabled={count < 1 ? true : null}>-</Button>
                    </div>
                    <div className="p-2 bd-highlight">
                    <input type="number" className="justify-content-center" min='0' max={stock} value={count} onChange={event => setCount(event.target.value)}></input>
                    </div>
                    <div className="p-2 bd-highlight">
                    <Button variant="primary" onClick={()=>{setCount(count + 1)}} disabled={count === stock ? true : null}>+</Button>
                    </div>

                    </div>

                    <Button variant="primary" onClick={()=>{console.log(`Cantidad elegida:${count}`)}}>Agregar al carrito</Button>
                </Card.Body>
            </Card>
        </Container>

    )

    

}

export default Count