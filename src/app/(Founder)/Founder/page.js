import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { FOUNDER_IMAGES } from "@/utils/constants";
import React from "react";
import Marker from "@/commoncomponents/Marker";

const Founder = () => {
  return (
    <div className="container">
      <header>
        <h2 className="text-4xl font-bold text-center">
          Our &nbsp;<span className="RealisticMarkerHighlight">Leadership</span>
          <Marker />
        </h2>
        <p className="mt-2">
          Virendra Rawat is a responsible education crusader who received many
          Awards and recognition for originating Green Schooling and Responsible
          Education for the Sustainable Future Worldwide, including UNGA Award
          2019 in the United States.
        </p>
      </header>
      <section className="flex md:flex-row gap-6 mt-8 justify-center flex-col w-11/12 mx-auto md:w-full">
        {FOUNDER_IMAGES.map((individualRow, index) => (
          <Card className="" key={index}>
            <CardContent className="">
              <Image
                src={individualRow.img}
                alt={`associate-${index}`}
                width={300}
                height={250}
                className="rounded-xl mx-auto"
              />
              <h3 className="text-2xl font-semibold text-center mt-4">
                {individualRow.name}
              </h3>
              <p className="text-sm text-center">{individualRow.description}</p>
            </CardContent>
          </Card>
        ))}
      </section>
    </div>
  );
};

export default Founder;
