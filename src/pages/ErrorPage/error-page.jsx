import { useRouteError } from "react-router-dom";
import Footer from "../../components/Footer";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <>

      <div id="error-page" className="text-center text-white flex justify-center items-center w-full h-[85vh]">
        <h1 className="mb-3 text-white text-[50px] leading-[53px] font-medium capitalize">Oops!</h1>
        <p className=" mb-3 text-dimWhite text-[15px] leading-[25px] font-extralight capitalize">Sorry, an unexpected error has occurred.</p>
        <p className=" mb-3 text-dimWhite text-[15px] leading-[25px] font-extralight capitalize">
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
      <Footer />
    </>
  );
}