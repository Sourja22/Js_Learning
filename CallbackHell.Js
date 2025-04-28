updateCart(function(){
    createPayment(function(){
        updateWallet(function(){
            refreshPage();
        })
    })
})//

//Pyramid of Doom/Call-back Hell