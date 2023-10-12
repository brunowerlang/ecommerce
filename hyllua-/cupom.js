<script>
function copyCupom() {
  // Get the text field
  var copyText = document.querySelector(".offer-right__coupon input");

  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

   // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);

  // Show text was copied
  var textwascopied = document.querySelector(".offer-right__main .alert-coupon");
  textwascopied.style.opacity = "1";
  textwascopied.style.webkitAnimation = "webkit-hideText 1s ease-in 2s";
  textwascopied.style.animation = "hideText 1s ease-in 2s";
}
  
const Cupom_lateral = {
    titulo: 'CUPOM',
    descricao: 'Primeira compra com',
    percentual: '5% OFF',
    nome_cupom: 'Use o cupom',
    cupom_desconto: 'primeiracompra'
};


/* function */
$(`<div class="offer-right">
    <div class="offer-right__content">
        <div class="offer-right__header">
            <strong>${Cupom_lateral.titulo}</strong>
        </div>
        <div class="offer-right__main">
            <div class="offer-right__text">
                <span>${Cupom_lateral.descricao}</span>
                <strong>${Cupom_lateral.percentual}</strong>
            </div>
            <div class="offer-right__coupon">
                <span>${Cupom_lateral.nome_cupom}</span>
                <input type="text" value="${Cupom_lateral.cupom_desconto}">
                <button onclick="copyCupom()"><strong>${Cupom_lateral.cupom_desconto}</strong></button>
            </div>
            <span class="alert-coupon d-none">Cupom copiado!</span>
        </div>
    </div>
</div>`).appendTo('body');
$('.offer-right .offer-right__header').click(function(){
    $(this).parents('.offer-right').toggleClass('show-offer');
}); 
</script>
