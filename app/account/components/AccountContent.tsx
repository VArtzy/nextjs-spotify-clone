"use client"

import { useUser } from "@/hooks/useUser"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

const AccountContent = () => {
    const router = useRouter()
    const { isLoading, user } = useUser()

    useEffect(() => {
        if (!isLoading && !user) {
            router.replace("/")
        }
    }, [isLoading, user, router])

    return (
        <div className="mb-7 px-6">
            {isLoading && (
                <div className="flex flex-col gap-y-4">
                    <p>Loading... Your Profile...</p>
                </div>
            )}

            {!isLoading && (
                <div className="flex flex-col gap-y-4">
                    <h2>Hoa! there, {user?.email}</h2>
                    <h3 className="text-neutral-400 text-sm font-semibold">
                        {user?.phone}
                    </h3>
                    <h4 className="text-neutral-400 text-sm">
                        {user?.email_confirmed_at
                            ? `You're an OG! ${user.email_confirmed_at}`
                            : user?.created_at}
                    </h4>
                    <h4 className="text-neutral-400 text-sm">
                        <b>{user?.id}</b>
                        <span>Use these ID for subscription!</span>
                    </h4>

                    {!user?.email_confirmed_at && (
                        <div className="text-neutral-400 text-sm">
                            You&apos;re not confirmed :(, <b>please do here!</b>
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}

export default AccountContent
