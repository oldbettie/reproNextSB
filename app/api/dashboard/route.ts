import { NextRequest, NextResponse } from "next/server"
import { sbAPIClient } from "@/utils/sb/sbAPIClient"

/**
 * Calling getUser() here always returns null when using SSR package
 */
export async function GET(req: NextRequest) {
    try {
        const supabase = sbAPIClient()
        const {
            data: { user },
        error} = await supabase.auth.getUser()

        console.log(user, error)
        if (error) throw error

        return NextResponse.json({ data: null, error: null }, { status: 200 })
    } catch (e: any) {
        console.warn(e)
        return NextResponse.json({ data: null, error: "Internal Server Error" }, { status: 500 })
    }
}
