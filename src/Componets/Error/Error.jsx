import { Alert } from "@material-tailwind/react";
const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen px-4">
      <div className="w-96 max-w-full">
        <Alert color="red" className="text-xl font-inter font-bold text-center">
          Sorry, no products match your filter search... Clear the filter and
          try again 😀.
        </Alert>
      </div>
    </div>
  );
};

export default Error;
