import React from 'react';
import Header from '../../components/Header/Header';
import HeaderMenu from '../../components/HeaderMenu/HeaderMenu';
import Footer from '../../components/Footer/Footer';

function Privacy() {
  return (
    <>
      <Header />
      <HeaderMenu />
      <div className="privacy__container">
        <h3>Privacy</h3>
        <h4 className="privacy__title">Права и обязанности сторон</h4>
        <p className="privacy__text">Пользователь имеет право:</p>
        <p className="privacy__text">- осуществлять поиск информации на сайте</p>
        <p className="privacy__text">- получать информацию на сайте</p>
        <p className="privacy__text">- использовать информацию сайта в личных некоммерческих целях</p>
        <p className="privacy__text">Администрация имеет право:</p>
        <p className="privacy__text">- по своему усмотрению и необходимости создавать, изменять, отменять правила</p>
        <p className="privacy__text">- ограничивать доступ к любой информации на сайте</p>
        <p className="privacy__text">Пользователь обязуется:</p>
        <p className="privacy__text">- не нарушать работоспособность сайта</p>
        <p className="privacy__text">
          - не использовать скрипты (программы) для автоматизированного сбора информации
          и/или взаимодействия с Сайтом и его Сервисами
        </p>
        <p className="privacy__text">Администрация обязуется:</p>
        <p className="privacy__text">
          - поддерживать работоспособность сайта за исключением случаев, когда это невозможно
          по независящим от Администрации причинам.
        </p>

        <h4 className="privacy__title">Ответственность сторон</h4>
        <p className="privacy__text">
          - администрация не несет никакой ответственности за
          услуги, предоставляемые третьими лицами
        </p>
        <p className="privacy__text">
          - в случае возникновения форс-мажорной ситуации (боевые действия, чрезвычайное положение,
          стихийное бедствие и т. д.) Администрация не гарантирует сохранность информации,
          размещённой Пользователем, а также бесперебойную работу информационного ресурса
        </p>

        <h4 className="privacy__title">Условия действия Соглашения</h4>
        <p className="privacy__text">Данное Соглашение вступает в силу при любом использовании данного сайта.</p>
        <p className="privacy__text">Соглашение перестает действовать при появлении его новой версии.</p>
        <p className="privacy__text">
          Администрация оставляет за собой право в одностороннем порядке
          изменять данное соглашение по своему усмотрению.
        </p>
        <p className="privacy__text">Администрация не оповещает пользователей об изменении в Соглашении.</p>
      </div>
      <Footer />
    </>
  );
}

export default Privacy;
