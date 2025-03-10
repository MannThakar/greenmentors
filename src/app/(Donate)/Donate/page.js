import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import React from "react";

const Donate = () => {
  return (
    <div className="container">
      <h3 className="text-4xl font-bold text-center">
        About &nbsp;
        <span className="RealisticMarkerHighlight">Green Mentors</span>
      </h3>
      <p className="mt-2 text-center w-2/3 mx-auto">
        Green Mentors is a non-government responsible education solution
        provider organization having special consultative status with the
        Economic and Social Council (ECOSOC) of the United Nations.
      </p>
      <Card className="mt-28 w-2/5 mx-auto border-none rounded-[2vw] mb-28 p-4">
        <CardContent className="p-4">
          <h2 className="text-3xl font-bold text-center ">Donate Today</h2>
          <p className="mt-1 text-center  mx-auto">
            Support the costs of the project to keep it alive
          </p>
          <div className="flex justify-center mt-8">
            <Button className=" bg-[#66C186] max-w-28 p-4 btn-grn">
              Donate Now
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Donate;
