import productCategoriesDataJson from '../mocks/en-us/product-categories.json'

export const productCategoriesData = productCategoriesDataJson.results.map(result => (
  {
    text: 'Product Categories Carousel Slider',
    image: result.data.main_image.url,
    width: result.data.main_image.dimensions.width,
    height: result.data.main_image.dimensions.height,
    alt: result.data.main_image.alt,
    name: result.data.name,
  }
));