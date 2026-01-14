'use client'
import axios from 'axios'
import { useAuthStore } from './store'
type ErrorResponse = {
    success: boolean,
    error: string
}
type SuccessResponse = {
    success: boolean,
    data: any,
    message: string
}
type Response = SuccessResponse | ErrorResponse
const BASE_URL = 'http://localhost:3001'

export const SignupAPI = async (name: string, email: string, password: string) => {
    console.log('name', name)
    console.log('email', email)
    console.log('password', password)
    const response = await axios.post(
        `${BASE_URL}/auth/signup`,
        {
            name,
            email,
            password,
        },
        {
            headers: {
                "Content-Type": "application/json",
            },
        }
    )

    if (!response.data.success) {
        throw new Error(response.data.error)
    }
    return response.data
}

export const LoginAPI = async (email: string, password: string) => {
    const response = await axios.post(
        `${BASE_URL}/auth/login`,
        {
            email,
            password,
        },
        {
            headers: {
                "Content-Type": "application/json",
            },
        }
    )

    if (!response.data.success) {
        throw new Error(response.data.error)
    }
    return response.data
}
export const createBatchAPI = async (name: string) => {
    const token = useAuthStore.getState().token
    console.log('token', token, name)
    const response = await axios.post(
        `${BASE_URL}/batch`,
        {
            name,
        },
        {
            headers: {
                "Content-Type": "application/json",
                "authorization": `Bearer ${token}`
            },
        }
    )

    if (!response.data.success) {
        throw new Error(response.data.error)
    }
    return response.data
}
export const getBatchesAPI = async () => {
    const token = useAuthStore.getState().token
    const response = await axios.get(
        `${BASE_URL}/batch`,
        {
            headers: {
                "Content-Type": "application/json",
                "authorization": `Bearer ${token}`
            },
        }
    )

    if (!response.data.success) {
        throw new Error(response.data.error)
    }
    return response.data
}
export const updateBatchAPI = async (batchId: string, name: string) => {
    const token = useAuthStore.getState().token
    const response = await axios.patch(
        `${BASE_URL}/batch/${batchId}`,
        {
            name,
        },
        {
            headers: {
                "Content-Type": "application/json",
                "authorization": `Bearer ${token}`
            },
        }
    )

    if (!response.data.success) {
        throw new Error(response.data.error)
    }
    return response.data
}

export const deleteBatchAPI = async (batchId: string) => {
    const token = useAuthStore.getState().token
    console.log('token', token)
    console.log('batchId', batchId)
    const response = await axios.delete(
        `${BASE_URL}/batch/${batchId}`,
        {
            headers: {
                "Content-Type": "application/json",
                "authorization": `Bearer ${token}`
            },
        }
    )
    console.log('response', response)
    if (!response.data.success) {
        throw new Error(response.data.error)
    }
    return response.data
}
