import { gzipSync, decompressSync, strToU8, strFromU8 } from 'fflate';

export function compressToArray(payload: string): Uint8Array {
    return gzipSync(strToU8(payload), { level: 6, mem: 8 })
}

export function compressToStr(payload: string): string {
    return strFromU8(compressToArray(payload))
}

export function decompressFromArray(payload: Uint8Array): string {
    return strFromU8(decompressSync(new Uint8Array(payload)))
}

export function decompressFromStr(payload: string): string {
    return decompressFromArray(strToU8(payload))
}