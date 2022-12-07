module.exports = {
  routes: [
    {
     method: 'POST',
     path: '/emails/custom/send',
     handler: 'emails.send',
     config: {
       policies: [],
       middlewares: [],
     },
    },
  ],
};
