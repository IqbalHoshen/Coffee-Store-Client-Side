const Multi_Title = ({ titleString }) => {
  const { subText, titleText } = titleString;
  return (
    <div>
      <p className="ralewayText text-xl text-accent">{subText}</p>
      <h1 className="text-[55px] text-primary text-shadow-lg/30 ">
        {titleText}
      </h1>
    </div>
  );
};

export default Multi_Title;
