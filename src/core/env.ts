const { NODE_ENV, API_HOST } = process.env;

interface IEnv {
  nodeEnv: string,
  apiHost: string,
}

const env: IEnv = {
  nodeEnv: NODE_ENV,
  apiHost: API_HOST,
};

export default env;
