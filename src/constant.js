export const MONTH_NAMES = [
  `January`,
  `February`,
  `March`,
  `April`,
  `May`,
  `June`,
  `July`,
  `August`,
  `September`,
  `October`,
  `November`,
  `December`,
];

export const USER_UNKNOWN_PHOTO_URL = `https://firebasestorage.googleapis.com/v0/b/web-chat-1b38f.appspot.com/o/images%2Fuser-unknown-logo%2Funknown.png?alt=media&token=7599a865-4421-4fbe-88a7-829e79d3d0a1`;

export const ScrollToChatList = {
  MIN: 0,
  MAX: 999999999,
};

export const sliderOptions = [
  {
    title: `заводи друзей`,
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, rem quis iusto quas eum aliquam fugiat sint, cumque neque veniam, aut amet`,
    color: `#194c63a6`,
    colorText: `#fff`,
    icon: `fas fa-handshake`,
  },

  {
    title: `общайся`,
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis doloremque obcaecati cumque eius sed sequi architecto iste recusandae, facilis est`,
    color: `#194c63a6`,
    colorText: `#fff`,
    icon: `fas fa-comment-alt`,
  },

  {
    title: `создавай группы`,
    text: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate nam nesciunt soluta quidem eaque id vitae`,
    color: `#194c63a6`,
    colorText: `#fff`,
    icon: `fas fa-users`,
  },
];

export const PageType = {
  MAIN: `home-type`,
  LOGIN: `login-type`,
};

export const SignMenu = {
  notAuth: [
    {
      name: `Sign In`,
      link: `/login/sign-in`,
    },

    {
      name: `Sign Up`,
      link: `/login/sign-up`,
    },
  ],

  auth: [
    {
      name: `Sign Out`,
      link: `/main/wellcome`,
    },
  ],
};

export const TypeSideBarNameBlock = {
  FRIENDS: {
    nameText: `users`,
    blockClass: `friends-header`,
    textClass: `friends-header__text`,
    spanClass: `friends-header__count`,
  },

  CHANNELS: {
    nameText: `channels`,
    blockClass: `channels-header`,
    textClass: `channels-header__text`,
    spanClass: `channels-header__count`,
  },
};

export const AppRoute = {
  MAIN: `/main/:id?`,

  MAIN_ID: {
    WELLCOME: "/main/wellcome",
    USER_DESKTOP: "/main/user-desktop/:id?",

    USER_DESKTOP_ID: {
      START_TABLE: "/main/user-desktop/start-table",
      FRIENDS: "/main/user-desktop/friends/:id",
      ROOM: "/main/user-desktop/room/:id",
      ROOM_ID: "/main/user-desktop/room/",
      FRIEND_ID: "/main/user-desktop/friends/",
    },
  },

  LOGIN: `/login/:id`,
};

export const PreloadSettings = {
  MAIN: {
    TITLE: true,
    POSITION: "absolute",
  },
  MESSAGES_ITEM: {
    TITLE: false,
    POSITION: "relative",
  },
  PROFILE_INFO: {
    TITLE: false,
    POSITION: "absolute",
  },
};
