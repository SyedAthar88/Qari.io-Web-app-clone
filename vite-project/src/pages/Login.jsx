import { Link } from "react-router-dom";
import Swal from 'sweetalert2';
export default function Login() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform login logic here...
    // For demonstration purposes, let's simulate a successful login
    Swal.fire({
      icon: 'success',
      title: 'Login successful!',
      showConfirmButton: false,
      timer: 1500 // Close the alert after 1.5 seconds
    });
  }
  return (
    <>
      <div className="container">
        <div className="row mt-5  d-flex justify-content-center">
          <div className="col-lg-8   ">
            <form>
              {/* <!-- Email input --> */}
              <div className="mx-auto mt-4">
                <label className="form-label" >Email address</label>
                <input type="email" id="form2Example1" className="form-control" style={{ width: '90%' }} />
              </div>
              {/* <!-- Password input --> */}
              <div className="mx-auto">
                <label className="form-label" >Password</label>
                <input type="password" id="form2Example2" className="form-control" style={{ width: '90%' }} />
              </div>
              {/* <!-- Submit button --> */}

              <div className="text-center">
                <button type="submit" className="btn btn-primary  mb-4 mt-4 " onClick={handleSubmit}>Sign in</button>
                <p>Not a member? <Link to="/signup">Register</Link></p>
                <p>or sign up with:</p>
                <button data-mdb-ripple-init type="button" className="btn btn-secondary btn-floating mx-1">
                  <i className="fab fa-facebook-f"></i>
                </button>
                <button data-mdb-ripple-init type="button" className="btn btn-secondary btn-floating mx-1">
                  <i className="fab fa-google"></i>
                </button>

                <button data-mdb-ripple-init type="button" className="btn btn-secondary btn-floating mx-1">
                  <i className="fab fa-twitter"></i>
                </button>
              </div>

            </form>
          </div>

        </div>
      </div>

    </>
  )
}
