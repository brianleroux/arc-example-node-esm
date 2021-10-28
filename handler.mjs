import * as arc from '@architect/functions'

export async function handler (req) {
  console.log(arc)
  return {
    statusCode: 200,
    body: 'omg it worked'
  }
}
