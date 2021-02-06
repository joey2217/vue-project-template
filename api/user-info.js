const menus = [
  {
    fullPath: '/user',
    title: 'User',
    icon: 'user',
  },
  {
    fullPath: '/form',
    title: 'Form',
    icon: 'form',
  },
  {
    fullPath: '/menu',
    title: 'Menu',
    icon: 'menu',
    redirect: '/menu/menu1/menu1-1',
    children: [
      {
        fullPath: '/menu/menu1',
        title: 'Menu1',
        redirect: '/menu/menu1/menu1-1',
        children: [
          {
            fullPath: '/menu/menu1/menu1-1',
            title: 'Menu1-1',
          },
          {
            fullPath: '/menu/menu1/menu1-2',
            title: 'Menu1-2',
          },
        ],
      },
      {
        fullPath: '/menu/menu2',
        title: 'Menu2',
      },
    ],
  },
];
// MOCK
export default (request, response) => {
  const userInfo = {
    nickname: 'nickname',
    username: 'username',
    roles: ['admin'],
    menus,
    avatar: 'avatar',
  };
  response.status(200).json(userInfo);
};
