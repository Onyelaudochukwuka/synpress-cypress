import { testWithSynpress } from '@synpress-cypress/synpress-core'
import { metaMaskFixtures } from '../../src/playwright'
import connectedSetup from './wallet-setup/connected.setup'

export default testWithSynpress(metaMaskFixtures(connectedSetup))
