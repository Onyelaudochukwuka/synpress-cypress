#!/usr/bin/env node

import { cliEntrypoint } from '@synpress-cypress/synpress-cache'

cliEntrypoint().catch((err) => {
  console.log('Aborting...')

  if (err instanceof Error) {
    console.error(err)
  } else {
    console.error('Unknown error occurred!', err)
  }

  process.exit(1)
})
