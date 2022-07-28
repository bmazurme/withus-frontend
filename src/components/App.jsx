import React from 'react';
import {
  Route,
  Routes,
  useNavigate,
  useLocation,
} from 'react-router-dom';

import auth from '../utils/authApi';

import Signup from '../pages/Sign/Signup';
import Signin from '../pages/Sign/Signin';
import Profile from '../pages/Profile/Profile';
import ProfileEdit from '../pages/Profile/ProfileEdit';
import ProfilePass from '../pages/Profile/ProfilePass';
import Main from '../pages/Main/Main';
import PageNotFound from '../pages/PageNotFound/PageNotFound';
import SignConfirm from '../pages/Sign/SignConfirm';
import ProtectedRoute from './ProtectedRoute';

import { CurrentUserContext } from '../context/CurrentUserContext';

import {
  SIGNIN_URL,
  SIGNUP_URL,
  PROFILE_URL,
  PROFILE_EDIT_URL,
  MAIN_URL,
  STORE_TOKEN_NAME,
  ERROR_TITLE_DEFAULT,
  PROFILE_EDIT_PASS_URL,
} from '../utils/constants';

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [currentUser, setCurrentUser] = React.useState({});
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);
  const [textMessage, setTextMessage] = React.useState({ title: '', description: '' });

  const handleUpdateUser = async ({ email, name }) => {
    try {
      const result = await auth.patchUser({ email, name });
      setTextMessage({
        title: '!',
        description: 'данные успешно обновлены',
      });
      setCurrentUser(result);
      setIsOpen(true);
      setTimeout(() => {
        setIsOpen(false);
      }, 2000);
    } catch (error) {
      setIsOpen(true);
      setTextMessage({
        title: ERROR_TITLE_DEFAULT,
        description: 'некорректные данные',
      });
      // eslint-disable-next-line no-console
      console.log(error);
    }
  };

  const handleUpdatePassword = async ({ password, newPassword, email }) => {
    // eslint-disable-next-line no-console
    console.log(password, newPassword);
    try {
      const result = await auth.patchPassword({ password, newPassword, email });
      setTextMessage({
        title: '!',
        description: 'данные успешно обновлены',
      });
      setCurrentUser(result);
      setIsOpen(true);
      setTimeout(() => {
        setIsOpen(false);
      }, 2000);
    } catch (error) {
      setIsOpen(true);
      setTextMessage({
        title: ERROR_TITLE_DEFAULT,
        description: 'некорректные данные',
      });
      // eslint-disable-next-line no-console
      console.log(error);
    }
  };

  const closePopup = () => {
    setIsOpen(false);
    setTextMessage({ title: '', description: '' });
  };

  const handleLogOut = (e) => {
    e.preventDefault();
    localStorage.removeItem(STORE_TOKEN_NAME);
    setLoggedIn(false);
    setCurrentUser({});
    navigate(MAIN_URL);
  };

  const checkToken = (jwt) => {
    if (jwt) {
      auth
        .checkToken(jwt)
        .then((res) => {
          if (res) {
            setCurrentUser(res);
            setLoggedIn(true);

            if (location.pathname === SIGNIN_URL
              || location.pathname === SIGNUP_URL) {
              navigate(PROFILE_URL);
            }
          }
        })
        .catch((err) => {
          setLoggedIn(false);
          // eslint-disable-next-line no-console
          console.log(`Переданный токен некорректен. ${err}`);
        });
    }
  };

  React.useEffect(() => {
    const jwt = localStorage.getItem(STORE_TOKEN_NAME);
    checkToken(jwt);
  }, []);

  const handleSignIn = async ({ email, password }) => {
    try {
      const result = await auth.signIn({ email, password });
      setLoggedIn(true);
      localStorage.setItem(STORE_TOKEN_NAME, result.token);
      checkToken(result.token);
      navigate(PROFILE_URL);
    } catch (error) {
      if (error.message === 'Ошибка 401') {
        setIsOpen(true);
        setTextMessage({
          title: ERROR_TITLE_DEFAULT,
          description: 'неправильный логин или пароль',
        });
      }
      // eslint-disable-next-line no-console
      console.log(error.message);
    }
  };

  const handleSignUp = async ({ email, password, name }) => {
    try {
      const result = await auth.signUp({ email, password, name });
      setTextMessage({
        title: 'Пользователь зарегистрирован',
        description: `пожалуйста подтвердите ваш email, для ${result.name}`,
      });
      setIsOpen(true);
      navigate(SIGNIN_URL);
    } catch (error) {
      if (error.message === 'Ошибка 409') {
        setIsOpen(true);
        setTextMessage({
          title: ERROR_TITLE_DEFAULT,
          description: 'пользователь с такими данными существует',
        });
      }
      // eslint-disable-next-line no-console
      console.log(error.message);
    }
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Routes>
        <Route
          path={PROFILE_URL}
          element={(
            <ProtectedRoute loggedIn={loggedIn}>
              <Profile
                handleLogOut={handleLogOut}
              />
            </ProtectedRoute>
          )}
        />
        <Route
          path={PROFILE_EDIT_URL}
          element={(
            <ProtectedRoute loggedIn={loggedIn}>
              <ProfileEdit
                handleUpdateUser={handleUpdateUser}
                isOpen={isOpen}
                onClose={closePopup}
                text={textMessage}
              />
            </ProtectedRoute>
          )}
        />
        <Route
          path={PROFILE_EDIT_PASS_URL}
          element={(
            <ProtectedRoute loggedIn={loggedIn}>
              <ProfilePass
                handleUpdatePassword={handleUpdatePassword}
                isOpen={isOpen}
                onClose={closePopup}
                text={textMessage}
              />
            </ProtectedRoute>
          )}
        />
        <Route
          exact
          path={MAIN_URL}
          element={<Main />}
        />
        <Route
          exact
          path={SIGNUP_URL}
          element={(
            <Signup
              isOpen={isOpen}
              onClose={closePopup}
              text={textMessage}
              handleSignUp={handleSignUp}
            />
          )}
        />
        <Route
          exact
          path={SIGNIN_URL}
          element={(
            <Signin
              isOpen={isOpen}
              onClose={closePopup}
              text={textMessage}
              handleSignIn={handleSignIn}
            />
          )}
        />
        <Route
          path="/confirm/:token"
          element={(
            <SignConfirm
              navigate={navigate}
            />
          )}
        />
        <Route
          exact
          path="*"
          element={<PageNotFound />}
        />
      </Routes>
    </CurrentUserContext.Provider>
  );
}

export default App;
