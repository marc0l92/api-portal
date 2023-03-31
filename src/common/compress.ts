import { gzipSync, decompressSync, strToU8, strFromU8 } from 'fflate';

export function compress(payload: string): ArrayBuffer {
    return gzipSync(strToU8(payload), { level: 6, mem: 8 })
}

export function decompress(payload: ArrayBuffer): string {
    return strFromU8(decompressSync(new Uint8Array(payload)))
}