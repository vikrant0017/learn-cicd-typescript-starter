import { describe, expect, it } from 'vitest'
import { getAPIKey } from '../api/auth.ts'

describe("Parses API KEY", () => {
  it('should correctly parse the API KEY from Auth headers', () => {
    const apiKey = getAPIKey({
      'authorization': 'ApiKey abc123'
    })
    expect(apiKey).toBe('abc123')
  })
})

