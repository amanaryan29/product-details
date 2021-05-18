export const length = (products) => {
  return products?.productVariants?.variants
    ?.map((data, index) => {
      return {
        key: index + data.attributes[0].value,
        value: data.attributes[0].value,
        text: data.attributes[0].value,
      };
    })
    .filter((data, index, prod) => {
      return prod.map((d) => d.value).indexOf(data.value) === index;
    });
};

export const width = (products) => {
  return products?.productVariants?.variants
    ?.map((data, index) => {
      return {
        key: index + data.attributes[1].value,
        value: data.attributes[1].value,
        text: data.attributes[1].value,
      };
    })
    .filter((data, index, prod) => {
      return prod.map((d) => d.value).indexOf(data.value) === index;
    });
};
