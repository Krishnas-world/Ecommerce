export const registerFormControls = [
  {
    name: "Name",
    label: "Name",
    placeholder: "Enter your name",
    componentType: "Input",
    type: "text",
  },
  {
    name: "email",
    label: "Email ID",
    placeholder: "Enter your Email",
    componentType: "Input",
    type: "email",
  },
  {
    name: "pnho",
    label: "Phone Number",
    placeholder: "Enter your Phone Number",
    componentType: "Input",
    type: "text",
  },
];
export const loginFormControls = [
  {
    name: "pnho",
    label: "Phone Number",
    placeholder: "Enter your Phone Number",
    componentType: "Input",
    type: "text",
  },
];

export const addProductFormElements = [
  {
    label: "Title",
    name: "title",
    type: "text",
    placeholder: "Enter the product title",
    componentType: "input",
  },
  {
    label: "Description",
    name: "desc",
    type: "textarea",
    placeholder: "Enter the description",
    componentType: "input",
  },
  {
    label: "Category",
    name: "category",
    componentType: "select",
    options: [
      {
        id: "cake",
        label: "Cake",
      },
      {
        id: "pasteries",
        label: "Pasteries",
      },
      {
        id: "snacks",
        label: "Snacks",
      },
      {
        id: "bouquet",
        label: "Bouquet",
      },
    ],
  },
  {
    label: "Price",
    name: "price",
    componentType: "input",
    type: "number",
    placeholder: "Enter the price",
  },
  {
    label: "Sale Price",
    name: "salePrice",
    componentType: "input",
    type: "number",
    placeholder: "Enter the sale price (optional)",
  },
  {
    label: "Total Stock",
    name: "stock",
    componentType: "input",
    type: "number",
    placeholder: "Enter the total stock",
  },
];
