
import Github from "next-auth/providers/github";

const githubId = "bb655092a16ce5d1c2a4";
const githubSecret = "9e80a56d52881bf643565688c9818aba0dc63351";

if (!githubId || !githubSecret) {
    throw new Error("GITHUB_ID or GITHUB_SECRET is not set");
    }

export default {

    
  providers: [
    Github({
      clientId: githubId,
      clientSecret: githubSecret,
    }),
  ],
} 