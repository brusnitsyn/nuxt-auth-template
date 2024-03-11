import type { AuthConfig } from "@auth/core/types"
import { NuxtAuthHandler } from "#auth"
import Yandex from "@auth/core/providers/yandex"
import Google from "@auth/core/providers/google"
import Credentials from "@auth/core/providers/credentials"

// The #auth virtual import comes from this module. You can use it on the client
// and server side, however not every export is universal. For example do not
// use sign-in and sign-out on the server side.

const runtimeConfig = useRuntimeConfig()

// Refer to Auth.js docs for more details
export const authOptions: AuthConfig = {
  secret: runtimeConfig.authJs.secret,
  providers: [
    Yandex({
        clientId: runtimeConfig.yandex.clientId,
        clientSecret: runtimeConfig.yandex.clientSecret
    }),
    Google({
        clientId: runtimeConfig.google.clientId,
        clientSecret: runtimeConfig.google.clientSecret
    }),
    Credentials({
        async authorize(credentials) {
            const authResponse = await fetch("https://api.escuelajs.co/api/v1/auth/login", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(credentials),
            })
    
            if (!authResponse.ok) {
              return null
            }
    
            const user = await authResponse.json()
    
            return user
        },
    })
  ]
}

export default NuxtAuthHandler(authOptions, runtimeConfig)
// If you don't want to pass the full runtime config,
//  you can pass something like this: { public: { authJs: { baseUrl: "" } } }