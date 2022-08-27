import React, { useRef, useEffect } from 'react';
import {
  Route,
  Routes,
  useNavigate,
  useLocation,
} from 'react-router-dom';

import auth from '../utils/authApi';

import Signup from '../pages/Sign/Signup';
import Signin from '../pages/Sign/Signin';
import ProfileResetPass from '../pages/Profile/ProfileResetPass';
import Profile from '../pages/Profile/Profile';
import ProfileEdit from '../pages/Profile/ProfileEdit';
import ProfilePass from '../pages/Profile/ProfilePass';
import ProfileNewPass from '../pages/Profile/ProfileNewPass';
import Main from '../pages/Main/Main';
import PageNotFound from '../pages/PageNotFound/PageNotFound';
import SignConfirm from '../pages/Sign/SignConfirm';
import ProtectedRoute from './ProtectedRoute';
import Popup from './Popup/Popup';

import { CurrentUserContext } from '../context/CurrentUserContext';

import { Urls, STORE_TOKEN_NAME, ERROR_TITLE_DEFAULT } from '../utils/constants';

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [currentUser, setCurrentUser] = React.useState<any>({});
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);
  const [textMessage, setTextMessage] = React.useState({ title: '', description: '' });
  const mountedRef = useRef(false);

  const handleUpdateUser = async ({ email, name }: Record<string, string>) => {
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

  const handleUpdatePassword = async ({ password, newPassword, email }: Record<string, string>) => {
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

  const handleNewPassword = async ({ password, token }: Record<string, string>) => {
    try {
      await auth.newPassword({ password, token });
      setIsOpen(true);
      setTextMessage({
        title: 'ERROR_TITLE_DEFAULT',
        description: 'пароль был обновлен',
      });
      navigate(Urls.SIGNIN);
    } catch (error) {
      setIsOpen(true);
      setTextMessage({
        title: ERROR_TITLE_DEFAULT,
        description: 'error',
      });
      // eslint-disable-next-line no-console
      console.log(error);
    }
  };

  const handleResetPassword = async ({ email }: Record<string, string>) => {
    try {
      await auth.resetPassword({ email });
      setIsOpen(true);
      setTextMessage({
        title: 'письмо было отправлено',
        description: 'пожалуйста проверте ваш почтовый ящик',
      });
    } catch (error) {
      setIsOpen(true);
      setTextMessage({
        title: ERROR_TITLE_DEFAULT,
        description: 'error',
      });
      // eslint-disable-next-line no-console
      console.log(error);
    }
  };

  const closePopup = () => {
    setIsOpen(false);
    setTextMessage({ title: '', description: '' });
  };

  const handleLogOut = (e: any) => {
    e.preventDefault();
    localStorage.removeItem(STORE_TOKEN_NAME);
    setLoggedIn(false);
    setCurrentUser({});
    navigate(Urls.MAIN);
  };

  const checkToken = (jwt: string) => {
    if (jwt) {
      auth
        .checkToken(jwt)
        .then((res) => {
          if (res) {
            setCurrentUser(res);
            setLoggedIn(true);

            if (location.pathname === Urls.SIGNIN
              || location.pathname === Urls.SIGNUP) {
              navigate(Urls.PROFILE.INDEX);
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

  useEffect(() => {
    mountedRef.current = true;
    const jwt = localStorage.getItem(STORE_TOKEN_NAME);
    return () => {
      checkToken(jwt!);
      mountedRef.current = false;
    };
  }, []);

  const handleSignIn = async ({ email, password }: Record<string, string>) => {
    try {
      const result = await auth.signIn({ email, password });
      localStorage.setItem(STORE_TOKEN_NAME, result.token);
      checkToken(result.token);
      navigate(Urls.PROFILE.INDEX);
    } catch (error: any) {
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

  const handleSignUp = async ({ email, password, name }: Record<string, string>) => {
    try {
      const result = await auth.signUp({ email, password, name });
      setTextMessage({
        title: 'Пользователь зарегистрирован',
        description: `пожалуйста подтвердите ваш email, для ${result.name}`,
      });
      setIsOpen(true);
      navigate(Urls.SIGNIN);
    } catch (error: any) {
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
          path={Urls.PROFILE.INDEX}
          element={(
            <ProtectedRoute loggedIn={loggedIn}>
              <Profile
                handleLogOut={handleLogOut}
              />
            </ProtectedRoute>
          )}
        />
        <Route
          path={Urls.PROFILE.EDIT}
          element={(
            <ProtectedRoute loggedIn={loggedIn}>
              <ProfileEdit
                handleUpdateUser={handleUpdateUser}
              />
            </ProtectedRoute>
          )}
        />
        <Route
          path={Urls.PASSWORD.EDIT}
          element={(
            <ProtectedRoute loggedIn={loggedIn}>
              <ProfilePass
                handleUpdatePassword={handleUpdatePassword}
              />
            </ProtectedRoute>
          )}
        />
        <Route
          path={Urls.PASSWORD.NEW}
          element={(
            <ProfileNewPass
              handleNewPassword={handleNewPassword}
            />
          )}
        />
        <Route
          // exact
          path={Urls.MAIN}
          element={<Main />}
        />
        <Route
          path={Urls.SIGNUP}
          element={(
            <Signup
              handleSignUp={handleSignUp}
            />
          )}
        />
        <Route
          path={Urls.SIGNIN}
          element={(
            <Signin
              handleSignIn={handleSignIn}
            />
          )}
        />
        <Route
          path={Urls.PASSWORD.RESET}
          element={(
            <ProfileResetPass
              handleResetPassword={handleResetPassword}
            />
          )}
        />
        <Route
          path={Urls.CONFIRM.TOKEN}
          element={(
            <SignConfirm
              navigate={navigate}
            />
          )}
        />
        <Route
          path="*"
          element={<PageNotFound />}
        />
      </Routes>
      <Popup
        isOpen={isOpen}
        onClose={closePopup}
        text={textMessage}
      />
    </CurrentUserContext.Provider>
  );
}

export default App;
