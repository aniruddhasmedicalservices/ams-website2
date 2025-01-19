"use client";
    import { useState } from "react";
    import { carouselphotos } from "../data/data";
    import { Carousel } from "react-bootstrap";
    // import "./servicesCarousel.css";

    export default function ServiceCarousel() {
      const [index, setIndex] = useState(0);
      const handleSelect = (selectedIndex: number, e: any) => {
        setIndex(selectedIndex);
      };
      return (
        <div className="">
            <Carousel id="service-carousel" activeIndex={index} onSelect={handleSelect}>
                {carouselphotos.map((item) => (
                    <Carousel.Item key={item.id} interval={4000}>
                        <img src={item.imageUrl} alt="slides" height={100} />
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
      );
    }
    