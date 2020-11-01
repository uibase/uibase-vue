import UserConfig from '@theme/types/UserConfig'

type UpdateAndNew = UserConfig
type Deleted = UserConfig
export type DiffResult = [UpdateAndNew, Deleted]
