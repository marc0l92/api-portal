import fs from 'fs-extra'
import { ApiIndex } from '../common/api/apiIndex'
import { API_INDEX_FILE_PATH } from './cliConstants'

export function apiIndexFromFile(): ApiIndex {
    if (fs.existsSync(API_INDEX_FILE_PATH)) {
        const apiIndexFromFile = ApiIndex.fromJSON(fs.readJsonSync(API_INDEX_FILE_PATH))
        if (apiIndexFromFile.getIndexVersion() === ApiIndex.CURRENT_API_INDEX_VERSION) {
            return apiIndexFromFile
        }
    }
    return new ApiIndex()
}