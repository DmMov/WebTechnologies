import { loadmang } from "../utils/loadmang";

const PickStudyDateContainer = loadmang(() => import('../../components/PickStudyDate/PickStudyDateContainer'));
const AdministratorContainer = loadmang(() => import('../../components/Administrator/AdministratorContainer'));
const SignUpContainer = loadmang(() => import('../../components/_Forms/SignUpContainer'));
const SignInContainer = loadmang(() => import('../../components/_Forms/SignInContainer'));

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
  Component: AdministratorContainer,
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