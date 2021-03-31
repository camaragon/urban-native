describe('CropDetails', () => {
    const baseUrl = 'http://localhost:3000';

    beforeEach(() => {
        cy
        .visit(baseUrl);
    });

    it('should be able to navigate to the crop details view by clicking on a crop', () => {
      cy
      .get('a[id=5]').click()
      cy
      .get('button[class=back-button]').click()
      cy
      .get('a[id=25]').click()
    })

    it('CropDetails should contain a heading with the crop name', () => {
      cy
      .get('a[id=5]').click()
      cy
      .get('h1[class=crop-details-name]').contains('Carrots')
    })

    it('CropDetails component should have a description', () => {
      cy
      .get('a[id=25]').click()
      cy
      .get('p[class=crop-details-description]').contains('Radishes are fast-growing')
      cy
      .get('button[class=back-button]').click()
      cy
      .get('a[id=17]').click()
      cy
      .get('p[class=crop-details-description]').contains('Strawberries are a hybrid species')
    })

    it('CropDetails component should have a sun requirement', () => {
      cy
      .get('a[id=15]').click()
      cy
      .get('p[class=crop-sun-requirements]').contains('Full Sun')
      cy
      .get('button[class=back-button]').click()
      cy
      .get('a[id=19]').click()
      cy
      .get('p[class=crop-sun-requirements]').contains('Full Sun')
    })

    it('CropDetails component should have a sowing method', () => {
      cy
      .get('a[id=19]').click()
      cy
      .get('p[class=sowing-method]').contains('Transplant bare-root plant')
      cy
      .get('button[class=back-button]').click()
      cy
      .get('a[id=22]').click()
      cy
      .get('p[class=sowing-method]').contains(`Lay the pit on its side and use a nutcracker`)
    })

    it('CropDetails component should have a spread property measured in centimeters', () => {
      cy
      .get('a[id=22]').click()
      cy
      .get('p[class=crop-spread]').contains(`450cm`)
      cy
      .get('button[class=back-button]').click()
      cy
      .get('a[id=21]').click()
      cy
      .get('p[class=crop-spread]').contains(`365cm`)
    })

    it('CropDetails component should have a row spacing property measured in centimeters', () => {
      cy
      .get('a[id=21]').click()
      cy
      .get('p[class=row-spacing]').contains(`300cm`)
      cy
      .get('button[class=back-button]').click()
      cy
      .get('a[id=30]').click()
      cy
      .get('p[class=row-spacing]').contains(`30cm`)
    })

    it('CropDetails component should have a height property measured in centimeters', () => {
      cy
      .get('a[id=29]').click()
      cy
      .get('p[class=crop-height]').contains(`120cm`)
      cy
      .get('button[class=back-button]').click()
      cy
      .get('a[id=13]').click()
      cy
      .get('p[class=crop-height]').contains(`15cm`)
    })

    it('CropDetails component should have a days to maturity property measured in centimeters', () => {
      cy
      .get('a[id=18]').click()
      cy
      .get('p[class=maturity]').contains(`Raspberry bush growth depends on cultivar and environment`)
      cy
      .get('button[class=back-button]').click()
      cy
      .get('a[id=16]').click()
      cy
      .get('p[class=maturity]').contains(`200`)
    })

    it('CropDetails component should have an image of the crop', () => {
      cy
      .get('a[id=16]').click()
      cy
      .get('img').should('have.attr', 'src', 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHw%3D&w=1000&q=80')
      cy
      .get('button[class=back-button]').click()
      cy
      .get('a[id=7]').click()
      cy
      .get('img').should('have.attr', 'src', 'https://s3.amazonaws.com/openfarm-project/production/media/pictures/attachments/551e27c53732390003830100.jpg?1428039620')
    })
});
