import { Box } from '@chakra-ui/react'

import CTASection from 'lib/components/samples/CTASection'
import SomeImage from 'lib/components/samples/SomeImage'
import SomeText from 'lib/components/samples/SomeText'

import { signIn, useSession } from 'next-auth/react'
import { useEffect } from 'react'

export default function Home() {
    const { data: session } = useSession()

    useEffect(() => {
        if (session?.error === 'RefreshAccessTokenError') {
            signIn() // Force sign in to hopefully resolve error
        }
    }, [session])
    return (
        <Box
            display={{ md: 'flex' }}
            alignItems="center"
            minHeight="70vh"
            gap={8}
            mb={8}
            w="full"
        >
            <SomeImage />

            <Box>
                <SomeText />
                <CTASection />
            </Box>
        </Box>
    )
}
