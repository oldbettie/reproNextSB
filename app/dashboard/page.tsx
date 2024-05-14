import { sbServer } from "@/utils/sb/sbServer"

export default async function page() {
    const sb = sbServer()
    const {data, error} = await sb.auth.getUser()

    // user does exist if the api route is not called
    console.log(data, error)

    try {
        const response = await fetch(`http://localhost:3000/api/dashboard`, {
            cache: "no-cache",
        })

    } catch (error: any) {
        return <>No data {error.message}</>
    }

    return (<>Dashboard page should return user data</>)
}
