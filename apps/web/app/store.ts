'use client'
import { create } from 'zustand'
import { createBatchAPI, deleteBatchAPI, getBatchesAPI, updateBatchAPI } from './api'


type AuthState = {
    token: string | null
    role: string | null
    isAuthenticated: boolean
    login: (token: string, role: string) => void
    logout: () => void
    signin: (token: string, role: string) => void
}

type BatchState = {
    batches: any[],
    getBatches: () => Promise<void>,
    createBatch: (name: string) => Promise<any>,
    updateBatch: (batchId: string, name: string) => Promise<any>,
    deleteBatch: (batchId: string) => Promise<any>
    getBatchById: (batchId: string) => any
}
export const useAuthStore = create<AuthState>((set) => ({
    role: null,
    token: null,
    isAuthenticated: false,
    login: (token, role) => {
        set({ token, role, isAuthenticated: true })
    },
    logout: () => {
        set({ token: null, role: null, isAuthenticated: false })
    },
    signin: (token, role) => {
        set({ token, role, isAuthenticated: true })
    }
}))
export const useBatchStore = create<BatchState>((set, get) => ({
    batches: [],
    getBatches: async () => {
        const res = await getBatchesAPI()
        set({ batches: res.data })
    },
    createBatch: async (name: string) => {
        const res = await createBatchAPI(name)
        if (res.success) {
            set((state) => ({ batches: [...state.batches, res.data] }))
        }
        return res
    },
    updateBatch: async (batchId: string, name: string) => {
        const res = await updateBatchAPI(batchId, name)
        if (res.success) {
            set((state) => ({
                batches: state.batches.map((b) => b.id === batchId ? res.data : b)
            }))
        }
        return res
    },
    deleteBatch: async (batchId: string) => {
        const res = await deleteBatchAPI(batchId)
        if (res.success) {
            set((state) => ({
                batches: state.batches.filter((b) => b.id !== batchId)
            }))
        }
        return res
    },
    getBatchById: (batchId: string) => {
        return get().batches.find((batch: any) => batch.id === batchId)
    }
}))