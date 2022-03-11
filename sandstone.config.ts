import type { SandstoneConfig } from 'sandstone'

export default {
  name: 'bindings-vanilla',
  description: [ 'A ', { text: 'Sandstone', color: 'gold' }, ' data pack.' ],
  formatVersion: 7,
  namespace: 'bindings-vanilla',
  packUid: '3JXlWMhi',
  saveOptions: { path: './.pack' },
  onConflict: {
    default: 'warn',
  },
} as SandstoneConfig
