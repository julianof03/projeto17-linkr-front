
export default function getConfig(token) {
  console.log(token)
    return {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  }
