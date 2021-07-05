import React, {useState} from "react";
import {useParams, Link, withRouter} from "react-router-dom";
import firebase from "../../firebase";
import {toast} from "react-toastify";
const UpdatePassword = (props) => {
  let {id} = useParams();
  let [state, setState] = useState({
    password: "",
    confirmPassword: "",
    loading: false,
  });
  let {password, confirmPassword, loading} = state;

  let handleChange = (e) => {
    let {name, value} = e.target;
    setState({...state, [name]: value});
  };

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setState({loading: true});
      if (password === confirmPassword) {
        let user = firebase.auth().currentUser;
        await user.updatePassword(password);
        toast.success("Successfully Password updated");
        props.history.push("/account");
      } else {
        toast.error("Password is not Match");
      }
    } catch (err) {
      toast.error(err.message);
    }
    setState({loading: false});
  };
  return (
    <section id="authBlock" className="profile_block">
      <article>
        <div>
          <h1>Welcome to Voot!</h1>
          <p>Update password</p>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="password"
                name="password"
                id="password"
                onChange={handleChange}
                placeholder="password"
                value={password}
                required
              />
            </div>
            <div>
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                onChange={handleChange}
                placeholder="confirm password"
                required
                value={confirmPassword}
              />
            </div>

            <div className="form-group register_Block">
              <Link to="/account">go back to account</Link>
            </div>
            <div className="form-group">
              <button>
                {loading === true ? "loading..." : "Update Password"}
              </button>
            </div>
          </form>
        </div>
      </article>
    </section>
  );
};

export default withRouter(UpdatePassword);
