
class ProductsScreen {


  get addProducts() { return $('id:addProductButton') }
  get setProduct() { return $(`android=new UiSelector().index(${0})`) }
  // get productImage() { return $('id:addImageContainer') }
  // get getImage() { return $('android=new UiSelector().text("WordPress media library")') }
  // get selectImage() { return $('(//android.widget.ImageView[@content-desc="Image Thumbnail"])[11]') }
  // get addImage() { return $('id:mnu_confirm_selection') }
  get product() { return $('android=new UiSelector().text("Enter Product Title")') }
  get clickDescrib() { return $('android=new UiSelector().text("Describe your product")') }
  get describ() { return $('android.widget.EditText') }
  get back() { return $('~Navigate up') }
  get addPrice() { return $('android=new UiSelector().text("Add price")') }
  get price() { return $('android=new UiSelector().text("Regular price")') }
  get clickEnventory() { return $('android=new UiSelector().text("Inventory")') }
  get eventory() { return $('id:edit_text') }
  get publish() { return $('id:menu_publish') }
  get reviews() { return $('android=new UiSelector().text("Reviews")') }
  async addNewProducts() {
    await this.addProducts.click()
  }

  async newProduct() {
    await this.setProduct.click()
  }

  async insertProduct(nome, descricao, preco, estoque) {
    // await this.productImage.click()
    // await this.getImage.click()
    // await this.selectImage.click()
    // await this.addImage.click()
    // await this.back.click()
    await this.product.setValue(nome)
    await this.clickDescrib.click()
    await this.describ.setValue(descricao)
    await this.back.click()
    await this.addPrice.click()
    await this.price.setValue(preco)
    await this.back.click()
    await this.clickEnventory.click()
    await this.eventory.setValue(estoque)
    await this.back.click()
    await this.publish.click()

  }


  async getProductReviews() {
    return await this.reviews.getText()

  }
}

module.exports = new ProductsScreen()


