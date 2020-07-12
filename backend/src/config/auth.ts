const authConfig = {
  jwt: {
    secret: process.env.AUTH_SECRET as string,
    expiresIn: process.env.AUTH_EXPIRES as string,
  },
};

export default authConfig;
