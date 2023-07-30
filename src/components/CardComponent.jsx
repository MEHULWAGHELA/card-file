import 'bootstrap/dist/css/bootstrap.min.css'

import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap'
const CardComponent = (props) => {
    return (
        <div>
            <Card Card
                color="warning"
                inverse
                style={{
                    width: '18rem'
                }}
            >
                <img
                    alt="Sample"
                    src={props.image}
                    style={{ objectFit: 'cover', width: "100%", height: '250px' }}
                />
                <CardBody>
                    <CardTitle tag="h5">
                        {props.title}
                    </CardTitle>
                    <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                    >
                        {props.sub}
                    </CardSubtitle>
                    <CardText>
                        Some quick example text to build on the card title and make up the bulk of the card‘s content.
                    </CardText>
                    <Button>
                        Button
                    </Button>
                </CardBody>
            </Card >
        </div>
    )
}
export default CardComponent
