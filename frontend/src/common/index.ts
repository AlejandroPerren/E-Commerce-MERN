const backendDomain = "http://localhost:8080"

const SummaryApi = {
    singUP: {
        url: `${backendDomain}/api/signup`,
        method: "post"
    },
    current_user: {
        url: `${backendDomain}/api/user-details`,
        method: "post"
    }
}

export default SummaryApi