import { Container } from './styles';
import { Card } from '../card/card';


export function CardsArea({ products, onRemove }) {



    return (
        <Container>
            {products.map((card,index) => (
                <Card
                key={index}
                title={card.title}
                src={card.src}
                price={card.price} 
                onDelete={onRemove}
                />
            ))}
        </Container>
    )
}