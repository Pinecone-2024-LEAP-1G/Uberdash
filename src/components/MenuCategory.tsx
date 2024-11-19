type menu = {
  title: string;
  url: 'url("./https://cn-geo1.uber.com/static/mobile-content/eats/cuisine-filters/v1/Pizza.png")';
};

const MenuCategory = (props: menu) => {
  const { title } = props;
  return (
    <div className="flex">
      <img src={props.url} />
      <p>Pizza</p>
    </div>
  );
};

export default MenuCategory;
