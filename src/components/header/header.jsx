import { Container, BoxIcon, Navigation } from './styles';


export function Header() {
    return (
        <Container>
            <BoxIcon>
                <img src="./icon.png" alt="Icone" />
            </BoxIcon>
            <Navigation>
                <a href="#contacts">Information</a>
            </Navigation>
            
        </Container>
    )
}