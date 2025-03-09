"use client";
import React from "react";
import Association from "./(Association)/Association/page";
import Founder from "./(Founder)/Founder/page";
import { Footer } from "@/commoncomponents/Footer";
import Donate from "./(Donate)/Donate/page";
import Hero from "./(Hero)/Hero/page";
import Navbar from "@/commoncomponents/Navbar";

const page = () => {
  return (
    <div className=" mx-auto ">
      <section>
        <Navbar />
      </section>
      <section className="mb-32">
        <Hero />
      </section>
      <section className="h-screen">
        <Founder />
      </section>
      <section className="mb-36">
        <Association />
      </section>
      <section>
        <Donate />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
};

export default page;
