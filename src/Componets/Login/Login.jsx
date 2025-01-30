import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Button } from "@material-tailwind/react";
import { Input } from "@material-tailwind/react";
import { login } from "../../Features/Slices/authSilece";
const Login = () => {
  const initalState = {
    name: "",
    password: "",
    image: "",
  };
  const [values, setValues] = useState(initalState);
  const onChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  const dispatch = useDispatch();
  return (
    <div className="flex items-center justify-center h-screen flex-col sm:flex-row">
      <Card className="w-96">
        <CardHeader
          variant="gradient"
          color="blue"
          className="mb-4 grid h-28 place-items-center"
        >
          <Typography variant="h3" color="white">
            Sign In
          </Typography>
        </CardHeader>
        <CardBody className="flex flex-col gap-4">
          <Input
            label="Name"
            size="lg"
            type="text"
            name="name"
            value={values.name}
            onChange={onChange}
          />
          <Input
            label="Password"
            size="lg"
            type="password"
            name="password"
            value={values.password}
            onChange={onChange}
          />
          <Input
            label="Image URL address"
            size="lg"
            type="text"
            name="image"
            value={values.image}
            onChange={onChange}
          />
          <div className="-ml-2.5"></div>
        </CardBody>
        <CardFooter className="pt-0">
          <Button
            variant="gradient"
            fullWidth
            onClick={() => dispatch(login(values))}
          >
            Sign In
          </Button>
          <Typography variant="small" className="mt-6 flex justify-center">
            Image is Optional
          </Typography>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;
