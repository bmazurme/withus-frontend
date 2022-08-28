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
import PasswordReset from '../pages/password/PasswordReset';
import Profile from '../pages/Profile/Profile';
import ProfileEdit from '../pages/Profile/ProfileEdit';
import PasswordUpdate from '../pages/password/PasswordUpdate';
import PasswordNew from '../pages/password/PasswordNew';
import Main from '../pages/Main/Main';
import PageNotFound from '../pages/PageNotFound/PageNotFound';
import SignConfirm from '../pages/Sign/SignConfirm';
import ProtectedRoute from './ProtectedRoute';
import Popup from './Popup/Popup';
import Preloader from './Preloader/Preloader';

import { CurrentUserContext } from '../context/CurrentUserContext';

import { Urls, STORE_TOKEN_NAME, ERROR_TITLE_DEFAULT } from '../utils/constants';

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [currentUser, setCurrentUser] = React.useState({ name: '', email: '' });
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
      console.log(error);
    }
  };

  const handleUpdatePassword = async ({ password, newPassword, email }: Record<string, string>) => {
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
      navigate(Urls.SIGN.IN);
    } catch (error) {
      setIsOpen(true);
      setTextMessage({
        title: ERROR_TITLE_DEFAULT,
        description: 'error',
      });
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
      console.log(error);
    }
  };

  const closePopup = () => {
    setIsOpen(false);
    setTextMessage({ title: '', description: '' });
  };

  const handleLogOut = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.removeItem(STORE_TOKEN_NAME);
    setLoggedIn(false);
    setCurrentUser({ name: '', email: '' });
    navigate(Urls.MAIN.INDEX);
  };

  const checkToken = (jwt: string) => {
    if (jwt) {
      auth
        .checkToken(jwt)
        .then((res) => {
          if (res) {
            setCurrentUser(res);
            setLoggedIn(true);

            if (location.pathname === Urls.SIGN.IN
              || location.pathname === Urls.SIGN.UP) {
              navigate(Urls.PROFILE.INDEX);
            } else {
              navigate(location.pathname);
            }
          }
        })
        .catch((err) => {
          setLoggedIn(false);
          console.log(`Переданный токен некорректен. ${err}`);
        });
    }
  };

  useEffect(() => {
    mountedRef.current = true;
    // console.log(location.pathname);
    // console.log(location.pathname);
    // navigate(location.pathname);
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
    } catch (error) {
      const { message } = error as Error;
      if (message === 'Ошибка 401') {
        setIsOpen(true);
        setTextMessage({
          title: ERROR_TITLE_DEFAULT,
          description: 'неправильный логин или пароль',
        });
      }
      console.log(message);
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
      navigate(Urls.SIGN.IN);
    } catch (error) {
      const { message } = error as Error;
      if (message === 'Ошибка 409') {
        setIsOpen(true);
        setTextMessage({
          title: ERROR_TITLE_DEFAULT,
          description: 'пользователь с такими данными существует',
        });
      }
      console.log(message);
    }
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Preloader />
      <Routes>
        <Route
          index
          element={<Main />}
        />
        <Route
          path="/profile"
          element={(
            <ProtectedRoute loggedIn={loggedIn}>
              <Profile handleLogOut={handleLogOut} />
            </ProtectedRoute>
          )}
        />
        <Route
          path="/profile/:edit"
          element={(
            <ProtectedRoute loggedIn={loggedIn}>
              <ProfileEdit handleUpdateUser={handleUpdateUser} />
            </ProtectedRoute>
          )}
        />

        <Route
          path={Urls.PASSWORD.EDIT}
          element={(
            <ProtectedRoute loggedIn={loggedIn}>
              <PasswordUpdate handler={handleUpdatePassword} />
            </ProtectedRoute>
          )}
        />
        <Route
          path={Urls.PASSWORD.NEW}
          element={(
            <PasswordNew handler={handleNewPassword} />
          )}
        />

        <Route
          path={Urls.SIGN.UP}
          element={(
            <Signup handleSign={handleSignUp} />
          )}
        />
        <Route
          path={Urls.SIGN.IN}
          element={(
            <Signin handleSign={handleSignIn} />
          )}
        />
        <Route
          path={Urls.SIGN.CONFIRM}
          element={(
            <SignConfirm navigate={navigate} />
          )}
        />
        <Route
          path={Urls.PASSWORD.RESET}
          element={(
            <PasswordReset handler={handleResetPassword} />
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
