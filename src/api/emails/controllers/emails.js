'use strict';

/**
 * A set of functions called "actions" for `emails`
 */

module.exports = {
 /**
   * Sends an email to the recipient in the body of the request
   * 
   * I used https://strapi.io/blog/how-to-create-and-use-sms-and-email-services-in-strapi-1
   * this steps in the link to make this work.
   */
  send: async (ctx) => {
    const body = ctx.request.body
    const sendTo = body.email
    const msg = body.message
    const name = body.name
    strapi.log.debug(`Trying to send an email to ${sendTo}`)

    try {
      const emailOptions = {
        to: 'stockvaluator0@gmail.com',
        subject: `Sent From (Strapi) - ${sendTo}`,
        from: sendTo,
        // html: `<h1>Welcome!</h1><p>This is a test HTML email. 1 2 3</p>`,
        html: `<h3>${name}!</h3><br></br>` + msg,
      }
      await strapi.plugin('email').service('email').send(emailOptions)
      strapi.log.debug(`Email sent to ${sendTo}`)
      ctx.send({ message: 'Email sent' })
    } catch (err) {
      strapi.log.error(`Error sending email to ${sendTo}`, err)
      ctx.send({ error: 'Error sending email' })
    }
  },
};
