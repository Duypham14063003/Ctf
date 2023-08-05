const whiteList = ['http://127.0.0.1:4200'];

const corsOptions = {
  origin: (origin: string, callback) => {
    if (whiteList.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

export default corsOptions;