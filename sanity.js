import {
    createClient,
    } from 'next-sanity'

    export const config = {
        projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
        dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
        apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
        useCdn: process.env.NODE_ENV === 'production',
    }

export const sanityClient = createClient(config)