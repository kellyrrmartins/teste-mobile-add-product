const homeScreen = require("../screens/home.screen");
const loginScreen = require("../screens/login.screen");
const myStoreScreen = require("../screens/myStore.screen");
const productsScreen = require("../screens/products.screen");
// lojaebacqe@gmail.com

describe('Acessar painel de cadastro de produtos', () => {

  let urlLoja = 'http://lojaebac.ebaconline.art.br/'
  let usuario = 'gerente'
  let senha = 'GD*peToHNJ1#c$sgk08EaYJQ'
  let product = [{ nome: 'Produto de teste', descricao: 'A descrição é de um produto de teste para loja', preco: 1200, estoque: 12 }]
  it('Deve Cadastrar um novo produto com sucesso', async () => {
    await homeScreen.initial()
    await homeScreen.goToLogoin()
    await loginScreen.setStoresAdrres(urlLoja)
    await loginScreen.continue()
    await loginScreen.continueWithStoreCredentials()
    await loginScreen.login(usuario, senha)
    await loginScreen.goToTwoFactorAuth()
    await loginScreen.twoFactorLogin(senha)
    await myStoreScreen.productButton()
    await productsScreen.addNewProducts()
    await productsScreen.newProduct()
    await productsScreen.insertProduct(product[0].nome, product[0].descricao, product[0].preco, product[0].estoque)

    expect(await productsScreen.getProductReviews()).toEqual('Reviews')
  });
});