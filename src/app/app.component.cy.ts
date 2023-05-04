import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

describe('Test input1 & input2', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [AppComponent],
    });
  });

  it('should correctly calculate the sum of two input fields', () => {
    cy.mount(AppComponent);

    //input value to tag
    cy.get('[data-cy=input1]').type('6');
    cy.get('[data-cy=input2]').type('6');

    //click button
    cy.get('#button').click();

    //check execute sumLabel = 12
    cy.get('[data-cy=sumLabel]').should('have.text', '12');
  });
});
