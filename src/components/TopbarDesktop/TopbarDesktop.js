import React, { useState, useEffect } from 'react';
import { bool, func, object, number, string } from 'prop-types';
import { FormattedMessage, intlShape } from '../../util/reactIntl';
import classNames from 'classnames';
import { ACCOUNT_SETTINGS_PAGES } from '../../routeConfiguration';
import { propTypes } from '../../util/types';
import {
  Avatar,
  InlineTextButton,
  Logo,
  Menu,
  MenuLabel,
  MenuContent,
  MenuItem,
  NamedLink,
  ListingLink,
  OwnListingLink,
} from '../../components';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { TopbarSearchForm } from '../../forms';

import AvatarImage from './avatar.svg';
import CartImage from './cart.svg';
import NotifImage from './notif.svg';
import btnImg from './Group_18565.svg';
import IconHourGlass from '../LocationAutocompleteInput/IconHourGlass';

import css from './TopbarDesktop.module.css';
import AuthenticationPage from '../../containers/AuthenticationPage/AuthenticationPage';
import PasswordChangePage from '../../containers/PasswordChangePage/PasswordChangePage';
import PasswordRecoveryPage from '../../containers/PasswordRecoveryPage/PasswordRecoveryPage';
import { Form, Field } from 'react-final-form';
import { Row, Stack } from 'react-bootstrap';

const TopbarDesktop = props => {
  const {
    className,
    currentUser,
    currentPage,
    rootClassName,
    currentUserHasListings,
    currentUserListing,
    currentUserListingFetched,
    notificationCount,
    intl,
    isAuthenticated,
    onLogout,
    onSearchSubmit,
    initialSearchFormValues,
  } = props;
  const [mounted, setMounted] = useState(false);
  const [show, setShow] = useState(false);
  const [status, setStatus] = useState('login');

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const authenticatedOnClientSide = mounted && isAuthenticated;
  const isAuthenticatedOrJustHydrated = isAuthenticated || !mounted;

  const classes = classNames(rootClassName || css.root, className);

  const searchValue = value => {
    console.log(value);
    onSearchSubmit(value);
  };

  const search = (
    <div className={css.searchLink}>
      <Form
        onSubmit={() => {}}
        render={({ handleSubmit }) => {
          return (
            <div className="d-flex">
              <IconHourGlass />
              <Field
                name="service"
                component="input"
                placeholder="Find service"
                className={css.searchProvider}
              />
            </div>
          );
        }}
      />

      <div className={css.line} />
      <TopbarSearchForm
        desktopInputRoot={css.topbarSearchWithLeftPadding}
        onSubmit={searchValue}
        initialValues={initialSearchFormValues}
      />
      <img src={btnImg} alt="btn" />
    </div>
  );

  const notificationDot = notificationCount > 0 ? <div className={css.notificationDot} /> : null;

  const inboxLink = authenticatedOnClientSide ? (
    <NamedLink
      className={css.inboxLink}
      name="InboxPage"
      params={{ tab: currentUserHasListings ? 'sales' : 'orders' }}
    >
      <span className={css.inbox}>
        <img src={NotifImage} />
        {notificationDot}
      </span>
    </NamedLink>
  ) : (
    <div className={css.inboxLink} onClick={handleShow}>
      <span className={css.inbox}>
        <img src={NotifImage} />
        {notificationDot}
      </span>
    </div>
  );

  const currentPageClass = page => {
    const isAccountSettingsPage =
      page === 'AccountSettingsPage' && ACCOUNT_SETTINGS_PAGES.includes(currentPage);
    return currentPage === page || isAccountSettingsPage ? css.currentPage : null;
  };

  const profileMenu = authenticatedOnClientSide ? (
    <Menu>
      <MenuLabel className={css.profileMenuLabel} isOpenClassName={css.profileMenuIsOpen}>
        <Avatar className={css.avatar} user={currentUser} disableProfileLink />
      </MenuLabel>
      <MenuContent className={css.profileMenuContent}>
        <MenuItem key="EditListingPage">
          <OwnListingLink
            listing={currentUserListing}
            listingFetched={currentUserListingFetched}
            className={css.yourListingsLink}
          >
            <div>
              <span className={css.menuItemBorder} />
              {currentUserListing ? (
                <FormattedMessage id="TopbarDesktop.editYourListingLink" />
              ) : (
                <FormattedMessage id="TopbarDesktop.addYourListingLink" />
              )}
            </div>
          </OwnListingLink>
        </MenuItem>
        <MenuItem key="ProfileSettingsPage">
          <NamedLink
            className={classNames(css.profileSettingsLink, currentPageClass('ProfileSettingsPage'))}
            name="ProfileSettingsPage"
          >
            <span className={css.menuItemBorder} />
            <FormattedMessage id="TopbarDesktop.profileSettingsLink" />
          </NamedLink>
        </MenuItem>
        <MenuItem key="AccountSettingsPage">
          <NamedLink
            className={classNames(css.yourListingsLink, currentPageClass('AccountSettingsPage'))}
            name="AccountSettingsPage"
          >
            <span className={css.menuItemBorder} />
            <FormattedMessage id="TopbarDesktop.accountSettingsLink" />
          </NamedLink>
        </MenuItem>
        <MenuItem key="logout">
          <InlineTextButton rootClassName={css.logoutButton} onClick={onLogout}>
            <span className={css.menuItemBorder} />
            <FormattedMessage id="TopbarDesktop.logout" />
          </InlineTextButton>
        </MenuItem>
      </MenuContent>
    </Menu>
  ) : null;

  const signupLink = isAuthenticatedOrJustHydrated ? null : (
    <NamedLink name="SignupPage" className={css.signupLink}>
      <span className={css.signup}>
        <FormattedMessage id="TopbarDesktop.signup" />
      </span>
    </NamedLink>
  );

  const loginLink = isAuthenticatedOrJustHydrated ? null : (
    <div
      className={css.loginLink}
      onClick={() => {
        setStatus('login');
        handleShow();
      }}
    >
      <span className={css.login}>
        <img src={AvatarImage} />
      </span>
    </div>
  );

  const listingLink =
    authenticatedOnClientSide && currentUserListingFetched && currentUserListing ? (
      <ListingLink
        className={css.createListingLink}
        listing={currentUserListing}
        children={
          <span className={css.createListing}>
            <FormattedMessage id="TopbarDesktop.viewListing" />
          </span>
        }
      />
    ) : null;

  const createListingLink = authenticatedOnClientSide ? (
    <NamedLink className={css.createListingLink} name="NewListingPage">
      <span className={css.createListing}>
        <img src={CartImage} />
      </span>
    </NamedLink>
  ) : (
    <div className={css.inboxLink} onClick={handleShow}>
      <span className={css.createListing}>
        <img src={CartImage} />
      </span>
    </div>
  );

  const showBody = () => {
    switch (status) {
      case 'forgot':
        return <PasswordRecoveryPage setTab={setStatus} />;

      default:
        return <AuthenticationPage tab={status} setTab={setStatus} handleClose={handleClose} />;
    }
  };

  return (
    <>
      <nav className={classes}>
        <div className={css.body}>
          <NamedLink className={css.logoLink} name="LandingPage">
            <Logo
              format="desktop"
              className={css.logo}
              alt={intl.formatMessage({ id: 'TopbarDesktop.logo' })}
            />
          </NamedLink>
          {search}
          {/* {listingLink} */}
          {inboxLink}
          {createListingLink}
          {/* {signupLink} */}
          {profileMenu}
          {loginLink}
        </div>
      </nav>
      <Modal
        show={show}
        onHide={handleClose}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>{showBody()}</Modal.Body>
      </Modal>
    </>
  );
};

TopbarDesktop.defaultProps = {
  rootClassName: null,
  className: null,
  currentUser: null,
  currentPage: null,
  notificationCount: 0,
  initialSearchFormValues: {},
  currentUserListing: null,
  currentUserListingFetched: false,
};

TopbarDesktop.propTypes = {
  rootClassName: string,
  className: string,
  currentUserHasListings: bool.isRequired,
  currentUserListing: propTypes.ownListing,
  currentUserListingFetched: bool,
  currentUser: propTypes.currentUser,
  currentPage: string,
  isAuthenticated: bool.isRequired,
  onLogout: func.isRequired,
  notificationCount: number,
  onSearchSubmit: func.isRequired,
  initialSearchFormValues: object,
  intl: intlShape.isRequired,
};

export default TopbarDesktop;
