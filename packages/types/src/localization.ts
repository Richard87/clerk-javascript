export type LocalizationValue = string;

/**
 * A type containing all the possible localization keys the prebuilt Clerk components support.
 * Users aiming to customise a few strings can also peak at the `data-localization-key` attribute by inspecting
 * the DOM and updating the corresponding key.
 * Users aiming to completely localize the components by providing a complete translation can use
 * the default english resource object from {@link https://github.com/clerkinc/javascript our open source repo}
 * as a starting point.
 */
export type LocalizationResource = {
  socialButtonsBlockButton: LocalizationValue;
  dividerText: LocalizationValue;
  formFieldLabel__emailAddress: LocalizationValue;
  formFieldLabel__phoneNumber: LocalizationValue;
  formFieldLabel__username: LocalizationValue;
  formFieldLabel__emailAddress_phoneNumber: LocalizationValue;
  formFieldLabel__emailAddress_username: LocalizationValue;
  formFieldLabel__phoneNumber_username: LocalizationValue;
  formFieldLabel__emailAddress_phoneNumber_username: LocalizationValue;
  formFieldLabel__password: LocalizationValue;
  formFieldLabel__newPassword: LocalizationValue;
  formFieldLabel__confirmPassword: LocalizationValue;
  formFieldLabel__firstName: LocalizationValue;
  formFieldLabel__lastName: LocalizationValue;
  formFieldInputPlaceholder__emailAddress: LocalizationValue;
  formFieldInputPlaceholder__phoneNumber: LocalizationValue;
  formFieldInputPlaceholder__username: LocalizationValue;
  formFieldInputPlaceholder__emailAddress_phoneNumber: LocalizationValue;
  formFieldInputPlaceholder__emailAddress_username: LocalizationValue;
  formFieldInputPlaceholder__phoneNumber_username: LocalizationValue;
  formFieldInputPlaceholder__emailAddress_phoneNumber_username: LocalizationValue;
  formFieldInputPlaceholder__password: LocalizationValue;
  formFieldInputPlaceholder__firstName: LocalizationValue;
  formFieldInputPlaceholder__lastName: LocalizationValue;
  formFieldAction__forgotPassword: LocalizationValue;
  formFieldHintText__optional: LocalizationValue;
  formButtonPrimary: LocalizationValue;
  signInEnterPasswordTitle: LocalizationValue;
  backButton: LocalizationValue;
  footerActionLink__useAnotherMethod: LocalizationValue;
  badge__primary: LocalizationValue;
  badge__thisDevice: LocalizationValue;
  badge__default: LocalizationValue;
  badge__unverified: LocalizationValue;
  badge__requiresAction: LocalizationValue;
  signUp: {
    start: {
      title: LocalizationValue;
      subtitle: LocalizationValue;
      actionText: LocalizationValue;
      actionLink: LocalizationValue;
    };
    emailLink: {
      title: LocalizationValue;
      subtitle: LocalizationValue;
      formTitle: LocalizationValue;
      formSubtitle: LocalizationValue;
      resendButton: LocalizationValue;
    };
    emailCode: {
      title: LocalizationValue;
      subtitle: LocalizationValue;
      formTitle: LocalizationValue;
      formSubtitle: LocalizationValue;
      resendButton: LocalizationValue;
    };
    phoneCode: {
      title: LocalizationValue;
      subtitle: LocalizationValue;
      formTitle: LocalizationValue;
      formSubtitle: LocalizationValue;
      resendButton: LocalizationValue;
    };
    continue: {
      title: LocalizationValue;
      subtitle: LocalizationValue;
      actionText: LocalizationValue;
      actionLink: LocalizationValue;
    };
  };
  signIn: {
    start: {
      title: LocalizationValue;
      subtitle: LocalizationValue;
      actionText: LocalizationValue;
      actionLink: LocalizationValue;
    };
    password: {
      title: LocalizationValue;
      subtitle: LocalizationValue;
      actionLink: LocalizationValue;
    };
    emailCode: {
      title: LocalizationValue;
      subtitle: LocalizationValue;
      formTitle: LocalizationValue;
      formSubtitle: LocalizationValue;
      resendButton: LocalizationValue;
    };
    emailLink: {
      title: LocalizationValue;
      subtitle: LocalizationValue;
      formTitle: LocalizationValue;
      formSubtitle: LocalizationValue;
      resendButton: LocalizationValue;
    };
    phoneCode: {
      title: LocalizationValue;
      subtitle: LocalizationValue;
      formTitle: LocalizationValue;
      formSubtitle: LocalizationValue;
      resendButton: LocalizationValue;
    };
    phoneCode2Fa: {
      title: LocalizationValue;
      subtitle: LocalizationValue;
      formTitle: LocalizationValue;
      formSubtitle: LocalizationValue;
      resendButton: LocalizationValue;
    };
    alternativeMethods: {
      title: LocalizationValue;
      actionLink: LocalizationValue;
      blockButton__emailLink: LocalizationValue;
      blockButton__emailCode: LocalizationValue;
      blockButton__phoneCode: LocalizationValue;
      blockButton__password: LocalizationValue;
      getHelp: {
        title: LocalizationValue;
        content: `If you’re experiencing difficulty signing into your account, email us and we will work with you to restore access as soon as possible.`;
        blockButton__emailSupport: LocalizationValue;
      };
    };
  };
  userProfile: {
    headerTitle__account: LocalizationValue;
    headerTitle__security: LocalizationValue;
    headerSubtitle__account: LocalizationValue;
    headerSubtitle__security: LocalizationValue;
    sectionTitle__profile: LocalizationValue;
    sectionTitle__username: LocalizationValue;
    sectionTitle__emailAddresses: LocalizationValue;
    sectionTitle__phoneNumbers: LocalizationValue;
    sectionTitle__connectedAccounts: LocalizationValue;
    sectionTitle__password: LocalizationValue;
    sectionTitle__mfa: LocalizationValue;
    sectionTitle__activeDevices: LocalizationValue;
    sectionTitle__web3Wallets: LocalizationValue;
    sectionPrimaryButton__changeUsername: LocalizationValue;
    sectionPrimaryButton__setUsername: LocalizationValue;
    sectionPrimaryButton__emailAddresses: LocalizationValue;
    sectionPrimaryButton__phoneNumbers: LocalizationValue;
    sectionPrimaryButton__connectedAccounts: LocalizationValue;
    sectionPrimaryButton__changePassword: LocalizationValue;
    sectionPrimaryButton__setPassword: LocalizationValue;
    sectionPrimaryButton__mfa: LocalizationValue;
    sectionPrimaryButton__activeDevices: LocalizationValue;
    sectionPrimaryButton__web3Wallets: LocalizationValue;
    mobileButton__menu: LocalizationValue;
    formButtonPrimary__continue: LocalizationValue;
    formButtonPrimary__finish: LocalizationValue;
    formButtonReset: LocalizationValue;
    profilePage: {
      title: LocalizationValue;
      imageFormTitle: LocalizationValue;
      imageFormSubtitle: LocalizationValue;
      fileDropAreaTitle: LocalizationValue;
      fileDropAreaAction: LocalizationValue;
      fileDropAreaHint: LocalizationValue;
      successMessage: LocalizationValue;
    };
    usernamePage: {
      title: LocalizationValue;
      successMessage: LocalizationValue;
    };
    emailAddressPage: {
      title: LocalizationValue;
      formHint__emailCode: LocalizationValue;
      successMessage: LocalizationValue;
      emailLink: {
        formHint: LocalizationValue;
        formTitle: LocalizationValue;
        formSubtitle: LocalizationValue;
        resendButton: LocalizationValue;
      };
    };
    connectedAccountPage: {
      title: LocalizationValue;
      formHint: LocalizationValue;
      formHint__noAccounts: LocalizationValue;
      socialButtonsBlockButton: LocalizationValue;
      successMessage: LocalizationValue;
    };
    passwordPage: {
      title: LocalizationValue;
      successMessage: LocalizationValue;
    };
    mfaPage: {
      title: LocalizationValue;
      formHint: LocalizationValue;
      successMessage: LocalizationValue;
    };
    activeDevices: {
      sectionTitle: LocalizationValue;
      detailsTitle: LocalizationValue;
      detailsSubtitle: LocalizationValue;
      destructiveActionTitle: LocalizationValue;
      destructiveActionSubtitle: LocalizationValue;
      destructiveAction: LocalizationValue;
    };
  };
  userButton: {
    action__manageAccount: LocalizationValue;
    action__signOut: LocalizationValue;
    action__signOutAll: LocalizationValue;
    action__addAccount: LocalizationValue;
  };
  unstable__errors: {
    form_identifier_not_found: LocalizationValue;
    form_password_pwned: LocalizationValue;
    form_username_invalid_length: LocalizationValue;
    form_param_format_invalid: LocalizationValue;
    form_password_length_too_short: LocalizationValue;
    form_param_nil: LocalizationValue;
    form_code_incorrect: LocalizationValue;
  };
};