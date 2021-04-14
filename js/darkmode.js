//Script para aplicação de classes "active" para mudança de modo dia para noturno
                const body = document.querySelector('body');
                const nav = document.querySelector('nav');
                const globo = document.getElementById('globopreto');
                const toggle = document.getElementById('toggle');
                const quemsomos = document.getElementById('quemsomos');
                const parceiros = document.getElementById('parceiros');
                const servicos = document.getElementById('servicos');
                const card = document.getElementById('card');
                const card2 = document.getElementById('card2');
                const contato = document.getElementById('contato')
                

                toggle.onclick = function (){
                    toggle.classList.toggle('active');
                    body.classList.toggle('active');
                    nav.classList.toggle('active');
                    nav.classList.toggle('navbar-dark');
                    globo.classList.toggle('active');
                    quemsomos.classList.toggle('active');
                    parceiros.classList.toggle('active');
                    servicos.classList.toggle('active');
                    card.classList.toggle('active');
                    card2.classList.toggle('active'); 
                    contato.classList.toggle('active');                      
                }

