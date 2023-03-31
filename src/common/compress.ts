import { compressSync, decompressSync, strToU8, strFromU8 } from 'fflate';

export function compress(payload: string): Uint8Array {
    return compressSync(strToU8(payload), { level: 6, mem: 8 })
}

export function decompress(payload: Uint8Array): string {
    return strFromU8(decompressSync(payload))
}