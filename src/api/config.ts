export const BASE_HOST = {
  host:
    process.env.NODE_ENV === 'production'
      ? `Travel-note-server-env.eba-mcnaphfm.ap-northeast-2.elasticbeanstalk.com`
      : `http://localhost:8000`,
};

export default BASE_HOST;
