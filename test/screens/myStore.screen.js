class MyStoreScreen {
  // get myStoreLog() { return $('~My store') }
  // get myStoreName() { return $('id:toolbar_subtitle') }

  get product() { return $('id:products') }




  // async getStoreName() {
  //   return await this.myStoreName.getText()

  // }

  // async myStoreLogoDisplayed() {
  //   await this.myStoreLog.waitForExist()
  //   return await this.myStoreLog.isDisplayed()
  // }

  async productButton() {
    await this.product.click()
  }

}
module.exports = new MyStoreScreen()