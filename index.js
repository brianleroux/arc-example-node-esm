exports.handler = async function http (req) {
  const { handler } = await import('./handler.mjs')
  return await handler(req)
}
