"use client"

import { useEffect, useState } from "react"
import AuthModal from "@/components/AuthModal"
import UploadModel from "@/components/UploadModal"

const ModalProvider = () => {
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    if (!isMounted) return null

    return (
        <>
            <AuthModal />
            <UploadModel />
        </>
    )
}

export default ModalProvider
