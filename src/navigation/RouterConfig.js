import Login from "./../components/Login/Login";
import ForgotPassword from "./../components/ForgotPassword/ForgotPassword";
import Home from "./../components/Home/Home";
import Profile from "./../components/Profile/Profile";
import ResetPassword from "./../components/ResetPassword/ResetPassword";

const routes = [
  {
    path: "/",
    component: Home,
    exact: true,
    auth: true,
    pageTitle: "Home - Contractor"
  },
  {
    path: "/profile/:id",
    component: Profile,
    exact: true,
    auth: true,
    pageTitle: "Profile - Contractor"
  },
  {
    path: "/authentication/resetpassword",
    component: ResetPassword,
    exact: true,
    auth: false,
    pageTitle: "Reset Password - Contractor"
  },
  {
    path: "/authentication/signin",
    component: Login,
    exact: true,
    auth: false,
    pageTitle: "Sign In - Contractor"
  },
  {
    path: "/authentication/forgotpassword",
    component: ForgotPassword,
    exact: true,
    auth: false,
    pageTitle: "Sign In - Contractor"
  },
  {
    path: "/authentication/resetpassword",
    component: ResetPassword,
    exact: true,
    auth: false,
    pageTitle: "Reset Password - Contractor"
  },

  
  // Authentication
  {
    path: "/authentication/signin",
    component: Login,
    exact: true,
    auth: false,
    pageTitle: "Sign In - Contractor"
  },
  {
    path: "/authentication/forgotpassword",
    component: ForgotPassword,
    exact: true,
    auth: false,
    pageTitle: "Sign In - Contractor"
  },
  {
    path: "/authentication/resetpassword",
    component: ResetPassword,
    exact: true,
    auth: false,
    pageTitle: "Reset Password - Contractor"
  },
];

export default routes;
