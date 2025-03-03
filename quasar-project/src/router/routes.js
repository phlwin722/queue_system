const routes = [
  {
    path: '/',
    redirect: '/login'  // Automatically redirect to /login when accessing the root URL
  },
  {
    path: '/login',
    component: () => import('pages/LoginInterface/index.vue') // Ensure the correct path here
  },
  {
    path: '/admin/dashboard',
    component: () => import('layouts/MainLayout.vue'), // Correct path with alias
    children: [
      { path: '/admin/dashboard', component: () => import('pages/admin_Dashboard/index.vue') }, // Ensure correct path,
      { path: '/admin/qr_code', component: () => import('pages/admin_Qrcode/index.vue') }, // Ensure correct path,
      { path: 'logout', component: () => import('pages/LoginInterface/index.vue') },
    ]
  },
  {
    path: '/customer/form',
    component: () => import('pages/customer_Interface/index.vue') // Ensure the correct path here
  },

  // Catch-all for undefined routes
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue') // Ensure correct path with alias
  }
];

export default routes;
