import React from "react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

const ButtonGrop = ({
  index,
  handleYearChange,
}: {
  index: number;
  handleYearChange: (index: number, yearNo: number) => void;
}) => {
  return (
    <div className="flex gap-2">
      <Button
        className={cn("w-20 p-2 text-center bg-button-primary")}
        onClick={() => handleYearChange(index, 5)}
      >
        5
      </Button>
      <Button
        className={cn("w-20 p-2 text-center bg-button-primary")}
        onClick={() => handleYearChange(index, 10)}
      >
        10
      </Button>
      <Button
        className={cn("w-20 p-2 text-center bg-button-primary")}
        onClick={() => handleYearChange(index, 15)}
      >
        15
      </Button>
      <Button
        className={cn("w-20 p-2 text-center bg-button-primary")}
        onClick={() => handleYearChange(index, 20)}
      >
        20
      </Button>
      <Button
        className={cn("w-20 p-2 text-center bg-button-primary")}
        onClick={() => handleYearChange(index, 100)}
      >
        Max
      </Button>
    </div>
  );
};

export default ButtonGrop;
