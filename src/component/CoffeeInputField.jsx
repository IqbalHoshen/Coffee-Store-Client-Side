import { addCoffee } from "../services/crudApi";
import { Link } from "react-router";
import bgImage from "../assets/images/more/11.png";
import { FaArrowLeft } from "react-icons/fa";
import ScrollToTop from "../layout/ScrollToTop";
const labelStyle = "fieldset-legend text-xl text-accent/80 ralewayText600";
const inputFild =
  "input w-full text-lg text-accent/60 ralewayText border-0 input-primary";

const CoffeeInputField = () => {
  const handleAddCoffee = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    try {
      const result = await addCoffee(data);
      console.log(result);
      form.reset();
    } catch (error) {
      console.error(error.message);
    }
  };
  return (
    <>
      <ScrollToTop />
      <div
        className="pt-8 pb-20"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className=" max-w-[1320px] mx-auto ">
          <Link
            to="/"
            className="btn btn-xl rounded-3xl btn-primary btn-ghost text-3xl "
          >
            <FaArrowLeft size={24} color="primary" />
            <span>Back to home</span>
          </Link>
          <div className=" bg-[#F4F3F0]  py-12 px-20">
            <div className="flex flex-col justify-center items-center gap-8">
              <h1 className="text-5xl text-[#374151] text-center">
                Add New Coffee
              </h1>
              <p className="text-lg text-accent/70 ralewayText text-center max-w-4xl ">
                It is a long established fact that a reader will be distraceted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using Content
                here.
              </p>
            </div>

            <form onSubmit={handleAddCoffee}>
              <fieldset className="fieldset flex gap-5 ">
                <div className="w-1/2">
                  <legend className={labelStyle}>Name</legend>
                  <input
                    type="text"
                    name="name"
                    className={inputFild}
                    placeholder="Enter Coffee Name"
                  />
                </div>
                <div className="w-1/2">
                  <legend className={labelStyle}>Chef</legend>
                  <input
                    type="text"
                    name="chef"
                    className={inputFild}
                    placeholder="Enter Coffee Chef"
                  />
                </div>
              </fieldset>
              <fieldset className="fieldset flex gap-5 ">
                <div className="w-1/2">
                  <legend className={labelStyle}>Supplier</legend>
                  <input
                    type="text"
                    name="supplier"
                    className={inputFild}
                    placeholder="Enter coffee supplier"
                  />
                </div>
                <div className="w-1/2">
                  <legend className={labelStyle}>Taste</legend>
                  <input
                    type="text"
                    name="tasts"
                    className={inputFild}
                    placeholder="Enter coffee taste"
                  />
                </div>
              </fieldset>
              <fieldset className="fieldset flex gap-5 ">
                <div className="w-1/2">
                  <legend className={labelStyle}>Category</legend>
                  <input
                    type="text"
                    name="category"
                    className={inputFild}
                    placeholder="Enter coffee category"
                  />
                </div>
                <div className="w-1/2">
                  <legend className={labelStyle}>Details</legend>
                  <input
                    type="text"
                    name="details"
                    className={inputFild}
                    placeholder="Enter coffee details"
                  />
                </div>
              </fieldset>
              <fieldset className="fieldset flex gap-5 w-full">
                <legend className={labelStyle}>Photo</legend>
                <input
                  type="url"
                  name="url"
                  className={inputFild}
                  placeholder="Enter photo URL"
                />
              </fieldset>
              <button className="btn btn-block mt-5 bg-secondary text-2xl text-[#242222]">
                Add Coffee
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CoffeeInputField;
