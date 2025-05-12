import { testWithSynpress } from '@synpress-cypress/synpress'
import { metaMaskFixtures } from '@synpress-cypress/synpress/playwright'
import connectedSetup from '../wallet-setup/connected.setup'

export default testWithSynpress(metaMaskFixtures(connectedSetup))
