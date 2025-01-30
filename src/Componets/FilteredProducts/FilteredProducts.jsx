import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ProductCard from "./ProductCard";
import Error from "../Error/Error";
import {
  filterProducts,
  filterGender,
  sortByPrice,
  filterByColor,
  filterBySize,
} from "../../Features/Slices/productsSlice";
import {
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";

const FilteredProducts = () => {
  const products = useSelector((state) => state.products.filteredProducts);
  const error = useSelector((state) => state.products.error);
  const { type } = useParams();
  const genderButtons = ["male", "female"];
  const colorButtons = [
    "red",
    "green",
    "purple",
    "yellow",
    "orange",
    "blue",
    "black",
    "brown",
  ];
  const sizeButtons = ["S", "M", "L", "XL"];
  const dispatch = useDispatch();
  return (
    <div>
      <div className="pt-16">
        <div className="pl-14">
          <h1 className="text-4xl font-inter text-gray-600 font-bold tracking-normal leading-none">
            {type}
          </h1>
          <div className="flex flex-col sm:flex-row items-center justify-between py-8 sm:py-4 gap-4 sm:gap-0">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              {genderButtons.map((item, index) => {
                return (
                  <div key={index}>
                    <Button
                      color="gray"
                      size="lg"
                      variant="outlined"
                      ripple={true}
                      className="w-50 h-12 whitespace-nowrap text-black hover:bg-gray-300 duration-300 ease-in-out mr-4"
                      onClick={() => dispatch(filterGender(item))}
                    >
                      {item}
                    </Button>
                  </div>
                );
              })}
              <Button
                color="gray"
                size="lg"
                variant="outlined"
                ripple={true}
                className="w-50 h-12 whitespace-nowrap  text-black hover:bg-gray-300 duration-300 ease-in-out mr-4"
                onClick={() => dispatch(sortByPrice())}
              >
                High Price
              </Button>
              <Menu>
                <MenuHandler>
                  <Button
                    color="gray"
                    size="lg"
                    variant="outlined"
                    ripple={true}
                    className="w-50 h-12 whitespace-nowrap  text-black hover:bg-gray-300 duration-300 ease-in-out mr-4"
                  >
                    Select a color
                  </Button>
                </MenuHandler>
                <MenuList>
                  {colorButtons.map((item, index) => {
                    return (
                      <MenuItem
                        style={{ color: item }}
                        key={index}
                        onClick={() => dispatch(filterByColor(item))}
                      >
                        {item}
                      </MenuItem>
                    );
                  })}
                </MenuList>
              </Menu>
              <Menu>
                <MenuHandler>
                  <Button
                    disabled={type === "Bags" || type === "Shoes"}
                    color="gray"
                    size="lg"
                    variant="outlined"
                    ripple={true}
                    className="w-50 h-12 whitespace-nowrap  text-black hover:bg-gray-300 duration-300 ease-in-out mr-4"
                  >
                    Select a size
                  </Button>
                </MenuHandler>
                <MenuList>
                  {sizeButtons.map((item, index) => {
                    return (
                      <MenuItem
                        key={index}
                        onClick={() => dispatch(filterBySize(item))}
                      >
                        {item}
                      </MenuItem>
                    );
                  })}
                </MenuList>
              </Menu>
            </div>
            <div className="flex   ">
              <Button
                color="gray"
                size="lg"
                variant="outlined"
                ripple={true}
                className="w-50 h-12 whitespace-nowrap text-black hover:bg-gray-300 duration-300 ease-in-out mr-4 "
                onClick={() => dispatch(filterProducts(type))}
              >
                Clear Filter
              </Button>
            </div>
          </div>
        </div>
        {error ? (
          <Error />
        ) : (
          <div className="flex flex-wrap justify-center gap-12 py-8">
            {products
              .filter((product) => product.type === type)
              .map((product, index) => {
                return (
                  <div key={index}>
                    <ProductCard
                      id={product.id}
                      name={product.name}
                      text={product.text}
                      img={product.img}
                      price={product.price}
                      colors={product.color}
                    />
                  </div>
                );
              })}
          </div>
        )}
      </div>
    </div>
  );
};

export default FilteredProducts;
