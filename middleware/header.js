export default function (context) {
  // log all query params
  console.log(`middleware context.query: ${Object.keys(context.query)}`);
  // get the value of 'foo', or false
  const param = context.query['foo'] || false;
  // log it
  console.log(`got foo = ${param}`);
  // set it as a header on axios
  context.app.$axios.setHeader('foo', param);
}
