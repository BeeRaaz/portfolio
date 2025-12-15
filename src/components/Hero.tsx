"use client";

import { useState } from "react"
import Container from "./Container";
import Image from "next/image";
import { Skeleton } from "./ui/skeleton";

export default function Hero() {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <section className="pt-32 pb-4 md:pb-12">
      <Container classes="text-center">
        <div className="relative max-w-80 mx-auto py-56 rounded-3xl overflow-hidden mb-5 md:mb-10">
          {!isImageLoaded && (
            <Skeleton className="absolute inset-0" />
          )}

          <Image
            src="/Biraj-bitmoji.png"
            alt="BeeRaaz"
            fill
            onLoadingComplete={() => setIsImageLoaded(true)}
            className={`${isImageLoaded ? "opacity-100" : "opacity-0"} transition-opacity duration-300`}
          />
        </div>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-5 md:mb-10">
          BeeRaaz
        </h1>
        <p>
          Enthusiastic Junior Frontend Developer with a year of experience in
          building user-friendly and visually appealing web applications.
          Passionate about creating intuitive and engaging digital
          experiences. Eager to contribute to a dynamic team and continuously
          learn and grow in the field of frontend development.
        </p>
      </Container>
    </section>
  )
}