export type ResponseType =
  | { result: false; error: 'wrong_password' | 'invalid_user_name' }
  | { result: true; userId: number }

export default function login2(username: string, password: string): Promise<ResponseType> {
  return new Promise((resolve) => {
    const result: ResponseType =
      username !== 'user1'
        ? { result: false, error: 'invalid_user_name' }
        : password !== '1111'
        ? { result: false, error: 'wrong_password' }
        : { result: true, userId: 34 }

    setTimeout(() => resolve(result), 1000)
  })
}
