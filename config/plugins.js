module.exports = ({ env }) => ({
    // ...
    upload: {
      config: {
        provider: 'cloudinary',
        providerOptions: {
          cloud_name: env('CLOUDINARY_NAME'),
          api_key: env('CLOUDINARY_KEY'),
          api_secret: env('CLOUDINARY_SECRET'),
        },
        actionOptions: {
          upload: {},
          delete: {},
        },
      },
    },
    email: {
      config: {
        provider: env('EMAIL_PROVIDER'),
        providerOptions: {
          host: env('SMTP_HOST', 'smtp.example.com'),
          port: env('SMTP_PORT', 587),
          service: 'gmail',
          secure: false,
          auth: {
            user: env('SMTP_USERNAME'),
            pass: env('SMTP_PASSWORD'),
            // user: 'Stockvaluator0@gmail.com',
            // pass: 'rlnpksfhzjatfxja',
          },
          // ... any custom nodemailer options
        },
        // settings: {
        //   defaultFrom: 'hello@example.com',
        //   defaultReplyTo: 'hello@example.com',
        // },
      },
    }
});