import { useState, useEffect } from 'react';
import { Container, BoxProducts } from './styles';
import { Header } from '../components/header/header';
import { CardsArea } from '../components/cardsArea/cardsArea';
import { Footer } from '../components/footer/footer';
import { Formulary } from '../components/form/formulary';
import { cards } from '../data/cards'; 

export function Home() {
   
    const [productsList, setProductList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        
        const timer = setTimeout(() => {
            
            
            setProductList(cards); 
            
            setIsLoading(false);
            console.log("Dados carregados com sucesso do arquivo cards.js!");
        }, 2000);

        
        return () => clearTimeout(timer); 
    }, []);

    const addProduct = (newProduct) => {
        setProductList([...productsList, newProduct]);
    };

    const removeProduct = (titleToRemove) => {
        setProductList(productsList.filter(p => p.title !== titleToRemove));
    };

    return (
        <Container>
            <Header />
            <BoxProducts>
                {isLoading ? (
                    <h1 style={{color: 'black', fontFamily: 'Nunito Sans', textAlign: 'center', border: 'none', background: "green", padding: "10px", borderRadius: '20px'}}>
                        Buscando produtos no catálogo...
                    </h1>
                ) : (
                    <CardsArea products={productsList} onRemove={removeProduct} />
                )}
                
                <Formulary onAddProduct={addProduct} />
            </BoxProducts>
            <Footer />
        </Container>
    );
}