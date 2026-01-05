import Multi_Title from "./Multi_Title";

const titleString = {
  subText: "Follow Us Now",
  titleText: "Follow on Instagram",
};

const Follow_Instagram = () => {
  return (
    <div className="flex flex-col justify-center text-center  max-w-[1320px] mx-auto">
      <header>
        <Multi_Title titleString={titleString}></Multi_Title>
      </header>
      <main className="grid grid-cols-4 gap-5 my-16">
        <figure>
          <img src="/src/assets/images/cups/Rectangle 9.png" alt="image" />
        </figure>
        <figure>
          <img src="/src/assets/images/cups/Rectangle 10.png" alt="image" />
        </figure>
        <figure>
          <img src="/src/assets/images/cups/Rectangle 11.png" alt="image" />
        </figure>
        <figure>
          <img src="/src/assets/images/cups/Rectangle 12.png" alt="image" />
        </figure>
        <figure>
          <img src="/src/assets/images/cups/Rectangle 13.png" alt="image" />
        </figure>
        <figure>
          <img src="/src/assets/images/cups/Rectangle 14.png" alt="image" />
        </figure>
        <figure>
          <img src="/src/assets/images/cups/Rectangle 15.png" alt="image" />
        </figure>
        <figure>
          <img src="/src/assets/images/cups/Rectangle 16.png" alt="image" />
        </figure>
      </main>
    </div>
  );
};

export default Follow_Instagram;
