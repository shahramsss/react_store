import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

export const Product = (props) => {
    const { id, productName, price, productImage } = props.data
    return (

        // <Card>
        //     <Card.Img variant="top" src={productImage} />
        //     <Card.Body>
        //         <Card.Title>{productName}</Card.Title>

        //     </Card.Body>
        //     <Card.Footer>
        //         <small classNameName="text-muted">Last updated 3 mins ago</small>
        //     </Card.Footer>
        // </Card>
        // <div className="card">
        //     <img src={productImage} classNameName="card-img-top w-100" alt="..." />
        //     <div className="card-body">
        //         <h5 className="card-title">{productName}</h5>
        //         <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
        //     </div>
        // </div>
        <div className="col">
            <div className="card h-100">
                <img src={productImage} className="card-img-top " alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{productName}</h5>
                </div>
                <div className="card-footer">
                    <h5 className="card-title">price: {price}$</h5>
                    <button className='btn btn-info'>+</button>
                    <small className="text-body-secondary mx-1">0</small>
                    <button className='btn btn-info'>-</button>
                </div>
            </div>
        </div>

    )
}