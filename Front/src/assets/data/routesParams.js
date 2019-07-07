import PickStudyDateContainer from '../../components/PickStudyDate/PickStudyDateContainer';
import AdministratorContainer from '../../components/Administrator/AdministratorContainer';
import SignUpContainer from '../../components/_Forms/SignUpContainer';
import SignInContainer from '../../components/_Forms/SignInContainer';

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