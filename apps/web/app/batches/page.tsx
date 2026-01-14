
'use client'
import { useBatchStore } from "../store";
import Navbar from "../components/layout/navbar";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
export default function BatchesPage() {
    const { batches, getBatches, updateBatch, deleteBatch, createBatch, getBatchById } = useBatchStore((state) => state)
    const [isCreateBatchModalOpen, setIsCreateBatchModalOpen] = useState(false)
    const [isUpdateBatchModalOpen, setIsUpdateBatchModalOpen] = useState(false)
    const [isDeleteBatchModalOpen, setIsDeleteBatchModalOpen] = useState(false)
    const [batchId, setBatchId] = useState('')
    const [batchName, setBatchName] = useState('')
    const handleCreateBatch = async (e: React.FormEvent<HTMLFormElement>) => {
        try {
            e.preventDefault()
            const formData = new FormData(e.currentTarget)
            const name = formData.get('name')
            const res = await createBatch(name as string)
            toast.success(res.message)
            setIsCreateBatchModalOpen(false)
        } catch (error: any) {
            console.log(error)
            toast.error(error.message || 'Failed to create batch')
        }
    }
    const handleUpdateBatch = async (e: React.FormEvent<HTMLFormElement>) => {
        try {
            e.preventDefault()
            const formData = new FormData(e.currentTarget)
            const name = formData.get('name')
            const res = await updateBatch(batchId, name as string)
            toast.success(res.message)
            setIsUpdateBatchModalOpen(false)
        } catch (error: any) {
            console.log(error)
            toast.error(error.message || 'Failed to update batch')
        }
    }
    const handleDeleteBatch = async (id: string) => {
        try {
            const res = await deleteBatch(id)
            toast.success(res.message)
        } catch (error: any) {
            console.log(error)
            toast.error(error.message || 'Failed to delete batch')
        }
    }

    const openUpdateBatchModal = (batchId: string) => {
        const batch = getBatchById(batchId)
        if (batch) {
            setBatchName(batch.name)
            setBatchId(batchId)
            setIsUpdateBatchModalOpen(true)
        }
    }
    useEffect(() => {
        getBatches()
    }, [])
    return (
        <div>
            <ToastContainer />
            <Navbar />
            <button onClick={() => setIsCreateBatchModalOpen(true)}>create batch</button>
            {batches.map((batch: any) => (
                <div key={batch.id}>
                    <h1>{batch.name}</h1>
                    <button onClick={() => openUpdateBatchModal(batch.id)}>update</button>
                    <button onClick={() => handleDeleteBatch(batch.id)}>delete</button>
                </div>
            ))}
            {isCreateBatchModalOpen && (
                <div>
                    <h1>Create Batch</h1>
                    <form onSubmit={handleCreateBatch}>
                        <input type="text" placeholder="Batch Name" name="name" />
                        <button type="submit">Create</button>
                    </form>
                    <button onClick={() => setIsCreateBatchModalOpen(false)}>Close</button>
                </div>
            )}
            {isUpdateBatchModalOpen && (
                <div>
                    <h1>Update Batch</h1>
                    <form onSubmit={handleUpdateBatch}>
                        <input type="text" placeholder={batchName} name="name" />
                        <input type="hidden" name="batchId" value={batchId} />
                        <button type="submit">Update</button>

                    </form>
                    <button onClick={() => setIsUpdateBatchModalOpen(false)}>Close</button>
                </div>
            )}
        </div>
    )
}   