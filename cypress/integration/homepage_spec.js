describe('Homepage', () => {
    const baseUrl = 'http://localhost:3000';

    it('should be able to visit the base url and see the homepage', () => {
        cy
        .visit(baseUrl)
        .location().should((loc) => {
            expect(loc.host).to.eq('localhost:3000')
            expect(loc.origin).to.eq(baseUrl)
        })
    });

    beforeEach(() => {
        cy
        .visit(baseUrl);
    });

    it('should display a heading with the name of the app', () => {
        cy
        .get('h1[class=app-name]').contains('Urban Native')
    })

    it('should display a heading that welcomes the user', () => {
        cy
        .get('p[class=welcome]').contains('Welcome')
    })

    it('should display a button for Colorado gardening information', () => {
        cy
        .get('button[class=header-button]').contains('REGIONAL GROWING INFO')
    })

    it('should display a section heading for My Garden', () => {
        cy
        .get('h2[class=my-garden-header]').contains('My Garden')
    })

    it(`should display a section heading for Farmer's Market`, () => {
        cy
        .get('h2[class=all-crops-heading]').contains(`Farmer's Market`)
    })

    it(`should display a 30 seed packets within Farmer's Market`, () => {
        cy
        .get('main').within(() => {
            cy
            .get('div')
            .should(($div) => {
                expect($div).to.have.length(30)
            })
        })
    })

    it('should be able to fetch user data from our API', () => {
      cy
      .intercept('GET','/api/v1/users/1').as('getUser')
      cy
      .wait('@getUser')
      .then(({request, response}) => {

        expect(response.statusCode).to.eq(200)
        expect(response.body.first_name).to.eq('Merlin')
        expect(response.body.last_name).to.eq('Crumpacker')
      })
    })

    it('should be able to fetch crops data from our API', () => {
      cy
      .intercept('GET','/api/v1/crops').as('getCrops')
      cy
      .wait('@getCrops')
      .then(({request, response}) => {

        expect(response.statusCode).to.eq(200)
        expect(response.body[0].id).to.eq(1)
        expect(response.body[0].name).to.eq('Blackberries')
        expect(response.body[0].sun_reqs).to.eq('Full Sun.')
        expect(response.body[0].spread).to.eq(75)
        expect(response.body[0].row_spacing).to.eq(100)
        expect(response.body[0].height).to.eq(175)

      })
    })
  });
