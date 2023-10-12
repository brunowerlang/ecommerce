//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



////////////////////////////////// CRIA A IMG ///////////////////////////////////////////////////////////////////
    document.addEventListener("DOMContentLoaded", function ()) {
        // Crie um elemento de imagem
        var imagem = document.createElement("img");
        imagem.setAttribute("loading", "lazy");
        imagem.setAttribute("src", "https://cdn.dooca.store/137492/files/banner-teste-voices.jpg?v=1695926309");
        imagem.setAttribute("alt", "banner-teste-voices");
        
        // Define o estilo da imagem para ocupar 100% da largura da div container
        imagem.style.width = "100%";

        // Encontre o elemento onde deseja inserir a imagem
        var elementoPai = document.querySelector('body > div.wrapper > main > div.collection > div.collection-content > div > div.row.no-gutters > div.col.order-1 > section > div > div:nth-child(2)');

        // Encontre a sexta div dentro do elemento pai
        var sextaDiv = elementoPai.querySelector('.col-6.col-sm-6.col-md-4.col-lg-4.mb-4:nth-child(6)');

        // Insira a imagem após a sexta div
        elementoPai.insertBefore(imagem, sextaDiv.nextSibling);
    }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



////////////////////////////////// COPIA A IMG DA SESSAO PAG PRINCIPAL ///////////////////////////////////////////////////////////////////

    // Verifique a classe do elemento body para determinar a página atual
    const isPaginaOrigem = document.body.classList.contains("page--product");
    const isPaginaDestino = document.body.classList.contains("page--collection");

    if (isPaginaOrigem) {
        // Se esta for a página de origem, selecione a seção a ser copiada
        const secaoParaCopiar = document.querySelector("body.page--index > div.wrapper > main > section:nth-child(9)");

        if (secaoParaCopiar) {
            // Clone o conteúdo da seção
            const conteudoClonado = secaoParaCopiar.cloneNode(true);

            // Armazene o conteúdo clonado em localStorage
            localStorage.setItem("conteudoClonado", conteudoClonado.innerHTML);
        }
    } else if (isPaginaDestino) {
        // Se esta for a página de destino, recupere o conteúdo clonado de localStorage
        const conteudoClonado = localStorage.getItem("conteudoClonado");

        if (conteudoClonado) {
            // Encontre a seção de destino
            const destino = document.querySelector("body.page--collection > div.wrapper > main > div.collection > div.collection-content > div > div.row.no-gutters > div.col.order-1 > section > div > div:nth-child(2)");

            // Encontre a sexta div com a classe .col-6.col-sm-6.col-md-4.col-lg-4.mb-4:nth-child(6)
            const sextaDiv = destino.querySelector(".col-6.col-sm-6.col-md-4.col-lg-4.mb-4:nth-child(6)");

            // Crie um novo elemento div para adicionar o conteúdo clonado
            const divClonada = document.createElement("div");
            divClonada.innerHTML = conteudoClonado;

            // Insira a seção clonada após a sexta div
            destino.insertBefore(divClonada, sextaDiv.nextSibling);
        }
    }

    
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




////////////////////////////////// COPIA A IMG DA SESSAO LP ///////////////////////////////////////////////////////////////////




// Verifique a classe do elemento body para determinar a página atual
const isPaginaCollection = document.body.classList.contains("page--collection");

if (isPaginaCollection) {
    // Se esta for a página de coleção, selecione a seção a ser copiada
    const secaoParaCopiar = document.querySelector("body > div.wrapper > main > section");

    if (secaoParaCopiar) {
        // Selecione a div.container dentro da seção
        const divParaCopiar = secaoParaCopiar.querySelector("div.container");

        if (divParaCopiar) {
            // Clone a div.container
            const divClonada = divParaCopiar.cloneNode(true);

            // Encontre o local de destino dentro da mesma página
            const destino = document.querySelector("body > div.wrapper > main > div.collection > div.collection-content > div > div.row.no-gutters > div.col.order-1 > section > div > div:nth-child(2)");

            if (destino) {
                // Encontre a sexta div dentro do destino
                const sextaDiv = destino.querySelector(".col-6.col-sm-6.col-md-4.col-lg-4.mb-4:nth-child(6)");

                // Insira a div clonada após a sexta div
                destino.insertBefore(divClonada, sextaDiv.nextSibling);

                // Remova toda a seção original
                secaoParaCopiar.remove();
            }
        }
    }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


////////////////////////////////// DESABILITA OS PRODUTOS FORA DE ESTOQUE ///////////////////////////////////////////////////////////////////


  // Aguarde o carregamento completo da página

  document.addEventListener("DOMContentLoaded", function () {

    // Selecione todas as divs com a classe '.product-attribute-button.product-attribute-action' dentro de 'd-flex flex-wrap'

    const divs = document.querySelectorAll('.d-flex.flex-wrap .product-attribute-button.product-attribute-action');

    const productActionDiv = document.querySelector('.product-action');

    const productShippingDiv = document.querySelector('.product-shipping');

    // Verifique se todas as divs estão desabilitadas

    const allDisabled = Array.from(divs).every((div) =>

        div.classList.contains('disabled')

    );



    // Se todas as divs estiverem desabilitadas, oculte-as

   

        if (allDisabled) {

        productActionDiv.style.display = 'none';

        productShippingDiv.style.display = 'none';

    }    



});