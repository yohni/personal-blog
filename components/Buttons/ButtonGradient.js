import { Button } from "@chakra-ui/react";
import React from "react";

function ButtonGradient({ children, noLoading = false, ...rest }) {
  const [isLoading, setIsLoading] = React.useState(false);
  const settings = !noLoading && {
    isLoading,
    onClick: () => setIsLoading(true),
  };
  React.useEffect(() => {
    const timeout = setTimeout(() => setIsLoading(false), 3000);
    return () => {
      clearTimeout(timeout);
    };
  }, [isLoading]);
  return (
    <Button
      {...settings}
      bgGradient="linear(to-r, brand.main, brand.dark)"
      color="white"
      _hover={{ transform: "translateY(-1px)" }}
      _active={{ transform: "translateY(0px)" }}
      boxShadow="0px 2px 30px rgba(186, 19, 88, 0.4)"
      type="button"
      {...rest}
    >
      {children}
    </Button>
  );
}

export default ButtonGradient;
