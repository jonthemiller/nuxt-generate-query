export default function (context) {
  const param = context.query['foo'] || false;
  console.log(`got foo = ${param}`);
  context.app.$axios.setHeader('foo', param);
}
