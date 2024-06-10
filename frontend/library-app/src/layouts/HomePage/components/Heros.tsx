import { DEFAULT_MAX_VERSION } from "tls";

export const Heros = () => {
  return (
    <div>
      <div className="d-none d-lg-block">
        <div className="row g-0 mt-5">
          <div className="col-sm-6 col-md-6">
            <div className="col-image-left"></div>
          </div>
          <div className="col-4 col-md-4 container d-flex justify-content-center align-item-center">
            <div className="ml-2">
              <h1>What have you been reading?</h1>
              <p className="lead">
                Libraries store the energy that fuels the imagination. They open
                up windows to the world and inspire us to explore and achieve,
                and contribute to improving our quality of life.
              </p>
              <a className="btn main-color btn-lg text-white" href="#">
                Sign up
              </a>
            </div>
          </div>
        </div>
        <div className="row g-0">
          <div className="col-4 col-md-4 container d-flex justify-content-center align-item-center">
            <div className="ml-2">
              <h1>Our collection is always changing!</h1>
              <p className="lead">
                The only thing that you absolutely have to know, is the location
                of the library.
              </p>
              <a className="btn main-color btn-lg text-white" href="#">
                Sign up
              </a>
            </div>
          </div>
          <div className="col-sm col-md-6">
            <div className="col-image-right"></div>
          </div>
        </div>
      </div>
      {/* mobile heros*/}
      <div className="d-lg-none">
        <div className="container">
          <div className="m-2">
            <div className="col-image-left"></div>
              <div className="m-2">
                <h1>What have you been reading?</h1>
                <p className="lead">
                  Libraries store the energy that fuels the imagination. They
                  open up windows to the world and inspire us to explore and
                  achieve, and contribute to improving our quality of life.
                </p>
                <a className="btn main-color btn-lg text-white" href="#">
                  Sign up
                </a>
              </div>
            </div>
            <div className="m-2">
              <div className="col-image-right"></div>
              <div className="mt-2">
                <h1>Our collection is always changing!</h1>
                <p className="lead">
                  The only thing that you absolutely have to know, is the
                  location of the library.
                </p>
                <a className="btn main-color btn-lg text-white" href="#">
                Sign up
              </a>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};
