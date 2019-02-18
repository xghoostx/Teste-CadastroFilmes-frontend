import React, { Component } from 'react';
import { Col, Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';
import axios from '../../../services/api';

const baseURL = 'http://localhost:3333';

export default class Register extends Component {
    state = {
        nome: '',
        descricao: '',
        url: '',
        lista: []
    }


    handleSaveFilme = async (e) => {
        e.preventDefault();

        const filme = this.state.lista;
    
        const method = filme.id ? 'put' : 'post';
        const url = filme.id ? `${this.baseUrl}/${filme.id}` : this.baseUrl;
        const { data: post } = await axios[method]('/filmes', {
            nome: this.state.nome,
            descricao: this.state.descricao,
            url: this.state.url
        })

        alert('Filme salvo com sucesso !');

    }

    render() {
        return (
            <aside className="register">
                <Container id="form">
                    <h1 id="title"> Cadastro de Filmes </h1>
                    <Form onSubmit={this.handleSaveFilme}>
                        <FormGroup row>
                            <Label for="nome" sm={2}>Nome</Label>
                            <Col sm={10}>
                                <Input
                                    onChange={e => this.setState({ nome: e.target.value })}
                                    value={this.state.nome}
                                    type="text" name="nome" id="nome" placeholder="Insira o nome do filme" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="descricao" sm={2}>Descrição</Label>
                            <Col sm={10}>
                                <Input
                                    onChange={e => this.setState({ descricao: e.target.value })}
                                  
                                    type="textarea" name="descricao" id="descricao" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="url" sm={2}>Url</Label>
                            <Col sm={10}>
                                <Input
                                    onChange={e => this.setState({ url: e.target.value })}
                                    value={this.state.url}
                                    type="text" name="url" id="url" placeholder="Insira a url do filme" />
                            </Col>
                        </FormGroup>
                        {/* <FormGroup row>
                            <Label for="capa" sm={2}>Capa</Label>
                            <Col sm={10}>
                                <Input type="file" name="capa" id="capa" />
                                <FormText color="muted">
                                    Por favor selecione uma imagem com extenção .png ou .jpg
                        </FormText>
                            </Col>
                       </FormGroup> */}
                        <FormGroup row>
                            <Col sm={10}>
                                <Button type="submit" id="btn-conf">Confirmar</Button>
                            </Col>
                        </FormGroup>
                    </Form>
                </Container>
            </aside>
        );
    }
}