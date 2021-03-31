describe('CropDetails', () => {
    const baseUrl = 'http://localhost:3000';

    beforeEach(() => {
        cy
        .visit(baseUrl)
        cy
        .get('.header-button').click()
    });

    it.only('should navigate to a grow info component when the top right button is clicked', () => {
      cy
      .get('.grow-info-heading').contains('Gardening on the Front Range')
    })

    it.only('should contain a paragraph section with general grow info', () => {
      cy
      .get('.colorado-grow-info').contains('Gardening in Colorado can be challenging')
    })

    it.only('should have a section with a link to additional grow info for front range', () => {
      cy
      .get('.link-container').contains('More Info Here')
      cy
      .get('.grow-info-link').should('have.attr', 'href', 'https://extension.colostate.edu/topic-areas/yard-garden/colorado-gardening-challenge-to-newcomers-7-220/')
    })

    it.only('should have a button that takes you back to home page', () => {
      cy
      .get('.back-button').click()
      cy
      .get('h1[class=app-name]').contains('Urban Native')
    })
});
