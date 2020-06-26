// fichier de test pour src/utils/index.js

// on importe la syntaxe de chai
import { should } from 'chai';

import { slugifyTitle, getRecipeBySlug } from '../../src/utils';

// spécificité de should : il faut l'exécuter une première fois pour pouvoir l'utiliser
should();

/*
describe décrit un bloc de tests (on peut imbriquer), 2 paramètres :
- un texte qui décrit le bloc
- la callback qui permet d'exécuter les tests pour ce bloc
*/

describe('utils', () => {
  describe('function slugifyTitle', () => {
    /*
    it décrit un cas de test (une ou plusieurs assertions), 2 paramètres :
    - un texte qui décrit le cas de test
    - la callback qui permet d'exécuter les tests pour ce cas
    */
    it('is a function', () => {
      slugifyTitle.should.be.a('function');
    });

    // objectif : écrire un cas de test qui vérifie que les espaces sont remplacés
    // par des tirets
    it('replaces spaces', () => {
      slugifyTitle('have space').should.equal('have-space');
    });
    it('replaces uppercases', () => {
      slugifyTitle('HaVe-UppErCaSe').should.equal('have-uppercase');
    });
  });

  describe('function getRecipeBySlug', () => {
    it('get a recipe from its slug', () => {
      // je crée des fausses données
      const recipes = [
        {
          id: 12345,
          title: 'Crêpes raffinées',
          thumbnail: 'https://images.pexels.com/photos/53483/strawberries-crepe-dessert-sweet-53483.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        },
        {
          id: 8965,
          title: 'Pizza Margherita',
          thumbnail: 'https://images.pexels.com/photos/263041/pexels-photo-263041.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        },
      ];
      // je calcule le slug de la première recette
      const slug = slugifyTitle(recipes[0].title);

      // je vérifie que je récupère bien la première recette
      it('get first recipe', () => {
        getRecipeBySlug(recipes, slug).should.equal(recipes[0]);
      });
    });
  });
});
