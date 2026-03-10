import { useState } from 'react'
import { Container, Form, Input, Button } from './styles';

    export function Formulary({ onAddProduct }) {

        const [title, setTitle] = useState('');
        const [price, setPrice] = useState('');
        const [src, setSrc] = useState('');


        const handleSubmit = (e) => {
            e.preventDefault();

            const newFruit = {
                name: name,
                price: `${price}R$`,
                img: img,
            }

            onAddProduct(newFruit)

            setName('')
            setPrice('')
            setImg('')
            console.log('Produto Cadastrado!')
        }

        return (
            <Container>
                <h1>Cadastro de produtos</h1>
                <Form onSubmit={handleSubmit}>
                   
                   <div className='input-wrapper'>
                    <label htmlFor="name">Nome</label>
                     <Input
                        id="name"
                        value={name}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder='Nome do produto'
                        required
                        
                    />
                   </div>
                   <div className='input-wrapper'>
                    <label htmlFor="price">Preço</label>
                     <Input
                        id='price'
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        placeholder='Preço do produto' 
                        required
                    />
                   </div>
                   <div className='input-wrapper'>
                    <label htmlFor="img">URL da imagem</label>
                     <Input
                        id='img'
                        value={src}
                        onChange={(e) => setSrc(e.target.value)}
                        placeholder='https://...' 
                        required
                    />
                   </div>

                    <Button type='submit'>Cadastrar</Button>
                </Form>
            </Container>
        )

    }
