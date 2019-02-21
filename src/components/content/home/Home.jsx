import React from 'react';
import Main from '../../template/main/Main';
import './Home.css';

export default props =>
    <Main icon="home" title="Início"
        subtitle="Aplicação de para cadastro de filmes desenvolvida em ReactJS">
        <div className="display-4"> Bem vindo ao sistema de cadastros </div>
        <hr />
        <p className="mb-1">
            O sistema foi desenvolvido utilizando a stack nodeJs e ReactJs na linguagem JavaScript.
            A escolha da tecnologia foi devido ao reaproveitamento e agilidade que se pode obter ao migrar o projeto
            para os mobile. Uma vez que grande parte do código desenvolvido em ReacJS pode ser reaproveitado em React Native.
        </p>
        <hr />
        <h5 className="mb-1">
            Back-end:
        </h5>
        <p className="mb-1">
            O sistema possui uma api desenvolvida utilizando o AdonisJS e a escolha de usar esse framework
            baseou-se na similaridade que ele possui com o framework Ruby on Rails de forma que a curva de
            aprendizado possa ser menor caso me depare com a necessidade futura de desenvolver utilizando
            a linguagem Ruby e seu respectivo framework. Além disso por se tratar de uma aplicação monolítica
            o framework forneceu grandes facilidades no desenvolvimento que se tornaram muito vantajosas quando
            comparado ao Express.js (framework do qual já havia desenvolvido antes).
        </p>
        <hr />
        <h5 className="mb-1">
            Front-end:
        </h5>
        <p className="mb-1">
            Para o desenvolvimento do front-end da aplicação a tecnologia empregada foi o ReactJs como já 
            foi comentado anteriormente, além disso para tratar do layout e responsividade da aplicação 
            foi utilizado o framework Bootstrap em sua versão mais recente 4 mas quem realmente ficou 
            responsável pelo layout da foi o CSS Grid. A escolha dessa combinação foi devido a tentativa de 
            passar ao usuário uma experiencia em navegar em uma Single-page application. Tendo esse objetivo 
            em vista, alguns desafios surgiram ao utilizar soluções como reactstrap (versão desenvolvida 
            propriamente para ReacJS) ou até mesmo algumas funcionalidades do bootstrap, pois sempre que se 
            realizava uma navegação a página inteira era renderizada devido os seus componentes e foi somente 
            na combinação adotada no projeto que encontrei solução para esse problema.
        </p>

    </Main>    