import Marker from "@/commoncomponents/Marker";
import { Card, CardContent } from "@/components/ui/card";
import { ASSOCIATE_IMAGES } from "@/utils/constants";
import Image from "next/image";
import React from "react";

const Association = () => {
  return (
    <div className="container ">
      <h3 className="text-4xl font-bold text-center">
        Our &nbsp;
        <span className="RealisticMarkerHighlight">Association</span>
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mt-8">
        {ASSOCIATE_IMAGES.map((image, index) => (
          <Card key={index}>
            <CardContent>
              <Image
                src={image}
                alt={`associate-${index}`}
                width={500}
                height={500}
              />
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Association;
