import { Container } from './styles';

export function Card({title, price, src, onDelete}) {
    return (
        <Container>
            <span className='close-btn' onClick={() => onDelete(title)}>X</span>
            <div className='image-container'>
                <img src={src} alt="Fruit" />
            </div>
            <div className='info'>
                <h3>{title}</h3>
                <h4>{price}</h4>  
            </div>    
        </Container>
    )
}