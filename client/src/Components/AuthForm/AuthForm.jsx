import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import xuewang from "../../assets/Images/xuewang.png";
const AuthFrom = ({
  title,
  linkTo,
  linktext,
  btnText,
  onSubmit,
  questions,
  children,
}) => {
  return (
    <div
      className={`h-[100vh] w-full bg-primaryColor flex justify-center items-center`}
    >
      <div className="shadow-3xl w-full md:w-max rounded-xl p-2 mx-4 bg-white">
        <div className="flex md:bg-primaryColor rounded-l-xl">
          <div className="w-full hidden md:block px-9">
            <p className="text-white font-medium text-[20px] text-center my-6">
              " Bạn nỗ lực kiếm tiền, <br />
              tôi tiếp tục phát tiền "
            </p>
            <figure className="w-full flex items-center justify-center">
              <img
                src={xuewang}
                className="w-full object-cover"
                alt="Xue Wang Imgae"
              />
            </figure>
          </div>
          <div className="rounded-l-[28px] bg-white w-full lg:min-w-[450px] py-6 px-5 md:px-10 md:py-0 lg:px-12 flex flex-col items-center justify-center">
            <h1 className="text-center text-headingColor font-bold text-[30px]">
              {title}
            </h1>
            <form className="mt-6 w-full" onSubmit={onSubmit}>
              {children}
              <button className="btn-primary w-full mt-2" type="submit">
                {btnText}
              </button>
            </form>
            <p className="mt-6 text-[1rem] font-medium text-center">
              Bạn {questions} có tài khoản?{" "}
              <Link
                to={linkTo}
                className="text-primaryColor font-semibold hover:underline"
              >
                {linktext}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

AuthFrom.propTypes = {
  onSubmit: PropTypes.func,
  questions: PropTypes.string,
  title: PropTypes.string,
  linktext: PropTypes.string,
  linkTo: PropTypes.string,
  btnText: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default AuthFrom;
