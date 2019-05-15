import PickStudyDateContainer from "../../components/PickStudyDate/PickStudyDateContainer";
import AdminContainer from "../../components/Admin/AdminContainer";
import SignUpContainer from "../../components/SignUp/SignUpContainer";
import SignInContainer from "../../components/SignIn/SignInContainer";

export const rootRoute = {
  Component: SignInContainer,
  pageClass: 'sign-in-page', 
  from : '/sign-in', 
  to:'/admin'
}

export const signUpRoute = {
  Component: SignUpContainer,
  pageClass: 'sign-up-page', 
  from : '/sign-up', 
  to:'/admin'
}

export const adminRoute = {
  Component: AdminContainer,
  pageClass: 'admin-page', 
  from : '/admin', 
  to:'/user'
}

export const userRoute = {
  Component: PickStudyDateContainer,
  pageClass: 'user-page', 
  from : '/user', 
  to:'/'
}