import React from "react";
import { Wrapper, WrapperImage, Image, About } from "./styles";
import Speaker3 from "../../public/images/speaker3.jpg";

export const Speaker = () => {
  return (
    <Wrapper>
      <WrapperImage>
        <Image src={Speaker3} />
        <Image src={Speaker3} />
        <Image src={Speaker3} />
      </WrapperImage>
      {/* <About>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </About> */}
    </Wrapper>
  );
};
