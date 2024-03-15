function FilterByType(products, type) {
    return products.filter(product => product.types.includes(type));
  }

  export default FilterByType;