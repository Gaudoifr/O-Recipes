/*
permet d'obtenir un slug à partir d'une chaîne de caractères => chaîne de
caractères simplifiée, qui passera bien comme URL (notamment remplacement des
espaces par des tirets)
*/
import slugify from 'slugify';

export const slugifyTitle = (title) => (
  slugify(title, {
    lower: true,
  })
);

/**
 * Get the recipe for a given slug
 * @param {Array} recipes Recipes into which searching the recipe
 * @param {String} slug Slug to search for
 */
export const getRecipeBySlug = (recipes, slug) => (
  recipes.find((currentRecipe) => slugifyTitle(currentRecipe.title) === slug)
);
