export default function ({ $axios }) {
  $axios.onRequest((config) => {
    console.log('requesting to ' + config.url + ' with headers ', config.headers);
  });
};
