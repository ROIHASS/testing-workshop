test("When premium user, Then price should be 90%", async () => {
    //Arrange
    const priceRequest = {
        catalogPrice: 100,
        isOnSale: false,
        isPremiumUser: true
    };

    //Act
    const receivedPriceResponse = await request('localhost:3000')
        .post("/price")
        .send(priceRequest);

    //Assert
    expect(receivedPriceResponse).toMatchObject({
        status: 200,
        body: {
            price: 90
        }
    });
});